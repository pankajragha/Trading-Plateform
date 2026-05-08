import React from 'react';

function Education() {
    return (
    <div className='container mt-5'>if
      <div className='row'>
        <div className='col-6 mt-5'>
          <img src='media/images/education.svg' style={{height:"85%"}}/>
        </div>
        <div className='col-6 mt-5'>
        <h3 className='fs-1 mb-4'>Free and open market education</h3>
                    <p>Varsity, the largest online stock market education book in the world <br/>covering everything
                     from the basics to advanced trading.</p>
                        <a href=''style={{textDecoration:"none"}}>Varsity <i class="fa-solid fa-arrow-right"></i></a>


                        <p className='mt-4'>TradingQ&A, the most active trading and investment community in <br/> India for 
                        all your market related queries.</p>
                        <a href=''style={{textDecoration:"none"}}>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
      );
}

export default Education;