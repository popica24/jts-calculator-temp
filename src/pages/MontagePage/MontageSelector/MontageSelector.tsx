import { SegmentedControl, Stack, Title } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';
import { MontageTypes } from '@/utils/types';

type Props = {
  field: any;
};
function MontageSelector({ field }: Props) {
  const { getValues } = useFormValues();
  const montage = getValues('MontageType');
  return (
    <>
      <Stack align="center">
        <Title order={2}>Selecteaza tipul montajului</Title>
        <SegmentedControl
          radius="xl"
          size="md"
          defaultValue={MontageTypes.AcoperisTigla}
          data={[
            MontageTypes.AcoperisTabla,
            MontageTypes.AcoperisTigla,
            MontageTypes.Sandwich,
            MontageTypes.AcoperisDrept,
            MontageTypes.Sol,
          ]}
          onChange={(e) =>
            field.onChange({
              ...montage,
              Type: e,
            })
          }
        />
      </Stack>
    </>
  );
}

export default MontageSelector;
