import React from 'react';
import ReactDOM from 'react-dom';

class Fruit extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      fruits: []
    };

  }

  componentDidMount(){
    this.showFruits();
  }


  showFruits(){
    let fruits = [];
    var request = require('request');
    request('http://demo2921880.mockable.io/fruitts', (error, response, data) => {
      if(error === null){
        if(response.statusCode === 200){
          data = JSON.parse(data);
          this.setState({ fruits: data});
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
          <h2>FRUITS</h2>
          {
            this.state.fruits.length > 0 &&
            <h3><ul>
              {
                this.state.fruits.map(fruit => {
                  return <li>{fruit.Name}</li>
                })
              }
            </ul></h3>
          }
        </div>
      );
    }
}
export default Fruit;
