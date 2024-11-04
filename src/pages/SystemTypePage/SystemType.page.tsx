import { useEffect, useState } from 'react';
import { DevTool } from '@hookform/devtools';
import { Controller, useWatch } from 'react-hook-form';
import Swal from 'sweetalert2';
import { Button, Stack } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';
import { useFormStep } from '@/context/MultiStepFormContext';
import { SystemTypes } from '@/utils/types';
import BatteryType from './BatteryType/BatteryType';
import SystemSelector from './SystemSelector';

const SystemTypePage = () => {
  const { control, getValues, setValue } = useFormValues();
  const { nextStep } = useFormStep();

  const system = useWatch({ control, name: 'SystemType' });

  const [showBattery, setShowBattery] = useState(false);

  useEffect(() => {
    if (system == SystemTypes.MonoHybrid || system == SystemTypes.TrifazatHybrid) {
      setShowBattery(true);
    } else {
      setShowBattery(false);
      setValue('Battery', null);
    }
  }, [system]);

  const handleNextStep = () => {
    const system = getValues('SystemType');
    Swal.fire({
      title: 'Esti sigur ?',
      text: `Vei continua cu sistemul de tip ${system}`,
      imageUrl:
        'https://www.jtssolar.ro/wp-content/uploads/2022/03/JTS-Install-Construct-logo-200px.png',
      imageWidth: 200,
      imageHeight: 60,
      imageAlt: 'JTS Solar',
    }).then((result) => {
      if (result.isConfirmed) {
        nextStep();
      }
    });
  };

  return (
    <>
      <div data-aos="fade-up">
        <Stack align="center" justify="center" p={15}>
          <Controller
            name="SystemType"
            control={control}
            render={({ field }) => <SystemSelector field={field} />}
          />
          {showBattery && <BatteryType />}
          <Button
            mt={12}
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
            onClick={handleNextStep}
          >
            Pasul urmator (invertor)
          </Button>
        </Stack>
      </div>

      <DevTool control={control} />
    </>
  );
};

export default SystemTypePage;
