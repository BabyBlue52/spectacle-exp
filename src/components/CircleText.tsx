import React from "react"

export default function CircleText() {
    const style = {
        height: '6.5vw'
    }
    const src = 'https://res.cloudinary.com/dzaaowrv5/image/upload/v1670208284/spectacular/circle-text_recpwg.png'
    return (
        <div className="circle-text-animation">
            <img src={src}/>
        </div>
    )
}
