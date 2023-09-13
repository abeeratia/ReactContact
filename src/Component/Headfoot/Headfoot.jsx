import React, { Component } from 'react';

class Headfoot extends Component {
    render() {
        return (
            <>
            <div className='bg-warning'>
               <div className='container  py-2 '>
                 <div className="row">
                    <div className="col-md-4">
                        <h3>LOCATION</h3>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                    <div className="col-md-4">
                        <h3>LOCATION</h3>
                        <i className=" icon fa-brands bo fa-facebook fs-5 mx-1  "></i>
              <i className=" icon fa-brands fa-twitter fs-5 mx-1 "></i>
              <i className=" icon fa-brands fa-linkedin fs-5 mx-1 "></i>
              <i className=" icon fa-solid fa-globe fs-5 mx-1 "></i>

                    </div>
                    <div className="col-md-4">
                        <h3>ABOUT FREELANCER</h3>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        
                    </div>
                 </div>
        </div> 
        </div>
            </>
        );
    }
}

export default Headfoot;