import React from 'react';
import SearchIcon from '_assets/icons/search.svg';
import Cinput from '_components/electrons/cinput';
import {TouchableOpacity} from 'react-native';

const Index = ({value, onChangeText, onSearch, ...props}) => {
  return (
    <Cinput
      containerStyles={[{flex: 1}, props.containerStyles]}
      style={[{borderRadius: 20}, props.style]}
      value={value}
      onChangeText={onChangeText}
      placeholder="Search for ..."
      appendIcon={
        <TouchableOpacity onPress={onSearch}>
          <SearchIcon />
        </TouchableOpacity>
      }
      {...props}
    />
  );
};

export default Index;
