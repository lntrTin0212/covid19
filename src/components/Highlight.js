import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import React from 'react'

function Highlight({report}) {
    const data = report && report.length ? report[report.length - 1] : []
    const dataPrev = report && report.length ? report[report.length - 2] : []
    const summary = [
        {
            id:1,
            title:'Số ca nhiễm',
            count: data.Confirmed,
            type: 'confirmed',
            previous: data.Confirmed - dataPrev.Confirmed
        },
        {
            id:2,
            title:'Khỏi bệnh',
            count: data.Recovered,
            type: 'recoverd',
            previous: data.Recovered - dataPrev.Recovered
        },
        {
            id:3,
            title:'Tử vong',
            count: data.Deaths,
            type: 'death',
            previous: data.Deaths - dataPrev.Deaths
        }
    ]
  return (
    <Grid container spacing={3}>
        {summary.map((item,index) => 
            <Grid item sm={4} xs={12} key={index}>
                <Card className={item.type}>
                    <CardContent>
                        <Typography
                            className='title-show'
                            component='p'
                            variant='body2'
                        >
                            {item.title}
                        </Typography>
                        <Typography
                            className='count-show'
                            component='span'
                            variant='body2'
                        >
                            {item.count ? Intl.NumberFormat('en-US').format(item.count) : '0'}
                        </Typography>
                        <br/>
                        <Typography
                            className='count-day'
                            component='span'
                            variant='body2'
                        >
                            24 giờ qua: + {item.previous ? Intl.NumberFormat('en-US').format(item.previous) : '0'}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        )}
    </Grid>
  )
}

export default Highlight