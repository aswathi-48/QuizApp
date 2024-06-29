
import '../styles/App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import { CheckUserExist } from '../helper/helper';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/quiz',
    element: <Quiz />
  },
  {
    path: '/result',
    element:  <Result /> 
  },
 
])

function App() {
  return (
    <div>

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;