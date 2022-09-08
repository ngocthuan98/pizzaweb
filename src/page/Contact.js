import '../style/Contact.css';
import PizzaLeft from '../assets/pizzaLeft.jpg';

function Contact() {
    return (
        <div class="contact-container">
            <div class="contact-left" style={{ backgroundImage: `url(${PizzaLeft})` }}></div>
            <div class="contact-right">
                <h1>Contact Us</h1>
                <form id="contact-form">
                    <label for="name">Full Name</label>
                    <input type="text" name="name" placeholder="Your Full Name..." />
                    <label for="email">Email Address</label>
                    <input type="text" name="email" placeholder="Your Email Address..." />
                    <label for="message">Message</label>
                    <textarea rows="6" name="name" placeholder="Your Message..." required></textarea>
                </form>
                <div class="submit">
                    <button type="submit">Send</button>
                </div>
            </div>
        </div>
    );
}

export default Contact;
