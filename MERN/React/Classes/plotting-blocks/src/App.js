import './App.css';
import Header from './component/Header/Header'
import Navigation from './component/Navigation/Navigation'
import Main from './component/Main/Main'
import SubContents from './component/SubContents/SubContents'
import Advertisement from './component/Advertisement/Advertisement'

export default function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Main>
          <SubContents />
          <SubContents /> 
          <SubContents />
          <Advertisement />
      </Main> 
    </div>
  );
}

