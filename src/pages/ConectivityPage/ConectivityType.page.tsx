import { DevTool } from '@hookform/devtools';
import Swal from 'sweetalert2';
import { Button, Flex, Title } from '@mantine/core';
import { useFormValues } from '@/context/FormValuesContext';
import { useFormStep } from '@/context/MultiStepFormContext';
import CableType from './components/CableTypes';
import FixingTypes from './components/FixingTypes';
import TablesSelector from './components/TablesSelector';

const ConectivityTypePage = () => {
  const { control, getValues } = useFormValues();
  const { nextStep } = useFormStep();

  const handleNextStep = () => {
    const smartPanel = getValues('SmartMeterTable');
    const stringPanel = getValues('StringTable');

    const acCable = getValues('ACCableType');
    const solarCable = getValues('SolarCable');
    const groundingCable = getValues('GroundingCable');

    const copex = getValues('CopexCable');
    const woodScrews = getValues('WoodScrews');
    const obo = getValues('Obo');
    const screws = getValues('Screws');
    const MC4 = getValues('MC4');
    const aluminiumProfile = getValues('AluminiumProfile');
    const fusileFuse = getValues('FusileFuse');
    const surges = getValues('Surges');
    const cableDuct = getValues('CableDuct');
    const intermediateClamps = getValues('IntermediateClamps');
    const cornerClamps = getValues('CornerClamps');
    const mixClamps = getValues('MixClamps');
    const prezoane = getValues('Prezoane');

    Swal.fire({
      title: 'Esti sigur ?',
      imageUrl:
        'https://www.jtssolar.ro/wp-content/uploads/2022/03/JTS-Install-Construct-logo-200px.png',
      imageWidth: 200,
      imageHeight: 60,
      imageAlt: 'JTS Solar',
      html: `
    <table style="font-family: Arial, Helvetica, sans-serif; border-collapse: collapse; width: 100%;">
  <tr>
    <th style="padding-top: 12px; padding-bottom: 12px; text-align: left; background-color: #04AA6D; color: white; border: 1px solid #ddd; padding: 8px;">Produs</th>
    <th style="padding-top: 12px; padding-bottom: 12px; text-align: left; background-color: #04AA6D; color: white; border: 1px solid #ddd; padding: 8px;">CNT</th>
    <th style="padding-top: 12px; padding-bottom: 12px; text-align: left; background-color: #04AA6D; color: white; border: 1px solid #ddd; padding: 8px;">Total</th>
  </tr>
  <tr style="background-color: #f2f2f2;">
    <td style="border: 1px solid #ddd; padding: 8px;">Tablou Smartmeter ${smartPanel.Position}</td>
    <td style="border: 1px solid #ddd; padding: 8px;">1</td>
    <td style="border: 1px solid #ddd; padding: 8px;">RON ${smartPanel.Price.toFixed(2)}</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px;">Tablou Stringuri</td>
    <td style="border: 1px solid #ddd; padding: 8px;">1</td>
    <td style="border: 1px solid #ddd; padding: 8px;">RON ${stringPanel.Price.toFixed(2)}</td>
  </tr>
  <tr style="background-color: #f2f2f2;">
    <td style="border: 1px solid #ddd; padding: 8px;">Cablu AC</td>
    <td style="border: 1px solid #ddd; padding: 8px;">${acCable.Length}m</td>
    <td style="border: 1px solid #ddd; padding: 8px;">RON ${acCable.Total?.toFixed(2)}</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px;">Cablu Solar 6mm</td>
    <td style="border: 1px solid #ddd; padding: 8px;">${solarCable.Length}m</td>
    <td style="border: 1px solid #ddd; padding: 8px;">RON ${solarCable.Total?.toFixed(2)}</td>
  </tr>
  <tr style="background-color: #f2f2f2;">
    <td style="border: 1px solid #ddd; padding: 8px;">Cablu Impamantare</td>
    <td style="border: 1px solid #ddd; padding: 8px;">${groundingCable.Length}m</td>
    <td style="border: 1px solid #ddd; padding: 8px;">RON ${groundingCable.Total?.toFixed(2)}</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px;">Copex</td>
    <td style="border: 1px solid #ddd; padding: 8px;">${copex.Length}m</td>
    <td style="border: 1px solid #ddd; padding: 8px;">RON ${copex.Total?.toFixed(2)}</td>
  </tr>
  <tr style="background-color: #f2f2f2;">
    <td style="border: 1px solid #ddd; padding: 8px;">Melci</td>
    <td style="border: 1px solid #ddd; padding: 8px;">${woodScrews.Quantity}m</td>
    <td style="border: 1px solid #ddd; padding: 8px;">RON ${woodScrews.Total?.toFixed(2)}</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px;">Obo</td>
    <td style="border: 1px solid #ddd; padding: 8px;">${obo.Quantity}</td>
    <td style="border: 1px solid #ddd; padding: 8px;">RON ${obo.Total?.toFixed(2)}</td>
  </tr>
  <tr style="background-color: #f2f2f2;">
    <td style="border: 1px solid #ddd; padding: 8px;">Suruburi</td>
    <td style="border: 1px solid #ddd; padding: 8px;">${screws.Quantity}</td>
    <td style="border: 1px solid #ddd; padding: 8px;">RON ${screws.Total?.toFixed(2)}</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px;">MC4</td>
    <td style="border: 1px solid #ddd; padding: 8px;">${MC4.Quantity}</td>
    <td style="border: 1px solid #ddd; padding: 8px;">RON ${MC4.Total?.toFixed(2)}</td>
  </tr>
  <tr style="background-color: #f2f2f2;">
    <td style="border: 1px solid #ddd; padding: 8px;">Profil Aluminiu</td>
    <td style="border: 1px solid #ddd; padding: 8px;">${aluminiumProfile.Quantity}</td>
    <td style="border: 1px solid #ddd; padding: 8px;">RON ${aluminiumProfile.Total?.toFixed(2)}</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px;">Sigurante Fuzibile</td>
    <td style="border: 1px solid #ddd; padding: 8px;">${fusileFuse.Quantity}</td>
    <td style="border: 1px solid #ddd; padding: 8px;">RON ${fusileFuse.Total?.toFixed(2)}</td>
  </tr>
  <tr style="background-color: #f2f2f2;">
    <td style="border: 1px solid #ddd; padding: 8px;">Descarcatoare</td>
    <td style="border: 1px solid #ddd; padding: 8px;">${surges.Quantity}</td>
    <td style="border: 1px solid #ddd; padding: 8px;">RON ${surges.Total?.toFixed(2)}</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px;">Canal Cablu</td>
    <td style="border: 1px solid #ddd; padding: 8px;">${cableDuct.Quantity}</td>
    <td style="border: 1px solid #ddd; padding: 8px;">RON ${cableDuct.Total?.toFixed(2)}</td>
  </tr>
  <tr style="background-color: #f2f2f2;">
    <td style="border: 1px solid #ddd; padding: 8px;">Cleme Intermediare</td>
    <td style="border: 1px solid #ddd; padding: 8px;">${intermediateClamps.Quantity}</td>
    <td style="border: 1px solid #ddd; padding: 8px;">RON ${intermediateClamps.Total?.toFixed(2)}</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px;">Cleme de Capat</td>
    <td style="border: 1px solid #ddd; padding: 8px;">${cornerClamps.Quantity}</td>
    <td style="border: 1px solid #ddd; padding: 8px;">RON ${cornerClamps.Total?.toFixed(2)}</td>
  </tr>
  <tr style="background-color: #f2f2f2;">
    <td style="border: 1px solid #ddd; padding: 8px;">Cleme de Imbinare</td>
    <td style="border: 1px solid #ddd; padding: 8px;">${mixClamps.Quantity}</td>
    <td style="border: 1px solid #ddd; padding: 8px;">RON ${mixClamps.Total?.toFixed(2)}</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px;">Carlige Tigla / Prezoane</td>
    <td style="border: 1px solid #ddd; padding: 8px;">${prezoane.Quantity}</td>
    <td style="border: 1px solid #ddd; padding: 8px;">RON ${prezoane.Total?.toFixed(2)}</td>
  </tr>
</table>

`,
    }).then((result) => {
      if (result.isConfirmed) {
        nextStep();
      }
    });
  };
  return (
    <Flex align="center" justify="center" direction="column" w="100%" p={8}>
      <Title order={2}>Acum configureaza sectiunea de conectica</Title>
      <TablesSelector />
      <CableType />
      <FixingTypes />
      <Button
        mb={'5rem'}
        variant="gradient"
        gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
        onClick={handleNextStep}
      >
        Pasul urmator (subcontractare)
      </Button>
      <DevTool control={control} />
    </Flex>
  );
};

export default ConectivityTypePage;
