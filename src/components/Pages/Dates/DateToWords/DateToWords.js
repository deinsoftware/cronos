import { useEffect, useState } from 'react'
import dateToWords from 'date-to-words'

import Listen from '../../../Shared/Listen'
import Breadcrumbs from '../../../Shared/Breadcrumbs'

import { answerResult } from '../../../../data/list'
import { addYear, randomDateBetween, formatDate } from '../../../../utils/date'
import { compareText, capitalize } from '../../../../utils/text'

import '../../Pages.css'

const DateToWords = ({ history }) => {
  const [date, setDate] = useState(new Date())
  const [words, setWords] = useState('')
  const [solution, setSolution] = useState('')
  const [answer, setAnswer] = useState('')

  const handleRandom = () => {
    const min = new Date(1800, 0, 1)
    const max = addYear(100, new Date())
    const value = randomDateBetween(min, max)

    setDate(value)
    setSolution('')
    setAnswer('')
  }

  useEffect(() => {
    const result = dateToWords(date)
    setWords(result)
  }, [date])

  const handleSolution = (event) => {
    setSolution(event.target.value)
  }

  const handleAnswer = (event) => {
    event.preventDefault()
    const result = compareText(solution, words) ? 'c' : 'w'
    setAnswer(result)
  }

  return (
    <>
      <Breadcrumbs
        history={history}
        back={true}
        text="Date to Words"
      ></Breadcrumbs>

      <div className="challenge">{formatDate(date)}</div>
      <div className="input-group">
        <button onClick={handleRandom}>Refresh</button>
        <Listen text={words}></Listen>
      </div>

      {!answer && (
        <>
          <div className="input-group">
            <span>Write the date in words</span>
          </div>

          <div className="input-group">
            <textarea
              name="answer"
              id="answer"
              onChange={(e) => handleSolution(e)}
              value={solution}
              disabled={answer}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              rows="4"
            />
          </div>

          <div className="input-group">
            <button
              type="submit"
              onClick={handleAnswer}
              disabled={!solution || answer ? true : ''}
            >
              Answer
            </button>
          </div>
        </>
      )}

      {answer && (
        <div>
          <div className={`result result-${answerResult[answer]}`}>
            <span>{capitalize(answerResult[answer])}!</span>
          </div>
          <div>
            <span>
              {answer === 'c' && `Yes! is `}
              {answer === 'w' && `Nop! the correct answer is `}
              <strong>{words}</strong>
            </span>
          </div>
        </div>
      )}
    </>
  )
}

export default DateToWords
