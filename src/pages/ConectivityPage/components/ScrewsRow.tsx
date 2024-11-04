import { Controller } from 'react-hook-form';
import { Slider, Table, Text } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';

const ScrewsRow = () => {
  const { getValues, control } = useFormValues();

  const Screws = getValues('Screws');

  return (
    <Controller
      name="Screws"
      control={control}
      render={({ field }) => (
        <Table.Tr fz={18} style={{ cursor: 'pointer' }}>
          <p
            style={{
              minWidth: '15ch',
            }}
          >
            Suruburi
          </p>
          <Text fz={'xs'}>Valoare implicita : 50buc</Text>
          <Table.Td>
            <Slider
              labelAlwaysOn
              defaultValue={50}
              min={0}
              step={1}
              max={150}
              color="blue"
              onChange={(e) =>
                field.onChange({
                  ...Screws,
                  Quantity: e,
                  Total: (e * 0.3).toFixed(2),
                })
              }
            />
          </Table.Td>

          <Table.Td>RON {getValues('Screws').Total}</Table.Td>
        </Table.Tr>
      )}
    />
  );
};

export default ScrewsRow;
