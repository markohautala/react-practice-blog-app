import React, { Component } from 'react';

export class ControlledForms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      category: 'React',
      message: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();  // Prevents the default behavior of the form - to reload the page
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>Controlled Forms</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="id-name">Your Name:</label>
            <input
              value={this.state.name}
              onChange={this.handleChange}
              id="id-name"
              name="name"
              type="text"
            />
          </div>

          <div>
            <label htmlFor="id-category">Select:</label>
            <select
              value={this.state.category}
              onChange={this.handleChange}
              id="id-category"
              name="category"
            >
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
          </div>
          <div>
            <label htmlFor="id-message">Your Message:</label>
            <textarea
              id="id-message"
              value={this.state.message}
              onChange={this.handleChange}
              name="message"
            ></textarea>
          </div>
          <input value="Submit" type="submit"></input>
        </form>
      </div>
    );
  }
}

export default ControlledForms;
