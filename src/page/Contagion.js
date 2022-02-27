import React,{useState, useEffect} from 'react'
import CountrySelector from '../components/CountrySelector'
import Summary from '../components/Summary'
import Highlight from '../components/Highlight'
import { getCountries, getReportByCountry } from '../api'
function Contagion() {
    const [countries, setCountries] = useState([])
    const [selectCountryID, setSelectCountryID] = useState('')
    const [report, setReport] = useState([])
    useEffect(() =>{
        getCountries()
            .then(res =>{
                res.data.sort((a,b) => {
                    if (a.Country < b.Country) {
                        return -1
                    }            
                    if (a.Country > b.Country ){
                        return 1
                    }        
                    return 0
                })
                setCountries(res.data)
                setSelectCountryID('vn')
            }
            )
            
    },[])

    const handleOnChange = (e) => {
        setSelectCountryID(e.target.value)
    }
    
    useEffect(() => {
        if (selectCountryID){
            const { Slug } = countries.find(country => country.ISO2.toLowerCase() === selectCountryID)
            getReportByCountry(Slug)
                .then(res => {
                    // console.log(res.data)
                    res.data.pop()
                    // if ()
                    setReport(res.data)
                })
        }
    },[countries, selectCountryID])
  return (
   <div className='chart-container'>
    <CountrySelector
        countries={countries}
        handleOnChange={handleOnChange}
        value={selectCountryID}
    />
    <Highlight report={report}/>
    <Summary report={report} selectCountryID={selectCountryID}/>
   </div>
    )
}

export default Contagion