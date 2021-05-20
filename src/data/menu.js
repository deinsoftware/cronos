import NumberToWords from '../components/Pages/Numbers/NumberToWords'
import YearToWords from '../components/Pages/Dates/YearToWords'
import DateToWords from '../components/Pages/Dates/DateToWords'

export const menuOptions = [
  { path: 'n2w', component: NumberToWords, text: 'Number to Words' },
  { path: 'y2w', component: YearToWords, text: 'Year to Words' },
  { path: 'd2w', component: DateToWords, text: 'Date to Words' },
]
