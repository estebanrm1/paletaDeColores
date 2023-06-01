
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import './App.css'
import FormularioColores from './components/FormularioColores';

function App() {

  return (
    <>
      <Container className='text-center'>
        <h1>Paleta de Colores 🎨</h1>
        <hr />
        <FormularioColores></FormularioColores>
      </Container>
    </>
  )
}

export default App
