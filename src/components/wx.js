import React from 'react';

const Weather = props => (
	<div className="wxdata">
		{props.city && props.country && <p>Location: {props.city} <br></br>Country: {props.country}</p>}
		{props.temperature && props.temperature && <p>Temp: {props.temperature}&deg; F</p>}
		{props.humidity && <p>Humidity: {props.humidity} &#37;</p>}
		{props.description && <p id="cond">Condition: {props.description}</p>}
		{props.error && <p class="error">Error! {props.error}</p>}
	</div>
)


// class Wx extends React.Component {
//     render () {
//         return (
//             <div>
//                 {this.props.city && this.props.country && <p>Location: {this.props.city} <br></br>Country: {this.props.country}</p>}
//                 {this.props.temperature && this.props.temperature && <p>Temp: {this.props.temperature}</p>}
//                 {this.props.humidity && <p>Humidty: {this.props.humidity}</p>}
//                 {this.props.description && <p>Condition: {this.props.description}</p>}
//                 {this.props.error && <p>Error! {this.props.error}</p>}
//             </div>
//         );
//     }
// };

export default Weather;