import { useEffect } from 'react';
import { Controller } from 'react-hook-form';
import { Slider, Table } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';

const SurgesRow = () => {
  const { getValues, setValue, control } = useFormValues();

  const Surges = getValues('Surges');

  useEffect(() => {
    const fusileFuses = getValues('FusileFuse.Quantity');

    Surges.Quantity = fusileFuses;

    Surges.Total = fusileFuses * 100;

    setValue('Surges', Surges);
  }, []);

  return (
    <Controller
      name="Surges"
      control={control}
      render={({ field }) => (
        <Table.Tr fz={18} style={{ cursor: 'pointer' }}>
          <p
            style={{
              minWidth: '15ch',
            }}
          >
            Descarcatoare
          </p>
          <Table.Td>
            <Slider
              labelAlwaysOn
              defaultValue={getValues('Surges.Quantity')}
              min={0}
              step={1}
              max={15}
              color="blue"
              onChange={(e) =>
                field.onChange({
                  ...Surges,
                  Quantity: e,
                  Total: (e * 100).toFixed(2),
                })
              }
            />
          </Table.Td>

          <Table.Td>RON {getValues('Surges').Total}</Table.Td>
        </Table.Tr>
      )}
    />
  );
};

export default SurgesRow;
