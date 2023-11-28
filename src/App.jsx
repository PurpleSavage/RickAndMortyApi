import {BrowserRouter,Routes,Route} from "react-router-dom"
import Inicio from "./Layouts/Inicio"
import Home from "./Layouts/Home"
import Characters from "./pages/Characters"
import Episodes from "./pages/Episodes"
import Location from "./pages/Location"
function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Inicio/>}/>
        <Route path="/home" element={<Home/>}>
          <Route path='characters'element={<Characters/>}/>
          <Route path='episodes'element={<Episodes/>}/>
          <Route path='location'element={<Location/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
