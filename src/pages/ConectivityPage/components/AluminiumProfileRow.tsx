import { useEffect } from 'react';
import { Controller } from 'react-hook-form';
import { Slider, Table, TextInput } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';

const AluminiumProfileRow = () => {
  const { getValues, setValue, control, watch } = useFormValues();

  const aluminiumProfileValue = getValues('AluminiumProfile');

  const calculatePrice = () => {
    const aluminiumProfile = getValues('AluminiumProfile');

    const numberOfPanels = getValues('NumberOfPanels');

    const total = Math.ceil((numberOfPanels * 1.13 * 2) / 3.54);

    setValue('AluminiumProfile', {
      ...aluminiumProfile,
      Quantity: total,
      Total: total * 65,
    });
  };

  calculatePrice();

  return (
    <Controller
      name="AluminiumProfile"
      control={control}
      render={({ field }) => (
        <Table.Tr fz={18} style={{ cursor: 'pointer' }}>
          <p
            style={{
              minWidth: '15ch',
            }}
          >
            Aluminium Profile
          </p>
          <Table.Td>
            <Slider
              labelAlwaysOn
              defaultValue={getValues('AluminiumProfile.Quantity')}
              min={0}
              step={1}
              max={100}
              color="blue"
              onChange={(e) =>
                field.onChange({
                  ...aluminiumProfileValue,
                  Quantity: e,
                  Total: (e * 65).toFixed(2),
                })
              }
            />
          </Table.Td>

          <Table.Td>RON {getValues('AluminiumProfile').Total}</Table.Td>
        </Table.Tr>
      )}
    />
  );
};

export default AluminiumProfileRow;
