import { fetchDogByBreed } from 'api';
import { Component } from 'react';
import { BreedSelect } from './BreedSelect/BreedSelect';

export class App extends Component {
  state = {
    dog: null,
    error: null,
  };

  selectedBreed = async breedId => {
    try {
      const dog = await fetchDogByBreed(breedId);
      this.setState({
        dog,
      });
    } catch (error) {
      this.setState({ error: 'Хуй тобі а не собачка попрошайка їбана' });
    }
  };
  render() {
    const { dog, error } = this.state;
    return (
      <div>
        <BreedSelect onSelect={this.selectedBreed} />
        {dog && <img src={dog.url} alt="залупа" />}
        {error && <p>{error}</p>}
      </div>
    );
  }
}
