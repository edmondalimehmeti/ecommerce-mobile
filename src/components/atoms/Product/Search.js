import React, {useState} from 'react';
import {SafeAreaViewScreen} from '_scenes/base';
import SearchIcon from '_assets/icons/search.svg';
import Cinput from '_components/electrons/cinput';

const Search = () => {
  const [qs, setQs] = useState('');

  return (
    <SafeAreaViewScreen>
      <Cinput
        containerStyles={{paddingHorizontal: 60, paddingBottom: 10}}
        style={{borderRadius: 20}}
        value={qs}
        onChangeText={setQs}
        placeholder="Search for ..."
        appendIcon={<SearchIcon />}
      />
    </SafeAreaViewScreen>
  );
};

export default Search;
