import { RecoilRoot } from 'recoil';
import { GlobalStyle } from './globalStyles';
import Layout from './Layout';


function App() {

  return (
    <RecoilRoot>
      <GlobalStyle/>
      <Layout/>
    </RecoilRoot>
  );
}

export default App;
