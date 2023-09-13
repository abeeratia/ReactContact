import React, { Component } from 'react';
import x from '../../images/poert1.png';
import y from '../../images/port2.png';
import z from '../../images/port3.png';

class Portofolio extends Component {
    render() {
        return (
            <>

            <div>
                <div className="container">
                    <div className="row">
                    <div className='d-flex justify-content-center align-items-center flex-column'>
                    <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>Portofolio SECTION</h2>
                    <div className='d-flex align-items-center justify-content-center mb-3'>
                <div className="line1"></div>
                <i className='fa-solid fa-star mx-3'></i>
                <div className="line1"></div>
              </div>
            </div>
                   </div>

               
                   <div className="row g-3 mb-2">
                    <div className="col-md-4">
                        <div className='images  w-100 position-relative'>
                        <img className='w-100' src={x} alt="poert1" />
                        <div className="layer w-100 position-absolute d-flex justify-content-center align-items-center ">
                     <i className="text-danger fs-1 fa-solid fa-plus"></i>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='images  w-100 position-relative'>
                        <img className='w-100' src={y} alt="poert1" />
                        <div className="layer w-100 position-absolute d-flex justify-content-center align-items-center ">
                        <i className="text-danger fs-1 fa-solid fa-plus"></i>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='images  w-100 position-relative'>
                        <img className='w-100' src={z} alt="poert1" />
                        <div className="layer w-100 position-absolute d-flex justify-content-center align-items-center ">
                       <i className="text-danger fs-1 fa-solid fa-plus"></i>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='images  w-100 position-relative'>
                        <img className='w-100' src={x} alt="poert1" />
                        <div className="layer w-100 position-absolute d-flex justify-content-center align-items-center ">
                       <i className="text-danger fs-1 fa-solid fa-plus"></i>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='images  w-100 position-relative'>
                        <img className='w-100' src={y} alt="poert1" />
                        <div className="layer w-100 position-absolute d-flex justify-content-center align-items-center ">
                       <i className="text-danger fs-1 fa-solid fa-plus"></i>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='images  w-100 position-relative'>
                        <img className='w-100' src={z} alt="poert1" />
                        <div className="layer w-100 position-absolute d-flex justify-content-center align-items-center ">
                       <i className="text-danger fs-1 fa-solid fa-plus"></i>
                        </div>
                        </div>
                    </div>

                   </div>
                </div>

            </div>



            </>
        );
    }
}

export default Portofolio;