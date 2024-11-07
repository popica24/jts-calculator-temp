import { Controller } from 'react-hook-form';
import { Slider, Table, Text } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';
import { SafeRoundNumber } from '@/utils/processNumber';

const GroundingCableRow = () => {
  const { getValues, setValue, control } = useFormValues();

  const groundingCable = getValues('GroundingCable');

  return (
    <Controller
      name="GroundingCable"
      control={control}
      render={({ field }) => (
        <Table.Tr fz={18} style={{ cursor: 'pointer' }}>
          <p
            style={{
              minWidth: '15ch',
            }}
          >
            Cablu Impamantare 6mm
          </p>
          <Text fz={'xs'}>Valoare implicita : 30m</Text>
          <Table.Td>
            <Slider
              labelAlwaysOn
              defaultValue={30}
              min={0}
              step={1}
              max={400}
              color="blue"
              onChange={(e) =>
                field.onChange({
                  ...groundingCable,
                  Length: e,
                  Total: SafeRoundNumber(e, 3.3),
                })
              }
            />
          </Table.Td>
          <Table.Td miw={'12ch'}>RON {getValues('GroundingCable')?.Total}</Table.Td>
        </Table.Tr>
      )}
    />
  );
};

export default GroundingCableRow;
