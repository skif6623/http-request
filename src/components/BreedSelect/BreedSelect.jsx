import React, { Component } from 'react';
import Select from 'react-select';
import { fetchBreeds } from 'api';

export class BreedSelect extends Component {
  state = {
    breeds: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const breeds = await fetchBreeds();
      this.setState({ breeds });
    } catch (error) {
      this.setState({ error: 'Ти все поламав, скотина криворука' });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  makeOption = () => {
    const { breeds } = this.state;

    return breeds.map(breed => ({
      value: breed.id,
      label: breed.name,
    }));
  };

  handleChange = option => {
    this.props.onSelect(option.value);
  };

  render() {
    const { isLoading, error } = this.state;
    const options = this.makeOption();
    return (
      <div>
        <Select
          isLoading={isLoading}
          options={options}
          onChange={this.handleChange}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    );
  }
}
