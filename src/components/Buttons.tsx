import React from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

export const NextButton = () => {
    return (
        <div>
             <button className="next-btn" style={{'right': '20px'}}>
                <p>next</p>
                <span><BsArrowRight/></span>
            </button>
        </div>
    )
}

export const PrevButton = () => {
    return (
        <div>
             <button className="prev-btn" style={{'left': '20px'}}>
                <span><BsArrowLeft/></span>
                <p>prev</p>
            </button>
        </div>
    )
}