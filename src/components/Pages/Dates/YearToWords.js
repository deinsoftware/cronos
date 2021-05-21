import { useEffect, useState } from 'react'

import Nav from '../../Nav/Nav'
import Listen from '../../Shared/Listen'
import Answer from '../../Shared/Answer'

import {
  addYear,
  getYearToWords,
  randomDateBetween,
  getYear,
} from '../../../utils/date'

import '../Pages.css'

const YearToWords = () => {
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
    const result = getYearToWords(date)
    setWords(result)
  }, [date])

  return (
    <>
      <Nav text="Year to Words"></Nav>

      <section>
        <div className="challenge">{getYear(date)}</div>
        <div className="input-group">
          <button onClick={handleRandom}>Refresh</button>
          <Listen text={words}></Listen>
        </div>

        <Answer words={words}></Answer>
      </section>
    </>
  )
}

export default YearToWords
