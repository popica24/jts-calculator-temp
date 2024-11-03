import React, { createContext, ReactNode, useContext, useState } from 'react';
import { IconArrowBarToUp } from '@tabler/icons-react';
import { AppShell, Button, Container, Drawer, Flex, Image, Stack, Stepper } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import SystemSummary from '@/components/SystemSummary';
import { useFormValues } from './FormValuesContext';

type MultiStepFormContextProps = {
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
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

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 4)); // Assuming 5 steps (0-4)
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <MultiStepFormContext.Provider value={{ currentStep, nextStep, prevStep }}>
      <Container p={8}>
        <AppShell>
          <AppShell.Navbar p="md" maw={'300px'}>
            <Stack justify="space-between" align="center" h={'100vh'} py={15} px={4}>
              <Stepper active={currentStep} orientation="vertical">
                <Stepper.Step
                  label="Choose system type"
                  description="Choose the type of the system"
                />
                <Stepper.Step
                  label="Choose the inverter"
                  description="Select the inverter based on the system you chose previously"
                />
                <Stepper.Step
                  label="Choose the panels"
                  description="Select the panels type and the number of panels"
                />
                <Stepper.Step
                  label="Choose the connectivity"
                  description="Complete the fields with proper information about connectivity elements"
                />
                <Stepper.Step
                  label="Add Misc details"
                  description="Complete details like transport, gas, poundage, etc."
                />
              </Stepper>
              <Image
                w={'200px'}
                src={
                  'https://www.jtssolar.ro/wp-content/uploads/2022/03/JTS-Install-Construct-logo-200px.png'
                }
              />
            </Stack>
          </AppShell.Navbar>
          <Container>
            {React.Children.map(children, (child, index) => (index === currentStep ? child : null))}
          </Container>
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
