import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ToDoList from './components/toDoList';
import Login from './authentication/Login';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './authentication/UserSlice';
import { auth } from './firebase';
import { useEffect } from 'react';



function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch(
          login({uid: authUser.uid,
            email:authUser.email
          })
        )
      }
      else {
        dispatch(logout());
      }
    })
  }, [dispatch])


  return (
    <div className="App">
      <div>
        <Router>
          <Routes>
            <Route exact path={user?'/':'/auth'} Component={user? ToDoList : Login} />
          
            <Route exact path='/' Component={ToDoList} />
        
          </Routes>
        </Router>
      </div>
      
    </div>
  );
}

export default App;
