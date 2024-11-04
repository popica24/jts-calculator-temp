import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { Button, Flex, NumberInput, Stack, Title } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';

const ProfitPage = () => {
  const [profitSet, setProfitSet] = useState(false);

  const { setValue, getValues, control } = useFormValues();
  const profit = 6000;
  //   if (!profitSet) {
  //     return (
  //       <Flex align={'center'} justify={'center'} h={'100vh'} direction={'column'}>
  //         <Title order={3} mb={'lg'}>
  //           Specifica profitul dorit in lei
  //         </Title>
  //         <Controller
  //           name="Profit"
  //           control={control}
  //           render={({ field }) => <NumberInput onChange={(e) => field.onChange(Number(e))} />}
  //         />
  //         <Button onClick={() => setProfitSet(true)}>Ok</Button>
  //       </Flex>
  //     );
  //   }

  return <Stack>
    
  </Stack>;
};

export default ProfitPage;
