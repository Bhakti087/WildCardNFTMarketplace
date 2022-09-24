import { Routes, Route } from 'react-router-dom'

import Home from '../components/Home/Home'
const Paths = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
    </Routes>
  )
}
export default Paths
