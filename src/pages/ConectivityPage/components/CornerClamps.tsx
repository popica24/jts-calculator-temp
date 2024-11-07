import React, { useEffect } from 'react';
import { Controller, useWatch } from 'react-hook-form';
import { Slider, Table } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';
import { SafeRoundNumber } from '@/utils/processNumber';

const CornerClamps = () => {
  const { setValue, control } = useFormValues();

  // Watch for updates to CornerClamps to ensure reactivity
  const clamps = useWatch({ control, name: 'CornerClamps' }) || { Quantity: 8, Total: 40 };

  useEffect(() => {
    // Set initial values for Quantity and Total
    setValue('CornerClamps', { PricePerPiece: 5, Quantity: 8, Total: 40 });
  }, [setValue]);

  return (
    <Controller
      name="CornerClamps"
      control={control}
      render={({ field }) => (
        <Table.Tr fz={18} style={{ cursor: 'pointer' }}>
          <p style={{ minWidth: '15ch' }}>Cleme de Capat</p>
          <Table.Td>
            <Slider
              labelAlwaysOn
              value={clamps.Quantity} // Dynamically set by useWatch
              min={0}
              step={1}
              max={100}
              color="blue"
              onChange={(e) =>
                field.onChange({
                  ...clamps,
                  Quantity: e,
                  Total: SafeRoundNumber(e, 5),
                })
              }
            />
          </Table.Td>

          <Table.Td miw={'12ch'}>RON {clamps.Total}</Table.Td>
        </Table.Tr>
      )}
    />
  );
};

export default CornerClamps;
