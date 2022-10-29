import React from 'react';

const Header = (props:any) => {
    return (
        <>
            <div className='header'>
                <div className='content'>
                    <h4> Chapter {props.chapter ? props.chapter : 1}</h4>
                    <h1>{props.pageTitle}</h1>
                </div>
            </div>
            
        </>
    )
}

export default Header;