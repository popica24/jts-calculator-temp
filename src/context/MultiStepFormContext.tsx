import React, { createContext, ReactNode, useContext, useState } from 'react';
import { IconArrowBarToUp } from '@tabler/icons-react';
import {
  AppShell,
  Box,
  Button,
  Container,
  Drawer,
  Flex,
  Image,
  Stack,
  Stepper,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import SystemSummary from '@/components/SystemSummary';
import { useFormValues } from './FormValuesContext';

type MultiStepFormContextProps = {
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
  nextTwoSteps: () => void;
};

type MultiStepFormContextProviderProps = {
  children: ReactNode;
};

const MultiStepFormContext = createContext<MultiStepFormContextProps | undefined>(undefined);

export const useFormStep = () => {
  const context = useContext(MultiStepFormContext);

  if (!context) {
    throw new Error('useFormStep must be used within an MultiStepFormContextProvider');
  }
  return context;
};

export const MultiStepFormContextProvider = ({ children }: MultiStepFormContextProviderProps) => {
  const [opened, { open, close }] = useDisclosure(false);

  const [navbarOpened, { open: openNavbar, close: closeNavbar }] = useDisclosure(false);

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 10)); // Assuming 5 steps (0-4)
  };

  const nextTwoSteps = () => {
    setCurrentStep((prev) => Math.min(prev + 2, 8));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <MultiStepFormContext.Provider value={{ currentStep, nextStep, prevStep, nextTwoSteps }}>
      <Container p={8}>
        <AppShell>
          <Drawer p="md" maw={'200px'} opened={navbarOpened} onClose={closeNavbar} offset={0}>
            <Stack justify="space-between" align="center" h={'100vh'} py={15} px={4}>
              <Stepper active={currentStep} orientation="vertical">
                <Stepper.Step
                  label="Alege tipul sistemului"
                  description="Choose the type of the system"
                />
                <Stepper.Step
                  label="Acum alege invertorul"
                  description="Select the inverter based on the system you chose previously"
                />
                <Stepper.Step
                  label="Alege panourile"
                  description="Select the panels type and the number of panels"
                />
                <Stepper.Step
                  label="Alege tipul montajului"
                  description="Select the panels type and the number of panels"
                />
                <Stepper.Step
                  label="Alege conectica"
                  description="Complete the fields with proper information about connectivity elements"
                />
                <Stepper.Step
                  label="Subcontractare"
                  description="Complete the fields with proper information about connectivity elements"
                />
                <Stepper.Step
                  label="Adauga transport"
                  description="Complete details like transport, gas, poundage, etc."
                />
                <Stepper.Step
                  label="Adaosuri finale"
                  description="Complete details like transport, gas, poundage, etc."
                />
                <Stepper.Step
                  label="Comision lucrare"
                  description="Complete details like transport, gas, poundage, etc."
                />
              </Stepper>
              <Image
                w={'100px'}
                src={
                  'https://www.jtssolar.ro/wp-content/uploads/2022/03/JTS-Install-Construct-logo-200px.png'
                }
              />
            </Stack>
          </Drawer>
          <Button pos={'fixed'} left={'40px'} top={'20px'} onClick={openNavbar}>
            Pasi
          </Button>
          <AppShell.Main>
            <Box>
              <div>
                {React.Children.map(children, (child, index) =>
                  index === currentStep ? child : null
                )}
              </div>
            </Box>
          </AppShell.Main>
          <AppShell.Footer>
            <Button fullWidth onClick={open} h={'100%'} py={10}>
              <Flex justify={'center'} align={'center'} direction={'column'}>
                <IconArrowBarToUp stroke={2} />
                <span>See details</span>
              </Flex>
            </Button>
          </AppShell.Footer>
        </AppShell>
      </Container>
      <Drawer
        offset={8}
        radius="md"
        opened={opened}
        onClose={close}
        title="Full Details"
        position="bottom"
      >
        <SystemSummary />
      </Drawer>
    </MultiStepFormContext.Provider>
  );
};

export default MultiStepFormContext;
