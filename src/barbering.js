import React from 'react'
import './barbering.scss'
function Barber() {
    return (
        <div className='barber'>
            <div className='bar'>
            <h1>BARBERING(HAIR CUT)</h1>
           <p>Barbering is any business set up some where weather on 
               the road side or any place that people actually pass so that they would
               come and have their hair cut when it is bushy.Barbering is a very nice business for you if you only know how to
               cut hair.
           </p>
           <div className='barber'>
           <ul id='lb'>
               <b>Factors to consider</b>
               <li>Capital</li>
               <li>vanue</li>
               <li>Barbering Tools</li>
               <li>nearless to busy place</li>

           </ul>
           <ul id='bp'>
            <b>How to advertise</b>
            <p>
                I would advice anyone who want to start this business should
                be close to a busy place,I mean place that people mostly pass.
                Also after that, you need to make barners or sign board for more
                informations. 
            </p>
          </ul>
           </div>
           <h2>Below are some nice hair cut you can shave and some tools you might need.</h2>
            </div>
          
           <div className='im5'>
<div className='examp5'>
    
    <img src={require('./fotos/barber1.png').default} alt="" />
    <img src={require('./fotos/barber2.png').default} alt="" />
    <img src={require('./fotos/barber3.png').default} alt="" />
    <img src={require('./fotos/barber5.png').default} alt="" />
    <img src={require('./fotos/barber6.png').default} alt="" />
    <img src={require('./fotos/barber7.png').default} alt="" />
    <img src={require('./fotos/barber8.png').default} alt="" />
    <img src={require('./fotos/barber9.png').default} alt="" />
    <img src={require('./fotos/barber4.png').default} alt="" />
    
</div>
</div>
        </div>
    )
}

export default Barber;
