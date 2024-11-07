import { Controller, useWatch } from 'react-hook-form';
import { Button, SegmentedControl, Select, Stack, Text, Title } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';
import { useFormStep } from '@/context/MultiStepFormContext';

const ComissionPage = () => {
  const { control, setValue } = useFormValues();

  const { nextStep } = useFormStep();

  const comissionWatch = useWatch({
    control,
    name: 'Comission',
  });

  return (
    <>
      <Stack align="center">
        <Title order={2}>Comision la lucrare ?</Title>
        <Controller
          name="Comission"
          control={control}
          render={({ field }) => (
            <SegmentedControl
              radius="xl"
              size="md"
              defaultValue={'Nu'}
              data={['Da', 'Nu']}
              onChange={(e) => {
                if (e == 'Da') {
                  field.onChange(true);
                } else {
                  field.onChange(false);
                }
              }}
            />
          )}
        />
        {comissionWatch != 0 && (
          <Select
            data={[
              { label: '3%', value: '3' },
              { label: '5%', value: '5' },
              { label: '7%', value: '7' },
              { label: '12%', value: '12' },
            ]}
            onChange={(e) => setValue('Comission', Number(e))}
          />
        )}
        <Button onClick={nextStep}>Pasul urmator (Alege profitul)</Button>
      </Stack>
    </>
  );
};

export default ComissionPage;
