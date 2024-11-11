import { createContext, ReactNode, useContext, useState } from 'react';
import { useFormValues } from './FormValuesContext';

type FormMethodsContextProviderProps = {
  children: ReactNode;
};

type FormValuesContextProps = {
  recalculatePanels: (newNumber: number, panelPrice: number) => void;
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
    const calculatePrice = () => {
      const total = Math.ceil((newNumber * 1.13 * 2) / 3.54);

      setValue('AluminiumProfile', {
        PricePerPiece: 65,
        Quantity: total,
        Total: total * 65,
      });
    };

    calculatePrice();

    setValue('NumberOfPanels', newNumber);

    setRerender((prev) => !prev);
  };

  return (
    <FormMethodsContext.Provider value={{ recalculatePanels }}>
      {children}
    </FormMethodsContext.Provider>
  );
};
