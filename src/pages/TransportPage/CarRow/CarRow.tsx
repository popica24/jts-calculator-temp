import { Controller } from 'react-hook-form';
import { Flex, ScrollArea, Slider, Table, Text, Title } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';

const CarRow = () => {
  const { getValues, control } = useFormValues();

  const Car = getValues('Car');

  const Gas = getValues('Gas');

  return (
    <>
      <Title
        order={2}
        mb={'lg'}
        style={{
          textAlign: 'start',
          width: '100%',
        }}
      >
        Transport
      </Title>
      <Table w="100%" highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Tip Utilitate</Table.Th>
            <Table.Th>Cantitate</Table.Th>
            <Table.Th>Pret Total</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Controller
            name="Car"
            control={control}
            render={({ field }) => (
              <Table.Tr fz={18} style={{ cursor: 'pointer' }}>
                <p
                  style={{
                    minWidth: '15ch',
                  }}
                >
                  Masini
                </p>
                <Table.Td>
                  <Slider
                    labelAlwaysOn
                    defaultValue={getValues('Car.Quantity')}
                    min={0}
                    step={1}
                    max={5}
                    color="blue"
                    onChange={(e) =>
                      field.onChange({
                        ...Car,
                        Quantity: e,
                        Total: (e * 250).toFixed(2),
                      })
                    }
                  />
                </Table.Td>
                <Table.Td>
                  <p
                    style={{
                      minWidth: '100px',
                      margin: 'auto auto',
                    }}
                  >
                    {' '}
                    RON {getValues('Car').Total}
                  </p>
                </Table.Td>
              </Table.Tr>
            )}
          />
        </Table.Tbody>
      </Table>
    </>
  );
};

export default CarRow;
