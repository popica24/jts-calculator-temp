import { useState } from 'react';
import { Controller, ControllerRenderProps } from 'react-hook-form';
import Swal from 'sweetalert2';
import { Button, Flex, ScrollArea, Table, Title } from '@mantine/core';
import { FormValuesContextProps, useFormValues } from '@/context/FormValuesContext';
import { useFormStep } from '@/context/MultiStepFormContext';
import { Inverters } from '@/utils/database';
import { InverterType } from '@/utils/types';

const InverterTypePage = () => {
  const [selected, setSelected] = useState(false);

  const { getValues, control } = useFormValues();
  const { nextStep } = useFormStep();

  const SystemType = getValues('SystemType');

  const data = Inverters.filter((inverter) => inverter.Type === SystemType);

  const handleRowSelect = (
    row: InverterType,
    field: ControllerRenderProps<FormValuesContextProps, 'Inverter'>
  ) => {
    setSelected(true);
    Swal.fire(`Ai selectat ${row.Brand} ${row.kW}kW ${row.Type} - RON ${row.Price}`);
    field.onChange(row);
  };

  const handleNextStep = () => {
    const inverter = getValues('Inverter');
    if (!inverter) return;
    Swal.fire({
      title: 'Esti sigur ?',
      text: `Vei continua cu invertorul ${inverter.Brand} ${inverter.kW}kW ${inverter.Type} - RON ${inverter.Price}`,
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
    <Flex align="center" justify="center" direction={'column'} w={'100%'} p={8}>
      <Title order={2}>Acum selecteaza invertorul</Title>
      <Controller
        name="Inverter"
        control={control}
        render={({ field }) => (
          <ScrollArea h={400} mt={'xl'} ms={'xl'} w={'100%'}>
            <Table w={'100%'} highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Brand</Table.Th>
                  <Table.Th>Tip</Table.Th>
                  <Table.Th>kW</Table.Th>
                  <Table.Th>Pret</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {data.map((row, i) => (
                  <Table.Tr
                    fz={18}
                    key={i}
                    onClick={() => handleRowSelect(row, field)}
                    style={{
                      cursor: 'pointer',
                      backgroundColor:
                        getValues('Inverter')?.Brand == row.Brand &&
                        getValues('Inverter')?.Price == row.Price &&
                        getValues('Inverter')?.kW == row.kW
                          ? '#8F8F8F'
                          : '',
                    }}
                  >
                    <Table.Td>{row.Brand}</Table.Td>
                    <Table.Td>{row.Type}</Table.Td>
                    <Table.Td>{row.kW} kW</Table.Td>
                    <Table.Td>RON {row.Price}</Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </ScrollArea>
        )}
      />
      {selected ? (
        <Button
          mt={12}
          variant="gradient"
          gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
          onClick={handleNextStep}
        >
          Pasul urmator (Panouri)
        </Button>
      ) : (
        <></>
      )}
    </Flex>
  );
};

export default InverterTypePage;
