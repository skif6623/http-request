import toast, { Toaster } from 'react-hot-toast';
import { fetchDogByBreed } from 'api';
import { Component } from 'react';
import { BreedSelect } from './BreedSelect/BreedSelect';
import { MyLoader } from './ContentLoader/ContentLoader';
import { Dog } from './Dog/Dog';

export class App extends Component {
  state = {
    dog: null,
    isLoading: false,
  };

  selectedBreed = async breedId => {
    try {
      this.setState({ isLoading: true });
      const dog = await fetchDogByBreed(breedId);
      this.setState({
        dog,
      });
    } catch (error) {
      toast.error('Хуй тобі а не собачка попрошайка їбана');
    } finally {
      this.setState({ isLoading: false });
    }
  };
  render() {
    const { dog, isLoading } = this.state;
    return (
      <div>
        <BreedSelect onSelect={this.selectedBreed} />
        {dog && !isLoading && <Dog dog={dog} />}
        {isLoading && <MyLoader />}
        <Toaster />
      </div>
    );
  }
}
