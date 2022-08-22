import Button from "react-bootstrap/Button"


export default function Footer() {
    return (
        <div className="footer">
        <h1 className="footer--heading">Do you want to step in to the future before others</h1>
        <div className="footer--button">
        <Button variant="outline-light" size="lg">Request Early Access</Button>
        </div>

        <div className="Footer--footer">
        <div>
        <h1 className="footer--footer--heading">GPT-3</h1>
        <p style={{fontSize: "12px",lineHeight: "14px",color: "#FFFFFF"}}>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <div className="footer--lists">
        <div><ul>
            <li className="list--first">Links</li>
            <li>Overons</li>
            <li>Social Media</li>
            <li>Counters</li>
            <li>Contact</li>
        </ul></div>
        <div><ul>
        <li className="list--first">Company</li>
            <li>Terms and Conditions</li>
            <li>Privacy</li>
            <li>Contact</li>
        </ul></div>
        <div><ul>
        <li className="list--first">Get in Touch</li>
            <li>Crechterwoord K12 182 DK Alknjkcb</li>
            <li>085-132567</li>
            <li>info@payme.net</li>
        </ul></div>
        </div>
        </div>


        <footer>© 2021 GPT-3. All rights reserved.</footer>




        </div>
    )
}