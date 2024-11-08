import { Controller } from 'react-hook-form';
import { Slider, Table, Text } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';
import { SafeRoundNumber } from '@/utils/processNumber';

const OboRow = () => {
  const { getValues, control } = useFormValues();

  const obo = getValues('Obo');

  return (
    <Controller
      name="Obo"
      control={control}
      render={({ field }) => (
        <Table.Tr fz={18} style={{ cursor: 'pointer' }}>
          <p
            style={{
              minWidth: '15ch',
            }}
          >
            Obo
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
                  ...obo,
                  Quantity: e,
                  Total: SafeRoundNumber(e, 2.5),
                })
              }
            />
          </Table.Td>

          <Table.Td miw={'12ch'}>RON {getValues('Obo').Total}</Table.Td>
        </Table.Tr>
      )}
    />
  );
};

export default OboRow;
