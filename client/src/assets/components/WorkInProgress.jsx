 import React from 'react';
 import { NavLink } from 'react-router-dom';


 function WorkInProgress() {

     return (
        <>
            <div className="banner zoom-in">
                <div className="cautionTape zoom-in" id="caution"> CAUTION   CAUTION   CAUTION   CAUTION   CAUTION   CAUTION   CAUTION
                </div>
                <div className="cautionTape zoom-in" id="wip">WIP   Work In Progress   WIP   Work In Progress   WIP   Work In Progress   WIP   Work In Progress   WIP   Work In Progress   WIP   Work In Progress   WIP   Work In Progress   WIP
                </div>
            </div>
            <div className="m-auto p-10 text-center language-tag js-tag">
            <NavLink to="/" className="m-auto mt-32 p-10 text-center language-tag js-tag">Go Back
            </NavLink>
            </div>
        </>
     );
 }

    export default WorkInProgress;