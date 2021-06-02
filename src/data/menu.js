import NumToWords from '../components/Pages/Numbers/NumToWords'
import YearToWords from '../components/Pages/Dates/YearToWords'
import DateToWords from '../components/Pages/Dates/DateToWords'
import TimeToWords from '../components/Pages/Times/TimeToWords'

export const menuOptions = [
  { path: 'n2w', component: NumToWords, text: 'Number to Words' },
  { path: 'y2w', component: YearToWords, text: 'Year to Words' },
  { path: 'd2w', component: DateToWords, text: 'Date to Words' },
  { path: 't2w', component: TimeToWords, text: 'Time to Words' },
]
