import { Controller } from 'react-hook-form';
import { Slider, Table, Text } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';
import { SafeRoundNumber } from '@/utils/processNumber';

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
          <Text fz={'xs'}>Valoare implicita : 30m</Text>
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
                  Total: SafeRoundNumber(e, 6),
                })
              }
            />
          </Table.Td>

          <Table.Td miw={'12ch'}>RON {getValues('CopexCable').Total}</Table.Td>
        </Table.Tr>
      )}
    />
  );
};

export default CopexRow;
