import React, { Component } from 'react';

class Wheater extends Component {
    constructor(props){
        super(props);
        this.state= {
            items : []
        };
    }
  
  componentDidMount(){
    fetch("http://10.33.34.227/response.json")
    .then(res => res.json())
    .then(parsedJSON => parsedJSON.results.map(data => (
        {
            datetime : `${data.list.dt_txt}`,
            temp : `${data.list.main.temp}`,
            temp_min : `${data.list.main.temp_min}`,
            temp_max : `${data.list.main.temp_max}`,
            weather : `${data.list.weather.main}`,
        }
    )))
    .then(items => this.setState({
        items,
        isLoaded : false
    }))
    .catch(error=>console.log('parsing failed', error)
    )
  }
  
  render(){
    const {items }= this.state;
    return(
      <div className="boxWhite">
        {
            items.length > 0 ? items.map(item => {
                const {datetime, temp, temp_min, temp_max, weather} = item;
                return(
                    <div className="bgCircle">
                        <br />
                        <div className="ctr">
                           {datetime} {temp} <br />
                           {temp_min} {temp_max} {weather}
                        </div>
                    </div>
                );
            }) : null
        }
      
      </div>
    );
  }
  }
  export default Wheater;
  