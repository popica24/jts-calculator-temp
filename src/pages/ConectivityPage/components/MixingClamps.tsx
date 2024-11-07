import React, { useEffect } from 'react';
import { Controller, useWatch } from 'react-hook-form';
import { Slider, Table } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';

const MixClamps = () => {
  const { setValue, control, getValues } = useFormValues();

  // Watch for updates to MixClamps
  const clamps = useWatch({ control, name: 'MixClamps' }) || { Quantity: 0, Total: 0 };

  useEffect(() => {
    const calculatePrice = () => {
      const numberOfPanels = getValues('NumberOfPanels');
      const total = Math.ceil((numberOfPanels * 1.13 * 2) / 3.54);
      return total;
    };

    let clamps = Math.ceil(calculatePrice() / 2 + 1);

    if (clamps % 2 != 0) {
      clamps += 1;
    }

    // Calculate initial values for Quantity and Total
    const initialQuantity = clamps;
    const initialTotal = initialQuantity * 5;

    setValue('MixClamps', {
      PricePerPiece: 5,
      Quantity: initialQuantity,
      Total: initialTotal,
    });
  }, [setValue]);

  return (
    <Controller
      name="MixClamps"
      control={control}
      render={({ field }) => (
        <Table.Tr fz={18} style={{ cursor: 'pointer' }}>
          <p style={{ minWidth: '15ch' }}>Cleme de imbinare</p>
          <Table.Td>
            <Slider
              labelAlwaysOn
              value={clamps.Quantity} // Use value from useWatch
              min={0}
              step={1}
              max={100}
              color="blue"
              onChange={(e) =>
                field.onChange({
                  ...clamps,
                  Quantity: e,
                  Total: (e * 5).toFixed(2),
                })
              }
            />
          </Table.Td>

          <Table.Td>RON {clamps.Total}</Table.Td>
        </Table.Tr>
      )}
    />
  );
};

export default MixClamps;
