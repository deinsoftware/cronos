import PropTypes from 'prop-types'
import Speech from 'speak-tts'

const Listen = ({ text }) => {
  const speech = new Speech()

  if (speech.hasBrowserSupport()) {
    const options = {
      volume: 1,
      lang: process.env.REACT_APP_LOCALE,
      rate: 1,
      pitch: 1,
      splitSentences: true,
    }

    speech.init(options).catch((error) => {
      throw new Error(`An error occurred while initializing: ${error}`)
    })
  }

  const handleSpeech = async () => {
    await speech.speak({
      text: text,
    })
  }

  return (
    <>
      {speech.hasBrowserSupport() && (
        <button onClick={handleSpeech}>Listen</button>
      )}
    </>
  )
}

Listen.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Listen
