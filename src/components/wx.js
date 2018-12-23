import React from 'react';

class Wx extends React.Component {
    render () {
        return (
            <div>
                Location: {this.props.city}<br></br>
                Country: {this.props.country}<br></br>
                Temp: {this.props.temperature}<br></br>
                Humidty: {this.props.humidity}<br></br>
                Descr: {this.props.description}<br></br>
                
            </div>
        );
    }
};

export default Wx;