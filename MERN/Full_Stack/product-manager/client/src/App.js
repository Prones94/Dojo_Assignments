import './App.css';

import { Redirect, Router , Link} from "@reach/router"
import { Container } from '@material-ui/core'

import NotFound from './views/NotFound'
import NewProduct from './views/NewProduct';
import Products from './views/Products'
import Product from './views/Product';
import { EditProduct } from './views/EditProduct';

function App() {
  return (
    <Container maxWidth="md">
    <nav>
      <Link to="/products" >
        <span>Products</span>
      </Link>
      &nbsp;
      <Link to="/products/new">
        <span>New Products</span>
      </Link>
    </nav>
    <Router>
      <Redirect from="/" to="/products" noThrow="true"/>
      <NewProduct path="/products/new" />
      <Products path="/products"/>
      <Product path="products/:id"/>
      <EditProduct path="/products/:id/edit" />
      <NotFound default />
    </Router>
    </Container>
  );
}

export default App;
