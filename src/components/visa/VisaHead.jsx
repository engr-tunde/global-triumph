import { Container } from "react-bootstrap";

const VisaHead = () => {
    return (
        <section className="visa-head">
            <Container>
                <h3 className="title">Visa Processing</h3>
                <div className="subtitle">
                    Welcome to the Visa Processing service rendered by Global Triumph Market Plus Multiconcept.
                    
                    <span>Wondering what Visa is?</span> 
                    
                    <span>
                        A visa is a travel document that allows you to enter a foreign country for a specific period of time. In most cases, you have to apply for a visa before travelling, either at an embassy, consulate, or online. Sometimes you can also obtain a visa on arrival. Visas are usually affixed onto your passport and state how long you can stay.
                    </span>

                    <span>
                        What are the Visas Requirements like?
                    </span>

                    <div className="requirements">

                        <div>
                            <p>Required for an Adult Visa are:</p> 
                            <ol type="i">
                                <li> Nigerian Passport </li>
                                <li> Birth Certificate </li>
                                <li> Certificate of State of Origin </li>
                                <li> Email Address </li>
                                <li> 2 Passports Photograph </li>
                                <li> Home Address </li>
                                <li> Marriage Certificate (if married) </li>
                                <li> Mobile Number </li>
                                <li> Statement of Account </li>
                                <li> C.V </li>
                            </ol>
                        </div>

                        <div>
                            <p>Required for Children Visa are:</p>
                            <ol type="i">
                                <li> Nigerian Passport </li>
                                <li> Birth Certificate </li>
                                <li> 2 Passports Photograph </li>
                                <li> Affidavit of confirming the child's that the child or children are yours. </li>
                            </ol>
                        </div>
                    </div>
                    
                     </div>
            </Container>
        </section>
    );
}
 
export default VisaHead;