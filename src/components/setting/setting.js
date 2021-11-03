import React from 'react'


const Setting =(props)=>
{
    const{ handleMenuClick}=props;

    // function to handle menu click 
    const handleClick=()=>
    {
        handleMenuClick();
    }
    return (
       
        <div className='card2'>
             {/* rendering seetings  div  */}
        <div className='settings-div'>
             <span className='title-center'>Settings </span>
            <div className='settings'>
               
            </div>

        </div>
        {/* rendering wheel div  */}
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

export default Setting