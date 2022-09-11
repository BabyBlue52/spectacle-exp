import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

export const NextButton = () => {
    return (
        <div>
             <button className="next-btn">
                <p>next</p>
                <span><BsArrowRight/></span>
            </button>
        </div>
    )
}