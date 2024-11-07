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
  const safeGetValue = (path: any) => {
    const value = getValues(path);
    return isNaN(value) ? 0 : value;
  };
  //total cost without comission
  useEffect(() => {
    const ConectivityGlobal = {
      Total:
        safeGetValue('StringTable.Price') +
        safeGetValue('SmartMeterTable.Price') +
        safeGetValue('ACCableType.Total') +
        safeGetValue('SolarCable.Total') +
        safeGetValue('GroundingCable.Total') +
        safeGetValue('CopexCable.Total') +
        safeGetValue('WoodScrews.Total') +
        safeGetValue('Obo.Total') +
        safeGetValue('Screws.Total') +
        safeGetValue('MC4.Total') +
        safeGetValue('AluminiumProfile.Total') +
        safeGetValue('FusileFuse.Total') +
        safeGetValue('Surges.Total') +
        safeGetValue('CableDuct.Total') +
        safeGetValue('IntermediateClamps.Total') +
        safeGetValue('CornerClamps.Total') +
        safeGetValue('MixClamps.Total') +
        safeGetValue('ACFuse.Price') +
        safeGetValue('MiniRail.Total') +
        safeGetValue('Prezoane.Total'),
    };

    const TransportCost =
      Number(safeGetValue('Car.Total')) +
      Number(safeGetValue('Gas.Total')) +
      Number(safeGetValue('Rent.PricePerRoom')) *
        Number(safeGetValue('Rent.Rooms')) *
        Number(safeGetValue('Rent.Days'));

    const inverterCost = Math.ceil(getValues('Inverter.Price'));

    const panelsCost = Math.ceil(getValues('NumberOfPanels') * getValues('Panel.Price'));

    const batteryCost = Math.ceil(getValues('Battery.price')) || 0;

    const installationCost = Math.ceil(getValues('MontageType.Total'));

    const connectivityCost = Math.ceil(ConectivityGlobal.Total);

    const transportCost = Number(TransportCost);

    const miscCost =
      Number(getValues('ProsumerDoc') ? 500 : 0) +
      Number(getValues('Labor')) +
      Number(getValues('WorkshopRent.Total'));

    const TotalCosts =
      inverterCost +
      panelsCost +
      batteryCost +
      installationCost +
      connectivityCost +
      transportCost +
      miscCost;

    setTotalCostsWithoutComission(Math.ceil(TotalCosts));

    setTotalCosts(Math.ceil(totalCosts));

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
