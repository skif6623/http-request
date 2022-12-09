import { fetchDogByBreed } from 'api';
import { Component } from 'react';
import { BreedSelect } from './BreedSelect/BreedSelect';

export class App extends Component {
  state = {
    dog: null,
  };

  selectedBreed = async breedId => {
    const dog = await fetchDogByBreed(breedId);
    this.setState({
      dog,
    });
  };
  render() {
    return (
      <div>
        <BreedSelect onSelect={this.selectedBreed} />
      </div>
    );
  }
}
