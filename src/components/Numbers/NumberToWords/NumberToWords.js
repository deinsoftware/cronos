import { useEffect, useState } from 'react'
import converter from 'number-to-words'
import Speech from 'react-speech'
import { placeValues, numberTypes } from '../../../data/list'
import { formatNumber, randomPlaces } from '../../../utils/numbers'
import { capitalize } from '../../../utils/text'

const NumToWords = ({ history }) => {
  const handleBack = (e) => {
    history.goBack()
  }

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

  const handleAnswer = () => {
    let result = ''
    if (solution === words) {
      result = 'Correct'
    } else {
      result = `Wrong. The correct answer is ${words}`
    }
    setAnswer(result)
  }

  return (
    <>
      <h1>Number to Words</h1>

      <div>
        <label htmlFor="level">Level</label>
        <select name="level" value={places} onChange={(e) => handlePlaces(e)}>
          {Object.entries(placeValues).map((value, index) => (
            <option key={index} value={value[0]}>
              {`${index + 1} - ${capitalize(value[1])}`}
            </option>
          ))}
        </select>
        <label htmlFor="type">Type</label>
        <select name="type" value={type} onChange={(e) => handleTypes(e)}>
          {Object.entries(numberTypes).map((value, index) => (
            <option key={index} value={value[0]}>
              {`${capitalize(value[1])}`}
            </option>
          ))}
        </select>
      </div>

      <div>
        <span>
          {type === 'c' && formatNumber(number)}
          {type === 'o' && converter.toOrdinal(number)}
        </span>
        <button onClick={handleRandom}>Random</button>
      </div>

      <div>
        <label htmlFor="answer">Answer</label>
        <input
          type="text"
          name="answer"
          id="answer"
          onChange={(e) => handleSolution(e)}
          value={solution}
          placeholder="Write the number in words"
          disabled={answer}
        />
        <button
          onClick={handleAnswer}
          disabled={!solution || answer ? true : ''}
        >
          Answer
        </button>
      </div>

      {answer && (
        <div>
          <span>{answer}</span>
          {answer === 'Correct' && (
            <Speech
              text={words}
              lang={process.env.REACT_APP_LOCALE.toUpperCase()}
              displayText="Listen"
              textAsButton={true}
            />
          )}
        </div>
      )}

      <div>
        <button onClick={handleBack}>Back to Menu</button>
      </div>
    </>
  )
}

export default NumToWords
