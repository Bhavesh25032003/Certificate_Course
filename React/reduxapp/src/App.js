import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Header from './header';
import { myStore } from './redux/config';
import { Provider } from 'react-redux';

let routerPaths = createBrowserRouter([
  {"path":"/home","element":<Home/>},
  {"path":"/about","element":<About/>},
  {"path":"/contact","element":<Contact/>},
])
function App() {
  return (
    <Provider store = {myStore}>
      <div>
          <RouterProvider router = {routerPaths} />
      </div>
    </Provider>
  );
}

export default App;
