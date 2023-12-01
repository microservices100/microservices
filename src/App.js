import SideMenu from './layout/sidemenu/SideMenu';
import Login from './pages/login/Login';
import Sidebar from './layout/sidemenu/sidebar';

function App() {
  return (
    <div className="App">
      {/* <SideMenu/> */}
      <Sidebar/>
      <Login/>
    </div>
  );
}

export default App;
