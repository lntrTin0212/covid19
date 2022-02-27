import axios from "axios"

export const getCountries = () =>
        axios.get('https://api.covid19api.com/countries')

export const getReportByCountry = (data) => 
        axios.get(`https://api.covid19api.com/dayone/country/${data}`)

// export const getMapDataByCountryId = (countryId) =>{
//         let importString = `@highcharts/map-collection/countries/${countryId}/${countryId}-all.geo.json`
//         // console.log(importString)
//         import(importString);
// }