import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {View, StyleSheet} from 'react-native';

const CFastImage = ({
  resizeMode = 'contain',
  preventLoading = false,
  children,
  ...props
}) => {
  const [loading, setLoading] = useState(true);
  const borderRadius = props?.style?.borderRadius || 5;

  return (
    <FastImage
      {...props}
      resizeMode={resizeMode}
      onLoadEnd={() => setLoading(false)}
      onError={() => {
        setLoading(false);
      }}
      source={{
        priority: FastImage.priority.normal,
        ...props.source,
      }}>
      {loading && !preventLoading && (
        <View style={[styles.loader, props.style]}>
          <SkeletonPlaceholder>
            <SkeletonPlaceholder.Item
              width={'100%'}
              height={'100%'}
              borderRadius={borderRadius}
            />
          </SkeletonPlaceholder>
        </View>
      )}
      {children}
    </FastImage>
  );
};

export default CFastImage;

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
});
