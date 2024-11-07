import React from 'react';
import { DevTool } from '@hookform/devtools';
import { useForm } from 'react-hook-form';
import { Button, Flex, ScrollArea, Table, Title } from '@mantine/core';
import { useFormStep } from '@/context/MultiStepFormContext';
import ProsumerDoc from '../TransportPage/ProsumerDoc/ProsumerDoc';
import LaborRow from './LaborRow';
import WorkshopRent from './WorkshopRent';

const AddsTypePage = () => {
  const { nextStep } = useFormStep();
  const { control } = useForm();
  return (
    <Flex align="center" justify="center" direction={'column'} w={'100%'} p={8}>
      <Title order={2}>Adaosuri finale</Title>
      <ScrollArea h={400} mt={'xl'} ms={'xl'} w={'100%'}>
        <Table w={'100%'} highlightOnHover striped>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Tip Serviciu</Table.Th>
              <Table.Th>Cantiate</Table.Th>
              <Table.Th>Total</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <Table.Tr>
              <ProsumerDoc />
            </Table.Tr>
            <Table.Tr>
              <LaborRow />
            </Table.Tr>
            <WorkshopRent />
          </Table.Tbody>
        </Table>
      </ScrollArea>
      <Button onClick={nextStep}>Pasul urmator (Comision)</Button>
      <div>
        <DevTool control={control} />
      </div>
    </Flex>
  );
};

export default AddsTypePage;
