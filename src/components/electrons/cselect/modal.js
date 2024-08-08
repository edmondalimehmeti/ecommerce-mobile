import React, {useEffect, useState} from 'react';
import {
  Keyboard,
  Modal,
  Platform,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {CText} from '_components';
import {colors} from '_theme';
import {testProps} from '_utils/helpers/functions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LocationIcon from '_assets/icons/location.svg';
import {CInput} from '_components/index';

const SelectModal = ({
  show = false,
  options,
  onSelect,
  onClose,
  titleKey = 'name',
  subtitleFormatter = null,
  testIdPrefix = '',
  prependIcon,
  openFunction,
  ...props
}) => {
  const [data, setData] = useState(options || []);
  const [searchQuery, setSearchQuery] = useState('');


  const handleSearch = (query) => {
    setSearchQuery(query);
    if (!query) {
      setData(options);
      return;
    }

    const newData = options.filter((option) =>
      option[titleKey]?.toLowerCase().includes(query?.toLowerCase()),
    );
    setData(newData);
  };

  useEffect(() => {
    if (show) {
      handleSearch('');
      openFunction && openFunction();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  return (
    <Modal
      swipeDirection="down"
      animationType="slide"
      presentationStyle="formSheet"
      transparent
      statusBarTranslucent
      visible={show}
      onRequestClose={async () => {
        await Keyboard.dismiss();
        setTimeout(() => {
          onClose();
        }, 300);
      }}>
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <View style={styles.headerStyle}>
            <View style={styles.cancel}>
              <CText
                txt={'Close'}
                onPress={async () => {
                  await Keyboard.dismiss();
                  setTimeout(() => {
                    onClose();
                  }, 300);
                }}
              />
            </View>
          </View>
          <FlatList
            key={options?.length}
            data={data}
            stickyHeaderIndices={[0]}
            ListHeaderComponent={
              <View style={{padding: 10, backgroundColor: colors.white}}>
                <CInput
                  placeholder={'Search'}
                  value={searchQuery}
                  onChangeText={handleSearch}
                  appendIcon={
                    searchQuery.length > 0 && (
                      <TouchableOpacity
                        style={{justifyContent: 'center'}}
                        onPress={() => {
                          setSearchQuery('');
                          handleSearch('');
                        }}>
                        <Icon
                          name={'close-circle'}
                          size={18}
                          color={colors.grey4}
                        />
                      </TouchableOpacity>
                    )
                  }
                />
              </View>
            }
            renderItem={({item, index}) => (
              <TouchableOpacity
                {...testProps(`${testIdPrefix}-item-${index}-container`)}
                style={styles.itemRoot}
                onPress={() => onSelect(item)}>
                {!!prependIcon && (
                  <View style={styles.prependIcon}>
                    <LocationIcon color={colors.grey5} />
                  </View>
                )}
                <View style={styles.itemContainer}>
                  <CText
                    txt={item[titleKey]}
                    {...testProps(`${testIdPrefix}-item-${index}-title`)}
                  />
                </View>
                <Icon name={'chevron-right'} size={22} color={colors.grey4} />
              </TouchableOpacity>
            )}
          />
          <SafeAreaView />
        </View>
      </View>
    </Modal>
  );
};

export default SelectModal;

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: colors.grey96,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalContainer: {
    justifyContent: 'flex-end',
    flex: 1,
    backgroundColor: Platform.select({
      ios: 'transparent',
      android: '#00000050',
    }),
  },
  modalView: {
    height: Platform.select({
      ios: '98%',
      android: '94%',
    }),
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  search: {flex: 1},
  cancel: {marginLeft: 5},
  itemRoot: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderColor: colors.lightestGrey,
    borderBottomWidth: 1,
  },
  prependIcon: {marginRight: 10},
  itemContainer: {flex: 1},
  subtitle: {
    marginTop: 2,
    color: colors.grey5,
  },
});
