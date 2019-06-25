import React from 'react';
import ReactDOM from 'react-dom';

class Vegitable extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      vegitables : []
    };
  }

  componentDidMount(){
    this.showVegitables();
  }
  showVegitables(){
    let request = require('request');
    request('http://demo2921880.mockable.io/vegitables', (error, response, data) => {
      if(error === null){
        if(response.statusCode === 200){
          data = JSON.parse(data);
          this.setState({vegitables : data});
        }
      }
      else {
        console.log("Error occured ..")
      }
    });
  }

  render(){
    return(
      <div>
        <h2>VEGITABLES</h2>
        {
          this.state.vegitables.length > 0 &&
          <h3><ul>
            {
              this.state.vegitables.map(vegitable => {
                  return <li>{vegitable.Name}</li>
              })
            }
          </ul></h3>
        }
      </div>
    );
  }
}
export default Vegitable;
