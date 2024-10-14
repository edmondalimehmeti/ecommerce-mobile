import React from 'react';
import {SafeAreaViewScreen} from '_scenes/base';
import useReduxSelector from '_utils/hooks/useReduxSelector';
import {CText, CTitle} from '_components/index';
import {View} from 'react-native';

const FavoritesScreen = () => {
  const favorites = useReduxSelector('favorites.products', []);

  return (
    <SafeAreaViewScreen style={{marginHorizontal: 20}}>
      <CTitle txt="Favorites" />
      <View style={{marginTop: 20}}>
        {favorites.map((item) => (
          <CText txt={item.toString()} />
        ))}
      </View>
    </SafeAreaViewScreen>
  );
};

export default FavoritesScreen;
