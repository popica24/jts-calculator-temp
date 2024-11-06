import React, { useEffect, useState } from 'react';
import { IconTrash } from '@tabler/icons-react';
import { Controller, useWatch } from 'react-hook-form';
import { Select, Slider, Table, Text } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';
import { SiguranteAC } from '@/utils/database';
import { SystemTypes } from '@/utils/types';

const MixClamps = () => {
  const { getValues, setValue, control, register } = useFormValues();

  const [acFuse, setAcFuse] = useState<any>();

  useEffect(() => {
    register('ACFuse', { value: { Power: 0, Price: 0 } });
  }, [register]);

  useEffect(() => {
    const inverter = getValues('Inverter');
    let systemType = getValues('SystemType');

    if (systemType === SystemTypes.MonoHybrid) {
      systemType = SystemTypes.Mono;
    }

    if (systemType === SystemTypes.TrifazatHybrid) {
      systemType = SystemTypes.Trifazat;
    }

    let _acFuse = SiguranteAC.find(
      (s) => s.Inverter === inverter?.kW && s.InverterType === systemType
    );

    if (_acFuse === undefined) {
      _acFuse = SiguranteAC[0];
    }

    setAcFuse(_acFuse);
  }, []);

  // Use useEffect to setValue when acFuse changes
  useEffect(() => {
    if (acFuse) {
      setValue('ACFuse', acFuse);
    }
  }, [acFuse, setValue]);

  if (!acFuse) return <></>;

  return (
    <Table.Tr fz={18} style={{ cursor: 'pointer' }}>
      <Table.Td>Siguranta AC</Table.Td>
      <Table.Td>
        <Text>{`${acFuse.Power}A RON${acFuse.Price}`}</Text>
      </Table.Td>
      <Table.Td>RON {getValues('ACFuse')?.Price?.toFixed(2) || '0.00'}</Table.Td>
    </Table.Tr>
  );
};

export default MixClamps;
