import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '_theme/index';
import {CText} from '_components/index';
import CPressable from '_components/chore/CPressable';
import LottieView from 'lottie-react-native';
import Lottie from '_assets/lottie';

const CButton = ({
  loading = false,
  danger = false,
  content = null,
  contentRight = null,
  light,
  text,
  disable,
  onPress,
  xs = false,
  rounded = false,
  width,
  ...props
}) => {
  const backgroundColor = useMemo(() => {
    if (disable) {
      return colors.lightGrey;
    }
    if (danger) {
      return colors.red;
    }
    return colors.primary;
  }, [danger, disable]);

  const textColor = useMemo(() => {
    if (disable) {
      return colors.grey5;
    }
    if (light) {
      return colors.primary;
    }
    return colors.white;
  }, [disable, light]);

  const textStyles = useMemo(() => {
    const fontSize = xs ? 12 : 14;
    return [styles.text, {fontSize: fontSize, color: textColor}];
  }, [textColor, xs]);

  const containerStyles = useMemo(() => {
    const containerWidth = width ? width : '100%';
    let height = 50;
    if (xs) {
      height = 30;
    }
    return {height: height, width: containerWidth};
  }, [width, xs]);

  return (
    <View style={props.containerStyle}>
      <CPressable
        {...props}
        outputMax={0.98}
        activeOpacity={0.8}
        underlayColor={colors.primaryDark}
        onPress={!disable || !loading ? onPress : console.log}
        disabled={!!(disable || loading)}
        style={[styles.container, {backgroundColor}, containerStyles]}>
        <View style={styles.row}>
          {loading ? (
            <LottieView
              style={styles.lottie}
              source={Lottie.button_loader}
              autoPlay
              loop
              speed={0.8}
            />
          ) : (
            <>
              {content}
              <CText style={textStyles} txt={text} />
              {contentRight}
            </>
          )}
        </View>
      </CPressable>
    </View>
  );
};
export default CButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 45,
    backgroundColor: colors.transparent,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {fontSize: 16, fontWeight: '600'},
  loader: {marginRight: 5},
  row: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
  lottie: {height: 20, width: '100%'},
});
