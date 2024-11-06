import { DevTool } from '@hookform/devtools';
import { Button, Flex } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';
import { useFormStep } from '@/context/MultiStepFormContext';
import CarRow from './CarRow/CarRow';
import GasRow from './GasRow/GasRow';
import RentRow from './RentRow/RentRow';

const MiscType = () => {
  const { control } = useFormValues();
  const { nextStep } = useFormStep();

  return (
    <>
      <Flex direction="column" align="center" justify="center" miw={'500px'}>
        <CarRow />
        <GasRow />
        <RentRow />
        <Button onClick={nextStep}>Pasul urmator</Button>
        <div>
          <DevTool control={control} />
        </div>
      </Flex>
    </>
  );
};

export default MiscType;
