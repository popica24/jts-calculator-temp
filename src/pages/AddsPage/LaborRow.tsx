import { useEffect, useState } from 'react';
import { Controller, useWatch } from 'react-hook-form';
import { Checkbox, Group, Slider, Table, Text } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';

const LaborRow = () => {
  const { getValues, control, setValue } = useFormValues();

  const isOutsourced = getValues('Outsourced');

  const laborWatch = useWatch({
    control,
    name: 'Labor',
  });

  useEffect(() => {
    if (isOutsourced) {
      const kw = (getValues('Panel.W') * getValues('NumberOfPanels')) / 1000;

      const total = 400 * kw;

      setValue('Labor', total);
    }
  }, [isOutsourced]);

  if (isOutsourced) {
    return (
      <>
        <Table.Td>Manopera</Table.Td>
        <Table.Td>
          <Slider labelAlwaysOn value={laborWatch} min={0} step={1} max={6000} color="blue" />
        </Table.Td>
        <Table.Td>RON {laborWatch}</Table.Td>
      </>
    );
  }

  return (
    <>
      <Table.Td>Manopera</Table.Td>
      <Table.Td>
        <Controller
          name="Labor"
          control={control}
          render={({ field }) => (
            <Slider
              labelAlwaysOn
              defaultValue={4}
              min={1}
              step={1}
              max={20}
              color="blue"
              onChange={(e) => field.onChange(e * 475)}
            />
          )}
        />
      </Table.Td>
      <Table.Td>RON {laborWatch}</Table.Td>
    </>
  );
};

export default LaborRow;
