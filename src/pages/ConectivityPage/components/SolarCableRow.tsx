import { Controller } from 'react-hook-form';
import { Slider, Table, Text } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';

const SolarCableRow = () => {
  const { getValues, control } = useFormValues();

  const solarCable = getValues('SolarCable');

  return (
    <Controller
      name="SolarCable"
      control={control}
      render={({ field }) => (
        <Table.Tr fz={18} style={{ cursor: 'pointer' }}>
          <p
            style={{
              minWidth: '15ch',
            }}
          >
            Cablu Solar 6mm
          </p>
          <Text fz={'xs'}>Valoare implicita : 125m</Text>
          <Table.Td>
            <Slider
              labelAlwaysOn
              defaultValue={125}
              min={0}
              step={1}
              max={225}
              color="blue"
              onChange={(e) =>
                field.onChange({
                  ...solarCable,
                  Length: e,
                  Total: (e * 3.3).toFixed(2),
                })
              }
            />
          </Table.Td>
          <Table.Td>RON {getValues('SolarCable.Total')}</Table.Td>
        </Table.Tr>
      )}
    />
  );
};

export default SolarCableRow;
