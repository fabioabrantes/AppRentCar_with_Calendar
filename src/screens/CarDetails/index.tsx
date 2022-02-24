import React from 'react';
import { useNavigation,useRoute } from '@react-navigation/native';

import Animated from 'react-native-reanimated';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { ButtonRegister } from '../../components/ButtonRegister';


import {getAccessoryIcon} from '../../utils/getAccessoryIcon';

import { CarDTO } from '../../dtos/CarDTO';

import { 
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer,
} from './styles';

interface Params{
  car:CarDTO;
}
export const CarDetails: React.FC = () => {
  const navigation = useNavigation();
  
  const route = useRoute();
  const {car} = route.params as Params;

  function handleConfirmRental(){
    navigation.navigate('Scheduling',{car});
  }
  function handleBack(){
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleBack}/>
      </Header>
      
      <CarImages>
        <ImageSlider 
          imagesUrl={car.photos}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>
       
        <Accessories>
          {car.accessories.map(accessory => (
            <Accessory
              key={accessory.type}
              name={accessory.name} 
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}          
        </Accessories>

        <About>{car.about}</About>
      </Content>

      <Footer>{/* Dica: coloquei essa view chamado footer para deixar visivel pois o Content é um scroolView */}
        <ButtonRegister title="Escolher o período do aluguel" onPress={handleConfirmRental}/>
      </Footer>
    </Container>
  );
}
