import { Container, Col } from "react-bootstrap";
import { useState } from "react";

import collegedemo from "../assets/images/portfolio/Opera Snapshot_2023-12-22_135540_ca2-colleges.web.app.png";
import countrydemo from "../assets/images/portfolio/Opera Snapshot_2023-12-22_140831_countries-3a398.web.app.png";

import Demo from "../components/Demo";

const Portfolio = () => {

	return (
		<Container fluid className="bg-lightbg">
			<Container className="py-5 text-primary">
				<div>
					<h1>Portfolio</h1>
				</div>

				<div className="row py-3">
					<Col>
						<h3>College Website</h3>
						<p>HTML, CSS, JavaScript, React</p>
						{/* What i did */}
						<p>
							Designed and developed a website for a fictional college. The website uses React Router to navigate between pages. The website has full CRUD functionality for lecturers, enrollments and courses. The website also has a login system that uses tokens to authenticate users. The website is hosted on Firebase. 
							For styling, I used Tailwind CSS and DaisyUI.
						</p>
						<Demo url="https://ca2-colleges.web.app" />
					</Col>
					<Col>
						<img src={collegedemo} alt="College Website" className="img-fluid" />
					</Col>
				</div>

				<hr className="border-3 roudned"/>

				<div className="row py-3">
					<Col>
						<h3>Country Explorer</h3>
						<p>HTML, CSS, JavaScript, React</p>
						{/* What i did */}
						<p>
							I designed and developed a website that allows users to explore countries. The website uses React Router to navigate between pages. The website uses the REST Countries API to fetch data about countries. The website is hosted on Firebase.
							For styling, I used Bootstrap with some custom CSS.
							I also used multiple API endpoints to fetch data about countries such as the weather, the capital city, population, etc.
							You will also see all the countries bordering the country you are currently viewing.
						</p>
						<Demo url="https://countries-3a398.web.app" />
					</Col>
					<Col>
						<img src={countrydemo} alt="College Website" className="img-fluid" />
					</Col>
				</div>
			</Container>
		</Container>
	);
};

export default Portfolio;
