import React,{createContext, useEffect, useState} from 'react'
const AppContext = createContext()

const AppProvider = ({children}) => {
    const [ loading, SetLoading ] = useState(false)
    const [ currNews, setCurrNews ] = useState('')
    useEffect(() =>{
        document.addEventListener('scroll',() => {
        let getTop = document.body.getBoundingClientRect().top
        if (getTop < 0 ){
          document.querySelector('.navbar').classList.add('scroll-nav')
        }
        else {
          document.querySelector('.navbar').classList.remove('scroll-nav')
        }
      })
    },[])
    const handleClickNews = (id) => {
       
        setCurrNews(id)
    }
    useEffect(() => {
        document.querySelector('.gotop-link').addEventListener('click', () =>{
            document.querySelector('#root').scrollIntoView({
                behavior:'smooth',
                block: 'start'
            })
        })
    },[])
    return (
        <AppContext.Provider value={{handleClickNews,currNews}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppProvider, AppContext}