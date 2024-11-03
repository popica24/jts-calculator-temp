import { ControllerRenderProps } from 'react-hook-form';
import { Flex, Stack, Title } from '@mantine/core';
import { SigurantaACMonofazata, SigurantaACTrifazata } from '@/utils/database';
import { SystemInputs } from '@/utils/SystemInputs';
import { SystemTypes } from '@/utils/types';

type Props = { field: ControllerRenderProps<SystemInputs, 'SigurantaAC'>; SystemType: SystemTypes };

const ACFuse = ({ field, SystemType }: Props) => {
  if (SystemType == SystemTypes.Mono || SystemType == SystemTypes.MonoHybrid) {
    return (
      <Stack align="center">
        <Title order={2}>Selecteaza siguranta AC</Title>
        <Flex gap="md" justify="center" align="center" direction="column" wrap="wrap">
          {Object.entries(SigurantaACMonofazata.price).map(([i, { Ampere, price }]) => (
            <li key={i} onClick={() => field.onChange(SigurantaACMonofazata.price[i])}>
              {Ampere}A - RON {price.toFixed(2)}
            </li>
          ))}
        </Flex>
      </Stack>
    );
  }

  if (SystemType == SystemTypes.Trifazat || SystemType == SystemTypes.TrifazatHybrid) {
    return (
      <Stack align="center">
        <Title order={2}>Selecteaza siguranta AC</Title>
        <Flex gap="md" justify="center" align="center" direction="column" wrap="wrap">
          {Object.entries(SigurantaACTrifazata.price).map(([i, { Ampere, price }]) => (
            <li key={i} onClick={() => field.onChange(SigurantaACTrifazata.price[i])}>
              {Ampere}A - RON {price.toFixed(2)}
            </li>
          ))}
        </Flex>
      </Stack>
    );
  }
};

export default ACFuse;
