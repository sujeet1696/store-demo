import React from 'react';
import ReactDOM from 'react-dom';

class Drink extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
        drinks: []
      };
  }

  componentDidMount(){
    this.showDrinks();
  }

  showDrinks(){
    const { open } = this.state;
    var request = require('request');
    request('http://demo2921880.mockable.io/drinks', (error, response, data) => {
      if(error === null){
        if(response.statusCode === 200){
          var data = JSON.parse(data);
          this.setState({drinks : data});
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
          <h2>DRINKS</h2>
          {
            this.state.drinks.length > 0 &&
            <h3><ul>
              {
                this.state.drinks.map(drink => {
                  return <li>{drink.Name}</li>
                })
              }
            </ul></h3>
          }
        </div>
      );
    }
}
export default Drink;
