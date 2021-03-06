import React from 'react';
import { Carousel } from 'antd';


const Dress = ({selectedArea, onAreaChange}) => {
    return (
        <Carousel effect="fade" dotsClass="dress-dots" className="dress-carousel">
            <div className={`dress-model dress-${selectedArea}`} >
                <div className='collar-area' onClick={() => onAreaChange(0)}/>
                <div className='arms-area' onClick={() => onAreaChange(1)}/>
                <div className='hip-area' onClick={() => onAreaChange(2)}/>
                <div className='width-area' onClick={() => onAreaChange(3)}/>
            </div>
            <div className={`dress-model dress-2-${selectedArea}`} >
                <div className='collar-area-2' onClick={() => onAreaChange(0)}/>
                <div className='arms-area-2' onClick={() => onAreaChange(1)}/>
                <div className='hip-area-2' onClick={() => onAreaChange(2)}/>
                <div className='width-area-2' onClick={() => onAreaChange(3)}/>
            </div>
        </Carousel>
    )
}

export default Dress;