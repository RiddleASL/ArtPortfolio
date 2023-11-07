import { Button } from "react-bootstrap"
import { ArrowUp } from "react-bootstrap-icons"

const ToTop = () => {
    const toTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"})
    }
    return(
        <>
            <div className="sticky-pos ">
                <Button className="rounded-circle circle-img" onClick={toTop}><ArrowUp /></Button>
            </div>
        </>
    )
}

export default ToTop