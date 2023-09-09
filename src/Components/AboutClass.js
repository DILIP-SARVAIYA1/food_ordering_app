import React from "react";
class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0,
    };
  }
  async componentDidMount() {
    const userData = await fetch(
      "https://api.github.com/users/DILIP-SARVAIYA1"
    );
    const json = await userData.json();
    console.log(json);
    this.setState({
      data: json,
    });
  }

  render() {
    const { name, bio, avatar_url } = this.state.data;

    return (
      <div className="about-container">
        {/* <h1>count : {name}</h1> */}
        <button
          onClick={() => {
            this.setState({});
          }}
        >
          Incrementer
        </button>
        <img src={avatar_url} alt="" />
        <h1>{name}</h1>
        <h2>{bio}</h2>
        <h3>{}</h3>
      </div>
    );
  }
}

export default AboutClass;
