import React, { Component } from 'react';
import axios from 'axios';

const Bar = props => (
  <tr>
    <td>{props.bar.name}</td>
    <td>{props.bar.neighborhood}</td>
    <td>{props.bar.deal}</td>
  </tr>
)

export default class BarsList extends Component {
  constructor(props) {
    super(props);

    this.state = {bars: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/bars/')
      .then(response => {
        this.setState({ bars: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  barsList() {
    return this.state.bars.map(currentbar => {
      return <Bar bar={currentbar} key={currentbar._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Super Awesome Bars</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Neighborhood</th>
              <th>Deal</th>
            </tr>
          </thead>
          <tbody>
            { this.barsList() }
          </tbody>
        </table>
      </div>
    )
  }
}