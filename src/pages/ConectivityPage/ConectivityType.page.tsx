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

    Swal.fire({
      title: 'Esti sigur ?',
      imageUrl:
        'https://www.jtssolar.ro/wp-content/uploads/2022/03/JTS-Install-Construct-logo-200px.png',
      imageWidth: 200,
      imageHeight: 60,
      imageAlt: 'JTS Solar',
      html: `
    <table>
      <tr>
        <th>Tip Tablou</th>
        <th>Cantitate</th>
        <th>Pozitii</th>
        <th>Pret Total</th>
      </tr>
      <tr>
        <td>Tablou Smartpanel</td>
        <td>1</td>
        <td>${smartPanel.Position}</td>
        <td>RON ${smartPanel.Price.toFixed(2)}</td>
      </tr>
      <tr>
        <td>Tablou Stringuri</td>
        <td>1</td>
        <td>${stringPanel.Position}</td>
        <td>RON ${stringPanel.Price.toFixed(2)}</td>
      </tr>
    </table>
     <table>
      <tr>
        <th>Tip Cablue</th>
        <th>Metri folositi</th>
        <th>Pret Total</th>
      </tr>
      <tr>
        <td>Cablu AC</td>
        <td>${acCable.Length}</td>
        <td>RON ${acCable.Total?.toFixed(2)}</td>
      </tr>
      <tr>
       <td>Cablu Solar 6mm</td>
        <td>${solarCable.Length}</td>
        <td>RON ${solarCable.Total}</td>
      </tr>
      <tr>
       <td>Cablu Impamantare</td>
        <td>${groundingCable.Length}</td>
        <td>RON ${groundingCable.Total}</td>
      </tr>
    </table>
     <table>
      <tr>
        <th>Tip Componenta</th>
        <th>Bucati Folosite</th>
        <th>Pret Total</th>
      </tr>
      <tr>
        <td>Copex</td>
        <td>${copex.Length}m</td>
        <td>RON ${copex.Total}</td>
      </tr>
      <tr>
        <td>Melci</td>
        <td>${woodScrews.Quantity}</td>
        <td>RON ${woodScrews.Total}</td>
      </tr>
      <tr>
        <td>Obo</td>
        <td>${obo.Quantity}</td>
        <td>RON ${obo.Total}</td>
      </tr>
      <tr>
        <td>Suruburi</td>
        <td>${screws.Quantity}</td>
        <td>RON ${screws.Total}</td>
      </tr>
      <tr>
        <td>MC4</td>
        <td>${MC4.Quantity}</td>
        <td>RON ${MC4.Total}</td>
      </tr>
      <tr>
        <td>Profil Aluminiu</td>
        <td>${aluminiumProfile.Quantity}</td>
        <td>RON ${aluminiumProfile.Total}</td>
      </tr>
      <tr>
        <td>Sigurante Fuzibile</td>
        <td>${fusileFuse.Quantity}</td>
        <td>RON ${fusileFuse.Total}</td>
      </tr>
      <tr>
        <td>Descarcatoare</td>
        <td>${surges.Quantity}</td>
        <td>RON ${surges.Total}</td>
      </tr>
      <tr>
        <td>Canal Cablu</td>
        <td>${cableDuct.Quantity}</td>
        <td>RON ${cableDuct.Total}</td>
      </tr>
    </table>`,
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
        Next step (Conectivity)
      </Button>
      <DevTool control={control} />
    </Flex>
  );
};

export default ConectivityTypePage;
