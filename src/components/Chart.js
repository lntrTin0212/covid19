import HighchartsReact from 'highcharts-react-official'
import React, { useState, useEffect } from 'react'
import Highcharts, { color } from 'highcharts'
import moment from 'moment'
import { Button, ButtonGroup } from '@material-ui/core'


const handlePerday = (item,index) => {
  if (index === 0) {
    if ( item.length <= 30)
    return item[index].Confirmed - item[index].Active
    else 
    return item[0].Confirmed
      
  }
  else {
    return item[index].Confirmed - item[index - 1].Confirmed
  } 
}

const generateOptions = (data) => {
    const categories = data.map((item) => moment(item.Date).format('DD/MM/YYYY'));
    return {
      chart: {
        height: 500,
        styledMode: true

      },
      title: {
        text: 'Tổng ca nhiễm',
      },
      xAxis: {
        categories: categories,
        crosshair: true,
      },
      
      yAxis: {
        min: 0,
        title: {
          text: null,
        },
      },
      colors: ['#F3585B','#351c4a'],
      tooltip: {
        // headerFormat: '<span style="font-size:10px;color:black">{point.key}</span><table>',
        // pointFormat:
        //   '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        //   '<td style="padding:0;color:black"><b>{point.y} caasascssssssssssssssssssssssssssssssa/b></td></tr>',
        // footerFormat: '</table>',
        shared: true, 
          useHTML: true,
          
       
        //   crosshair: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      
      },
      series: [
        {
          name: 'Tổng Ca nhiễm',
          data: data.map((item) => item.Confirmed),
          
          // perDay: data.map((item) => item.Confirmed - item.Active),
        },
        {
          name: 'Trong ngày',
          data: data.map((item,index) => handlePerday(data,index)),
        },
      ],
    }
  }

function Chart({data}) {
    const [ reportType, setReportType ] = useState('all')
    const [ options, setOptions] = useState({})
    useEffect (() => {
        let customData = []
        switch(reportType) {
            case 'all':
                customData = data
                break
            case '30':
                customData = data.slice(data.length - 30)
                break
            case '7':
                customData = data.slice(data.length - 7)
                break
            default:
                customData = data 
                break
        }

        setOptions(generateOptions(customData))
    },[data,reportType])
  return (
      <>
        <ButtonGroup size='small' style={{display: 'flex', justifyContent:'flex-end'}}>
            <Button
                
                // className={reportType === 'all' ? 'selected type' : 'type'}
                color ={ reportType === 'all' ? 'secondary' : ''}
                onClick={() => setReportType('all')}
                >
                    Tất cả</Button>
            <Button
                // className={reportType === '30' ? 'selected type' : 'type'}
                color ={ reportType === '30' ? 'secondary' : ''}
                onClick={() => setReportType('30')}
                >
                    30 ngày</Button>
            <Button
                // className={reportType === '7' ? 'selected type' : 'type'}
                color ={ reportType === '7' ? 'secondary' : ''}
                onClick={() => setReportType('7')}
                >
                    7 ngày</Button>
        </ButtonGroup>
        <HighchartsReact 
            highcharts={Highcharts}
            options={
                options
            }
        />
      </>
  )
}

export default Chart