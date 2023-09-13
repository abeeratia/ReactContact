import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
   
<div className="contact mt-4">
      <div className="container ">
        <div className="row">
          <div className="col-md-12">
            <div className='d-flex justify-content-center align-items-center flex-column'>
              <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>CONATCT SECTION</h2>
              <div className='d-flex align-items-center justify-content-center mb-3'>
                <div className="line1"></div>
                <i className='fa-solid fa-star mx-3'></i>
                <div className="line1"></div>
              </div>
            </div>
            <div className="form w-50 mx-auto mt-5 p-3">
      
              <input type="text" placeholder='userName' name='userName' className='form-control mb-5 border-0 border-bottom py-3  ' />
              <input type="" placeholder='userAge' name='userAge' className='form-control mb-5 border-0 border-bottom py-3  ' />
              <input type="text" placeholder='userEmail' name='userEmail' className='form-control mb-5 border-0 border-bottom py-3  ' />
              <input type="password" placeholder='userPassword' name='userPassword' className='form-control mb-4 border-0 border-bottom py-3 ' />
              <button className='btn btn-info  text-black mb-3'>send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>



            
        );
    }
}

export default Contact;