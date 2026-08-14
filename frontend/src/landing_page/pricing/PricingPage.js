import React from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage';
import OpenAccount from '../OpenAccount';

// THESE LOGS WILL REVEAL THE BROKEN FILE:
console.log("Hero Import:", Hero);
console.log("Brokerage Import:", Brokerage);
console.log("OpenAccount Import:", OpenAccount);

function PricingPage() {
    return (
        <>
           <Hero />
           <OpenAccount />
           <Brokerage />
        </>
    );
}

export default PricingPage;