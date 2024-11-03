import { IconPencil, IconTrash } from '@tabler/icons-react';
import { ActionIcon, Anchor, Avatar, Badge, Group, rem, Table, Text } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';

const SystemSummary = () => {
  const { getValues } = useFormValues();

  const data = [
    {
      name: getValues('SystemType'),
      type: 'Tip Sistem',
      quantity: '-',
      total: '-',
      color: 'blue',
    },
    {
      name: `${getValues('Inverter.Brand')} ${getValues('Inverter.kW')}kW ${getValues('Inverter.Type')}`,
      type: 'Invertor',
      quantity: '1',
      total: 'RON ' + getValues('Inverter.Price'),
      color: 'cyan',
    },
    {
      name: `${getValues('Panel.Name')} ${getValues('Panel.KG')}KG ${getValues('Panel.W')}W`,
      type: 'Panels',
      quantity: getValues('NumberOfPanels'),
      total: 'RON ' + (getValues('Panel.Price') * getValues('NumberOfPanels')).toFixed(2),
      color: 'green',
    },
  ];

  console.log(typeof getValues('Inverter'));
  const rows = data.map((item) => (
    <Table.Tr key={item.type}>
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
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
};

export default SystemSummary;
