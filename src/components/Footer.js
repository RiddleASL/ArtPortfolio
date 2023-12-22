import { Col, Container, Row } from "react-bootstrap"
import { Disc, Discord, Instagram } from "react-bootstrap-icons"
import { Link } from "react-router-dom"

const Footer =() => {
    return(
        <Container fluid className="bg-offblack py-3 text-primary footer">
            <Container className="py-5">
                <ul className="d-flex justify-content-center fs-1 gap-6 list-unstyled">
                    <li><a href="https://discordapp.com/users/1018918217265188904"><Discord /></a></li>
                    <li><a href="https://www.instagram.com/_riddle_vrasl/"><Instagram /></a></li>
                </ul>
            </Container>
        </Container>
    )
}

export default Footer