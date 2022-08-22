import React, {useState} from 'react';

// interface PageTitle {
//     title: string;
// }

const Header = () => {
    const [pageTitle, setPageTitle]= useState('Fragmentation');
    return (
        <>
            <div className='header'>
                <div className='content'>
                <h4> Page 1</h4>
                <h1>{pageTitle}</h1>
                </div>
                
            </div>
            
        </>
    )
}

export default Header;