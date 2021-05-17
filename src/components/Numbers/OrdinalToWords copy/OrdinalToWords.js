import { useEffect, useState } from 'react'
import converter from 'number-to-words'
import Speech from 'react-speech'
import { placeValues } from '../../../../data/list'
import { formatNumber, randomPlaces } from '../../../../utils/numbers'
import { capitalize } from '../../../../utils/text'

const NumToWords = ({ history }) => {
  const handleOnReturn = (e) => {
    history.goBack()
  }

  const [places, setPlaces] = useState(1)
  const [number, setNumber] = useState(0)
  const [words, setWords] = useState('')
  const [solution, setSolution] = useState('')
  const [answer, setAnswer] = useState('')

  const handlePlaces = (event) => {
    setPlaces(event.target.value)
  }

  const handleRandom = () => {
    const value = randomPlaces(places)
    setNumber(value)
    setSolution('')
    setAnswer('')
  }

  useEffect(() => {
    handleRandom()
  }, [places])

  useEffect(() => {
    const result = converter.toWords(number)
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
      <h1>Ordinal Number to Words</h1>

      <div>
        <label htmlFor="range">Level</label>

        <select name="range" value={places} onChange={(e) => handlePlaces(e)}>
          {Object.entries(placeValues).map((value, index) => (
            <option key={index} value={value[0]}>
              {`${index + 1} - ${capitalize(value[1])}`}
            </option>
          ))}
        </select>
      </div>

      <div>
        <span>{formatNumber(number)}</span>
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
        <button onClick={handleOnReturn}>Back to Menu</button>
      </div>
    </>
  )
}

export default NumToWords
