import React from 'react';

class Card extends React.Component
{

    // function to handle wheel rotation
    handleWheelClick=(e)=>
    {
        const {handleZesture}=this.props;
        handleZesture(e);
    }

    // function to handle menu click 
    handlemenuClick=()=>
    {
        const {handleMenuClick}=this.props;
        handleMenuClick();
    }

    // function to hanlde enter click 
    handleEnterclick=()=>
    {
        const{handleClick}=this.props;
        handleClick();
    }
    render()
    {
        const {showCardflow,
            showGame,
            showMusic,
            showSetting,

            }=this.props;
         
        return (
            <div>

                {/* card div  */}
            <div className='card'>
                <p className='title'>Ipod.js</p>
                <div className={`card-list ${showCardflow ?'active':''}`} >
                    cardflow
                </div>
                <div className={`card-list ${showMusic ?'active':''}`}>
                    Music
                </div>
                <div className={`card-list ${showGame ?'active':''}`}>
                    Game
                </div>
                <div className={`card-list ${showSetting ?'active':''}`}>
                    Settings
                </div>
            </div>

            {/* wheel div  */}
            <div className='ipod-wheel' onClick={this.handleWheelClick}>
                         ..
                     <div className='menu'>
                             <button className='btn'onClick={this.handlemenuClick}>MENU</button>
                     </div>
                     <button className='enter' onClick={this.handleEnterclick}> </button>
                     
                     
         
                     </div>
            </div>
        )
    }
}


export default Card;