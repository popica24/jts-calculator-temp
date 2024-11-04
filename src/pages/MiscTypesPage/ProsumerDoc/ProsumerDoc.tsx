import { useWatch } from 'react-hook-form';
import { Checkbox, Group, Table, Text } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';

const ProsumerDoc = () => {
  const { setValue, control } = useFormValues();

  const pros = useWatch({
    control,
    name: 'ProsumerDoc',
    defaultValue: true,
  });
  return (
    <>
      <Table.Td>Dosar Prosumator</Table.Td>
      <Table.Td>
        <Checkbox
          defaultChecked
          onChange={(e) => setValue('ProsumerDoc', e.currentTarget.checked)}
        />
      </Table.Td>
      <Table.Td>{pros ? 'RON 500.00' : 'RON 0'}</Table.Td>
    </>
  );
};

export default ProsumerDoc;
