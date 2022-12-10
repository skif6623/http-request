import { fetchDogByBreed } from 'api';
import { Component } from 'react';
import { BreedSelect } from './BreedSelect/BreedSelect';
import { Dog } from './Dog/Dog';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

export class App extends Component {
  state = {
    dog: null,
    error: null,
    isLoading: false,
  };

  selectedBreed = async breedId => {
    try {
      this.setState({ isLoading: true, error: null });
      const dog = await fetchDogByBreed(breedId);
      this.setState({
        dog,
      });
    } catch (error) {
      this.setState({ error: 'Хуй тобі а не собачка попрошайка їбана' });
    } finally {
      this.setState({ isLoading: false });
    }
  };
  render() {
    const { dog, error, isLoading } = this.state;
    return (
      <div>
        <BreedSelect onSelect={this.selectedBreed} />
        {dog && !isLoading && <Dog dog={dog} />}
        {error && <p>{error}</p>}
        {isLoading && (
          <ClimbingBoxLoader
            loading={isLoading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        )}
      </div>
    );
  }
}
