import { Controller } from 'react-hook-form';
import { Slider, Table, Text } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';

const WoodScrewsRow = () => {
  const { getValues, setValue, control } = useFormValues();

  const woodScrews = getValues('WoodScrews');

  return (
    <Controller
      name="WoodScrews"
      control={control}
      render={({ field }) => (
        <Table.Tr fz={18} style={{ cursor: 'pointer' }}>
          <p
            style={{
              minWidth: '15ch',
            }}
          >
            Melci
          </p>
          <Text fz={'xs'}>Valoare implicita : 25buc</Text>
          <Table.Td>
            <Slider
              labelAlwaysOn
              defaultValue={25}
              min={0}
              step={1}
              max={100}
              color="blue"
              onChange={(e) =>
                field.onChange({
                  ...woodScrews,
                  Quantity: e,
                  Total: (e * 3).toFixed(2),
                })
              }
            />
          </Table.Td>

          <Table.Td>RON {getValues('WoodScrews').Total}</Table.Td>
        </Table.Tr>
      )}
    />
  );
};

export default WoodScrewsRow;
