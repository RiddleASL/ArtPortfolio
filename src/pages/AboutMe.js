import { Col, Container, Row } from "react-bootstrap"
import { Discord, Instagram } from "react-bootstrap-icons"

const AboutMe = () => {
    const waves = require("../assets/images/bg.png")
    const waves2 = require("../assets/images/waves2.png")
    const circles = require("../assets/images/circles.png")

    const me = require("../assets/images/me.jpg")

    return(
        <>
            <Container fluid className="bg-lightbg py-2" style={{ backgroundImage:  `url(${waves})`, backgroundRepeat: "no-repeat", backgroundPosition:"left -20% top"}}>
                <Container className="py-5 text-primary">
                    <Row className="m-0 gap-5 d-flex">
                        <Col className="p-0 m-0">
                            <img className="rounded-circle img-fluid" src={me}/>
                        </Col>
                        <Col className="p-0 m-0 fs-2" md={6} sm={1}>
                            <h2 className="text-center">Who is Riddle?</h2>
                            <p>
                                Im a 21 year old, 3rd year college student! I love art, games, movies, music and learning in general.
                                Right now, i'm focusing on college. I hope to graduate and focus on game development!
                                <br/><br/>
                                Im not too sure what else write in this so heres a few quick fire questions :D 
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className="bg-darkbg py-2" style={{ backgroundImage:  `url(${circles})`, backgroundRepeat: "no-repeat", backgroundPosition:"right", backgroundSize: "cover"}}>
                <Container className="py-5 text-primary">
                    <Row className="m-0 gap-5 d-flex">
                        <Col className="p-0 m-0 fs-2" lg={12} xs={12}>
                            <h2 className="text-center">Quick Fire Questions</h2>
                            <div className="qfa lh-sm">
                                <p>Q: Where am I from?</p>
                                <p>A: Born and raised in Ireland! Just your typical potato.</p>
                                <br/>
                                <p>Q: Why did I start learning Computer Science?</p>
                                <p>A: My earliest memory of wanting to create games or do something with computers was playing Super Mario Bros. on the Nintendo DS!</p>
                                <br/>
                                <p>Q: What are my Hobbies?</p>
                                <p>A: My biggest one has to be Art! When I am bored in class or at home, I always pull out my drawing tablet and doodle! Its really hard not to when you space out as much as me @-@</p>
                                <br/>
                                <p>Q: Do I have any pets?</p>
                                <p>A: Yes! I have 2 cats. A big chonker called Pop and my sweet attention seeking baby, Eddie.</p>
                                <br/>
                                <p>Q: Whats my favourite movie?</p>
                                <p>A: My all time favourite movie is Lilo & Stitch. I swear sometimes when I have nothing to do in class I space out and watch the whole movie in my head.</p>
                                <br/>
                                <p>Q: Whats my favourite music?</p>
                                <p>A: It changes alot to be honest. Right now, I would have to say that I've been listening to alot of an artist called 2 Mello.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className="bg-lightbg py-2" style={{ backgroundImage:  `url(${waves2})`, backgroundRepeat: "no-repeat"}}>
                <Container className="py-5 text-primary">
                    <Row className="m-0 gap-5 justify-content-end d-flex">
                        <Col className="p-0 m-0 fs-2" lg={8} xs={12}>
                            <h2 className="text-center">How to Contact</h2>
                            <p>
                                You can contact me via my Discord <Discord /> : riddle_squared
                                <br/>
                                You can also view my instagram <Instagram /> : _riddle_vrasl
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default AboutMe