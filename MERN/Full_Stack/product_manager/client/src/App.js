import { Router } from '@reach/router'
import './App.css';
import Container from '@material-ui/core/Container'
import ProductForm from './views/ProductForm';

function App() {
  return (
    <Container maxWidth="md">
      <Router>
        <Redirect from="/" to="products" noThrow="true"/>
        <ProductForm path="/" />
      </Router>
    </Container>
  );
}

export default App;
