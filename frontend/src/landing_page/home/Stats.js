import React from 'react';

function Stats() {
    return ( 
        <div className='container  p-3'>
          <div className='row p-5'>
            <div className='col-6 p-5'>
                <h2 className='mb-5'>Trust with confidence</h2>
                <h4 className='mb-3'>No spam or gimmicks</h4>
                <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push <br/> notifications. 
                  High quality apps that you use at your <br/> pace, the way you like.</p>

                <h4 className='mt-4 mb-3'>The Stock Trading universe</h4>
                <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments <br/> in 30+ fintech startups
                   offer you tailored services<br/> specific to your needs.</p>

                <h4 className='mt-4 mb-3'>Do better with money</h4>
                <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just <br/> facilitate transactions,
                   but actively help you do better<br/> with your money.</p>

            </div>
            <div className='col-6 p-5'>
                <img src="media/images/ecosystem.png" style={{width:"120%"}}></img>
            <div className='text-center '>
            <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
            <a href=''style={{textDecoration:"none"}}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
        </div>
        </div>
     );
}

export default Stats;