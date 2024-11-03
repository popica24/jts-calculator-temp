import { createContext, ReactNode, useContext } from 'react';
import { useForm } from 'react-hook-form';
import {
  ACCableProps,
  AluminiumProfileProps,
  CableDuctProps,
  CarProps,
  CopexCableProps,
  FusibleFuseProps,
  GasProps,
  GroundingCableProps,
  InverterType,
  MC4Props,
  OboProps,
  PanelType,
  ScrewProps,
  SmartMeterPanel,
  SolarCableProps,
  StringPanel,
  SurgesProps,
  SystemTypes,
  WoodScrewsProps,
} from '@/utils/types';

export type FormValuesContextProps = {
  SystemType: `${SystemTypes}`;
  Inverter: InverterType | undefined;
  Panel: PanelType;
  NumberOfPanels: number;
  StringTable: StringPanel;
  SmartMeterTable: SmartMeterPanel;
  ACCableType: ACCableProps;
  SolarCable: SolarCableProps;
  GroundingCable: GroundingCableProps;
  CopexCable: CopexCableProps;
  WoodScrews: WoodScrewsProps;
  Obo: OboProps;
  Screws: ScrewProps;
  MC4: MC4Props;
  AluminiumProfile: AluminiumProfileProps;
  FusileFuse: FusibleFuseProps;
  Surges: SurgesProps;
  CableDuct: CableDuctProps;
  ProsumerDoc: boolean;
  Car: CarProps;
  Gas: GasProps;
};

type FormValuesContextProviderProps = {
  children: ReactNode;
};

export const useFormValues = () => {
  const context = useContext(FormValuesContext);

  if (!context) {
    throw new Error('useFormStep must be used within an MultiStepFormContextProvider');
  }
  return context;
};

const FormValuesContext = createContext<
  ReturnType<typeof useForm<FormValuesContextProps>> | undefined
>(undefined);

export const FormValuesContextProvider = ({ children }: FormValuesContextProviderProps) => {
  const formMethods = useForm<FormValuesContextProps>({
    defaultValues: {
      SystemType: SystemTypes.Mono,
      ACCableType: {
        Length: 0,
        Total: 0,
      },
      SolarCable: {
        Length: 125,
        Total: 412.5,
      },
      GroundingCable: {
        Length: 30,
        Total: 99.0,
      },
      CopexCable: {
        Length: 30,
        Total: 180,
      },
      WoodScrews: {
        Quantity: 25,
        Total: 75,
      },
      Obo: {
        Quantity: 25,
        Total: 62.5,
      },
      Screws: {
        Quantity: 50,
        Total: 15,
      },
      MC4: {
        Quantity: 8,
        Total: 40,
      },
      AluminiumProfile: {
        Quantity: 0,
        Total: 0,
      },
      FusileFuse: {
        Quantity: 0,
        Total: 0,
      },
      Surges: {
        Quantity: 0,
        Total: 0,
      },
      CableDuct: {
        Quantity: 4,
        Total: 80,
      },
      ProsumerDoc: true,
      Car: {
        Total: 1,
        PricePerPiece: 250,
      },
      Gas: {
        Liters: 0,
        Total: 0,
        PricePerLiter: 7.5,
      },
    },
  });

  return <FormValuesContext.Provider value={formMethods}>{children}</FormValuesContext.Provider>;
};
