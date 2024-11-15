import React from 'react';
import { useWatch } from 'react-hook-form';
import { Badge, Flex, Group, Select, Table, Text } from '@mantine/core';
import { useFormMethods } from '@/context/FormMethodsContext';
import { useFormValues } from '@/context/FormValuesContext';
import { Inverters } from '@/utils/database';

const InverterSelect = () => {
  const { getValues, setValue, control } = useFormValues();

  const { recalculateInverter } = useFormMethods();

  const inverter = useWatch({
    control,
    name: 'Inverter',
  });
  const SystemType = getValues('SystemType');
  const data = Inverters.filter((inverter) => inverter.Type === SystemType);
  return (
    <Table.Tr>
      <Table.Td>
        <Group gap="sm">
          <Text fz="sm" fw={500}>
            Invertor
          </Text>
        </Group>
      </Table.Td>

      <Table.Td>
        <Badge color="cyan" variant="light">
          <Select
            styles={{
              section: {
                position: 'relative',
              },
              input: {
                height: '0px',
                background: 'transparent',
                border: 'none',
                lineHeight: '10px',
                fontSize: '10px',
                textTransform: 'uppercase',
                padding: '0',
                color: '#66D9E8',
              },
            }}
            value={inverter?.Brand + ' ' + inverter?.kW + 'kW' + ' ' + inverter?.Type}
            label="Your favorite library"
            placeholder={inverter?.Brand + ' ' + inverter?.kW + 'kW' + ' ' + inverter?.Type}
            data={data.map((d, i) => ({
              label: `${d.Brand} ${d.Type} ${d.kW}kW`,
              value: i.toString(),
            }))}
            onChange={(e) => recalculateInverter(data[Number(e)])}
          />
        </Badge>
      </Table.Td>

      <Table.Td>
        <Text variant="light">1</Text>
      </Table.Td>

      <Table.Td>
        <Text variant="light">RON {inverter?.Price}</Text>
      </Table.Td>
    </Table.Tr>
  );
};

export default InverterSelect;
