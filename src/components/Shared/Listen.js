import PropTypes from 'prop-types'

import Speech from 'speak-tts'

const Listen = ({ text }) => {
  const speech = new Speech()
  speech.init({
    volume: 1,
    lang: process.env.REACT_APP_LOCALE,
    rate: 1,
    pitch: 1,
    splitSentences: true,
  })

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