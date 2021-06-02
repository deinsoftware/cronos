import { useEffect, useState } from 'react'

import Nav from '../../Nav/Nav'
import Listen from '../../Shared/Listen'
import Answer from '../../Shared/Answer'

import {
  addYear,
  getDateToWords,
  randomDateBetween,
  formatDate,
} from '../../../utils/date'

import '../Pages.css'

const DateToWords = () => {
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
    handleRandom()
  }, [])

  useEffect(() => {
    const result = getDateToWords(date)
    setWords(result)
  }, [date])

  return (
    <>
      <Nav text="Date to Words"></Nav>

      <section>
        <div className="challenge">{formatDate(date)}</div>
        <div className="input-group">
          <button onClick={handleRandom}>Refresh</button>
          <Listen text={words}></Listen>
        </div>

        <Answer words={words} rows={2}></Answer>
      </section>
    </>
  )
}

export default DateToWords
