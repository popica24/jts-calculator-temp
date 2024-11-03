import { ScrollArea, Table, Text } from '@mantine/core';
import ACCableRow from './ACCableRow';
import GroundingCableRow from './GroundingCableRow';
import SolarCableRow from './SolarCableRow';

const CableType = () => {
  return (
    <>
      <Text ta="start" w="100%" ms="xl">
        Cabluri
      </Text>
      <ScrollArea h={400} mt="lg" ms="xl" w="100%">
        <Table w="100%" highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Tip Cablu</Table.Th>
              <Table.Th>Distana folosita</Table.Th>
              <Table.Th>Pret Total</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <ACCableRow />
            <SolarCableRow />
            <GroundingCableRow />
          </Table.Tbody>
        </Table>
      </ScrollArea>
    </>
  );
};

export default CableType;
