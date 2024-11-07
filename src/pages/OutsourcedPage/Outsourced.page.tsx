import { IconInfoCircle } from '@tabler/icons-react';
import { Controller, useWatch } from 'react-hook-form';
import { Blockquote, Button, SegmentedControl, Stack, Text, Title } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';
import { useFormStep } from '@/context/MultiStepFormContext';

const OutsourcedPage = () => {
  window.scrollTo(0, 0);

  const { control, getValues } = useFormValues();

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
            <Blockquote color="blue" icon={<IconInfoCircle />} mt="xl">
              • La lucrarile subcontractate, transportul nu se ia in calcul <br />• La lucrarile
              subcontractate, pretul manoperei este de RON 400 x Nr. kW{' '}
              <Text fz={'xs'}>
                In acest caz, pentru {(getValues('Panel.W') * getValues('NumberOfPanels')) / 1000}kW
                pretul manoperei este de{' '}
                {Math.ceil((getValues('Panel.W') * getValues('NumberOfPanels')) / 1000) * 400} RON
              </Text>
            </Blockquote>
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
