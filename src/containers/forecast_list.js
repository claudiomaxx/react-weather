import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class ForecastList extends Component {

    renderList(data, i) {
        const temperature = data.list.map(weather => weather.main.temp - 273.15); // convert to Celsius
        const pressure = data.list.map(weather => weather.main.pressure);
        const humidity = data.list.map(weather => weather.main.humidity);
        const { lat, lon } = data.city.coord;

        return (
            <tr key={data.city.name}>
                <td><GoogleMap lat={lat} lon={lon} /></td>
                <td><Chart data={temperature} color="orange" units="C" /></td>
                <td><Chart data={pressure} color="green" units="hPA" /></td>
                <td><Chart data={humidity} color="black" units="%" /></td>
            </tr>
        );
    }

    render() {
        if (this.props.forecasts.length === 0) {
            return (<div></div>);
        }

        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (hPA)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.forecasts.map(this.renderList)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return {
        forecasts: state.forecasts
    }
}

export default connect(mapStateToProps)(ForecastList);