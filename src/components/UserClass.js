import React from "react";


class UserClass extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            userInfo : {
                "name" : "",
                "location" : "",
            },
        };
    }

  async  componentDidMount() {

    const data = await fetch('https://api.github.com/users/shivakeerthi0');

    const json =  await data.json();

    this.setState({

        userInfo : {
            "name" : json.name,
            "location" : json.location,
        },
    })
    }

    componentDidUpdate(){
        console.log("Component Updated successfully...")
    }

    componentWillUnmount(){

        console.log("Component Unmounted successfully...")
    }

    render(){

        return (
            <div className="user-card">
                <h2>Name : {this.state?.userInfo?.name}</h2>
                <h2>Email : shivakeerthi0@gmail.com</h2>
                <h2>City : {this.state?.userInfo?.location}</h2>
            </div>
        )
    }
}



export default UserClass;