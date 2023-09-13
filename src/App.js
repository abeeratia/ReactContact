import Home from './Component/Home/Home';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Portofolio from './Component/Portofolio/Portofolio';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Layout from './Component/Layout/Layout';

const root =createHashRouter([
    {path:'', element:<Layout/>, children:[
      {index: true, element:<Home/>},
      {path: 'home', element:<Home/>},
      {path:'about', element:<About/>},
      {path:'protfolio', element:<Portofolio/>},
      {path:'contact', element:<Contact/>},
    
      {path:'*', element: <div className='bg-success d-flex vh-100 justify-content-center align-items-center'>
         <h2 className='text-white fs-2'>Not Found The Page</h2>
      </div>}
  
    ]},
  
  
  ]);
  
  

function App() {
  return <>
  <RouterProvider router = {root}/>
 

    </>

}

export default App;
