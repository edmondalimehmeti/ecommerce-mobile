import React, {useState, useEffect, useCallback} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import useAPI from '_utils/hooks/useAPI';
import Lottie from '_assets/lottie';
import LottieView from 'lottie-react-native';
import ListLoader from '_components/electrons/cloader/listLoader';
import queryString from 'query-string';
import {showError} from '_utils/helpers/functions';
import {useFocusEffect} from '@react-navigation/native';

const ApiFlatList = ({
  renderItem,
  apiUrl,
  queryParams = {},
  transformData,
  paginateData = false,
  ...props
}) => {
  const {makeRequest} = useAPI();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const query = queryString.stringify(queryParams);
      const res = await makeRequest('GET', `${apiUrl}?${query}`);
      const data = res.data;
      setData(transformData ? transformData(data) : data);
    } catch (error) {
      showError('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [JSON.stringify(queryParams)]),
  );

  const renderFooter = () => {
    if (isLoading) {
      return (
        <View style={styles.loader}>
          <LottieView
            style={styles.lottie}
            source={Lottie.button_loader}
            autoPlay
            loop
            speed={0.8}
          />
        </View>
      );
    } else {
      return null;
    }
  };

  if (!data?.length && isLoading) {
    return <ListLoader />;
  }

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      keyExtractor={(item) => item?.id?.toString()}
      renderItem={renderItem}
      contentContainerStyle={!data?.length && {flex: 1}}
      ListFooterComponent={renderFooter()}
      {...props}
    />
  );
};

export default ApiFlatList;

const styles = StyleSheet.create({
  loader: {paddingVertical: 15},
  lottie: {height: 20, width: '100%'},
});
