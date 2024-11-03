import { Flex } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';
import CarRow from './CarRow/CarRow';
import GasRow from './GasRow/GasRow';
import ProsumerDoc from './ProsumerDoc/ProsumerDoc';

const MiscType = () => {
  const { control } = useFormValues();

  return (
    <>
      <Flex direction="column" align="center" justify="center" miw={'500px'}>
        {/* <ProsumerDoc /> */}
        <CarRow />
        <GasRow />
      </Flex>
    </>
  );
};

export default MiscType;
