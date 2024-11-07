import React, { useEffect } from 'react';
import { Controller, useWatch } from 'react-hook-form';
import { Slider, Table } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';
import { SafeRoundNumber } from '@/utils/processNumber';

const IntermediateClamps = () => {
  const { setValue, control } = useFormValues();

  // Watch for changes in NumberOfPanels and IntermediateClamps to dynamically update values
  const panels = useWatch({ control, name: 'NumberOfPanels' }) || 0;
  const clamps = useWatch({ control, name: 'IntermediateClamps' }) || { Quantity: 0, Total: 0 };

  useEffect(() => {
    // Calculate Quantity and Total based on the number of panels
    const quantity = panels * 2;
    const total = quantity * 5;

    setValue('IntermediateClamps', { PricePerPiece: 5, Quantity: quantity, Total: total });
  }, [panels, setValue]);

  return (
    <Controller
      name="IntermediateClamps"
      control={control}
      render={({ field }) => (
        <Table.Tr fz={18} style={{ cursor: 'pointer' }}>
          <p style={{ minWidth: '15ch' }}>Cleme Intermediare</p>
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

export default IntermediateClamps;
