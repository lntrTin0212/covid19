import React, { useState, useEffect, useContext } from 'react'
import data from '../api/blogData'
import Highlight from '../components/Highlight'
import { getReportByCountry } from '../api'
import { Link } from 'react-router-dom'
import { AppContext } from '../context' 
function News() {
    const { handleClickNews } = useContext(AppContext)
    const [ news, setNews] = useState(data)
    const [ currData, SetCurrData ] = useState(data)
    const [ type, setType ] = useState('')
    const [ hightlight, setHightlight ] = useState('')
    useEffect(() => {
        getReportByCountry('VN')
            .then(res => {
                res.data.pop()
                setHightlight(res.data)
            })
        }
    ,[])
    
    const handleClick = (data) => {
        SetCurrData([])
        setType(data)
        if(data === 'Tất cả') {
            SetCurrData(news)
        }
        else {
            news.map((item) => {
                if (item.type === data ){
                    SetCurrData(prev =>{
                        return [
                            ...prev,
                            item,
                        ]
                    } )
                }
            })
        }
    }
  return (
    <div className='news-container'>
        <div className="testing">
        <Highlight report={hightlight}/>

        </div>
        <nav className='news-nav'>
             <ul className="new-nav-list">
                <li className='new-nav-item'>
                    <a href="#" onClick={(e) => handleClick(e.target.innerHTML)}>
                     Tất cả
                    </a>
                </li>
                 <li className='new-nav-item'>
                    <a href="#" onClick={(e) =>handleClick(e.target.innerHTML)}>
                     Vaccine - Tiêm chủng
                    </a>
                </li>
                 <li className='new-nav-item'>
                    <a href="#" onClick={(e) =>handleClick(e.target.innerHTML)}>
                     Chỉ đạo chống dịch
                    </a></li>
                 <li className='new-nav-item'>
                    <a href="#" onClick={(e) =>handleClick(e.target.innerHTML)}>
                     Dự phòng - điều trị
                    </a>
                </li>                 
             </ul>
        </nav>
        <div className="news-breadcrum">
            <h1>{type ? type : 'tất cả'}</h1>
            <span className='breadcrum-icon'>&gt;</span>
        </div>
        <div className="news-all">
            {currData.map((item,index) => 
                <div key={item.id} className="news-item">
                    <Link
                        to={`/newsDetail/${item.id}`}
                        className='news-link'
                        onClick={() => handleClickNews(item.id)}
                    >
                        <div className="news-item-img">
                            <img src={item.thumbnail} alt={item.title} />
                        </div>
                        <div className="news-item-info">
                            <h1>{item.title}</h1>
                            <p>{item.desc}</p> 
                        </div>
                    </Link>
                </div>
            )}
        </div>
    </div>
  )
}

export default News