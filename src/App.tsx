import { RecoilRoot } from 'recoil';
import './App.css';
import Banner from './components/Banner';
import Section from './components/Section';
import { Product } from './interfaces/Product';

const combosStatic: Product[] = [
  {
      "id": 1,
      "name": "Combo Hamburguesa static",
      "price": {
          "currency": "USD",
          "amount": 9.99
      }
  },
  {
      "id": 2,
      "name": "Combo Hamburguesa Doble static",
      "price": {
          "currency": "USD",
          "amount": 10.99
      }
  },
  {
      "id": 3,
      "name": "Combo Hamburguesa con queso static",
      "price": {
          "currency": "USD",
          "amount": 11.49
      }
  },
  {
      "id": 4,
      "name": "Combo Hamburguesa doble con queso static",
      "price": {
          "currency": "USD",
          "amount": 15.49
      }
  }
]

function App() {
  return (
    <RecoilRoot>
      <div className="container">
        <Banner />
        <Section data={combosStatic}/>
        <Section data={combosStatic}/>
        <Section data={combosStatic}/>
      </div>
    </RecoilRoot>
  );
}

export default App;
