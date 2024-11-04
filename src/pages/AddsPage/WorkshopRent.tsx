import React from 'react';
import { Controller, useWatch } from 'react-hook-form';
import { NumberInput, Table } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';

const WorkshopRent = () => {
  const { getValues, control, watch } = useFormValues();

  const Rent = useWatch({
    control,
    name: 'WorkshopRent',
  });

  return (
    <Controller
      name="Rent"
      control={control}
      render={({ field }) => (
        <Table.Tr>
          <Table.Th>
            <NumberInput
              defaultValue={1}
              onChange={(e) =>
                field.onChange({
                  ...Rent,
                  Total: Number(e) * 82.5,
                })
              }
            />
          </Table.Th>
          <Table.Th>82.5 Ron/Zi</Table.Th>
          <Table.Th>RON {Rent?.Total}</Table.Th>
        </Table.Tr>
      )}
    />
  );
};

export default WorkshopRent;
