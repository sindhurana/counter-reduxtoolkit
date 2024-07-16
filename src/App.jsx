
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Counter from './components/Counter'
import Container from './components/Container'
import Controls from './components/Controls'
import { useSelector } from 'react-redux'
import PrivacyMessage from './components/PrivacyMessage'


function App() {

  const privacy = useSelector(store => store.privacy)

  console.log(privacy)

  return (
    <>
      <Container>
        {privacy ? <PrivacyMessage></PrivacyMessage> : <Counter></Counter>}

        <Controls></Controls>
      </Container>
    </>
  )
}

export default App
