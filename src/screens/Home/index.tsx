import React,{useEffect,useState} from 'react';
import {StatusBar} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import {Car} from '../../components/Car';
import {Load} from '../../components/Load';

import Logo from '../../assets/logo3.svg';

import {api} from '../../services/api';
import {CarDTO} from '../../dtos/CarDTO';

import { 
  Container,
  Header,
  HeaderContent, 
  TotalCars ,
  CardList,
  MyCarsButton,
} from './styles';


export const Home: React.FC = () => {
  const navigation = useNavigation();
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const theme = useTheme();

  function handleCarDetails(car:CarDTO){
    navigation.navigate("CarDetails",{car});
  }

  function handleOpenMyCars(){
    navigation.navigate("MyCars");
  }

  useEffect(()=>{
    async function fetchCars(){
      try {
        const response = await api.get('/cars');
        setCars(response.data);

      } catch (error) {
        console.log(error);
      }finally {
        setLoading(false);
      }

    }
    fetchCars();
  },[]);
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo 
            width={RFValue(128)}
            height={RFValue(33)}
          />
          <TotalCars>
            {
              cars.length === 1?
              "Total de 1 carro"
              : 
              `Total de ${cars.length} carros`
            }
          </TotalCars>
        </HeaderContent>
      </Header>
      {
        loading ? 
          <Load />
        :
          <CardList
            data={cars}
            keyExtractor={item =>item.id}
            renderItem={({item}) => 
              <Car carData={item} onPress={()=>handleCarDetails(item)}/>
            }
          /> 
      }
      <MyCarsButton onPress={handleOpenMyCars}>
        <Ionicons 
          name="ios-car-sport"
          size={32}
          color={theme.colors.shape}
        />
      </MyCarsButton>
    </Container>
  
  );
}
