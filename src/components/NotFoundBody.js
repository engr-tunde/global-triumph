import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFoundBody = () => {
    return (
        <section className="product-updates">
            <Container>
                <div className="body">
                    <p>
                        The page you are trying to visit does not exist on this app. Looks like you got here by a mistake.
                    </p>

                    <Link to="/"
                        style={{
                            fontWeight:"700"
                        }}
                    >Go back to the homepage</Link>
                </div>
            </Container>
        </section>
    );
}
 
export default NotFoundBody;