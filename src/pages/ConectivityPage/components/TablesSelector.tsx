import { IconTrash } from '@tabler/icons-react';
import { Controller } from 'react-hook-form';
import { ScrollArea, Select, Table, Text } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';

const TablesSelector = () => {
  const { getValues, control } = useFormValues();

  return (
    <>
      <Text ta="start" mt={24} w="100%" ms="xl">
        Tablouri
      </Text>
      <ScrollArea h={300} mt="lg" ms="xl" w="100%">
        <Table w="100%" highlightOnHover striped>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Tip Tablou</Table.Th>
              <Table.Th>Cantitate</Table.Th>
              <Table.Th>Pozitii</Table.Th>
              <Table.Th>Pret Total</Table.Th>
              <Table.Th>Actiune</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <Controller
              name="StringTable"
              control={control}
              render={({ field }) => (
                <Table.Tr fz={18} style={{ cursor: 'pointer' }}>
                  <Table.Td>Tablou Strings</Table.Td>
                  <Table.Td>1</Table.Td>
                  <Table.Td>
                    <Select
                      onChange={(e) =>
                        field.onChange({
                          Position: e?.split('-')[0].trim(),
                          Price: Number(e?.split('-')[1].trim()),
                        })
                      }
                      placeholder="Alege pozitia"
                      data={[
                        { label: '8P', value: '8P - 60' },
                        { label: '12P', value: '12P - 120' },
                        { label: '16P', value: '16P - 152' },
                        { label: '18P', value: '18P - 220' },
                      ]}
                    />
                  </Table.Td>
                  <Table.Td>RON {getValues('StringTable')?.Price?.toFixed(2) || '0.00'}</Table.Td>
                  <Table.Td>
                    <IconTrash stroke={2} />
                  </Table.Td>
                </Table.Tr>
              )}
            />

            <Controller
              name="SmartMeterTable"
              control={control}
              render={({ field }) => (
                <Table.Tr fz={18} style={{ cursor: 'pointer' }}>
                  <Table.Td>Tablou Smartmeter</Table.Td>
                  <Table.Td>1</Table.Td>
                  <Table.Td>
                    <Select
                      onChange={(e) =>
                        field.onChange({
                          Position: e?.split('-')[0].trim(),
                          Price: Number(e?.split('-')[1].trim()),
                        })
                      }
                      placeholder="Alege pozitia"
                      data={[{ label: '4P', value: '4P - 60' }]}
                    />
                  </Table.Td>
                  <Table.Td>
                    RON {getValues('SmartMeterTable')?.Price?.toFixed(2) || '0.00'}
                  </Table.Td>
                  <Table.Td>
                    <IconTrash stroke={2} />
                  </Table.Td>
                </Table.Tr>
              )}
            />
          </Table.Tbody>
        </Table>
      </ScrollArea>
    </>
  );
};

export default TablesSelector;
