import React, { useState } from 'react';
import { useSearchParams } from "react-router-dom";
import { Flyout } from "@flare/primitives/flyout";

const UserFlyout = ({ details, children, ...flyoutProps }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [searchParam,setSearchParam]= useSearchParams();
  const closeflyout=() =>
    {
      setSearchParam({});
      setIsOpen(false);
    }
    
    console.log(details)
    if (details === undefined) { return null} 
    else {
  return (
    <div>
      <Flyout {...flyoutProps} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        
      <div key={details.id} className="card">
            <div className="card-body">
                <h5 className="card-title">Name : {details.username}</h5>
                <p className="card-text">Emails : {details.email}</p>
                <p className="card-text">Phone :   {details.phone}</p>
                <p className="card-text">Website : {details.website}</p>
                <p className="card-text">Address : {`${details.address.street}, ${details.address.suite}, ${details.address.city}, ${details.address.zipcode}, ` }</p>
            </div>
        </div>
        <button
        onClick={() =>closeflyout()}
        type="button"
      >Close
      </button>
      </Flyout>
    </div>
  );
}
};


export default UserFlyout;