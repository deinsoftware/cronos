import { useEffect, useState } from 'react'
import converter from 'number-to-words'

import Listen from '../../../Shared/Listen'
import Breadcrumbs from '../../../Shared/Breadcrumbs'

import { placeValues, numberTypes, answerResult } from '../../../../data/list'
import {
  formatOrdinal,
  formatCardinal,
  randomPlaces,
} from '../../../../utils/numbers'
import { compareText, capitalize } from '../../../../utils/text'

import '../../Pages.css'

const NumToWords = ({ history }) => {
  const [places, setPlaces] = useState(1)
  const [type, setType] = useState('c')
  const [number, setNumber] = useState(0)
  const [words, setWords] = useState('')
  const [solution, setSolution] = useState('')
  const [answer, setAnswer] = useState('')

  const handlePlaces = (event) => {
    setPlaces(event.target.value)
  }

  const handleTypes = (event) => {
    setType(event.target.value)
  }

  const handleRandom = () => {
    const value = randomPlaces(places)
    setNumber(value)
    setSolution('')
    setAnswer('')
  }

  useEffect(() => {
    handleRandom()
  }, [places, type])

  useEffect(() => {
    let method = 'toWords'
    if (type === 'o') {
      method += 'Ordinal'
    }

    const result = converter[method](number)
    setWords(result)
  }, [number])

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
        text="Number to Words"
      ></Breadcrumbs>

      <div className="input-group">
        <label htmlFor="level">Level</label>
        <select name="level" value={places} onChange={(e) => handlePlaces(e)}>
          {Object.entries(placeValues).map((value, index) => (
            <option key={index} value={value[0]}>
              {`${index + 1} - ${capitalize(value[1])}`}
            </option>
          ))}
        </select>
      </div>
      <div className="input-group">
        <label htmlFor="type">Type</label>
        <select name="type" value={type} onChange={(e) => handleTypes(e)}>
          {Object.entries(numberTypes).map((value, index) => (
            <option key={index} value={value[0]}>
              {`${capitalize(value[1])}`}
            </option>
          ))}
        </select>
      </div>
      <div className="challenge">
        {type === 'o' && formatOrdinal(number)}
        {type === 'c' && formatCardinal(number)}
      </div>
      <div className="input-group">
        <button onClick={handleRandom}>Refresh</button>
        <Listen text={words}></Listen>
      </div>

      {!answer && (
        <>
          <div className="input-group">
            <span>Write the number in words</span>
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

export default NumToWords
