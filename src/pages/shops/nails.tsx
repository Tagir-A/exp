import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {
  Button,
  Grid,
  Container,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core'

import exampleData from '../../shop_data/data.json'

export default function NailsPage(): React.ReactNode {
  console.log(exampleData)
  return (
    <>
      <Head>
        <title>Nails</title>
      </Head>
      <Container>
        <h1>Nails</h1>
        <h2>
          <Button variant='contained' color='primary'>
            <Link href='/'>Back to home</Link>
          </Button>
        </h2>
        <div>Best nails here!</div>
        <Grid container spacing={3} alignItems='stretch' justify='center'>
          {exampleData.map((item) => (
            <Grid item xs={3} key={item.article} style={{ display: 'flex' }}>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography variant='h6'>{item.name}</Typography>
                  </CardContent>
                  <CardMedia image={item.image} style={{ height: '200px' }} />
                </CardActionArea>
                <CardActions>
                  <Button color='primary'>В корзину</Button>
                  <Typography variant='body1'>
                    {item.price_without_discount} ₽
                  </Typography>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}
