import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Login} from '../components/Login';

export const AppRouter = () => {
    return (
       <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login />}/>
          </Routes>
       </BrowserRouter>
    )
}
