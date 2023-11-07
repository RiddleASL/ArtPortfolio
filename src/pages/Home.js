import { Button, Col, Container, Row } from "react-bootstrap"
import ArtCarousel from "../components/ArtCarousel"
import { Link } from "react-router-dom"
import { useEffect } from "react"

const Home = () => {
    const waves = require("../assets/images/bg.png")
    const waves2 = require("../assets/images/waves2.png")
    const circles = require("../assets/images/circles.png")

    const toTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"})
    }

    return(
        <>
            <Container fluid className="bg-lightbg py-2" style={{ backgroundImage:  `url(${waves})`, backgroundRepeat: "no-repeat", backgroundPosition:"left -20% top"}}>
                <Container className="py-5 text-primary">
                    <Row className="m-0 gap-5 d-flex">
                        <Col className="p-0 m-0">
                        <ArtCarousel />
                        </Col>
                        <Col className="p-0 m-0 fs-2" md={6} sm={1}>
                            <h2 className="text-center">Hi, I'm Riddle!</h2>
                            <p>
                                Welcome to my portfolio website! Just a very quickly made website to show off some of the stuff I work on!
                                <br/> <br/>
                                I'm currently a 3rd year student in college, studying Creative Computing! I hope to graduate in 2025 with a
                                focus on Game Development. For now though, I want to be able to show off some work I have done in my spare time.
                                <br/> <br/>
                                Feel free to have a look around and contact me on discord or instagram if you want to see something in particular!
                            
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className="bg-darkbg py-2" style={{ backgroundImage:  `url(${circles})`, backgroundRepeat: "no-repeat", backgroundPosition:"right", backgroundSize: "cover"}}>
                <Container className="py-5 text-primary">
                    <Row className="m-0 gap-5 d-flex">
                        <Col className="p-0 m-0 fs-2" lg={6} xs={12}>
                            <h2 className="text-center">My Art</h2>
                            <p>
                                While I study Creative Computing in college, I also like to do art therapy, 3d modeling and animations for Game
                                Development!
                                <br/><br/>
                                My art mainly consists of just quick sketches, monochromatic pieces or figure studies. I like to do both digital and 
                                physical mediums and hope to show off both here!
                            </p>

                            <div className="text-center">
                                {/* <Button>VIEW ALL MY ART</Button> */}
                                <Link to={"/art"} onClick={toTop} className="btn btn-primary">VIEW ALL MY ART</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className="bg-lightbg py-2" style={{ backgroundImage:  `url(${waves2})`, backgroundRepeat: "no-repeat", backgroundPosition: "left top -900%"}}>
                <Container className="py-5 text-primary">
                    <Row className="m-0 gap-5 justify-content-end d-flex">
                        <Col className="p-0 m-0 fs-2" lg={6} xs={12}>
                            <h2 className="text-center">My Portfolio</h2>
                            <p>I also hope to use this website to show off work I do when it comes to Computer Science, be it Front End Developemnt,
                                VR/AR Development, Backend Development, Game Development, etc.
                                <br/><br/>
                                I will be sure to build this up over time so be sure to come back every now and then and see if anything has been added!
                            </p>
                            <div className="text-center">
                                {/* <Button>VIEW ALL MY ART</Button> */}
                                <Link to={"/art"} onClick={toTop} className="btn btn-primary">VIEW MY PORTFOLIO</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default Home