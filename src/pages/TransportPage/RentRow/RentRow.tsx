import { Controller, useWatch } from 'react-hook-form';
import { NumberInput, Table, Title } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';

const RentRow = () => {
  const { getValues, control, watch } = useFormValues();

  const Rent = useWatch({
    control,
    name: 'Rent',
  });

  return (
    <>
      {' '}
      <Title
        order={2}
        my={'lg'}
        style={{
          textAlign: 'start',
          width: '100%',
        }}
      >
        Cazare
      </Title>
      <Table w="100%" highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Camere</Table.Th>
            <Table.Th>Pret Camera</Table.Th>
            <Table.Th>Zile</Table.Th>
            <Table.Th>Total</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Controller
            name="Rent"
            control={control}
            render={({ field }) => (
              <Table.Tr>
                <Table.Th>
                  <NumberInput
                    onChange={(e) =>
                      field.onChange({
                        ...Rent,
                        Rooms: e,
                      })
                    }
                  />
                </Table.Th>
                <Table.Th>
                  <NumberInput
                    onChange={(e) =>
                      field.onChange({
                        ...Rent,
                        PricePerRoom: e,
                      })
                    }
                  />
                </Table.Th>
                <Table.Th>
                  <NumberInput
                    onChange={(e) =>
                      field.onChange({
                        ...Rent,
                        Days: e,
                      })
                    }
                  />
                </Table.Th>
                <Table.Th>RON {Rent?.PricePerRoom * Rent?.Rooms * Rent?.Days || 0}</Table.Th>
              </Table.Tr>
            )}
          />
        </Table.Tbody>
      </Table>
    </>
  );
};

export default RentRow;
