import { DevTool } from '@hookform/devtools';
import { Controller } from 'react-hook-form';
import Swal from 'sweetalert2';
import { Button, Stack } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';
import { useFormStep } from '@/context/MultiStepFormContext';
import MontageSelector from './MontageSelector/MontageSelector';

const MontageTypePage = () => {
  const { control, getValues } = useFormValues();
  const { nextStep } = useFormStep();

  const handleNextStep = () => {
    const montage = getValues('MontageType');
    Swal.fire({
      title: 'Esti sigur ?',
      text: `Vei continua cu montajul de tip ${montage}`,
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
            name="MontageType"
            control={control}
            render={({ field }) => <MontageSelector field={field} />}
          />
          <Button
            mt={12}
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
            onClick={handleNextStep}
          >
            Pasul urmator (Conectica)
          </Button>
        </Stack>
      </div>

      <DevTool control={control} />
    </>
  );
};

export default MontageTypePage;
