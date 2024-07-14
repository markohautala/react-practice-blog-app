import React, { Component } from 'react';

export class UncontrolledForms extends Component {
  constructor(props) {
    super(props);
    this.inputName = React.createRef();
    this.inputCategory = React.createRef();
    this.inputMessage = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();  // Prevents the default behavior of the form - to reload the page
  }

  render() {
    return (
      <div>
        <h1>Controlled Forms</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="id-name">Your Name:</label>
            <input
              id="id-name"
              name="name"
              type="text"
              ref={this.inputName}
            />
          </div>

          <div>
            <label htmlFor="id-category">Select:</label>
            <select
              id="id-category"
              name="category"
              ref={this.inputCategory}
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
              name="message"
              ref={this.inputMessage}
            ></textarea>
          </div>
          <input value="Submit" type="submit"></input>
        </form>
      </div>
    );
  }
}

export default UncontrolledForms;
