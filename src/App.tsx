import { RecoilRoot } from 'recoil';
import './App.css';
import Banner from './components/Banner';
import Section from './components/Section';
import combo from './assets/logos/combo.svg'
import { SectionList } from './interfaces/SectionList';

const combosStatic: SectionList = {
  "id": 1,
  "products": [
      {
          "id": 1,
          "name": "Combo Hamburguesa",
          "image": "assets/images/burger.svg",
          "price": {
              "currency": "USD",
              "amount": 9.99
          }
      },
      {
          "id": 2,
          "name": "Combo Hamburguesa Doble",
          "image": "assets/images/double-burger.svg",
          "price": {
              "currency": "USD",
              "amount": 10.99
          }
      },
      {
          "id": 3,
          "name": "Combo Hamburguesa con queso",
          "image": "assets/images/burger-cheese.svg",
          "price": {
              "currency": "USD",
              "amount": 11.49
          }
      },
      {
          "id": 4,
          "name": "Combo Hamburguesa doble con queso",
          "image": "assets/images/double-burger-cheese.svg",
          "price": {
              "currency": "USD",
              "amount": 15.49
          }
      }
  ],
  "logo": "assets/logos/combo.svg"
}

function App() {
  return (
    <RecoilRoot>
      <div className="container">
        <Banner />
        <Section key="1" data={combosStatic}/>
        <Section key="2" data={combosStatic}/>
        <Section key="3" data={combosStatic}/>
      </div>
    </RecoilRoot>
  );
}

export default App;
