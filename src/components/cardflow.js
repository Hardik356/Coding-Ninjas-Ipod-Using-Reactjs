import React from 'react'


const CardFlow =(props)=>
{
    const{ handleMenuClick}=props;

    // function to handle menu click 
    const handleClick=()=>
    {
        handleMenuClick();
    }
    return (
        <div>
        <div className='settings-div'>

           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <span className='cardflow-title'>CardFlow</span>
            

        </div>
         <div className='ipod-wheel' >
         ..
     <div className='menu'>
             <button className='btn' onClick={handleClick}>MENU</button>
     </div>
     <button className='enter' ></button>
     

     </div>
     </div>
    )
}

export default CardFlow;