import { Carousel } from "react-bootstrap";

const ArtCarousel = () => {
    const art0 = require("../assets/images/art/image.png")
    const art1 = require("../assets/images/art/photo_2023-10-30_21-00-16.jpg")
    const art2 = require("../assets/images/art/photo_2023-10-30_19-39-57.jpg")
    const art3 = require("../assets/images/art/photo_2023-10-30_19-40-01.jpg")

	return (
		<Carousel fade interval={5000}>
            <Carousel.Item>
				<img
					className="rounded d-block w-100 object-fit-cover img-standsize img-down-0"
					src={art0}
					alt="First slide"
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="rounded d-block w-100 object-fit-cover img-standsize img-down-0"
					src={art1}
					alt="First slide"
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="rounded d-block w-100 object-fit-cover img-standsize img-down-0"
					src={art2}
					alt="First slide"
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="rounded d-block w-100 object-fit-cover img-standsize img-down-0"
					src={art3}
					alt="First slide"
				/> 
			</Carousel.Item>
		</Carousel>
	);
};

export default ArtCarousel
