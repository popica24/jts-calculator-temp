import '@mantine/core/styles.css';

import { useEffect } from 'react';
import { MantineProvider } from '@mantine/core';
import { FormMethodsContextProvider } from './context/FormMethodsContext';
import { FormValuesContextProvider } from './context/FormValuesContext';
import { MultiStepFormContextProvider } from './context/MultiStepFormContext';
import AddsTypePage from './pages/AddsPage/AddsType.page';
import ComissionPage from './pages/ComissionPage/Comission.page';
import ConectivityTypePage from './pages/ConectivityPage/ConectivityType.page';
import ConfirmOkPage from './pages/ConfirmOk/ConfirmOk.page';
import InverterTypePage from './pages/InverterTypePage/InverterType.page';
import MontageTypePage from './pages/MontagePage/MontageType.page';
import OutsourcedPage from './pages/OutsourcedPage/Outsourced.page';
import PanelsTypePage from './pages/PanelsTypePage/PanelsType.page';
import ProfitPage from './pages/ProfitPage/Profit.page';
import SystemTypePage from './pages/SystemTypePage/SystemType.page';
import MiscType from './pages/TransportPage/TransportType';
import { theme } from './theme';

export default function App() {
  useEffect(() => {
    const unloadCallback = (event: any) => {
      event.preventDefault();
      event.returnValue = '';
      return '';
    };

    window.addEventListener('beforeunload', unloadCallback);
    return () => window.removeEventListener('beforeunload', unloadCallback);
  }, []);
  return (
    <MantineProvider theme={theme}>
      <FormValuesContextProvider>
        <FormMethodsContextProvider>
          <MultiStepFormContextProvider>
            <SystemTypePage />
            <InverterTypePage />
            <PanelsTypePage />
            <MontageTypePage />
            <ConectivityTypePage />
            <OutsourcedPage />
            <MiscType />
            <AddsTypePage />
            <ComissionPage />
            <ConfirmOkPage />
            <ProfitPage />
          </MultiStepFormContextProvider>
        </FormMethodsContextProvider>
      </FormValuesContextProvider>
    </MantineProvider>
  );
}
