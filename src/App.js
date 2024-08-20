import Header from './components/Header';
import { ProductsLists } from './components/ProductItem';
import { ProductsContainer } from './styles/ProductsContainer';

function App() {
  return (
    <div >
      <Header></Header>

      <ProductsContainer>
        <ProductsLists products={[]}></ProductsLists>
      </ProductsContainer>
    </div>
  );
}

export default App;
