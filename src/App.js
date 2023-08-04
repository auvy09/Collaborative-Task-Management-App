
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Router';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <div className='max-w-screen-xl mx-auto'>
      <RouterProvider router={router}
      ></RouterProvider>
      <Toaster position='top-center'></Toaster>
    </div>
  );
}

export default App;
