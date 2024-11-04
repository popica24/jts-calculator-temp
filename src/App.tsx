import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { FormValuesContextProvider } from './context/FormValuesContext';
import { MultiStepFormContextProvider } from './context/MultiStepFormContext';
import AddsTypePage from './pages/AddsPage/AddsType.page';
import ConectivityTypePage from './pages/ConectivityPage/ConectivityType.page';
import InverterTypePage from './pages/InverterTypePage/InverterType.page';
import MiscType from './pages/MiscTypesPage/MiscType';
import MontageTypePage from './pages/MontagePage/MontageType.page';
import PanelsTypePage from './pages/PanelsTypePage/PanelsType.page';
import ProfitPage from './pages/ProfitPage/Profit.page';
import SystemTypePage from './pages/SystemTypePage/SystemType.page';
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <FormValuesContextProvider>
        <MultiStepFormContextProvider>
          <SystemTypePage />
          <InverterTypePage />
          <PanelsTypePage />
          <MontageTypePage />
          <ConectivityTypePage />
          <MiscType />
          <AddsTypePage />
          <ProfitPage />
        </MultiStepFormContextProvider>
      </FormValuesContextProvider>
    </MantineProvider>
  );
}
