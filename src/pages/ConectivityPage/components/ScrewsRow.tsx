import { Controller } from 'react-hook-form';
import { Slider, Table, Text } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';
import { SafeRoundNumber } from '@/utils/processNumber';

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
                  Total: SafeRoundNumber(e, 0.3),
                })
              }
            />
          </Table.Td>

          <Table.Td miw={'12ch'}>RON {getValues('Screws').Total}</Table.Td>
        </Table.Tr>
      )}
    />
  );
};

export default ScrewsRow;
