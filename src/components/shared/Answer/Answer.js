import PropTypes from 'prop-types'

import { useEffect, useState } from 'react'
import { compareText, capitalize } from '../../../utils/text'
import { answerResult } from '../../../data/list'

import './Answer.css'

const Answer = ({ words, rows }) => {
  const [answer, setAnswer] = useState('')

  const handleAnswer = (event) => {
    event.preventDefault()
    const result = compareText(solution, words) ? 'c' : 'w'
    setAnswer(result)
  }

  const [solution, setSolution] = useState('')

  const handleSolution = (event) => {
    setSolution(event.target.value)
  }

  useEffect(() => {
    if (!words) {
      setSolution('')
      setAnswer('')
    }
  }, [words])

  return (
    <>
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
              rows={rows}
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
            <div>{answer === 'w' && `Nop! the correct answer is `}</div>
            <div>
              {answer === 'c' && `Yes! is `}
              <strong>{words}</strong>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

Answer.propTypes = {
  words: PropTypes.string.isRequired,
  rows: PropTypes.number,
}

Answer.defaultProps = {
  rows: 1,
}

export default Answer
