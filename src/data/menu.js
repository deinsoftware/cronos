import NumToWords from '../pages/Numbers/NumToWords'
import YearToWords from '../pages/Dates/YearToWords'
import DateToWords from '../pages/Dates/DateToWords'
import TimeToWords from '../pages/Times/TimeToWords'

export const menuOptions = [
  { path: 'n2w', component: NumToWords, text: 'Number to Words' },
  { path: 'y2w', component: YearToWords, text: 'Year to Words' },
  { path: 'd2w', component: DateToWords, text: 'Date to Words' },
  { path: 't2w', component: TimeToWords, text: 'Time to Words' },
]
