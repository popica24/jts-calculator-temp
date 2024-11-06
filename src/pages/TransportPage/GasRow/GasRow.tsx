import { useEffect, useState } from 'react';
import { Controller, useWatch } from 'react-hook-form';
import { NumberInput, Slider, Table, Title } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';

const GasRow = () => {
  const { setValue, control } = useFormValues();

  const GasWatch = useWatch({
    control,
    name: 'Gas',
  });

  const [km, setKm] = useState(0);

  function calculateFuelCost(distance: number) {
    const litersConsumed = (distance * 10) / 100;

    const totalCost = litersConsumed * 7.5;

    return Math.ceil(totalCost);
  }

  useEffect(() => {
    setValue('Gas.Total', calculateFuelCost(km));
    setValue('Gas.Liters', Math.ceil(km * 0.1));
  }, [km]);

  return (
    <>
      <Title
        order={2}
        mb={'lg'}
        style={{
          textAlign: 'start',
          width: '100%',
        }}
      >
        Calculator motorina
      </Title>
      <Table>
        <Table.Tr fz={18} style={{ cursor: 'pointer' }}>
          <Table.Td>
            <p
              style={{
                minWidth: '15ch',
              }}
            >
              Distanta
            </p>
          </Table.Td>
          <Table.Td>
            <NumberInput onChange={(e) => setKm(Number(e))} />
          </Table.Td>
          <Table.Td>
            <p
              style={{
                minWidth: '100px',
                margin: 'auto auto',
              }}
            >
              {GasWatch.Liters}l
            </p>
          </Table.Td>
          <Table.Td>
            <p
              style={{
                minWidth: '100px',
                margin: 'auto auto',
              }}
            >
              RON {GasWatch.Total}
            </p>
          </Table.Td>
        </Table.Tr>
      </Table>
    </>
  );
};

export default GasRow;
