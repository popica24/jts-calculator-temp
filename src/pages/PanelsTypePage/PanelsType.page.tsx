import { Controller, ControllerRenderProps } from 'react-hook-form';
import Swal from 'sweetalert2';
import { Button, Flex, ScrollArea, Table, Title } from '@mantine/core';
import { FormValuesContextProps, useFormValues } from '@/context/FormValuesContext';
import { useFormStep } from '@/context/MultiStepFormContext';
import { Panels } from '@/utils/database';
import { PanelType } from '@/utils/types';

const PanelsTypePage = () => {
  const { getValues, control, setValue } = useFormValues();
  const { nextStep } = useFormStep();

  const data = Panels;

  const handleRowSelect = (
    row: PanelType,
    field: ControllerRenderProps<FormValuesContextProps, 'Panel'>
  ) => {
    Swal.fire({
      title: `Ai selectat ${row.Name} ${row.KG}KG ${row.W}W - RON ${row.Price}`,
      text: 'Introdu numarul de panouri dorit',
      input: 'number',
      preConfirm: (val: number) => {
        setValue('NumberOfPanels', val);
      },
    });
    field.onChange(row);
  };

  const handleNextStep = () => {
    const panels = getValues('Panel');
    if (!panels) return;
    Swal.fire({
      title: 'Esti sigur ?',
      text: `Vei continua cu Panourile ${getValues('NumberOfPanels')} x ${panels.Name} ${panels.W}W - RON ${panels.Price}`,
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
      <Title order={2}>Acum selecteaza panourile</Title>
      <Controller
        name="Panel"
        control={control}
        render={({ field }) => (
          <ScrollArea h={400} mt={'xl'} ms={'xl'} w={'100%'}>
            <Table w={'100%'} highlightOnHover striped>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Nume</Table.Th>
                  <Table.Th>W</Table.Th>
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
                    }}
                  >
                    <Table.Td>{row.Name}</Table.Td>
                    <Table.Td>{row.W} W</Table.Td>
                    <Table.Td>RON {row.Price}</Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </ScrollArea>
        )}
      />
      {getValues('Inverter') ? (
        <Button
          mt={12}
          variant="gradient"
          gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
          onClick={handleNextStep}
        >
          Pasul urmator (tip montaj)
        </Button>
      ) : (
        <></>
      )}
    </Flex>
  );
};

export default PanelsTypePage;
