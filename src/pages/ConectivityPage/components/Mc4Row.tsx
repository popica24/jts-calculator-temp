import { Controller } from 'react-hook-form';
import { Slider, Table } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';

const Mc4Row = () => {
  const { getValues, control } = useFormValues();

  const MC4 = getValues('MC4');

  return (
    <Controller
      name="MC4"
      control={control}
      render={({ field }) => (
        <Table.Tr fz={18} style={{ cursor: 'pointer' }}>
          <p
            style={{
              minWidth: '15ch',
            }}
          >
            MC4
          </p>
          <Table.Td>
            <Slider
              labelAlwaysOn
              defaultValue={8}
              min={0}
              step={1}
              max={100}
              color="blue"
              onChange={(e) =>
                field.onChange({
                  ...MC4,
                  Quantity: e,
                  Total: (e * 5).toFixed(2),
                })
              }
            />
          </Table.Td>

          <Table.Td>RON {getValues('MC4').Total}</Table.Td>
        </Table.Tr>
      )}
    />
  );
};

export default Mc4Row;
