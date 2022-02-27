import React from 'react'
import About from '../page/About'
import Contagion from '../page/Contagion'
import Symtoms from '../page/Symtoms'
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Prevent from '../page/Prevent'
import News from '../page/News'
import NewsDetail from '../page/NewsDetail'
import Tensor from '../page/Tensor'
import ComingSoon from '../page/ComingSoon'
function Content() {
  return (
    <>
      <Routes>
        <Route index path='/covid19' element={<About />}/>
        <Route path='tensor' element={<Tensor />} />
        <Route path='symtom' element={<Symtoms />}/>
        <Route path='contagion' element={<Contagion />}/>
        <Route path='prevent' element={<Prevent />} />
        <Route path='news' element={<News />}/>
        <Route path='newsDetail/:id' element={<NewsDetail />} />
        <Route path='coming' element={<ComingSoon />} />
      </Routes>
    </>
  )
} 

export default Content