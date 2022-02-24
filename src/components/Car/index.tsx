import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {CarDTO} from '../../dtos/CarDTO';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

import { 
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
} from './styles';

interface Props extends RectButtonProps{
  carData:CarDTO;
}

export const Car: React.FC<Props> = ({carData,...rest}) => {
  const MotorIcon = getAccessoryIcon(carData.fuel_type);
  
  return (
    <Container {...rest}>
      <Details>
        <Brand>{carData.brand}</Brand>
        <Name>{carData.name}</Name>
        <About>
          <Rent>
            <Period>{carData.rent.period}</Period>
            <Price>{`R$ ${carData.rent.price}`}</Price>
          </Rent>

          <Type>
            <MotorIcon />
          </Type>
        </About>
      </Details>

      <CarImage 
        source={{uri:carData.thumbnail}}
        resizeMode='contain'
      />
    </Container>
  );
}

