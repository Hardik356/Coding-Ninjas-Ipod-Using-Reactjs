import React from 'react'


const Game =(props)=>
{
    const{ handleMenuClick}=props;
    // function to handle menu click 
    const handleClick=()=>
    {
        handleMenuClick();
    }
    return (<div className='card2'>
        {/* rendering games div  */}
        <div className='settings-div'>
             <span className='title-center'>Game</span>
            <div className='game'>
           
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

export default Game;