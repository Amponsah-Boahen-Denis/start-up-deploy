import React from 'react'
import './motor.scss'
function One() {
    return (
        <div className='motor'>
            <div className='item'>
            <h1>MOTOS AUTO PARTS</h1>
            <h2>This is a small type of business that you can start by 
                buying faulty vehicles to remove their parts and market
                them to the nearest mechanics for sale.
            </h2>

            <div className='body'>

            <ul className='factors'>
               <u><b>Factors to consider</b></u> 
                <li>Nearless to mechanic industry</li>
                <li>source of faulty vehicles</li>
                <li>Availability of tools</li>
                <li>where to exhibite</li>
            </ul>
            <p>
                <u><h3>How to advertise</h3></u>
You should try to visit the mechanics that are close to you and inform
them about your car slithly used auto parts for them to be aware of 
your goods.This will make them come to your shop for car auto parts 
any time they are in need of some.
            </p>
            </div>
            <h2>These are some motor parts you may remove from the faulty vehicles if they ain't damge.</h2>
            </div>
           
            <div className='im1'>
<div className='examp2'>
    
<img src={require('./fotos/motor1.png').default} alt="" />
    <img src={require('./fotos/motor2.png').default} alt="" />
    <img src={require('./fotos/motor3.png').default} alt="" />
    <img src={require('./fotos/motor4.png').default} alt="" />
    <img src={require('./fotos/motor5.png').default} alt="" />
    <img src={require('./fotos/motor6.png').default} alt="" />
    <img src={require('./fotos/motor7.png').default} alt="" />
    <img src={require('./fotos/motor8.png').default} alt="" />
    <img src={require('./fotos/motor9.png').default} alt="" />
    <img src={require('./fotos/motor10.png').default} alt="" />
    <img src={require('./fotos/motor11.png').default} alt="" />
    <img src={require('./fotos/motor12.png').default} alt="" />
</div>
</div>
            </div>
           

    )
}

export default One;
