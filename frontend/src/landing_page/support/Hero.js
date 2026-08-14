import React from 'react';

function Hero() {
    return <div className="container-fluid py-5" id="supportHero" >
        <div className="container">
            <div className="container py-3" id="SupportWrapper">
                <h3>Support Portal </h3>
                <a href="">Track Tickets</a> 
            </div>
            <div className="row m-5">
                <div className="col-md-8">
                    <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder="Eg. how do I activate F&O, why is order getting rejected.." />
                    <br/>
                    <a href="" className="me-3">Track account opening</a>
                    <a href=""className="me-3">Track Segment activation</a>
                    <a href=""className="me-3">Intraday margins</a>
                    <a href="">Kite user manual</a>
                </div>
                <div className="col-md-4 ">
                    <h1 className="fs-3">Featured</h1>
                    <ol>
                        <li><a href="">Current Takeover and Delisting - January 2026 </a></li>
                        <li><a href="">Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                </div>  
            </div> 
        </div> 
        </div>
} 
export default Hero; 