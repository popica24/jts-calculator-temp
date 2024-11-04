import { Controller } from 'react-hook-form';
import { Flex, ScrollArea, Slider, Table, Text } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';

const CarRow = () => {
  const { getValues, control } = useFormValues();

  const Gas = getValues('Gas');

  return (
    <Table w="100%" highlightOnHover>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Tip Utilitate</Table.Th>
          <Table.Th>Cantitate</Table.Th>
          <Table.Th>Pret Total</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody></Table.Tbody>
    </Table>
  );
};

export default CarRow;
