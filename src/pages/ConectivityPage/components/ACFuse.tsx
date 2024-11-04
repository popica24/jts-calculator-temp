import React from 'react';
import { IconTrash } from '@tabler/icons-react';
import { Controller, useWatch } from 'react-hook-form';
import { Select, Slider, Table } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';
import { SiguranteAC } from '@/utils/database';

const MixClamps = () => {
  const { getValues, setValue, control } = useFormValues();

  const inverter = getValues('Inverter');

  const systemType = getValues('SystemType');

  const acFuse = SiguranteAC.find(
    (s) => s.Inverter == inverter?.kW && s.InverterType == systemType
  );

  return (
    <Controller
      name="ACFuse"
      control={control}
      render={({ field }) => (
        <Table.Tr fz={18} style={{ cursor: 'pointer' }}>
          <Table.Td>Siguranta AC</Table.Td>
          <Table.Td>
            <Select
              onChange={(e) =>
                field.onChange({
                  Power: e?.split('#')[0].trim(),
                  Price: Number(e?.split('#')[1].trim()),
                })
              }
              placeholder="Alege Siguranta"
              data={[
                {
                  label: `${acFuse?.Power}A RON${acFuse?.Price}`,
                  value: `${acFuse?.Power}#${acFuse?.Price}`,
                },
              ]}
            />
          </Table.Td>
          <Table.Td>RON {getValues('ACFuse')?.Price?.toFixed(2) || '0.00'}</Table.Td>
        </Table.Tr>
      )}
    />
  );
};

export default MixClamps;
