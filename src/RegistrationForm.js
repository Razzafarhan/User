// src/RegistrationForm.js
import React, { Component } from 'react';
import './RegistrationForm.css'; // Import the CSS file

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      password: '',
      image: null,
      address: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleImageChange = (event) => {
    this.setState({ image: event.target.files[0] });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, password, image, address } = this.state;
    // TODO: Send registration data to the server or perform desired actions
    console.log('Registration Data:', { firstName, lastName, password, image, address });
  };

  render() {
    return (
        <div className="form-container">
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleInputChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleInputChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            required
          />
        </div>
        <div>
          <label>Profile Image:</label>
          <input
            type="file"
            name="image"
            onChange={this.handleImageChange}
            accept="image/*"
          />
        </div>
        <div>
          <label>Address:</label>
          <textarea
            name="address"
            value={this.state.address}
            onChange={this.handleInputChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      </div>
    );
  }
}

export default RegistrationForm;
