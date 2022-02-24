import {eachDayOfInterval,format} from 'date-fns';
import {MarkedDateProps,DayProps} from '.';
import theme from '../../styles/theme';

export function generateInterval(dateStart:DayProps, dateEnd:DayProps){
  let interval:MarkedDateProps = {};
  let datePeriod = eachDayOfInterval({
    start: new Date(dateStart.timestamp), end:new Date(dateEnd.timestamp)});
  
  datePeriod.forEach(item=>{
    const date = format(item, 'yyyy-MM-dd');

    interval = {
      ...interval,
      [date]:{
        color:(dateStart.dateString === date || dateEnd.dateString === date)?
          theme.colors.main : theme.colors.main_light,
        textColor: (dateStart.dateString === date || dateEnd.dateString === date)?
          theme.colors.main_light : theme.colors.main
      }
    }
  })

  return interval;
}