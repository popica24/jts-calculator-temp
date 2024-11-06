import React, { useEffect, useState } from 'react';
import { Button, NumberInput, Stack, Text, Title } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';
import { useFormStep } from '@/context/MultiStepFormContext';

const ConfirmOkPage = () => {
  const { setValue, getValues } = useFormValues();

  const { nextStep } = useFormStep();

  const [desiredPrice, setDesiredPrice] = useState(0);

  const [totalCosts, setTotalCosts] = useState(0);

  const [totalCostsWithoutComission, setTotalCostsWithoutComission] = useState(0);

  const comissionCost = getValues('Comission');

  const [comission, setComission] = useState(0);

  const calculateComission = () => {
    const multiplier = comissionCost / 100;

    const _comission = desiredPrice * multiplier;

    setComission(_comission);

    setTotalCosts(totalCostsWithoutComission + _comission);
  };

  //total cost without comission
  useEffect(() => {
    const ConectivityGlobal = {
      Total:
        getValues('StringTable.Price') ||
        0 + getValues('SmartMeterTable.Price') ||
        0 + getValues('ACCableType.Total') ||
        0 + getValues('SolarCable.Total') ||
        0 + getValues('GroundingCable.Total') ||
        0 + getValues('CopexCable.Total') ||
        0 + getValues('WoodScrews.Total') ||
        0 + getValues('Obo.Total') ||
        0 + getValues('Screws.Total') ||
        0 + getValues('MC4.Total') ||
        0 + getValues('AluminiumProfile.Total') ||
        0 + getValues('FusileFuse.Total') ||
        0 + getValues('Surges.Total') ||
        0 + getValues('CableDuct.Total') ||
        0 + getValues('IntermediateClamps.Total') ||
        0 + getValues('CornerClamps.Total') ||
        0 + getValues('MixClamps.Total') ||
        0 + getValues('ACFuse.Price') ||
        0 + getValues('MiniRail.Total') ||
        0 + getValues('Prezoane.Total') ||
        0,
    };

    const TransportCost =
      Number(getValues('Car.Total')) ||
      0 + Number(getValues('Gas.Total')) ||
      0 + Number(getValues('Rent.PricePerRoom')) ||
      0 * Number(getValues('Rent.Rooms')) ||
      0 * Number(getValues('Rent.Days')) ||
      0;

    const inverterCost = Math.ceil(getValues('Inverter.Price'));

    const panelsCost = Math.ceil(getValues('NumberOfPanels') * getValues('Panel.Price'));

    const batteryCost = Math.ceil(getValues('Battery.price')) || 0;

    const installationCost = Math.ceil(getValues('MontageType.Total'));

    const connectivityCost = Math.ceil(ConectivityGlobal.Total);

    const transportCost = Number(TransportCost);

    const laborCost = Math.ceil(getValues('Labor'));

    const TotalCosts =
      inverterCost +
      panelsCost +
      batteryCost +
      installationCost +
      connectivityCost +
      transportCost +
      laborCost;

    setTotalCostsWithoutComission(Math.ceil(TotalCosts));

    calculateComission();
  }, []);

  useEffect(() => {
    calculateComission();
  }, [desiredPrice]);

  const handleNextStep = () => {
    setValue('Comission', comission);
    setValue('Costs', totalCosts);
    setValue('Price', desiredPrice);
    nextStep();
  };

  return (
    <Stack>
      <Title>Alege pretul de vanzare al lucrarii</Title>
      {comissionCost != 0 ? (
        <>
          <Title order={2}>Costurile lucrarii fara TVA sunt de RON {totalCosts}</Title>
          <Title order={3}>Cost lucrare: RON{totalCosts}</Title>
          <Title order={4}>
            Comision lucrare: {comissionCost}% (RON {comission})
          </Title>
        </>
      ) : (
        <Title order={2}>Costurile lucrarii fara TVA sunt de RON {totalCosts}</Title>
      )}
      <Text>Scrie in caseta de mai jos pretul cu care doresti sa vinzi lucrarea</Text>
      <NumberInput onChange={(e) => setDesiredPrice(Number(e))} />
      {desiredPrice != 0 && <Title>Profitul dvs : RON{desiredPrice - totalCosts}</Title>}
      <Button onClick={handleNextStep}>Pasul Urmator (Ofertare)</Button>
    </Stack>
  );
};

export default ConfirmOkPage;
