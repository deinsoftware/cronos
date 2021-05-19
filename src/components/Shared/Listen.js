import Speech from 'speak-tts'

const Listen = ({ text }) => {
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

  const handleSpeech = () => {
    speech.speak({
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

export default Listen
