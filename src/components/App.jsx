import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchDogByBreed } from 'api';
import { BreedSelect } from './BreedSelect/BreedSelect';
import { MyLoader } from './ContentLoader/ContentLoader';
import { Dog } from './Dog/Dog';

export const App = () => {
  const [dog, setDog] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const selectedBreed = async breedId => {
    try {
      setIsLoading(true);
      const dog = await fetchDogByBreed(breedId);
      setDog(dog);
    } catch (error) {
      toast.error('Не вийшло знайти собачку');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <BreedSelect onSelect={selectedBreed} />
      {dog && !isLoading && <Dog dog={dog} />}
      {isLoading && <MyLoader />}
      <Toaster />
    </div>
  );
};
