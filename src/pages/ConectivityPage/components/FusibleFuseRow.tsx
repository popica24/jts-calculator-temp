import { useEffect } from 'react';
import { Controller, useWatch } from 'react-hook-form';
import { Slider, Table } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';

const FusileFuseRow = () => {
  const { setValue, control } = useFormValues();

  // Watch for changes in Inverter.kW and FusileFuse to update the values dynamically
  const inverterPower = useWatch({ control, name: 'Inverter.kW' });
  const fusileFuse = useWatch({ control, name: 'FusileFuse' }) || { Quantity: 0, Total: 0 };

  useEffect(() => {
    if (inverterPower !== undefined) {
      if (inverterPower < 10) {
        setValue('FusileFuse', { PricePerPiece: 50, Quantity: 2, Total: 2 * 65 });
      } else if (inverterPower >= 10 && inverterPower <= 15) {
        setValue('FusileFuse', { PricePerPiece: 50, Quantity: 4, Total: 4 * 65 });
      } else if (inverterPower >= 15) {
        setValue('FusileFuse', { PricePerPiece: 50, Quantity: 5, Total: 5 * 65 });
      }
    }
  }, [inverterPower, setValue]);

  return (
    <Controller
      name="FusileFuse"
      control={control}
      render={({ field }) => (
        <Table.Tr fz={18} style={{ cursor: 'pointer' }}>
          <p style={{ minWidth: '15ch' }}>Sigurante Fuzibile</p>
          <Table.Td>
            <Slider
              labelAlwaysOn
              value={fusileFuse.Quantity} // Dynamically controlled by useWatch
              min={0}
              step={1}
              max={15}
              color="blue"
              onChange={(e) =>
                field.onChange({
                  ...fusileFuse,
                  Quantity: e,
                  Total: (e * 65).toFixed(2),
                })
              }
            />
          </Table.Td>
          <Table.Td>RON {fusileFuse.Total}</Table.Td>
        </Table.Tr>
      )}
    />
  );
};

export default FusileFuseRow;
