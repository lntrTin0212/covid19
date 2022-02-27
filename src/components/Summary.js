import { Grid} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Chart from './Chart'
import Map from './Map'
import {getMapDataByCountryId} from '../api/index'
import axios from 'axios'
function Summary({report, selectCountryID}) {
    const [mapData, setMapData ] = useState({})

    useEffect(() => {
        if (selectCountryID) {
          // console.log(selectCountryID)
          
          // getMapDataByCountryId(selectCountryID)
          //   .then((res) => {
          //     setMapData(res);
          //   })
          //   .catch((err) => console.log("lỗi rồi chờn đất ơi" ));

          // let importString = `@highcharts/map-collection/countries/${selectCountryID}/${selectCountryID}-all.geo.json`
          // import(importString)
          //   .then(res => {
          //     console.log(res)
          //     return res
          //   })
          //   .then(res => setMapData(res))
          axios.get(`https://code.highcharts.com/mapdata/countries/${selectCountryID}/${selectCountryID}-all.geo.json`)
            .then(res => setMapData(res.data))
        }
      }, [selectCountryID]); 
  return (
    <Grid container spacing={3} className='paddingBot'>
        <Grid item sm={8} xs={12}>
            <Chart data={report}/>
        </Grid>
        <Grid item sm={4} xs={12}>
            <Map mapData={mapData}/>
        </Grid>
    </Grid>
  )
}

export default Summary