import React, {useState} from 'react';
import {colors} from '_theme/';
import {TouchableOpacity, StyleSheet} from 'react-native';
import ShowIcon from '_assets/icons/show.svg';
import HiddenIcon from '_assets/icons/hidden.svg';
import {CInput} from '_components/index';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CPasswordInput = ({iconName, ...props}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <CInput
      secureTextEntry={!showPassword}
      iconName={'lock-closed-outline'}
      {...props}
      appendIcon={
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.eyeButton}>
          <Ionicons
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            size={24}
            color={colors.grey4}
          />
        </TouchableOpacity>
      }
    />
  );
};
export default CPasswordInput;

const styles = StyleSheet.create({
  eyeButton: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: 30,
  },
});
