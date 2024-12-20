import { IconMinus, IconPlus } from '@tabler/icons-react';
import { Badge, Flex, Group, Table, Text } from '@mantine/core';
import { useFormMethods } from '@/context/FormMethodsContext';
import { useFormValues } from '@/context/FormValuesContext';
import InverterSelect from './InverterSelect';

const SystemSummary = () => {
  const { getValues } = useFormValues();

  const { recalculatePanels } = useFormMethods();

  const data = [
    {
      name: getValues('SystemType'),
      type: 'Tip Sistem',
      quantity: '-',
      total: '-',
      color: 'blue',
    },
    {
      name: getValues('Battery')?.model || 'Fara baterie',
      type: 'Baterie',
      quantity: '1',
      total: getValues('Battery')?.price || 0,
      color: 'green',
    },
    // {
    //   name: `${getValues('Inverter.Brand')} ${getValues('Inverter.kW')}kW ${getValues('Inverter.Type')}`,
    //   type: 'Invertor',
    //   quantity: '1',
    //   total: 'RON ' + getValues('Inverter.Price'),
    //   color: 'cyan',
    // },
    {
      name: `${getValues('MontageType.Type')}`,
      type: 'Montaj',
      quantity: '-',
      total: `RON ${getValues('MontageType.Total')}`,
      color: 'red',
    },
    {
      name: `Tablou Stringuri ${getValues('StringTable.Position')}`,
      type: 'Tablou',
      quantity: '1',
      total: `RON ${getValues('StringTable.Price')}`,
      color: 'red',
    },
    {
      name: `Tablou Smartmeter ${getValues('SmartMeterTable.Position')}`,
      type: 'Tablou',
      quantity: '1',
      total: `RON ${getValues('SmartMeterTable.Price')}`,
      color: 'red',
    },
    {
      name: `Cablu AC`,
      type: 'Cablu',
      quantity: `${getValues('ACCableType.Length')}`,
      total: `RON ${getValues('ACCableType.Total')}`,
      color: 'cyan',
    },
    {
      name: `Cablu Solar`,
      type: 'Cablu',
      quantity: `${getValues('SolarCable.Length')}`,
      total: `RON ${getValues('SolarCable.Total')}`,
      color: 'cyan',
    },
    {
      name: `Cablu Impamantare`,
      type: 'Cablu',
      quantity: `${getValues('GroundingCable.Length')}`,
      total: `RON ${getValues('GroundingCable.Total')}`,
      color: 'cyan',
    },
    {
      name: `Copex`,
      type: 'Fixare',
      quantity: `${getValues('CopexCable.Length')}`,
      total: `RON ${getValues('CopexCable.Total')}`,
      color: 'purple',
    },
    {
      name: `Melci`,
      type: 'Fixare',
      quantity: `${getValues('WoodScrews.Quantity')}`,
      total: `RON ${getValues('WoodScrews.Total')}`,
      color: 'purple',
    },
    {
      name: `Obo`,
      type: 'Fixare',
      quantity: `${getValues('Obo.Quantity')}`,
      total: `RON ${getValues('Obo.Total')}`,
      color: 'purple',
    },
    {
      name: `Suruburi`,
      type: 'Fixare',
      quantity: `${getValues('Screws.Quantity')}`,
      total: `RON ${getValues('Screws.Total')}`,
      color: 'purple',
    },
    {
      name: `MC4`,
      type: 'Fixare',
      quantity: `${getValues('MC4.Quantity')}`,
      total: `RON ${getValues('MC4.Total')}`,
      color: 'purple',
    },
    {
      name: `Profile Aluminiu`,
      type: 'Fixare',
      quantity: `${getValues('AluminiumProfile.Quantity')}`,
      total: `RON ${getValues('AluminiumProfile.Total')}`,
      color: 'purple',
    },
    {
      name: `Siguranta Fuzibila`,
      type: 'Fixare',
      quantity: `${getValues('FusileFuse.Quantity')}`,
      total: `RON ${getValues('FusileFuse.Total')}`,
      color: 'purple',
    },
    {
      name: `Siguranta AC`,
      type: 'Fixare',
      quantity: `${getValues('ACFuse.Power')}A`,
      total: `RON ${getValues('ACFuse.Price')}`,
      color: 'purple',
    },
    {
      name: `Descarcatoare`,
      type: 'Fixare',
      quantity: `${getValues('Surges.Quantity')}`,
      total: `RON ${getValues('Surges.Total')}`,
      color: 'purple',
    },
    {
      name: `Canal Cablu`,
      type: 'Fixare',
      quantity: `${getValues('CableDuct.Quantity')}`,
      total: `RON ${getValues('CableDuct.Total')}`,
      color: 'purple',
    },
    {
      name: `Cleme Intermediare`,
      type: 'Fixare',
      quantity: `${getValues('IntermediateClamps.Quantity')}`,
      total: `RON ${getValues('IntermediateClamps.Total')}`,
      color: 'purple',
    },
    {
      name: `Cleme de capat`,
      type: 'Fixare',
      quantity: `${getValues('CornerClamps.Quantity')}`,
      total: `RON ${getValues('CornerClamps.Total')}`,
      color: 'purple',
    },
    {
      name: `Cleme de imbinare`,
      type: 'Fixare',
      quantity: `${getValues('MixClamps.Quantity')}`,
      total: `RON ${getValues('MixClamps.Total')}`,
      color: 'purple',
    },
    {
      name: `Mini Rail`,
      type: 'Fixare',
      quantity: `${getValues('MiniRail.Quantity')}`,
      total: `RON ${getValues('MiniRail.Total')}`,
      color: 'purple',
    },
    {
      name: `Prezoane / Carlige Tigla`,
      type: 'Fixare',
      quantity: `${getValues('Prezoane.Quantity')}`,
      total: `RON ${getValues('Prezoane.Total')}`,
      color: 'purple',
    },
    {
      name: `Lucrare Subcontractata`,
      type: 'Subcontractare',
      quantity: `${getValues('Outsourced') ? 'Da' : 'Nu'}`,
      total: `-`,
      color: 'purple',
    },
    {
      name: `Masini`,
      type: 'Transport',
      quantity: `${getValues('Car.Quantity')}`,
      total: `${getValues('Car.Total')}`,
      color: 'purple',
    },
    {
      name: `Motorina`,
      type: 'Transport',
      quantity: `${getValues('Gas.Liters')}`,
      total: `${getValues('Gas.Total')}`,
      color: 'purple',
    },
    {
      name: `Cazare`,
      type: 'Cazare',
      quantity: `${getValues('Rent.Rooms')}`,
      total: `${getValues('Rent.Rooms') * getValues('Rent.PricePerRoom') * getValues('Rent.Days')}`,
      color: 'purple',
    },
    {
      name: `Dosar`,
      type: 'Dosar Prosumator',
      quantity: `${getValues('ProsumerDoc') ? 1 : 0}`,
      total: `${getValues('ProsumerDoc') ? 500 : 0}`,
      color: 'purple',
    },
    {
      name: `Manopera`,
      type: 'Pret Manopera',
      quantity: `${getValues('Outsourced') ? 'Subcontractata' : 'Regim Propriu'}`,
      total: `${getValues('Labor')}`,
      color: 'purple',
    },
    {
      name: `Manopera`,
      type: 'Chirie Hala',
      quantity: `${getValues('WorkshopRent.Total') / getValues('WorkshopRent.PricePerDay')} Zile`,
      total: `${getValues('WorkshopRent.Total')}`,
      color: 'purple',
    },
    {
      name: `Comision`,
      type: 'Comision',
      quantity: `1`,
      total: `${getValues('Comission')}%`,
      color: 'purple',
    },
  ];

  const rows = data.map((item, i) => (
    <Table.Tr key={i}>
      <Table.Td>
        <Group gap="sm">
          <Text fz="sm" fw={500}>
            {item.type}
          </Text>
        </Group>
      </Table.Td>

      <Table.Td>
        <Badge color={item.color} variant="light">
          {item.name?.toString()}
        </Badge>
      </Table.Td>

      <Table.Td>
        <Text variant="light">{item.quantity}</Text>
      </Table.Td>

      <Table.Td>
        <Text variant="light">{item.total}</Text>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={800}>
      <Table verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Category</Table.Th>
            <Table.Th>Description</Table.Th>
            <Table.Th>Bucati</Table.Th>
            <Table.Th>Total</Table.Th>
            <Table.Th />
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>
              <Group gap="sm">
                <Text fz="sm" fw={500}>
                  Panouri
                </Text>
              </Group>
            </Table.Td>

            <Table.Td>
              <Badge color="green" variant="light">
                {getValues('Panel.Name')} {getValues('Panel.KG')}KG {getValues('Panel.W')}W
              </Badge>
            </Table.Td>

            <Table.Td>
              <Text variant="light">
                <Flex align={'center'} direction={'row'}>
                  <span>
                    <IconMinus
                      size={'12px'}
                      style={{
                        marginInlineEnd: '5px',
                        cursor: 'pointer',
                      }}
                      onClick={() => recalculatePanels(Number(getValues('NumberOfPanels')) - 1, 0)}
                    />
                  </span>
                  {getValues('NumberOfPanels')}
                  <span>
                    <IconPlus
                      size={'12px'}
                      style={{
                        marginInlineStart: '5px',
                        cursor: 'pointer',
                      }}
                      onClick={() => recalculatePanels(Number(getValues('NumberOfPanels')) + 1, 0)}
                    />
                  </span>
                </Flex>
              </Text>
            </Table.Td>

            <Table.Td>
              <Text variant="light">
                RON {(getValues('Panel.Price') * getValues('NumberOfPanels')).toFixed(2)}
              </Text>
            </Table.Td>
          </Table.Tr>
          <InverterSelect />
          {rows}
        </Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
};

export default SystemSummary;
