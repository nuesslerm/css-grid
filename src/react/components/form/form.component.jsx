import React from 'react';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(event) {
  //   const { value } = event.target;
  //   this.setState({ value });
  // }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ value });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.value}
          placeholder={Form}
          onChange={this.handleChange}
        ></input>
      </form>
    );
  }
}

export default Form;
