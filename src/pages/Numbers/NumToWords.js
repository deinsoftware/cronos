import { useEffect, useState } from 'react'
import converter from 'number-to-words'

import Nav from '../../components/ui/Nav/Nav'
import Listen from '../../components/shared/Listen/Listen'
import Answer from '../../components/shared/Answer/Answer'

import { placeValues, numberTypes } from '../../data/list'
import {
  formatOrdinal,
  formatCardinal,
  randomPlaces,
} from '../../utils/numbers'
import { capitalize } from '../../utils/text'

import '../Pages.css'

const NumToWords = () => {
  const [places, setPlaces] = useState(1)
  const [type, setType] = useState('c')
  const [number, setNumber] = useState(0)
  const [words, setWords] = useState('')

  const handlePlaces = (event) => {
    setPlaces(event.target.value)
  }

  const handleTypes = (event) => {
    setType(event.target.value)
  }

  const handleRandom = () => {
    const value = randomPlaces(places)
    setNumber(value)
    setWords('')
  }

  useEffect(() => {
    handleRandom()
  }, [])

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

  return (
    <>
      <Nav text="Number to Words"></Nav>

      <section>
        <div className="input-group">
          <label htmlFor="level">Level</label>
          <select name="level" value={places} onChange={(e) => handlePlaces(e)}>
            {Object.entries(placeValues).map((value, index) => (
              <option key={value[0]} value={value[0]}>
                {`${index + 1} - ${capitalize(value[1])}`}
              </option>
            ))}
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="type">Type</label>
          <select name="type" value={type} onChange={(e) => handleTypes(e)}>
            {Object.entries(numberTypes).map((value) => (
              <option key={value[0]} value={value[0]}>
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
        <Answer words={words} rows={4}></Answer>
      </section>
    </>
  )
}

export default NumToWords
