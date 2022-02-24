import { addDays } from 'date-fns';

import {Platform} from 'react-native'

export function getPlatformDate(date: Date){
  if(Platform.OS === 'ios'){
    return addDays(date,1);// no iphone quando clica pega a data menos 1. por isso add
  }else{
    return date;
  }
}