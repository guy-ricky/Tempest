import React from 'react'
import {Container,Button, Card, CardMedia, CardContent, CardActions} from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import {Link} from 'react-router-dom'
import ORG from '../assets/orga.png'


const Cart = () => {

  return (
      <Container component="main" className="bg-gray-300 rounded-md my-6">
        <h1 className='text-center font-bold text-md my-4'>Your Cart</h1>
        <Grid container spacing={3}>
          <Grid xs={12} sm={4}>
              <Card sx={{ width: 320 }} elevation={24}>
              <CardMedia component="img" height="60" image={ORG} alt='item' />
              <CardContent sx={{display:"flex", justifyContent:"space-between"}}>
                <h1> Organizers</h1>
                <h1> 1500</h1>
              </CardContent>
              <CardActions sx={{justifyContent: "space-between"}}>
          <div className="flex items-center">
            <Button type="button" size="small">-</Button>
          <h1>&nbsp;2&nbsp;</h1>
          <Button type="button" size="small">+</Button>
        </div>
        <Button variant="contained" type="button" color="secondary">Remove</Button>
      </CardActions>
              </Card>    
          </Grid>
          <Grid xs={12} sm={4}>
              <Card sx={{ width: 320 }} elevation={24}>
              <CardMedia component="img" height="60" image={ORG} alt='item' />
              <CardContent sx={{display:"flex", justifyContent:"space-between"}}>
                <h1> Organizers</h1>
                <h1> 1500</h1>
              </CardContent>
              <CardActions sx={{justifyContent: "space-between"}}>
          <div className="flex items-center">
            <Button type="button" size="small">-</Button>
          <h1>&nbsp;2&nbsp;</h1>
          <Button type="button" size="small">+</Button>
        </div>
        <Button variant="contained" type="button" color="secondary">Remove</Button>
      </CardActions>
              </Card>    
          </Grid>

          
        </Grid>
        <div className='flex  items-center mt-[10%] w-[100%] justify-between py-2'>
         <h1>Subtotal: Kshs 3000</h1>
        <div className='flex gap-3'>
          <Button type="button" variant="contained" color="secondary">Empty cart</Button>
          <Button component={Link} to="/checkout" type="button" variant="contained" color="primary">Checkout</Button>
        </div>
      </div>
      </Container>
  )
}

export default Cart