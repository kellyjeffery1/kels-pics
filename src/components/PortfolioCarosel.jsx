import React, { Component } from 'react';
import {Slider} from 'react-slick'


const photos = [
    {
        name: 'photo 1',
        url: 'https://images.unsplash.com/photo-1535083988052-565ca9546643?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2500&q=80'
    },
    {
        name: 'photo 2',
        url: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
    },
    {
        name: 'photo 3',
        url: 'https://images.unsplash.com/photo-1525298808336-37520e8b14a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80'
    },
    {
        name: 'photo 4',
        url: 'https://images.unsplash.com/photo-1523245332310-ff40ff34a419?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
    }
]
    
class PortfolioCarosel extends Component {
    
    render() { 
        const settings = {
            dots: true,
            fade: true,
            infinte: true,
            speed: 500,
            slideToShow: 1,
            arrows: true,
            slideToScroll: 1,
            className: "slides"
        }
        return (
            <div className='carosel'>
                <Slider {...settings}>
                    {photos.map((photo) => {
                        return (
                            <div>
                                {/* <img width="50%" src={photo.url}/> */}
                            </div>
                        )
                    })}

                </Slider>
            </div>
          );
    }
}
 
export default PortfolioCarosel;