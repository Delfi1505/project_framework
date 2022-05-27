import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import User from './pages/user';
import Produk from './pages/produk';
import Kontak from './pages/kontak';
import Histori from './pages/histori'
import Testimoni from './pages/testimoni';
import Navbar from './component/navbar';
// import Cart from '.pages/cart';
//import Pegawai from './pages/pegawai'


import './App.css';

function App() {
  return (
          <div>


          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/user" component={User}></Route>
            <Route path="/produk" component={Produk}></Route>
            <Route path="/kontak" component={Kontak}></Route>
            <Route path="/histori" component={Histori}></Route>
            <Route path="/testimoni" component={Testimoni}></Route>
            {/* <Route path="/cart" component={Cart}></Route> */}
            {/*<Route path="/pegawai" component={Pegawai}></Route>*/}
          </Switch>

</div>
      
  );
}

export default App;
