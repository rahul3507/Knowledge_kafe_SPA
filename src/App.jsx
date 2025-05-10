

import './App.css'
import { Header } from './components/Header/Header'
import { Blogs } from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  return (
    <>
     <Header/>

     <div className='flex'>
      <Blogs/>
      <Bookmarks/>
     </div>
     
    </>
  )
}

export default App
