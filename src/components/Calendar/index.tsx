import React from 'react';
import {Feather} from '@expo/vector-icons';
import {useTheme} from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';

import {
  Calendar as CustomCalendar,
  LocaleConfig,
  DateCallbackHandler
} from 'react-native-calendars';

import {ptBR} from './localConfig';
import {generateInterval} from './generateInterval';

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

interface MarkedDateProps{
  [date:string]:{
    color:string;
    textColor:string;
    disabled?:boolean;
    disableTouchEvent?:boolean; // quando o usuário clicar não acontecer nada. seria datas não disponíveis. já agendadas
  }
}
interface CalendarProps{
  markedDates:MarkedDateProps;
  onDayPress:DateCallbackHandler
}
interface DayProps{
  dateString:string;
  day:number;
  month:number;
  year:number;
  timestamp:number;
}

const Calendar: React.FC<CalendarProps> = ({markedDates,onDayPress}) => {
  const theme = useTheme();

  return (
    <CustomCalendar
      renderArrow={(direction)=>(
        <Feather 
          size={RFValue(24)}
          color={theme.colors.text}
          name={direction === 'left'? 'chevron-left' : 'chevron-right'}
        />
      )}
      headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        borderBottomWidth:0.5,
        borderBottomColor: theme.colors.text_detail,
        paddingBottom:RFValue(10),
        marginBottom:10,
      }}
      theme={{
        textDayFontFamily:theme.fonts.primary_400,
        textDayFontSize:RFValue(20),
        textDayHeaderFontFamily:theme.fonts.primary_500,
        textDayHeaderFontSize:RFValue(10),
        monthTextColor:theme.colors.title,
        arrowStyle:{
          marginHorizontal:-15,
        }
      }}
      firstDay={1}
      minDate = {new Date()} 
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}

    />
  )
}
export {Calendar,DayProps,MarkedDateProps,generateInterval}