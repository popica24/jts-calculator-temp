import { Controller } from 'react-hook-form';
import { Slider, Table } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';

const CopexRow = () => {
  const { getValues, setValue, control } = useFormValues();

  const groundingCable = getValues('CopexCable');

  return (
    <Controller
      name="CopexCable"
      control={control}   
      render={({ field }) => (
        <Table.Tr fz={18} style={{ cursor: 'pointer' }}>
          <p
            style={{
              minWidth: '15ch',
            }}
          >
            Copex
          </p>
          <Table.Td>
            <Slider
              labelAlwaysOn
              defaultValue={30}
              min={0}
              step={1}
              max={100}
              color="blue"
              onChange={(e) =>
                field.onChange({
                  ...groundingCable,
                  Length: e,
                  Total: (e * 6).toFixed(2),
                })
              }
            />
          </Table.Td>

          <Table.Td>RON {getValues('CopexCable').Total}</Table.Td>
        </Table.Tr>
      )}
    />
  );
};

export default CopexRow;
