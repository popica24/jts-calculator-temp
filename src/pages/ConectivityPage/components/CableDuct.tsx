import { useEffect } from 'react';
import { Controller } from 'react-hook-form';
import { Slider, Table, Text } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';

const CableDuct = () => {
  const { getValues, control, register } = useFormValues();
  useEffect(() => {
    register('CableDuct', {
      value: { Quantity: 4, Total: Number((4 * 20).toFixed(2)), PricePerPiece: 20 },
    });
  }, [register]);
  const cableDuct = getValues('CableDuct');

  return (
    <Controller
      name="CableDuct"
      control={control}
      render={({ field }) => (
        <Table.Tr fz={18} style={{ cursor: 'pointer' }}>
          <p
            style={{
              minWidth: '15ch',
            }}
          >
            Canal de cablu
          </p>
          <Text fz={'xs'}>Valoare implicita : 4m</Text>
          <Table.Td>
            <Slider
              labelAlwaysOn
              defaultValue={4}
              min={0}
              step={1}
              max={100}
              color="blue"
              onChange={(e) =>
                field.onChange({
                  ...cableDuct,
                  Quantity: e,
                  Total: (e * 20).toFixed(2),
                })
              }
            />
          </Table.Td>

          <Table.Td>RON {getValues('CableDuct').Total}</Table.Td>
        </Table.Tr>
      )}
    />
  );
};

export default CableDuct;
