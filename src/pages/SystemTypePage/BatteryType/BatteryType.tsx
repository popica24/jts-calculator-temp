import React from 'react';
import { Controller } from 'react-hook-form';
import { Select } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';

const BatteryType = () => {
  const { getValues, control } = useFormValues();

  return (
    <>
      <Controller
        name="Battery"
        control={control}
        render={({ field }) => (
          <Select
            onChange={(e) =>
              e == ''
                ? field.onChange()
                : field.onChange({
                    model: e?.split('#')[0].trim(),
                    price: Number(e?.split('#')[1].trim()),
                  })
            }
            placeholder="Fara baterie"
            data={[
              { label: 'Fara baterie', value: '' },
              { label: 'V-Tac 9,6 kWh', value: 'V-Tac 9,6 kWh#6835.00' },
              { label: 'V-Tac 5,2 kWh Rack Mount', value: 'V-Tac 5,2 kWh Rack Mount#4225.00' },
              { label: 'V-Tac 5,2 kWh Wall Mount', value: 'V-Tac 5,2 kWh Wall Mount#4485.00' },
              { label: 'Pytes 5,12 kWh', value: 'Pytes 5,12 kWh#4600.00' },
              { label: 'Deye 6.2 kWh', value: 'Deye 6.2 kWh#7000.00' },
              { label: 'Dahai 5,1 kWh', value: 'Dahai 5,1 kWh#2300.00' },
              { label: 'Sunplus 10,37', value: 'Sunplus 10,37#6385.00' },
              { label: 'Felicity Solar 15 kWh', value: 'Felicity Solar 15 kWh#9972.00' },
            ]}
          />
        )}
      />
    </>
  );
};

export default BatteryType;
