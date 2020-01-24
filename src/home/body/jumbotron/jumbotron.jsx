import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './jumbotronSlider.css';
import './jumbotron.css';


const content = [
    {
        title: 'Lorem ipsum dolor sit amet',
        description:
            'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
        button: 'Read More',
        image: 'https://i.imgur.com/U5b4BMc.png',

    },
    {
        title: 'Tortor Dapibus Commodo Aenean Quam',
        description:
            'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
        button: 'Discover',
        image: 'https://i.imgur.com/U5b4BMc.png',

    },
    {
        title: 'Phasellus volutpat metus',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
        button: 'Read More',
        image: 'https://i.imgur.com/U5b4BMc.png',

    }
];

const Jumbotron = () => {
    return (
        <div>
            <Slider className="slider-wrapper">
                {content.map((item, index) => (
                    <div
                        key={index}
                        className="slider-content"
                        style={{ background: `url('${item.image}') no-repeat center center` }}
                    >
                        <div className="inner">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <button className='jumbotronButton'>{item.button}</button>
                        </div>

                    </div>
                ))}
            </Slider>
        </div>
    )
}


export default Jumbotron;