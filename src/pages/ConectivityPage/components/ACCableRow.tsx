import { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import { Slider, Table } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';
import { ACCables } from '@/utils/database';

const ACCableRow = () => {
  const { getValues, setValue, control } = useFormValues();

  const systemType = getValues('SystemType');
  const inverterPower = getValues('Inverter.kW');

  const [acCable, setAcCable] = useState(
    ACCables.find((cable) => cable.SystemType == systemType && cable.InverterPower == inverterPower)
  );

  useEffect(() => {
    if (acCable) {
      setValue('ACCableType', {
        ...acCable,
        Total: acCable.Price * 20,
        Length: 20,
      });
    }
  }, [acCable]);

  const handleAcCableNameChange = () => {
    const cableName =
      getValues('ACCableType.Length') < getValues('ACCableType.FirstMaxLength')
        ? 'Cablu AC ' + acCable?.Type
        : getValues('ACCableType.Length') <= getValues('ACCableType.SecondMaxLength')
          ? 'Cablu AC ' + acCable?.FirstFallbackType
          : getValues('ACCableType.Length') > getValues('ACCableType.MaxLength')
            ? 'Suna Tibi'
            : 'Cablu AC ' + acCable?.SecondFallbackType;

    if (getValues('ACCableType.Length') != null) {
      return cableName;
    }

    return 'Selecteaza o distanta';
  };

  const handleAcCableTypeChange = (e: number) => {
    return {
      ...acCable,
      Length: e,
      Total: Number(
        getValues('ACCableType.Length') < getValues('ACCableType.FirstMaxLength')
          ? Number(getValues('ACCableType.Price') * getValues('ACCableType.Length')).toFixed(2)
          : getValues('ACCableType.Length') <= getValues('ACCableType.SecondMaxLength')
            ? Number((acCable!.FirstFallbackPrice * getValues('ACCableType.Length')).toFixed(2))
            : Number((acCable!.SecondFallbackPrice * getValues('ACCableType.Length')).toFixed(2))
      ),
    };
  };

  const handleAcCablePriceChange = () => {
    const cablePrice =
      getValues('ACCableType.Length') < getValues('ACCableType.FirstMaxLength')
        ? (getValues('ACCableType.Price') * getValues('ACCableType.Length')).toFixed(2)
        : getValues('ACCableType.Length') <= getValues('ACCableType.SecondMaxLength')
          ? (acCable!.FirstFallbackPrice * getValues('ACCableType.Length')).toFixed(2)
          : (acCable!.SecondFallbackPrice * getValues('ACCableType.Length')).toFixed(2);

    if (getValues('ACCableType.Length') != null) {
      return 'RON' + cablePrice;
    }

    return 'Selecteaza o distanta';
  };

  return (
    <Controller
      name="ACCableType"
      control={control}
      render={({ field }) => (
        <Table.Tr fz={18} style={{ cursor: 'pointer' }}>
          <Table.Td>
            <p
              style={{
                minWidth: '15ch',
              }}
            >
              {handleAcCableNameChange()}
            </p>
          </Table.Td>
          <Table.Td>
            <Slider
              value={getValues('ACCableType.Length') || 0}
              labelAlwaysOn
              defaultValue={0}
              min={0}
              step={1}
              max={getValues('ACCableType.MaxLength') + 1}
              color="blue"
              onChange={(e) => field.onChange(handleAcCableTypeChange(e))}
            />
          </Table.Td>
          <Table.Td>
            <p
              style={{
                minWidth: '11ch',
              }}
            >
              {handleAcCablePriceChange()}
            </p>
          </Table.Td>
        </Table.Tr>
      )}
    />
  );
};

export default ACCableRow;
