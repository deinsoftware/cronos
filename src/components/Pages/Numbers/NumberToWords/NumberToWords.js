import { useEffect, useState } from 'react'
import converter from 'number-to-words'
import Speech from 'speak-tts'
import { placeValues, numberTypes, answerResult } from '../../../../data/list'
import { formatNumber, randomPlaces } from '../../../../utils/numbers'
import { compareText, capitalize } from '../../../../utils/text'
import './NumberToWords.css'

const NumToWords = ({ history }) => {
  const speech = new Speech()
  speech.init({
    volume: 1,
    lang: process.env.REACT_APP_LOCALE,
    rate: 1,
    pitch: 1,
    splitSentences: true,
    listeners: {
      onvoiceschanged: (voices) => {
        console.log('Event voiceschanged', voices)
      },
    },
  })

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
    const result = compareText(solution, words) ? 'c' : 'w'
    setAnswer(result)
  }

  const handleSpeech = () => {
    speech.speak({
      text: words,
    })
  }

  return (
    <>
      <div className="subtitle">
        <h1>
          <a onClick={handleBack}>&lt;</a>
        </h1>
        <h1>Number to Words</h1>
      </div>

      <div className="content">
        <div>
          <label htmlFor="level">Level</label>
          <select name="level" value={places} onChange={(e) => handlePlaces(e)}>
            {Object.entries(placeValues).map((value, index) => (
              <option key={index} value={value[0]}>
                {`${index + 1} - ${capitalize(value[1])}`}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="type">Type</label>
          <select name="type" value={type} onChange={(e) => handleTypes(e)}>
            {Object.entries(numberTypes).map((value, index) => (
              <option key={index} value={value[0]}>
                {`${capitalize(value[1])}`}
              </option>
            ))}
          </select>
        </div>

        <div className="number">
          {type === 'c' && formatNumber(number)}
          {type === 'o' && converter.toOrdinal(number)}
        </div>
        <div>
          <button onClick={handleRandom}>Refresh</button>
          {speech.hasBrowserSupport() && (
            <button onClick={handleSpeech}>Listen</button>
          )}
        </div>

        <div>
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
            <span>{capitalize(answerResult[answer])}!</span>
            <div>
              {answer === 'w' && (
                <span>
                  The correct answer is <strong>{words}</strong>
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default NumToWords
