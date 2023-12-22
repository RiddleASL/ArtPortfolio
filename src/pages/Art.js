import { Col, Container, Row } from "react-bootstrap";

import { useEffect } from "react";

const Art = () => {
    const images = require.context('../assets/images/art', true);
    const imageList = images.keys().map(image => images(image));

    const img = imageList.map((image, i) => {
        return(
            <Col key={i} md={3} className="my-1 p-1">
                <img src={image} className="img-fluid"></img>
            </Col>
        )
    })

    console.log(imageList);
    return(
        <Container fluid className="bg-lightbg">
            <Container>
                <Row sm={2} lg={3}>
                    {img}
                </Row>
            </Container>
        </Container>
    )
} 

export default Art