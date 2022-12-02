import React, { useState } from "react";
import { Carousel } from "primereact/carousel";

const CarouselMedia = () => {
    const [media, setMmedia] = useState([]);

    const responsiveOptions = [
        {
            breakpoint: "1024px",
            numVisible: 4,
            numScroll: 4,
        },
        {
            breakpoint: "1024px",
            numVisible: 3,
            numScroll: 3,
        },
        {
            breakpoint: "600px",
            numVisible: 2,
            numScroll: 2,
        },
        {
            breakpoint: "480px",
            numVisible: 1,
            numScroll: 1,
        },
    ];

    return (
        <div className="carousel-demo">
            <div className="card">
                <Carousel
                    value={media}
                    numVisible={4}
                    numScroll={1}
                    responsiveOptions={responsiveOptions}
                    className="custom-carousel"
                    circular
                    autoplayInterval={3000}
                />
            </div>
        </div>
    );
};

export default CarouselMedia;
