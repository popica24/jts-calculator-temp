import { useEffect } from 'react';
import { Controller, useWatch } from 'react-hook-form';
import { Slider, Table } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';
import { SafeRoundNumber } from '@/utils/processNumber';

const AluminiumProfileRow = () => {
  const { getValues, setValue, control } = useFormValues();

  // Watch NumberOfPanels and AluminiumProfile to trigger recalculations
  const numberOfPanels = useWatch({ control, name: 'NumberOfPanels' });
  const aluminiumProfile = useWatch({ control, name: 'AluminiumProfile' }) || {
    Quantity: 0,
    Total: 0,
  };

  useEffect(() => {
    const calculatePrice = () => {
      const total = Math.ceil((numberOfPanels * 1.13 * 2) / 3.54);

      setValue('AluminiumProfile', {
        ...aluminiumProfile,
        Quantity: total,
        Total: total * 65,
      });
    };

    if (numberOfPanels) {
      calculatePrice();
    }
  }, [numberOfPanels, setValue]);

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
              value={aluminiumProfile.Quantity} // Updated dynamically with useWatch
              min={0}
              step={1}
              max={100}
              color="blue"
              onChange={(e) =>
                field.onChange({
                  ...aluminiumProfile,
                  Quantity: e,
                  Total: SafeRoundNumber(e, 65),
                })
              }
            />
          </Table.Td>

          <Table.Td miw={'12ch'}>RON {aluminiumProfile?.Total}</Table.Td>
        </Table.Tr>
      )}
    />
  );
};

export default AluminiumProfileRow;
