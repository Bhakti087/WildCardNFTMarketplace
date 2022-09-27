import { Routes, Route } from 'react-router-dom'
import Create from '../components/Create/Create'
import Home from '../components/Home/Home'

const Paths = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Create' element={<Create />} />

    </Routes>
  )
}
export default Paths
