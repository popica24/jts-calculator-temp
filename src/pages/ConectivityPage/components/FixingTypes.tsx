import { ScrollArea, Table, Text } from '@mantine/core';
import AluminiumProfileRow from './AluminiumProfileRow';
import CableDuct from './CableDuct';
import CopexRow from './CopexRow';
import FusileFuseRow from './FusibleFuseRow';
import Mc4Row from './Mc4Row';
import OboRow from './OboRow';
import ScrewsRow from './ScrewsRow';
import SurgesRow from './SurgesRow';
import WoodScrewsRow from './WoodScrewsRow';

const FixingTypes = () => {
  return (
    <>
      <Text ta="start" w="100%" ms="xl">
        Fixare si instalare
      </Text>
      <ScrollArea h={1000} mt="lg" ms="xl" w="100%">
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
            <AluminiumProfileRow />
            <FusileFuseRow />
            <SurgesRow />
            <CableDuct />
          </Table.Tbody>
        </Table>
      </ScrollArea>
    </>
  );
};

export default FixingTypes;
