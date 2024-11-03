import { Controller } from 'react-hook-form';
import { Slider, Table, TextInput } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';

const FusileFuseRow = () => {
  const { getValues, setValue, control } = useFormValues();

  const inverterPower = getValues('Inverter.kW');

  if (inverterPower < 10) {
    setValue('FusileFuse.Quantity', 2);
    setValue('FusileFuse.Total', 2 * 65);
  }

  if (inverterPower >= 10 && inverterPower <= 15) {
    setValue('FusileFuse.Quantity', 4);
    setValue('FusileFuse.Total', 4 * 65);
  }

  if (inverterPower >= 15) {
    setValue('FusileFuse.Quantity', 5);
    setValue('FusileFuse.Total', 5 * 65);
  }

  const fusileFuse = getValues('FusileFuse');

  return (
    <Controller
      name="FusileFuse"
      control={control}
      render={({ field }) => (
        <Table.Tr fz={18} style={{ cursor: 'pointer' }}>
          <p
            style={{
              minWidth: '15ch',
            }}
          >
            Sigurante Fuzibile
          </p>
          <Table.Td>
            <Slider
              labelAlwaysOn
              defaultValue={getValues('FusileFuse.Quantity')}
              min={0}
              step={1}
              max={15}
              color="blue"
              onChange={(e) =>
                field.onChange({
                  ...fusileFuse,
                  Quantity: e,
                  Total: (e * 65).toFixed(2),
                })
              }
            />
          </Table.Td>

          <Table.Td>RON {getValues('FusileFuse').Total}</Table.Td>
        </Table.Tr>
      )}
    />
  );
};

export default FusileFuseRow;
