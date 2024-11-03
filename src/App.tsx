import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { FormValuesContextProvider } from './context/FormValuesContext';
import { MultiStepFormContextProvider } from './context/MultiStepFormContext';
import ConectivityTypePage from './pages/ConectivityPage/ConectivityType.page';
import InverterTypePage from './pages/InverterTypePage/InverterType.page';
import MiscType from './pages/MiscTypesPage/MiscType';
import ProsumerDoc from './pages/MiscTypesPage/ProsumerDoc/ProsumerDoc';
import PanelsTypePage from './pages/PanelsTypePage/PanelsType.page';
import SystemTypePage from './pages/SystemTypePage/SystemType.page';
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <FormValuesContextProvider>
        <MultiStepFormContextProvider>
          {/* <SystemTypePage />
          <InverterTypePage />
          <PanelsTypePage />
          <ConectivityTypePage /> */}
          <MiscType />
        </MultiStepFormContextProvider>
      </FormValuesContextProvider>
    </MantineProvider>
  );
}
