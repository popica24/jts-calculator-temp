import { useEffect, useState } from 'react';
import { Button, Card, Flex, Group, Image, Stack, Text, Title } from '@mantine/core';
import ExcelExport from '@/components/ExcelExport';
import { useFormValues } from '@/context/FormValuesContext';

const ProfitPage = () => {
  const { getValues } = useFormValues();

  const safeGetValue = (path: any) => {
    const value = getValues(path);
    return isNaN(value) || value == undefined || value == null ? 0 : value;
  };

  const [profit, setProfit] = useState(
    safeGetValue('Price') -
      safeGetValue('Costs') -
      (safeGetValue('Price') - safeGetValue('Costs')) * 0.16
  );

  const [kw, setKw] = useState(0);

  useEffect(() => {
    setKw((safeGetValue('Panel.W') * safeGetValue('NumberOfPanels')) / 1000);
  }, []);

  const ConectivityTotal =
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
    safeGetValue('FusileFuse.Total') +
    safeGetValue('Surges.Total') +
    safeGetValue('CableDuct.Total');

  const InstallationTotal =
    Math.ceil(safeGetValue('MontageType.Total')) +
    safeGetValue('AluminiumProfile.Total') +
    safeGetValue('IntermediateClamps.Total') +
    safeGetValue('CornerClamps.Total') +
    safeGetValue('MixClamps.Total') +
    safeGetValue('ACFuse.Price') +
    safeGetValue('MiniRail.Total') +
    safeGetValue('Prezoane.Total');

  const comissionCost = safeGetValue('Comission');

  const [inverterCost, setInverterCost] = useState(Math.ceil(safeGetValue('Inverter.Price')));

  const [panelsCost, setPanelsCost] = useState(
    Math.ceil(safeGetValue('NumberOfPanels') * safeGetValue('Panel.Price'))
  );

  const [batteryCost, setBatteryCost] = useState(Math.ceil(safeGetValue('Battery.price')));

  const [installationCost, setInstallationCost] = useState(InstallationTotal);

  const [connectivityCost, setConnectivityCost] = useState(Math.ceil(ConectivityTotal));

  const [laborTotal, setLaborTotal] = useState(safeGetValue('Labor'));

  const totalCosts = safeGetValue('Costs');

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

  const handleLaborChange = (ammount: number) => {
    const newTotal = laborTotal + ammount;
    setLaborTotal(newTotal);
    setProfit((prev) => prev - ammount);
  };
  const data = [
    {
      Produs: `${getValues('Inverter.Brand')} ${safeGetValue('Inverter.kW')}kW ${getValues('Inverter.Type')}`,
      CNT: 1,
      'U/M': 'Buc',
      'Pret per Buc': 'RON' + safeGetValue('Inverter.Price'),
      'Pret total': 'RON ' + safeGetValue('Inverter.Price'),
    },
    {
      Produs: `${getValues('Panel.Name')} ${safeGetValue('Panel.KG')}KG ${safeGetValue('Panel.W')}W`,
      CNT: safeGetValue('NumberOfPanels'),
      'U/M': 'Buc',
      'Pret per Buc': 'RON' + getValues('Panel.Price'),
      'Pret total':
        'RON ' + (safeGetValue('Panel.Price') * safeGetValue('NumberOfPanels')).toFixed(2),
    },
    {
      Produs: 'Profil Aluminiu',
      CNT: `${getValues('AluminiumProfile.Quantity')}`,
      'U/M': 'Buc',
      'Pret per Buc': `RON 65`,
      'Pret total': `RON ${safeGetValue('AluminiumProfile.Total')}`,
    },
    {
      Produs: `Clema Intermediara`,
      CNT: `${getValues('IntermediateClamps.Quantity')}`,
      'U/M': 'Buc',
      'Pret per Buc': `RON ${getValues('IntermediateClamps.PricePerPiece')}`,
      'Pret total': `RON ${safeGetValue('IntermediateClamps.Total')}`,
    },
    {
      Produs: `Cleme de capat`,
      CNT: `${getValues('CornerClamps.Quantity')}`,
      'U/M': 'Buc',
      'Pret per Buc': `RON ${getValues('CornerClamps.PricePerPiece')}`,
      'Pret total': `RON ${safeGetValue('CornerClamps.Total')}`,
    },
    {
      Produs: `Clema Imbinare`,
      CNT: `${getValues('CornerClamps.Quantity')}`,
      'U/M': 'Buc',
      'Pret per Buc': `RON 5`,
      'Pret total': `RON ${safeGetValue('MixClamps.Total')}`,
    },
    {
      Produs: `Siguranta AC`,
      CNT: 1,
      'U/M': 'Buc',
      'Pret per Buc': `RON ${getValues('ACFuse.Price')}`,
      'Pret total': `RON ${safeGetValue('ACFuse.Price')}`,
    },
    {
      Produs: `Sigurante Fuzibile`,
      'U/M': 'Buc',
      CNT: `${getValues('FusileFuse.Quantity')}`,
      'Pret per Buc': `RON ${getValues('FusileFuse.PricePerPiece')}`,
      'Pret total': `RON ${safeGetValue('FusileFuse.Total')}`,
    },
    {
      Produs: `Tablou Smartmeter ${getValues('SmartMeterTable.Position')}`,
      CNT: 1,
      'U/M': 'Buc',
      'Pret per Buc': `RON ${safeGetValue('SmartMeterTable.Price')}`,
      'Pret total': `RON ${safeGetValue('SmartMeterTable.Price')}`,
    },
    {
      Produs: `Tablou pt stringuri ${getValues('StringTable.Position')}`,
      CNT: 1,
      'U/M': 'Buc',
      'Pret per Buc': `RON ${safeGetValue('StringTable.Price')}`,
      'Pret total': `RON ${safeGetValue('StringTable.Price')}`,
    },
    {
      Produs: `Descarcatoare`,
      CNT: `${getValues('Surges.Quantity')}`,
      'U/M': 'Buc',
      'Pret per Buc': `RON ${getValues('Surges.PricePerPiece')}`,
      'Pret total': `RON ${safeGetValue('Surges.Total')}`,
    },
    {
      Produs: `Cablu Solar`,
      CNT: `${getValues('SolarCable.Length')}`,
      'U/M': 'm/l',
      'Pret per Buc': `RON ${getValues('SolarCable.PricePerM')}`,
      'Pret total': `RON ${safeGetValue('SolarCable.Total')}`,
    },
    {
      Produs: `Cablu AC`,
      CNT: `${getValues('ACCableType.Length')}`,
      'U/M': 'm/l',
      'Pret per Buc': `RON ${(safeGetValue('ACCableType.Total') / getValues('ACCableType.Length')).toFixed(2)}`,
      'Pret total': `RON ${safeGetValue('ACCableType.Total')}`,
    },
    {
      Produs: `Cablu Impamantare`,
      CNT: `${getValues('GroundingCable.Length')}`,
      'U/M': 'm/l',
      'Pret per Buc': `RON 3.3`,
      'Pret total': `RON ${safeGetValue('GroundingCable.Total')}`,
    },
    {
      Produs: `Canal Cablu`,
      CNT: `${getValues('CableDuct.Quantity')}`,
      'U/M': 'm/l',
      'Pret per Buc': `RON 20`,
      'Pret total': `RON ${safeGetValue('CableDuct.Total')}`,
    },
    {
      Produs: `Copex`,
      CNT: `${getValues('CopexCable.Length')}`,
      'U/M': 'm/l',
      'Pret per Buc': `RON 6`,
      'Pret total': `RON ${safeGetValue('CopexCable.Total')}`,
    },
    {
      Produs: `Mini Rail`,
      CNT: `${getValues('MiniRail.Quantity')}`,
      'U/M': 'Buc',
      'Pret per Buc': `RON 12.85`,
      'Pret total': `RON ${safeGetValue('MiniRail.Total')}`,
    },
    {
      Produs: 'Prezoane',
      CNT: `${getValues('MontageType.Type') == 'Acoperis tip tabla' ? getValues('Prezoane.Quantity') : 0}`,
      'U/M': 'Buc',
      'Pret per Buc': `RON 12.5`,
      'Pret total': `${getValues('MontageType.Type') == 'Acoperis tip tabla' ? getValues('Prezoane.Total') : 0}`,
    },
    {
      Produs: 'Carlige Tigla',
      CNT: `${getValues('MontageType.Type') == 'Acoperis tip tigla' ? getValues('Prezoane.Quantity') : 0}`,
      'U/M': 'Buc',
      'Pret per Buc': `RON 12.5`,
      'Pret total': `${getValues('MontageType.Type') == 'Acoperis tip tigla' ? getValues('Prezoane.Total') : 0}`,
    },
    {
      Produs: `Melci`,
      CNT: `${getValues('WoodScrews.Quantity')}`,
      'U/M': 'Buc',
      'Pret per Buc': `RON 3`,
      'Pret total': `RON ${safeGetValue('WoodScrews.Total')}`,
    },
    {
      Produs: `Obo`,
      CNT: `${getValues('Obo.Quantity')}`,
      'U/M': 'Buc',
      'Pret per Buc': `RON 2.5`,
      'Pret total': `RON ${safeGetValue('Obo.Total')}`,
    },
    {
      Produs: `Suruburi`,
      CNT: `${getValues('Screws.Quantity')}`,
      'U/M': 'Buc',
      'Pret per Buc': `RON 0.3`,
      'Pret total': `RON ${safeGetValue('Screws.Total')}`,
    },
    {
      Produs: `MC4`,
      CNT: `${getValues('MC4.Quantity')}`,
      'U/M': 'Buc',
      'Pret per Buc': `RON 5`,
      'Pret total': `RON ${safeGetValue('MC4.Total')}`,
    },
    {
      Produs: getValues('Battery')?.model || 'Fara baterie',
      CNT: 1,
      'U/M': 'Buc',
      'Pret per Buc': 'RON' + safeGetValue('Battery.price'),
      'Pret total': 'RON' + safeGetValue('Battery.price'),
    },
    {
      Produs: `${getValues('MontageType.Type')}`,
      CNT: 1,
      'U/M': 'Montaj',
      'Pret per Buc': `RON ${safeGetValue('MontageType.Total')}`,
      'Pret total': `RON ${safeGetValue('MontageType.Total')}`,
    },
    {
      Produs: `Dosar Prosumator`,
      CNT: `${getValues('ProsumerDoc') ? 1 : 0}`,
      'U/M': 'Buc',
      'Pret per Buc': `${getValues('ProsumerDoc') ? 500 : 0}`,
      'Pret total': `${getValues('ProsumerDoc') ? 500 : 0}`,
    },
    {
      Produs: `Cost masina`,
      CNT: `${getValues('Car.Quantity')}`,
      'U/M': 'Buc',
      'Pret per Buc': `${getValues('Car.PricePerPiece')}`,
      'Pret total': `${safeGetValue('Car.Total')}`,
    },
    {
      Produs: 'Chirie Hala',
      CNT: `${getValues('WorkshopRent.Total') / getValues('WorkshopRent.PricePerDay')} Zile`,
      'U/M': 'Buc',
      'Pret per Buc': `${getValues('WorkshopRent.PricePerDay')}`,
      'Pret total': `${safeGetValue('WorkshopRent.Total')}`,
    },
    {
      Produs: `Cazare`,
      CNT: `${getValues('Rent.Rooms')}`,
      'U/M': 'Camera',
      'Pret per Buc': `${safeGetValue('Rent.PricePerRoom')}`,
      'Pret total': `${safeGetValue('Rent.Rooms') * safeGetValue('Rent.PricePerRoom') * safeGetValue('Rent.Days')}`,
    },
    {
      Produs: `Manopera ${getValues('Outsourced') ? 'Subcontractata' : 'Regim Propriu'}`,
      CNT: 1,
      'U/M': 'Buc',
      'Pret per Buc': `${getValues('Outsourced') ? getValues('Labor') : 475}`,
      'Pret total': `${safeGetValue('Labor')}`,
    },
    {
      Produs: `Motorina`,
      CNT: `${getValues('Gas.Liters')}`,
      'U/M': 'km',
      'Pret per Buc': `${getValues('Gas.PricePerLiter')}`,
      'Pret total': `${safeGetValue('Gas.Total')}`,
    },
    {
      Produs: `Comision Lucrare`,
      CNT: safeGetValue('Comission') > 0 ? 1 : 0,
      'U/M': 'Buc',
      'Pret per Buc': getValues('Comission'),
      'Pret total': getValues('Comission'),
    },
    {
      Produs: 'Total costuri fara TVA',
      CNT: 1,
      'U/M': 'Buc',
      'Pret per Buc': totalCosts,
      'Pret total': totalCosts,
    },
    {
      Produs: 'Total costuri cu TVA',
      CNT: 1,
      'U/M': 'Buc',
      'Pret per Buc': totalCosts * 1.09,
      'Pret total': totalCosts * 1.09,
    },
    {
      Produs: 'Impozit pe profit',
      CNT: 1,
      'U/M': 'Buc',
      'Pret per Buc': profit * 0.16,
      'Pret total': profit * 0.16,
    },
    {
      Produs: 'Total profit',
      CNT: 1,
      'U/M': 'Buc',
      'Pret per Buc': getValues('Price') - totalCosts - (getValues('Price') - totalCosts) * 0.16,
      'Pret total': getValues('Price') - totalCosts - (getValues('Price') - totalCosts) * 0.16,
    },
    {
      Produs: 'Total',
      CNT: 1,
      'U/M': 'Buc',
      'Pret per Buc': getValues('Price'),
      'Pret total': getValues('Price'),
    },
  ];

  return (
    // <Flex align={'center'} justify={'center'} h={'100vh'} direction={'column'}>
    //   <Title order={3} mb={'lg'}>
    //     Total lucrare per inglobari
    //   </Title>
    //   <Flex direction={'row'} align={'stretch'} justify={'center'}>
    //     <CategoryCard
    //       changeValue={() => handleInverterChange(100)}
    //       subtractValue={() => handleInverterChange(-100)}
    //       img="https://www.deegesolar.co.uk/wp-content/uploads/2021/10/String_Inverter_FI.jpg"
    //       title="Invertor"
    //       text={`${getValues('Inverter.Brand')} ${safeGetValue('Inverter.kW')}kW ${getValues('Inverter.Type')}`}
    //       total={inverterCost || 0}
    //     />
    //     {batteryCost > 0 && (
    //       <CategoryCard
    //         changeValue={() => handleBatteryChange(100)}
    //         subtractValue={() => handleBatteryChange(-100)}
    //         img="https://bnsol.ro/image/cache/catalog/01%201300%2012V%201kw%201x300%20M12V1000%201x190A%20750W-728x800.jpg"
    //         title="Baterie"
    //         text={`${safeGetValue('Battery.model')}`}
    //         total={batteryCost || 0}
    //       />
    //     )}
    //     <CategoryCard
    //       changeValue={() => handlePanelsChange(100)}
    //       subtractValue={() => handlePanelsChange(-100)}
    //       img="https://tawenergy.ro/wp-content/uploads/2023/09/Fundal-Blog-1200-%C3%97-800-px-7.png"
    //       title="Panouri"
    //       text={`${safeGetValue('NumberOfPanels')}x ${getValues('Panel.Name')} ${safeGetValue('Panel.W')}W`}
    //       total={panelsCost || 0}
    //     />
    //     <CategoryCard
    //       changeValue={() => handleMontageChange(100)}
    //       subtractValue={() => handleMontageChange(-100)}
    //       img="https://nakedsolar.co.uk/wp-content/uploads/bfi_thumb/pitched-roof-mounting-for-solar-pv-panels-qrktt8qwskhb1n6qpbnpfb9e3xv7ep5kdw4tqy1sa8.png"
    //       title="Structura Montaj Panouri"
    //       text={`${getValues('MontageType.Type')}`}
    //       total={installationCost || 0}
    //     />
    //     <CategoryCard
    //       changeValue={() => handleConnectivityChange(100)}
    //       subtractValue={() => handleConnectivityChange(-100)}
    //       img="https://bnsol.ro/image/cache/catalog/01%201300%2012V%201kw%201x300%20M12V1000%201x190A%20750W-728x800.jpg"
    //       title="Conectica"
    //       text={'Tablou SmartPanel , Tablout Stringuri, Cablu AC, etc...'}
    //       total={connectivityCost || 0}
    //     />
    //     <CategoryCard
    //       changeValue={() => handleLaborChange(100)}
    //       subtractValue={() => handleLaborChange(-100)}
    //       img="https://bnsol.ro/image/cache/catalog/01%201300%2012V%201kw%201x300%20M12V1000%201x190A%20750W-728x800.jpg"
    //       title="Manopera"
    //       text={`${getValues('Outsourced') ? 'Subcontractata' : 'In regim propriu'}`}
    //       total={laborTotal || 0}
    //     />
    //     {comissionCost > 0 && (
    //       <CategoryCard
    //         changeValue={() => handleConnectivityChange(100)}
    //         subtractValue={() => handleConnectivityChange(-100)}
    //         img="https://img.freepik.com/vector-premium/icono-comision-ilustracion-3d-coleccion-marketing-afiliados-icono-3d-comision-creativa-plantillas-diseno-web-infografias-mas_676904-340.jpg"
    //         title="Comision"
    //         text={`RON ${comissionCost}`}
    //         total={-1}
    //       />
    //     )}
    //   </Flex>

    // <Title order={3} my={'lg'}>
    //   Total costuri lucrare fara TVA : RON {totalCosts}
    // </Title>
    // <Title order={3}>Total KW vanduti : {kw}kW</Title>
    // <Title order={3} my={'lg'}>
    //   Pret per kW : {Math.ceil(safeGetValue('Price') / kw)}RON ~{' '}
    //   {Math.ceil(safeGetValue('Price') / kw) / 5}€
    // </Title>
    // <Text>Profit de distribuit : {profit}</Text>
    <Stack mb={'xl'}>
      <ExcelExport data={data} />
    </Stack>
    // </Flex>
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
