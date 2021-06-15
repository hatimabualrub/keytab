import React, {useState} from 'react';

export const WithPopUp = (RappedComponent) =>{

    return props => (
        <div className="background-area">
                        
            <RappedComponent {...props}/>
        </div>
    );
};
