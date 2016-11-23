import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChartData from '../components/chart_data';

class WeatherList extends Component {
  renderWeather(city){
    const temps = city.list.map(weather => weather.main.temp)
    const pressures = city.list.map(weather => weather.main.pressure)
    const humidities = city.list.map(weather => weather.main.humidity)
    return (
      <tr key={city.city.name}>
        <td>{city.city.name}</td>
        <td><ChartData data={temps} color="orange" /></td>
      <td><ChartData data={pressures} color="green" /></td>
    <td><ChartData data={humidities} color="grey" /></td>
      </tr>
    );
  }
  
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temp</th>
            <th>Pre</th>
            <th>Humi</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    );
  }
}
function mapStateToProps({ weather }) {
  return { weather };
}
export default connect(mapStateToProps)(WeatherList);