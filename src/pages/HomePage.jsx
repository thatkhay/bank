import React from 'react'
import Logo from '../images/citi-logo.svg'
import Cards from '../images/cards.png'
import { Container } from '@mui/material'

const HomePage = () => {
    const navList = ['Credit Card', 'Banking', 'Lending', 'Investing', 'Wealth Management', 'Open Account']
  return (
    <div >
    <div  style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '.5rem 3rem'}}>
        <div>
         <img src={Logo} alt="citi-logo" />
        </div>
      
        <div style={{display: 'flex', width: '15rem', justifyContent: 'space-between'}}>
        <h3 style={{fontWeight: 'lighter', color: 'gray', fontSize: '1rem' }}>ATM / BRANCH</h3>
        <h3 style={{fontWeight: 'lighter', color: 'gray', fontSize: '1rem' }}>ESPANYOL</h3>
        </div>


    </div>
   <div
  style={{
    backgroundColor: 'rgb(244, 269, 265)',
    width: '100%',
    height: '3rem',
    boxShadow: '0 8px 6px -6px rgba(0, 0, 0, 0.1), 0 -8px 6px -6px rgba(0, 0, 0, 0.1)',
    justifyContent: 'space-between', 
    display: 'flex',
     alignItems: 'center',
   
  }}
>
    <ul style={{justifyContent: 'space-between', display: 'flex', alignItems: 'center',   width: '60%', listStyle: 'none'}}>
        {navList.map((list, index) => (
            <li key={index} style={{color: 'blue', fontSize: '1rem', fontWeight: 500, cursor: 'pointer'}}>{list}</li>
        ))}
       
    </ul>
     <p style={{color: 'blue',  fontWeight: 500, marginRight: '3rem'}}>How can we help?</p>
</div>
<Container style={{ display: 'flex', alignItems: 'center' , marginTop: '3rem' , justifyContent: 'space-between', width: '100%'}}>
    <div style={{ marginLeft: '-5rem'}}>
 <p style={{ letterSpacing: '2px'}}>CITI<span>&reg;</span>  CREDIT CARDS</p>
 <p style={{ fontWeight: 700, width: '30rem' , fontSize: '2.7rem', marginTop: '-1rem'}}>Choose the right Citi® credit card for you</p>
 <p style={{width: '30rem', marginTop: '-1.5rem'}}>Whether you want Cash Back, Great Airline Miles, Rewards for Costco Members, or a Low Intro Rate, the choice is all yours.</p>

 </div>
 <div>
    <img src={Cards} alt=""  style={{height: '10rem', width: '20rem', marginLeft: '-10rem'}}/>
 </div>

 <div style={{ boxShadow: '0 8px 6px -6px rgba(0, 0, 0, 0.1), 0 -8px 6px -6px rgba(0, 0, 0, 0.1)', borderRadius: '.7rem', height: '18rem' , width: '25rem',  marginRight: '-6rem'}}> 
<form action="" style={{padding: '1rem'}}>
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
     <label htmlFor="useId">User ID</label>
    <input type="text" style={{height: '2.5rem', borderRadius: '5px', display: 'flex', alignItems: 'center', border: '1px solid gray'}}/>
        </div>

<div style={{ display: 'flex', flexDirection: 'column' }}>
<label htmlFor="password">Password</label>
    <input type="text" style={{height: '2.5rem', borderRadius: '5px', display: 'flex', alignItems: 'center', border: '1px solid gray'}}/>
</div>
    
    </div>

</form>
 </div>
</Container>


     </div>
  )
}

export default HomePage