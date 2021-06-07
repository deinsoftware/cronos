import { useEffect, useState } from 'react'

import Nav from '../../components/ui/Nav/Nav'
import Listen from '../../components/shared/Listen/Listen'
import Answer from '../../components/shared/Answer/Answer'
import { getTimeToWords, randomTime } from '../../utils/time'

import '../Pages.css'

const TimeToWords = () => {
  const initialTime = { hour: 1, minutes: 0 }
  const [time, setTime] = useState(initialTime)
  const [words, setWords] = useState('')

  const handleRandom = () => {
    const value = randomTime()

    setTime(value)
    setWords('')
  }

  useEffect(() => {
    handleRandom()
  }, [])

  useEffect(() => {
    const result = getTimeToWords(time)

    setWords(result)
  }, [time])

  return (
    <>
      <Nav text="Time to Words" />

      <section>
        <div className="challenge">{`${time.hour}:${String(
          time.minutes
        ).padStart(2, '0')}`}</div>
        <div className="input-group">
          <button onClick={handleRandom}>Refresh</button>
          <Listen text={words} />
        </div>

        <Answer rows={2} words={words} />
      </section>
    </>
  )
}

export default TimeToWords
