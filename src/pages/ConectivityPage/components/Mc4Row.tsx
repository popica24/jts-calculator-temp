import { Controller } from 'react-hook-form';
import { Slider, Table, Text } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';
import { SafeRoundNumber } from '@/utils/processNumber';

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
          <Text fz={'xs'}>Valoare implicita : 8buc</Text>
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
                  Total: SafeRoundNumber(e, 5),
                })
              }
            />
          </Table.Td>

          <Table.Td miw={'12ch'}>RON {getValues('MC4').Total}</Table.Td>
        </Table.Tr>
      )}
    />
  );
};

export default Mc4Row;
