import React, { Component } from 'react';
import  x from "../../images/avataaars.svg"
class Home extends Component {
    render() {
        return (
            <>
             <div className='bg-success'>
                
                <div className="container text-center">

                   <div >
                  <div className="col-md-12 p-5">
                  <img className='Imag' src={x} alt="laugh boy" />
                    <h1>START FRAMEWORK</h1>
                    <div className='d-flex justify-content-center align-items-center '>
                <div className="line">  </div>
                <i className="fa-solid fa-star text-white"></i>
                <div className="line"> </div>
              </div>
                    <p>2215 John Daniel Drive</p>
                  </div>
                  </div>
                </div>
                
                
                </div>  
            </>
        );
    }
}

export default Home;