import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductLandingPage from './pages/ProductLandingPage'


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ProductLandingPage />} />
            </Routes>
        </BrowserRouter>
    )
}


export default App;