import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Signup from './Admin/Signup';
import Signin from './Admin/Signin';
import Dashboard from './Admin/Dashboard';
import AddColls from './Admin/AddColls';
import EditColls from './Admin/EditColls';
import ViewColls from './Pages/ViewColls';

function App() {
  return (
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Signup' element={<Signup/>}/>
        <Route exact path='/Signin' element={<Signin/>}/>
        <Route exact path='/Dashboard' element={<Dashboard/>}/>
        <Route exact path='/Dashboard/edit/:productId' element={<EditColls/>}/>
        <Route exact path='/Dashboard/add' element={<AddColls/>}/>
        <Route exact path='/View/:productId' element={<ViewColls/>}/>
      </Routes>
  );
}

export default App;
