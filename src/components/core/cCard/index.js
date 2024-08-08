import React from 'react';
import {colors} from '_theme/index';
import {StyleSheet, View} from 'react-native';
import {CText} from '_components/index';

const CCard = ({icon, style, title, subtitle, extraContent}) => {
  return (
    <View style={[styles.container, style]}>
      {icon}
      <View>
        <CText txt={title} style={styles.title} />
        {subtitle && <CText txt={subtitle} style={styles.subtitle} />}
        {extraContent && <View style={{marginTop: 10}}>{extraContent}</View>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.lightestGrey,
    flexDirection: 'row',
    padding: 21,
    borderRadius: 10,
    columnGap: 10,
  },
  title: {
    fontWeight: '600',
    fontSize: 14,
  },
  subtitle: {fontSize: 14, marginTop: 10},
});

export default CCard;
