
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Add from './Add';
import Edit from './Edit';
import View from './View';
import Pnf from './Pnf';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/add' element={<Add></Add>}></Route>
        <Route path='/edit/:id' element={<Edit></Edit>}></Route>
        <Route path='/view/:id' element={<View></View>}></Route>
        <Route path='*' element={<Pnf></Pnf>}></Route>
      </Routes>
      <br /><br />
      <Footer></Footer>
    </div>
  );
}

export default App;
