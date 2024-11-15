import { useEffect, useState } from 'react';
import { DevTool } from '@hookform/devtools';
import { Controller, useWatch } from 'react-hook-form';
import Swal from 'sweetalert2';
import { Button, Stack } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';
import { useFormStep } from '@/context/MultiStepFormContext';
import { MontageTypes } from '@/utils/types';
import MontageSelector from './MontageSelector/MontageSelector';
import StructureSelector from './StructureType/StructureSelector';

const MontageTypePage = () => {
  const { nextStep } = useFormStep();

  const { control, getValues, setValue } = useFormValues();
  const montage = useWatch({ control, name: 'MontageType' });
  const [showMontage, setShowMontage] = useState(false);

  useEffect(() => {
    const shouldShowMontage =
      montage.Type === MontageTypes.Sol || montage.Type === MontageTypes.AcoperisDrept;

    if (showMontage !== shouldShowMontage) {
      setShowMontage(shouldShowMontage);
    }

    // Only set MontageType.Total if necessary
    if (!shouldShowMontage && montage.Total !== 0) {
      setValue('MontageType.Total', 0, { shouldValidate: false, shouldDirty: false });
    }
  }, [montage.Type, montage.Total, showMontage, setValue]);

  const handleNextStep = () => {
    const montage = getValues('MontageType.Type');
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
          {showMontage && <StructureSelector />}
        </Stack>
      </div>

      <DevTool control={control} />
    </>
  );
};

export default MontageTypePage;
