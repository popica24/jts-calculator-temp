import React, { useEffect } from 'react';
import { Controller, useWatch } from 'react-hook-form';
import { Slider, Table } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';

const MiniRailsTypes = () => {
  const { getValues, setValue, control } = useFormValues();

  // Watch for updates to MiniRail
  const miniRail = useWatch({ control, name: 'MiniRail' }) || { Quantity: 0, Total: 0 };

  useEffect(() => {
    const panels = getValues('NumberOfPanels');

    // Calculate Quantity and Total based on the number of panels
    const quantity = panels * 2 + 0.1 * (panels * 2);
    const total = Number((quantity * 12.85).toFixed(2));

    // Set values in the form
    setValue('MiniRail', { PricePerPiece: 12.85, Quantity: quantity, Total: total });
  }, [getValues, setValue]); // Add dependencies for getValues and setValue

  return (
    <Controller
      name="MiniRail"
      control={control}
      render={({ field }) => (
        <Table.Tr fz={18} style={{ cursor: 'pointer' }}>
          <p style={{ minWidth: '15ch' }}>MiniRail</p>
          <Table.Td>
            <Slider
              labelAlwaysOn
              value={miniRail.Quantity} // Use value from useWatch
              min={0}
              step={1}
              max={100}
              color="blue"
              onChange={(e) =>
                field.onChange({
                  ...miniRail,
                  Quantity: e,
                  Total: (e * 12.85).toFixed(2),
                })
              }
            />
          </Table.Td>

          <Table.Td>RON {miniRail.Total}</Table.Td>
        </Table.Tr>
      )}
    />
  );
};

export default MiniRailsTypes;
