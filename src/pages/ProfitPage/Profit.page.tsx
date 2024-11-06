import React, { useEffect, useState } from 'react';
import { Controller, useWatch } from 'react-hook-form';
import { Badge, Button, Card, Flex, Group, Image, NumberInput, Text, Title } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';

const ProfitPage = () => {
  const { getValues, control } = useFormValues();

  const [profit, setProfit] = useState(getValues('Price') - getValues('Costs'));

  const ConectivityGlobal = {
    Total:
      getValues('StringTable.Price') +
      getValues('SmartMeterTable.Price') +
      getValues('ACCableType.Total') +
      getValues('SolarCable.Total') +
      getValues('GroundingCable.Total') +
      getValues('CopexCable.Total') +
      getValues('WoodScrews.Total') +
      getValues('Obo.Total') +
      getValues('Screws.Total') +
      getValues('MC4.Total') +
      getValues('AluminiumProfile.Total') +
      getValues('FusileFuse.Total') +
      getValues('Surges.Total') +
      getValues('CableDuct.Total') +
      getValues('IntermediateClamps.Total') +
      getValues('CornerClamps.Total') +
      getValues('MixClamps.Total') +
      getValues('ACFuse.Price') +
      getValues('MiniRail.Total') +
      getValues('Prezoane.Total'),
  };

  const TransportCost =
    Number(getValues('Car.Total')) +
    Number(getValues('Gas.Total')) +
    Number(getValues('Rent.PricePerRoom')) *
      Number(getValues('Rent.Rooms')) *
      Number(getValues('Rent.Days'));

  const comissionCost = getValues('Comission');

  const [comission, setComission] = useState(0);

  const calculateComission = () => {
    const multiplier = comissionCost / 100;

    const _comission = getValues('Price') * multiplier;

    setComission(_comission);
  };

  const [inverterCost, setInverterCost] = useState(Math.ceil(getValues('Inverter.Price')));

  const [panelsCost, setPanelsCost] = useState(
    Math.ceil(getValues('NumberOfPanels') * getValues('Panel.Price'))
  );

  const [batteryCost, setBatteryCost] = useState(Math.ceil(getValues('Battery.price')));

  const [installationCost, setInstallationCost] = useState(
    Math.ceil(getValues('MontageType.Total'))
  );

  const [connectivityCost, setConnectivityCost] = useState(Math.ceil(ConectivityGlobal.Total));

  const [transportCost, setTransportCost] = useState(Number(TransportCost));

  const [totalCosts, setTotalCosts] = useState(getValues('Costs'));

  const handleInverterChange = (ammount: number) => {
    const newTotal = inverterCost + ammount;
    setInverterCost(newTotal);
    setProfit((prev) => prev - ammount);
  };

  const handlePanelsChange = (ammount: number) => {
    const newTotal = panelsCost + ammount;
    setPanelsCost(newTotal);
    setProfit((prev) => prev - ammount);
  };

  const handleBatteryChange = (ammount: number) => {
    const newTotal = batteryCost + ammount;
    setBatteryCost(newTotal);
    setProfit((prev) => prev - ammount);
  };

  const handleMontageChange = (ammount: number) => {
    const newTotal = installationCost + ammount;
    setInstallationCost(newTotal);
    setProfit((prev) => prev - ammount);
  };

  const handleConnectivityChange = (ammount: number) => {
    const newTotal = connectivityCost + ammount;
    setConnectivityCost(newTotal);
    setProfit((prev) => prev - ammount);
  };

  const handleTransportChange = (ammount: number) => {
    const newTotal = transportCost + ammount;
    setTransportCost(newTotal);
    setProfit((prev) => prev - ammount);
  };

  return (
    <Flex align={'center'} justify={'center'} h={'100vh'} direction={'column'}>
      <Title order={3} mb={'lg'}>
        Total lucrare per inglobari
      </Title>
      <Flex direction={'row'} align={'stretch'} justify={'center'}>
        <CategoryCard
          changeValue={() => handleInverterChange(100)}
          subtractValue={() => handleInverterChange(-100)}
          img="https://www.deegesolar.co.uk/wp-content/uploads/2021/10/String_Inverter_FI.jpg"
          title="Invertor"
          text={`${getValues('Inverter.Brand')} ${getValues('Inverter.kW')}kW ${getValues('Inverter.Type')}`}
          total={inverterCost || 0}
        />
        {batteryCost > 0 && (
          <CategoryCard
            changeValue={() => handleBatteryChange(100)}
            subtractValue={() => handleBatteryChange(-100)}
            img="https://bnsol.ro/image/cache/catalog/01%201300%2012V%201kw%201x300%20M12V1000%201x190A%20750W-728x800.jpg"
            title="Baterie"
            text={`${getValues('Battery.model')}`}
            total={batteryCost || 0}
          />
        )}
        <CategoryCard
          changeValue={() => handlePanelsChange(100)}
          subtractValue={() => handlePanelsChange(-100)}
          img="https://tawenergy.ro/wp-content/uploads/2023/09/Fundal-Blog-1200-%C3%97-800-px-7.png"
          title="Panouri"
          text={`${getValues('NumberOfPanels')}x ${getValues('Panel.Name')} ${getValues('Panel.W')}W`}
          total={panelsCost || 0}
        />
        <CategoryCard
          changeValue={() => handleMontageChange(100)}
          subtractValue={() => handleMontageChange(-100)}
          img="https://nakedsolar.co.uk/wp-content/uploads/bfi_thumb/pitched-roof-mounting-for-solar-pv-panels-qrktt8qwskhb1n6qpbnpfb9e3xv7ep5kdw4tqy1sa8.png"
          title="Montaj Panouri"
          text={`${getValues('MontageType.Type')}`}
          total={installationCost || 0}
        />
        <CategoryCard
          changeValue={() => handleConnectivityChange(100)}
          subtractValue={() => handleConnectivityChange(-100)}
          img="https://bnsol.ro/image/cache/catalog/01%201300%2012V%201kw%201x300%20M12V1000%201x190A%20750W-728x800.jpg"
          title="Conectica"
          text={'Tablou SmartPanel , Tablout Stringuri, Cablu AC, etc...'}
          total={connectivityCost || 0}
        />
        {comissionCost > 0 && (
          <CategoryCard
            changeValue={() => handleConnectivityChange(100)}
            subtractValue={() => handleConnectivityChange(-100)}
            img="https://img.freepik.com/vector-premium/icono-comision-ilustracion-3d-coleccion-marketing-afiliados-icono-3d-comision-creativa-plantillas-diseno-web-infografias-mas_676904-340.jpg"
            title="Comision"
            text={`RON ${comissionCost}`}
            total={-1}
          />
        )}

        <CategoryCard
          changeValue={() => handleTransportChange(100)}
          subtractValue={() => handleTransportChange(-100)}
          img="https://yload.ro/wp-content/uploads/2021/06/transportation-and-logistics-of-container-cargo-ship-and-cargo-plane-1-scaled.jpg"
          title="Transport"
          text={'Masina, Chrie Hala, Motorina, etc...'}
          total={transportCost}
        />
      </Flex>
      <Title order={3} my={'lg'}>
        Total costuri lucrare fara TVA : RON {totalCosts}
      </Title>

      <Text>Profit de distribuit : {profit}</Text>
    </Flex>
  );
};

export default ProfitPage;

const CategoryCard = ({
  img,
  title,
  text,
  total,
  changeValue,
  subtractValue,
}: {
  img: string;
  title: string;
  text: string;
  total: number;
  changeValue: (ammount: number) => void;
  subtractValue: (ammount: number) => void;
}) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder miw={'200px'} mx={'md'}>
      <Card.Section>
        <Image src={img} height={160} alt="Category Card" />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>
      </Group>

      <Text size="sm" c="dimmed">
        {text}
      </Text>

      {total == -1 ? (
        <></>
      ) : (
        <>
          <Button disabled color="blue" fullWidth mt="md" radius="md">
            RON {total}
          </Button>

          <Button onClick={() => changeValue(100)}>+ 100</Button>
          <Button onClick={() => subtractValue(-100)}>- 100</Button>
        </>
      )}
      {}
    </Card>
  );
};
