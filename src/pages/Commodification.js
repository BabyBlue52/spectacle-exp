import React from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import ScrollProgress from '../components/ScrollProgress';

function Commodification() {
    const carousel = [
        {'img' :'https://res.cloudinary.com/dzaaowrv5/image/upload/v1663288493/spectacular/yonok0b5t4oapm_psis4y.jpg'},
        {'img' : 'https://res.cloudinary.com/dzaaowrv5/image/upload/v1663288493/spectacular/8vzxxdpwr0im1o_nnnokh.jpg'},
        {'img': 'https://res.cloudinary.com/dzaaowrv5/image/upload/v1663288493/spectacular/scq3iftpeydq22_j0ubwb.jpg'},
        {'img': 'https://res.cloudinary.com/dzaaowrv5/image/upload/v1663288493/spectacular/k0hf6pqs9hefj4_wjrvgz.jpg'},
        {'img': 'https://res.cloudinary.com/dzaaowrv5/image/upload/v1663288493/spectacular/almjf2sebcg2u6_xkbgwm.jpg'},
        {'img': 'https://res.cloudinary.com/dzaaowrv5/image/upload/v1663288493/spectacular/38s8y1qdt2jk7i_jjov9h.jpg'},
        {'img': 'https://res.cloudinary.com/dzaaowrv5/image/upload/v1663288493/spectacular/2i21gyrbm6n40a_azcapj.jpg'},
        {'img' :'https://res.cloudinary.com/dzaaowrv5/image/upload/v1663288493/spectacular/yonok0b5t4oapm_psis4y.jpg'},
        {'img' : 'https://res.cloudinary.com/dzaaowrv5/image/upload/v1663288493/spectacular/8vzxxdpwr0im1o_nnnokh.jpg'},
        {'img': 'https://res.cloudinary.com/dzaaowrv5/image/upload/v1663288493/spectacular/scq3iftpeydq22_j0ubwb.jpg'},
        {'img': 'https://res.cloudinary.com/dzaaowrv5/image/upload/v1663288493/spectacular/k0hf6pqs9hefj4_wjrvgz.jpg'},
        {'img': 'https://res.cloudinary.com/dzaaowrv5/image/upload/v1663288493/spectacular/almjf2sebcg2u6_xkbgwm.jpg'},
        {'img': 'https://res.cloudinary.com/dzaaowrv5/image/upload/v1663288493/spectacular/38s8y1qdt2jk7i_jjov9h.jpg'},
        {'img': 'https://res.cloudinary.com/dzaaowrv5/image/upload/v1663288493/spectacular/2i21gyrbm6n40a_azcapj.jpg'},
    ]

    return(
        <div className="page sunset">
            <div className="commodification"> 
                <div class='slider'>
                    <div className='slide-track'>
                    {carousel.map((picture, i) => (
                        <div key={i} className='slide'>
                            <img src={carousel[i].img}/>
                        </div>
                    ))} 
                    </div>
                </div>
             </div>
             <ScrollProgress/>
        </div>
    )
}
export default Commodification