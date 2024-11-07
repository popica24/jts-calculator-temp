import React, { useEffect } from 'react';
import { Controller, useWatch } from 'react-hook-form';
import { Slider, Table } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';
import { SafeRoundNumber } from '@/utils/processNumber';
import { MontageTypes } from '@/utils/types';

const PrezoaneRow = () => {
  const { getValues, setValue, control } = useFormValues();

  // Watch for changes to Prezoane
  const prezoane = useWatch({ control, name: 'Prezoane' }) || { Quantity: 0, Total: 0 };
  const montageType = getValues('MontageType');

  useEffect(() => {
    const calculatePrice = () => {
      const numberOfPanels = getValues('NumberOfPanels');
      const total = Math.ceil((numberOfPanels * 1.13 * 2) / 3.54);
      return total;
    };

    let calculatedQuantity = Math.ceil((calculatePrice() * 3.54) / 0.8);

    if (calculatedQuantity % 2 != 0) {
      calculatedQuantity += 1;
    }

    const calculatedTotal = Number(calculatedQuantity * 12.5);

    setValue('Prezoane', {
      PricePerPiece: 12.5,
      Quantity: calculatedQuantity,
      Total: calculatedTotal,
    });
  }, [getValues, setValue]); // Add dependencies for getValues and setValue

  return (
    <Controller
      name="Prezoane"
      control={control}
      render={({ field }) => (
        <Table.Tr fz={18} style={{ cursor: 'pointer' }}>
          <p style={{ minWidth: '15ch' }}>
            {montageType.Type === MontageTypes.AcoperisTigla ? 'Carlige Tigla' : 'Prezoane'}
          </p>
          <Table.Td>
            <Slider
              labelAlwaysOn
              value={prezoane.Quantity} // Use value from useWatch
              min={0}
              step={1}
              max={100}
              color="blue"
              onChange={(e) =>
                field.onChange({
                  ...prezoane,
                  Quantity: e,
                  Total: SafeRoundNumber(e, 12.5) ,
                })
              }
            />
          </Table.Td>

          <Table.Td miw={'12ch'}>RON {prezoane.Total}</Table.Td>
        </Table.Tr>
      )}
    />
  );
};

export default PrezoaneRow;
