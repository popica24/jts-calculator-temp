import { useEffect } from 'react';
import { Controller } from 'react-hook-form';
import { Slider, Table } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';
import { SafeRoundNumber } from '@/utils/processNumber';

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
                  Total: SafeRoundNumber(e, 100),
                })
              }
            />
          </Table.Td>

          <Table.Td miw={'12ch'}>RON {getValues('Surges').Total}</Table.Td>
        </Table.Tr>
      )}
    />
  );
};

export default SurgesRow;
