import '../style/About.css';
import MultiplePizzas from '../assets/multiplePizzas.jpeg';

function About() {
    return (
        <div className="aboutPage">
            <div className="aboutTop" style={{ backgroundImage: `url(${MultiplePizzas})` }}></div>
            <div className="aboutBottom">
                <div className="making-pizza"></div>
                <div className="aboutUs">
                    <h1>ABOUT US</h1>
                    <p>
                        Pizza Hut is the world's largest and most loved pizza restaurant chain, belonging to Yum!
                        (www.yum.com). Pizza Hut is proud to be present in 100 countries around the world since April
                        2016.This event marks a significant milestone to demonstrate the brand's combination of
                        first-class pizza quality and professional service.Pizza Hut has been present in Vietnam since
                        2006 with 100% foreign capital; and has now grown to more than 110 restaurants with 3,000
                        employees.Pizza Hut Vietnam - where you are free to express yourself with attractive
                        opportunities for comprehensive personal and professional development.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
