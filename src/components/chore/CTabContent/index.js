import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '_theme/';
import TabItem from '_components/chore/CTabContent/tab';

const CTabContent = ({tabOptions, defaultKey = 0, children}) => {
  const [active, setActive] = useState(defaultKey);

  return (
    <View style={styles.flex1}>
      <View style={styles.tabContainer}>
        {tabOptions.map((option, key) => (
          <TabItem
            key={key}
            txt={option}
            isActive={active === key}
            onPress={() => setActive(key)}
          />
        ))}
      </View>
      <View style={styles.flex1}>{children[active]}</View>
    </View>
  );
};

export default CTabContent;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.grey3,
    borderRadius: 15,
    padding: 5,
    marginBottom: 10,
    marginHorizontal: 20,
    marginTop: 10,
  },
  flex1: {flex: 1},
});
