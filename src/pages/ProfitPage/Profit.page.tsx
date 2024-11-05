import React, { useEffect, useState } from 'react';
import { Controller, useWatch } from 'react-hook-form';
import {
  Badge,
  Button,
  Card,
  Flex,
  Group,
  Image,
  NumberInput,
  Select,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';

const ProfitPage = () => {
  const { setValue, getValues, control } = useFormValues();
  const [profitSet, setProfitSet] = useState(false);

  const [totalWithProfit, setTotalWithProfit] = useState(0);

  // Watch the Profit value
  const profit = useWatch({ control, name: 'Profit' });

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

  const [inverterTotal, setInverterTotal] = useState(Math.ceil(getValues('Inverter.Price')));

  const [panelsTotal, setPanelsTotal] = useState(
    Math.ceil(getValues('NumberOfPanels') * getValues('Panel.Price'))
  );

  const [batteryTotal, setBattetyTotal] = useState(Math.ceil(getValues('Battery.price')));

  const [montageTotal, setMontageTotal] = useState(Math.ceil(getValues('MontageType.Total')));

  const [connectivityTotal, setConectitivtyTotal] = useState(Math.ceil(ConectivityGlobal.Total));

  const [comision, setComision] = useState(0);

  const [total, setTotal] = useState(
    inverterTotal + panelsTotal + batteryTotal + montageTotal + connectivityTotal
  );

  const [initialTotal, setInitialTotal] = useState(total);

  const [initialTotalWithProfit, setInitialTotalWithProfit] = useState(totalWithProfit);

  useEffect(() => {
    if (initialTotal == 0) {
      setInitialTotal(total);
    }
    if (initialTotalWithProfit == 0) {
      setInitialTotalWithProfit(totalWithProfit);
    }
  }, [total, totalWithProfit]);

  useEffect(() => {
    if (comision > 0) {
      const cut = (comision / 100) * totalWithProfit; // 0.12
      setTotalWithProfit(totalWithProfit - cut);
      setTotal(total + cut);
    } else {
      // Dacă comisionul este 0, revenim la valorile inițiale
      setTotal(initialTotal);
      setTotalWithProfit(initialTotalWithProfit);
    }
  }, [comision, initialTotal, initialTotalWithProfit]);

  // Handler to update InverterGlobal.Total and adjust Profit
  const handleInverterChange = (ammount: number) => {
    const newTotal = inverterTotal + ammount;
    setInverterTotal(newTotal);
    setValue('Profit', profit - ammount);
  };

  const handlePanelsChange = (ammount: number) => {
    const newTotal = panelsTotal + ammount;
    setPanelsTotal(newTotal);
    setValue('Profit', profit - ammount);
  };

  const handleBatteryChange = (ammount: number) => {
    const newTotal = batteryTotal + ammount;
    setBattetyTotal(newTotal);
    setValue('Profit', profit - ammount);
  };

  const handleMontageChange = (ammount: number) => {
    const newTotal = montageTotal + ammount;
    setMontageTotal(newTotal);
    setValue('Profit', profit - ammount);
  };

  const handleConnectivityChange = (ammount: number) => {
    const newTotal = connectivityTotal + ammount;
    setConectitivtyTotal(newTotal);
    setValue('Profit', profit - ammount);
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
          canModify={profitSet}
          img="https://www.deegesolar.co.uk/wp-content/uploads/2021/10/String_Inverter_FI.jpg"
          title="Invertor"
          text={`${getValues('Inverter.Brand')} ${getValues('Inverter.kW')}kW ${getValues('Inverter.Type')}`}
          total={inverterTotal || 0}
        />
        {batteryTotal > 0 && (
          <CategoryCard
            changeValue={() => handleBatteryChange(100)}
            subtractValue={() => handleBatteryChange(-100)}
            canModify={profitSet}
            img="https://bnsol.ro/image/cache/catalog/01%201300%2012V%201kw%201x300%20M12V1000%201x190A%20750W-728x800.jpg"
            title="Baterie"
            text={`${getValues('Battery.model')}`}
            total={batteryTotal || 0}
          />
        )}
        <CategoryCard
          changeValue={() => handlePanelsChange(100)}
          subtractValue={() => handlePanelsChange(-100)}
          canModify={profitSet}
          img="https://tawenergy.ro/wp-content/uploads/2023/09/Fundal-Blog-1200-%C3%97-800-px-7.png"
          title="Panouri"
          text={`${getValues('NumberOfPanels')}x ${getValues('Panel.Name')} ${getValues('Panel.W')}W`}
          total={panelsTotal || 0}
        />
        <CategoryCard
          changeValue={() => handleMontageChange(100)}
          subtractValue={() => handleMontageChange(-100)}
          canModify={profitSet}
          img="https://nakedsolar.co.uk/wp-content/uploads/bfi_thumb/pitched-roof-mounting-for-solar-pv-panels-qrktt8qwskhb1n6qpbnpfb9e3xv7ep5kdw4tqy1sa8.png"
          title="Montaj Panouri"
          text={`${getValues('MontageType.Type')}`}
          total={montageTotal || 0}
        />
        <CategoryCard
          changeValue={() => handleConnectivityChange(100)}
          subtractValue={() => handleConnectivityChange(-100)}
          canModify={profitSet}
          img="https://bnsol.ro/image/cache/catalog/01%201300%2012V%201kw%201x300%20M12V1000%201x190A%20750W-728x800.jpg"
          title="Conectica"
          text={'Tablou SmartPanel , Tablout Stringuri, Cablu AC, etc...'}
          total={connectivityTotal || 0}
        />
        {comision > 0 && (
          <CategoryCard
            changeValue={() => handleConnectivityChange(100)}
            subtractValue={() => handleConnectivityChange(-100)}
            canModify={profitSet}
            img="https://img.freepik.com/vector-premium/icono-comision-ilustracion-3d-coleccion-marketing-afiliados-icono-3d-comision-creativa-plantillas-diseno-web-infografias-mas_676904-340.jpg"
            title="Comision"
            text={`${comision}% - RON ${Math.ceil(totalWithProfit * (comision / 100))}`}
            total={-1}
          />
        )}

        {/* <CategoryCard
          canModify={profitSet}
          img="https://yload.ro/wp-content/uploads/2021/06/transportation-and-logistics-of-container-cargo-ship-and-cargo-plane-1-scaled.jpg"
          title="Transport"
          text={'Masina, Chrie Hala, Motorina, etc...'}
          total={0}
        /> */}
      </Flex>
      <Title order={3} my={'lg'}>
        Total costuri lucrare fara TVA : RON {total}
      </Title>

      {!profitSet ? (
        <>
          <Title order={3} my={'lg'}>
            Specifica profitul dorit in lei
          </Title>
          <Controller
            name="Profit"
            control={control}
            render={({ field }) => <NumberInput onChange={(e) => field.onChange(Number(e))} />}
          />
          <Button
            onClick={() => {
              setProfitSet(true);
              setTotalWithProfit(total + profit);
            }}
          >
            Ok
          </Button>
        </>
      ) : (
        <>
          <Text>Profit de distribuit : {profit}</Text>
          <Title order={3}>Total de incasat : {totalWithProfit}</Title>
          <Select
            readOnly={comision != 0}
            value={`${comision}%`}
            data={[
              { label: '3%', value: '3' },
              { label: '5%', value: '5' },
              { label: '7%', value: '7' },
              { label: '12%', value: '12' },
            ]}
            onChange={(e) => setComision(Number(e))}
          />
          <Button
            onClick={() => {
              // Revine la valorile inițiale ale totalului și profitului
              setTotal(initialTotal);
              setTotalWithProfit(initialTotalWithProfit);
              setComision(0); // Resetează comisionul la 0
            }}
          >
            Sterge comisionul de {comision}%
          </Button>
        </>
      )}
    </Flex>
  );
};

export default ProfitPage;

const CategoryCard = ({
  img,
  title,
  text,
  total,
  canModify,
  changeValue,
  subtractValue,
}: {
  img: string;
  title: string;
  text: string;
  total: number;
  canModify: boolean;
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
        <Button disabled color="blue" fullWidth mt="md" radius="md">
          RON {total}
        </Button>
      )}
      {canModify && total != -1 && (
        <>
          <Button onClick={() => changeValue(100)}>+ 100</Button>
          <Button onClick={() => subtractValue(-100)}>- 100</Button>
        </>
      )}
    </Card>
  );
};
