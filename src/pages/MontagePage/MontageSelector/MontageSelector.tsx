import { SegmentedControl, Stack, Title } from '@mantine/core';
import { MontageTypes, SystemTypes } from '@/utils/types';

type Props = {
  field: any;
};
function MontageSelector({ field }: Props) {
  return (
    <>
      <Stack align="center">
        <Title order={2}>Selecteaza tipul montajului</Title>
        <SegmentedControl
          radius="xl"
          size="md"
          defaultValue={MontageTypes.AcoperisTigla}
          data={[
            MontageTypes.AcoperisTigla,
            MontageTypes.AcoperisDrept,
            MontageTypes.AcoperisTabla,
            MontageTypes.Sandwich,
            MontageTypes.Sol,
          ]}
          onChange={field.onChange}
        />
      </Stack>
    </>
  );
}

export default MontageSelector;
