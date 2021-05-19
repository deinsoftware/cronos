import { useEffect, useState } from 'react'
import dateToWords from 'date-to-words'

import Nav from '../../Shared/Nav'
import Listen from '../../Shared/Listen'
import Answer from '../../Shared/Answer'

import { addYear, randomDateBetween, formatDate } from '../../../utils/date'

import '../Pages.css'

const DateToWords = ({ history }) => {
  const [date, setDate] = useState(new Date())
  const [words, setWords] = useState('')

  const handleRandom = () => {
    const min = new Date(1800, 0, 1)
    const max = addYear(100, new Date())
    const value = randomDateBetween(min, max)

    setDate(value)
    setWords('')
  }

  useEffect(() => {
    const result = dateToWords(date)
    setWords(result)
  }, [date])

  return (
    <>
      <Nav history={history} back={true} text="Date to Words"></Nav>

      <section>
        <div className="challenge">{formatDate(date)}</div>
        <div className="input-group">
          <button onClick={handleRandom}>Refresh</button>
          <Listen text={words}></Listen>
        </div>

        <Answer words={words}></Answer>
      </section>
    </>
  )
}

export default DateToWords
