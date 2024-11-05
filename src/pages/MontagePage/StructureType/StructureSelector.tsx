import { useEffect } from 'react';
import { useWatch } from 'react-hook-form';
import { useFormValues } from '@/context/FormValuesContext';

const StructureSelector = () => {
  const { getValues, control, setValue } = useFormValues();

  const montageType = useWatch({ control, name: 'MontageType' });

  useEffect(() => {
    if (montageType.Type == 'Acoperis drept') {
      const numberOfPanels = getValues('NumberOfPanels');
      const panelsPower = getValues('Panel.W');

      const power = (panelsPower * numberOfPanels) / 1000;

      setValue('MontageType.Total', Number((power * 450).toFixed(2)));

      const structureTypePriceElement = document.getElementById('structure-type-price');
      if (structureTypePriceElement) {
        structureTypePriceElement.innerHTML = `S-a adaugat Structura DOMO - RON ${(power * 450).toFixed(2)}`;
      }
    }

    if (montageType.Type == 'Sol') {
      const numberOfPanels = getValues('NumberOfPanels');
      const panelsPower = getValues('Panel.W');

      const power = (panelsPower * numberOfPanels) / 1000;

      setValue('MontageType.Total', Number((power * 325).toFixed(2)));

      const structureTypePriceElement = document.getElementById('structure-type-price');
      if (structureTypePriceElement) {
        structureTypePriceElement.innerHTML = `S-a adaugat Structura Sol - RON ${(power * 325).toFixed(2)}`;
      }
    }
  }, [montageType]);
  return (
    <div>
      <p id="structure-type-price"></p>
    </div>
  );
};

export default StructureSelector;
