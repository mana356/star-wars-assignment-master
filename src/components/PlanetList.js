import React from "react";

class PlanetList extends React.Component {

  constructor() {
    super();

  }
  
  render() {
    //console.log(this.props.planets);
    return (
      //<React.Fragment>

        <div className="main ui container">{
          this.props.planets.map(function (planet, index) {
            return (
            <div  style={{
              //width: planet.population === 'unknown' ? 100 : 100 + ( 350 * ( parseInt(planet.population, 10)  / 10000000000 ) ) + 'px',
              //height: planet.population === 'unknown' ? 100 : 100 + ( 350 * ( parseInt(planet.population, 10)  / 10000000000 ) ) + 'px',
              //borderRadius: '50%',
              //background: randomColor(),
              //display: 'inline-block',
              height: '100px',
              textAlign: 'center',
              fontSize: planet.population === 'unknown' ? 10 : 30 + ( 35 * ( parseInt(planet.population, 10)  / 10000000000 ) ) + 'px'
            }}>
              
                        { planet.name }{populationFormatConverter(planet.population)}
                      
            </div>
            );
          })
        }
        </div>
      //</React.Fragment>
    );
  }
}

export default PlanetList;
export function randomColor() {
  let hexCode = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let hexColor = '#', counter = 0;
  for (; counter < 6 ; counter++) {
    hexColor += hexCode[Math.round(Math.random()*15)];
  }

  return hexColor;
}

export function populationFormatConverter(population) {
  let milestones = [
    { value: 1000, format: 'K' },
    { value: 1000000, format: 'M' },
    { value: 1000000000, format: 'B' }
  ], i = milestones.length - 1, display = '';
  for (; i >= 0; i--) {
    if ((population / milestones[i].value) >= 1) {
      display = (
        (
          Math.floor(population / milestones[i].value)
          + '.'
          + Math.floor((population % milestones[i].value) / (milestones[i].value / 10))
        )
        + milestones[i].format
      );
      return display;
    }
  }

  return population;
}
