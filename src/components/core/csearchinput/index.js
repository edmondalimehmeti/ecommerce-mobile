import React from 'react';
import SearchIcon from '_assets/icons/search.svg';
import Cinput from '_components/electrons/cinput';

const Index = ({value, onChangeText, ...props}) => {
  return (
    <Cinput
      containerStyles={[{flex: 1}, props.containerStyles]}
      style={[{borderRadius: 20}, props.style]}
      value={value}
      onChangeText={onChangeText}
      placeholder="Search for ..."
      appendIcon={<SearchIcon />}
      {...props}
    />
  );
};

export default Index;
