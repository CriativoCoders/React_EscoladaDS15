import { Route, Routes } from 'react-router-dom';
import { inicial } from '../Paginas/Inicial'
import { Login } from '../paginas/Login'

export function Rotas(){
    return(
        <Routes>
            <Route path='/' element={<Login/>}/>

            <Route path='/inicial' element={<inicial/>}>
                <Route index element={<Menu/>}/>
            </Route>
        </Routes>
    )
}