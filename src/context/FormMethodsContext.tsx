import { createContext, ReactNode, useContext, useState } from 'react';
import { ACCables, SiguranteAC } from '@/utils/database';
import { FusibleFuseProps, InverterType, SurgesProps, SystemTypes } from '@/utils/types';
import { useFormValues } from './FormValuesContext';

type FormMethodsContextProviderProps = {
  children: ReactNode;
};

type FormValuesContextProps = {
  recalculatePanels: (newNumber: number, panelPrice: number) => void;
  recalculateInverter: (newInverter: InverterType) => void;
};

export const useFormMethods = () => {
  const context = useContext(FormMethodsContext);

  if (!context) {
    throw new Error('useFormStep must be used within an FormMethodsContext');
  }
  return context;
};

const FormMethodsContext = createContext<FormValuesContextProps | undefined>(undefined);

export const FormMethodsContextProvider = ({ children }: FormMethodsContextProviderProps) => {
  const [_, setRerender] = useState(false);
  const { getValues, setValue } = useFormValues();
  const recalculatePanels = (newNumber: number, panelPrice: number) => {
    const FixingType = getValues('MontageType.Type');

    const calculateAluminiumProfiles = () => {
      const total = Math.ceil((newNumber * 1.13 * 2) / 3.54);

      setValue('AluminiumProfile', {
        PricePerPiece: 65,
        Quantity: total,
        Total: total * 65,
      });
    };
    const calculateIntermediateClamps = () => {
      const quantity = newNumber * 2;
      const total = quantity * 5;
      setValue('IntermediateClamps', { PricePerPiece: 5, Quantity: quantity, Total: total });
    };
    const calculateMiniRail = () => {
      const quantity = newNumber * 2 + 0.1 * (newNumber * 2);
      const total = Number((quantity * 12.85).toFixed(2));

      setValue('MiniRail', { PricePerPiece: 12.85, Quantity: quantity, Total: total });
    };
    const calculateMixingClamps = () => {
      const total = Math.ceil((newNumber * 1.13 * 2) / 3.54);
      let clamps = Math.ceil(total / 2 + 1);

      if (clamps % 2 != 0) {
        clamps += 1;
      }
      const initialQuantity = clamps;
      const initialTotal = initialQuantity * 5;

      setValue('MixClamps', {
        PricePerPiece: 5,
        Quantity: initialQuantity,
        Total: initialTotal,
      });
    };
    const calculatePrezoane = () => {
      const total = Math.ceil((newNumber * 1.13 * 2) / 3.54);
      let calculatedQuantity = Math.ceil((total * 3.54) / 0.8);

      if (calculatedQuantity % 2 != 0) {
        calculatedQuantity += 1;
      }
      const calculatedTotal = Number(calculatedQuantity * 12.5);
      setValue('Prezoane', {
        PricePerPiece: 12.5,
        Quantity: calculatedQuantity,
        Total: calculatedTotal,
      });
    };
    const calculateAcCable = () => {
      const acCable = getValues('ACCableType');

      const cablePrice =
        getValues('ACCableType.Length') < getValues('ACCableType.FirstMaxLength')
          ? (getValues('ACCableType.Price') * getValues('ACCableType.Length')).toFixed(2)
          : getValues('ACCableType.Length') <= getValues('ACCableType.SecondMaxLength')
            ? (acCable!.FirstFallbackPrice * getValues('ACCableType.Length')).toFixed(2)
            : (acCable!.SecondFallbackPrice * getValues('ACCableType.Length')).toFixed(2);

      console.log(cablePrice);

      setValue('ACCableType.Total', Number(cablePrice));
    };

    if (FixingType == 'Acoperis tip sandwich') {
      calculateMiniRail();
      calculateIntermediateClamps();
    } else {
      if (FixingType != 'Sol' && FixingType != 'Acoperis drept') {
        calculatePrezoane();
        calculateAluminiumProfiles();
        calculateIntermediateClamps();
        calculateMixingClamps();
      }
    }
    setValue('NumberOfPanels', newNumber);
    calculateAcCable();
    setRerender((prev) => !prev);
  };

  const recalculateInverter = (newInverter: InverterType) => {
    const calculateACFuse = () => {
      let systemType = getValues('SystemType');

      if (systemType === SystemTypes.MonoHybrid) {
        systemType = SystemTypes.Mono;
      }

      if (systemType === SystemTypes.TrifazatHybrid) {
        systemType = SystemTypes.Trifazat;
      }

      let acFuse = SiguranteAC.find(
        (s) => s.Inverter === newInverter?.kW && s.InverterType === systemType
      );

      if (acFuse === undefined) {
        acFuse = SiguranteAC[0];
      }
      setValue('ACFuse', acFuse);
    };

    const calculateFusibleFuseAndSurges = () => {
      if (newInverter.kW !== undefined) {
        let fusileFuse: FusibleFuseProps;
        if (newInverter.kW < 10) {
          fusileFuse = { PricePerPiece: 50, Quantity: 2, Total: 2 * 65 };
        } else if (newInverter.kW >= 10 && newInverter.kW <= 15) {
          fusileFuse = { PricePerPiece: 50, Quantity: 4, Total: 4 * 65 };
        } else {
          fusileFuse = { PricePerPiece: 50, Quantity: 5, Total: 5 * 65 };
        }

        let surges: SurgesProps = {
          Quantity: fusileFuse.Quantity,
          PricePerPiece: 100,
          Total: fusileFuse.Quantity * 100,
        };
        setValue('FusileFuse', fusileFuse);
        setValue('Surges', surges);
      }
    };

    calculateACFuse();
    calculateFusibleFuseAndSurges();

    setValue('Inverter', newInverter);

    setRerender((prev) => !prev);
  };

  return (
    <FormMethodsContext.Provider value={{ recalculatePanels, recalculateInverter }}>
      {children}
    </FormMethodsContext.Provider>
  );
};
