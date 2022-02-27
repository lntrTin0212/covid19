import React,{useContext,useState } from 'react'
import { AppContext } from '../context'
import data from '../api/blogData'
import {Link } from 'react-router-dom'
import {MdOutlineKeyboardBackspace } from 'react-icons/md'
import { useEffect } from 'react'
import { get } from 'lodash'

function NewsDetail() {
  const { currNews, handleClickNews } = useContext(AppContext)
  const [ related, SetRelated ] = useState()
  
  useEffect(()=>{
    data.map(item => {
      if(item.id === currNews)
        SetRelated(item.type)
    })
  },[currNews])

    useEffect(() => {
        document.querySelector('#root').scrollIntoView({
            behavior:'smooth',
            block: 'start'
        })

    },[])
  return (
    data.map(item => {
      if (item.id === currNews) {
        return (

          // OPEN DETAIL
          <div key={item.id} className='newsDetail-container'>
            <div className="newsDetail-content">
              <div className='back-btn'>
                <Link to='/news' className='back-link'>
                  <span className='back-link-icon'>
                    <MdOutlineKeyboardBackspace className='link-icon'/>
                    </span>
                    <span className='back-link-text'>
                      TRỞ VỀ
                    </span>
                </Link>
              </div>
              <div className='news'>
                <strong>{item.type}</strong>
                <h1>{item.title}</h1>
                <div className='news-detail-wrapper'>
                    <p className="detail-desc">{item.desc}</p>
                    <div className="news-detail-img">
                      <img src={item.thumbnail} alt="" className='' />
                    </div>
                    <div className="detail-main">
                      {item.content.map((pa,index) => 
                        <p key={index}>{pa}</p>
                      )}
                    </div>
                </div>
              </div>
            </div>

            {/* OPEN MORE */}

            <div className="newsDetail-more">
              <h3>tin liên quan</h3>
               {data.map((filt) => {
                  if (filt.type === related && filt.id !== currNews) {
                    return(
                      <div
                        key={filt.id}
                        className="newsDetail-bonus"
                      >
                        <Link
                            to={`/newsDetail/${filt.id}`}
                            className='news-link newsDetail-link'
                            onClick={() => {handleClickNews(filt.id)}}
                        >
                          <div className="newsDetail-item-img">
                              <img src={filt.thumbnail} alt={filt.title} />
                          </div>
                          <div className="newsDetail-item-info">
                              <p>{filt.title}</p>
                          </div>
                        </Link>
                      </div>
                    )
                  }}
               )}
            </div>
          </div>
        )
      }
    })
  )

}

export default NewsDetail