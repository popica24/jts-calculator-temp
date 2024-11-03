import { useWatch } from 'react-hook-form';
import { Checkbox, Group, Text } from '@mantine/core';
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
      <Text>Dosar Prosumator</Text>
      <Group justify="center" p="md">
        <Checkbox
          defaultChecked
          onChange={(e) => setValue('ProsumerDoc', e.currentTarget.checked)}
        />
      </Group>
      <span>{pros ? 'RON 500.00' : 'RON 0'}</span>
    </>
  );
};

export default ProsumerDoc;
