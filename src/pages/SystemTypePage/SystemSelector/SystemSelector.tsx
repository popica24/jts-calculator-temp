import { SegmentedControl, Stack, Title } from '@mantine/core';
import { SystemTypes } from '@/utils/types';

type Props = {
  field: any;
};
function SystemSegmentedControl({ field }: Props) {
  return (
    <>
      <Stack align="center">
        <Title order={2}>Selecteaza tipul sistemului</Title>
        <SegmentedControl
          radius="xl"
          size="md"
          defaultValue={SystemTypes.Mono}
          data={[
            SystemTypes.Mono,
            SystemTypes.MonoHybrid,
            SystemTypes.Trifazat,
            SystemTypes.TrifazatHybrid,
            SystemTypes.OffGrid,
          ]}
          onChange={field.onChange}
        />
      </Stack>
    </>
  );
}

export default SystemSegmentedControl;
