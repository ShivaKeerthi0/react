import User from './User';
import UserClass  from './UserClass';

const AboutUs = () =>{

    return (
        <div className="about-us-container">
        <h1>About Us</h1>
        <p>This page tells about us ...</p>
        <User name={"Shiva Keerthi"}/>
        <UserClass name = {"Shiva Keerthi - Class" }/>
        </div>
    )
}

export default AboutUs;