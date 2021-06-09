import NumToWords from '../pages/Numbers/NumToWords'
import YearToWords from '../pages/Dates/YearToWords'
import DateToWords from '../pages/Dates/DateToWords'
import TimeToWords from '../pages/Times/TimeToWords'

export const MENU_OPTIONS = [
  {
    section: 'write',
    path: 'n2w',
    text: 'Number to Words',
    component: NumToWords,
  },
  {
    section: 'write',
    path: 'y2w',
    text: 'Year to Words',
    component: YearToWords,
  },
  {
    section: 'write',
    path: 'd2w',
    text: 'Date to Words',
    component: DateToWords,
  },
  {
    section: 'write',
    path: 't2w',
    text: 'Time to Words',
    component: TimeToWords,
  },
]
