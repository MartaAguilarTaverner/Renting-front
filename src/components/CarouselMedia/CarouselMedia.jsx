import React, { useState } from "react";
import { Carousel } from "primereact/carousel";
import { useEffect } from "react";

import "./carouselMedia.css";

const responsiveOptions = [
    {
        breakpoint: "1024px",
        numVisible: 6,
        numScroll: 1,
    },
    {
        breakpoint: "600px",
        numVisible: 6,
        numScroll: 1,
    },
    {
        breakpoint: "480px",
        numVisible: 6,
        numScroll: 1,
    },
];

const CarouselMedia = ({ mediaList, itemTemplate }) => {
    const [media, setMedia] = useState([]);

    useEffect(() => {
        setMedia(mediaList);
    }, [mediaList]);

    return (
        <div className="mediaCarousel">
            <Carousel
                value={media}
                numVisible={4}
                numScroll={1}
                responsiveOptions={responsiveOptions}
                className="custom-carousel"
                itemTemplate={itemTemplate}
                circular
            />
        </div>
    );
};

export default CarouselMedia;
