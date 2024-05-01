import React from 'react';
import './post.css'; // Create a CSS file for styling

class CurvedText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text || 'مرحبا بكم في React!',
    };
  }

  render() {
    const { text } = this.state;

    return (
      <div className="curved-text-container">
        <div className="curved-text">{text}</div>
      </div>
    );
  }
}

export default CurvedText;