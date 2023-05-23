import Joke from './components/Joke'

function App(){
  return (
    <>
      <Joke
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
      >
      </Joke>
      <Joke
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
      >
      </Joke>
      <Joke
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
      >
      </Joke>
      <Joke
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
      >
      </Joke>
    </>
  )
}

export default App
