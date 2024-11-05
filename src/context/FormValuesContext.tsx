import { createContext, ReactNode, useContext } from 'react';
import { useForm } from 'react-hook-form';
import {
  ACCableProps,
  ACFuseProps,
  AluminiumProfileProps,
  BatteryProps,
  CableDuctProps,
  CarProps,
  CopexCableProps,
  CornerClampsProps,
  FusibleFuseProps,
  GasProps,
  GroundingCableProps,
  IntermediateClampsProps,
  InverterType,
  MC4Props,
  MiniRailProps,
  MixClampsProps,
  MontageProps,
  MontageTypes,
  OboProps,
  PanelType,
  PrezoaneProps,
  RentProps,
  ScrewProps,
  SmartMeterPanel,
  SolarCableProps,
  StringPanel,
  SurgesProps,
  SystemTypes,
  WoodScrewsProps,
  WorkshopRentProps,
} from '@/utils/types';

export type FormValuesContextProps = {
  SystemType: `${SystemTypes}`;
  MontageType: MontageProps;
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
  Rent: RentProps;
  WorkshopRent: WorkshopRentProps;
  Profit: number;
  IntermediateClamps: IntermediateClampsProps;
  CornerClamps: CornerClampsProps;
  MixClamps: MixClampsProps;
  ACFuse: ACFuseProps;
  MiniRail: MiniRailProps;
  Prezoane: PrezoaneProps;
  Battery: BatteryProps | null;
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
      MontageType: {
        Type: MontageTypes.AcoperisTigla,
        Total: 0,
      },
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
        Quantity: 2,
        Total: 200,
      },
      CableDuct: {
        Quantity: 4,
        Total: 80,
      },
      ProsumerDoc: true,
      Car: {
        Quantity: 1,
        Total: 250,
        PricePerPiece: 250,
      },
      Gas: {
        Liters: 0,
        Total: 0,
        PricePerLiter: 7.5,
      },
      Rent: {
        Days: 0,
        PricePerRoom: 0,
        Rooms: 0,
      },
      WorkshopRent: {
        Total: 82.5,
        PricePerDay: 82.5,
      },
      Profit: 0,
      IntermediateClamps: {
        Quantity: 0,
        Total: 0,
      },
      CornerClamps: {
        Quantity: 0,
        Total: 0,
      },
      MixClamps: {
        Quantity: 0,
        Total: 0,
      },
      ACFuse: {
        Power: 0,
        Price: 0,
      },
      MiniRail: {
        Quantity: 0,
        Total: 0,
      },
      Prezoane: {
        Quantity: 0,
        Total: 0,
      },
    },
  });

  return <FormValuesContext.Provider value={formMethods}>{children}</FormValuesContext.Provider>;
};
