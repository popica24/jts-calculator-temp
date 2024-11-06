import { Controller, useWatch } from 'react-hook-form';
import { Button, SegmentedControl, Stack, Text, Title } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';
import { useFormStep } from '@/context/MultiStepFormContext';

const OutsourcedPage = () => {
  const { control } = useFormValues();

  const { nextStep, nextTwoSteps } = useFormStep();

  const outsourceWatch = useWatch({
    control,
    name: 'Outsourced',
  });

  return (
    <>
      <Stack align="center">
        <Title order={2}>Lucrare subcontractata ?</Title>
        <Controller
          name="Outsourced"
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
        {outsourceWatch ? (
          <>
            <Text>Se va ignora transportul</Text>
            <Button onClick={nextTwoSteps}>Pasul urmator (Adaosuri)</Button>
          </>
        ) : (
          <Button onClick={nextStep}>Pasul urmator (Transport)</Button>
        )}
      </Stack>
    </>
  );
};

export default OutsourcedPage;
