import React from 'react';
import { useWindowDimensions,StatusBar } from 'react-native'; // só pode ser usado dentro de componentes. no styled-componente ou fora do componente é melhor usar Dimensions
import { useNavigation } from '@react-navigation/native';

import { ConfirmButton } from '../../components/ConfirmButton';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import { 
  Container, 
  Content,
  Title,
  Message,
  Footer
} from './styles';

export const SchedulingComplete: React.FC = () => {
  const {width} = useWindowDimensions();
  const navigation = useNavigation();

  function handleConfirm(){
    navigation.navigate('Home')
  }

  return (
    <Container>
      <StatusBar 
        barStyle="light-content"
        translucent
        backgroundColor='transparent'
      />

      <LogoSvg width={width}/>
      
      <Content>
        <DoneSvg width={80} height={80}/>
        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir {'\n'}
          Até a concessionária da RENTX {'\n'}
          pegar o seu automóvel.
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title="OK" onPress={handleConfirm}/>
      </Footer>
    </Container>
  );
}

