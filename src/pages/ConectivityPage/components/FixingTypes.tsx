import { ScrollArea, Table, Text } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';
import ACFuse from './ACFuse';
import AluminiumProfileRow from './AluminiumProfileRow';
import CableDuct from './CableDuct';
import CopexRow from './CopexRow';
import CornerClamps from './CornerClamps';
import FusileFuseRow from './FusibleFuseRow';
import IntermediateClamps from './IntermediateClamps';
import Mc4Row from './Mc4Row';
import MiniRailsTypes from './MiniRailsTypes';
import MixClamps from './MixingClamps';
import OboRow from './OboRow';
import PrezoaneRow from './PrezoaneRow';
import ScrewsRow from './ScrewsRow';
import SurgesRow from './SurgesRow';
import WoodScrewsRow from './WoodScrewsRow';

const FixingTypes = () => {
  const { getValues } = useFormValues();

  const montageType = getValues('MontageType');
  return (
    <>
      <Text ta="start" w="100%" ms="xl">
        Fixare si instalare
      </Text>
      <ScrollArea h={1400} mt="lg" ms="xl" w="100%">
        <Table w="100%" highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Tip Componenta</Table.Th>
              <Table.Th>Bucati Folosite</Table.Th>
              <Table.Th>Pret Total</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <CopexRow />
            <WoodScrewsRow />
            <OboRow />
            <ScrewsRow />
            <Mc4Row />
            {montageType != 'Acoperist tip sandwich' && <AluminiumProfileRow />}
            <FusileFuseRow />
            <ACFuse />
            <SurgesRow />
            <CableDuct />
            <IntermediateClamps />
            <CornerClamps />
            {montageType != 'Acoperist tip sandwich' && <MixClamps />}
            <MiniRailsTypes />
            {montageType != 'Acoperist tip sandwich' && <PrezoaneRow />}
          </Table.Tbody>
        </Table>
      </ScrollArea>
    </>
  );
};

export default FixingTypes;
