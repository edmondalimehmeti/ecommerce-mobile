import React, {useState, useEffect} from 'react';
import {FlatList, View, RefreshControl, StyleSheet} from 'react-native';
import useAPI from '_utils/hooks/useAPI';
import {colors} from '_theme/';
import Lottie from '_assets/lottie';
import LottieView from 'lottie-react-native';
import ListLoader from '_components/electrons/cloader/listLoader';
import queryString from 'query-string';
import {showError} from '_utils/helpers/functions';

const ApiFlatList = ({renderItem, apiUrl, queryParams = {}, ...props}) => {
  const {makeRequest} = useAPI();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [isEndReached, setIsEndReached] = useState(false);

  const fetchData = async (currentPage) => {
    setIsLoading(true);
    try {
      const query = queryString.stringify({
        'page-size': 10,
        page: currentPage,
        ...queryParams,
      });
      const res = await makeRequest('GET', `${apiUrl}?${query}`);

      const lastPage = res?.data?.last_page;
      const newData = res?.data?.data;

      if (currentPage === lastPage) {
        setIsEndReached(true);
      }

      setData((prevData) => [...prevData, ...newData]);
    } catch (error) {
      showError('Diçka shkoi keq');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchNewDataOnRefresh = async () => {
    setIsRefreshing(true);
    try {
      const query = queryString.stringify({
        'page-size': 10,
        page: 1,
        ...queryParams,
      });
      const res = await makeRequest('get', `${apiUrl}?${query}`);
      const newData = res.data.data;
      setData(newData);
    } catch (error) {
      showError('Diçka shkoi keq');
    } finally {
      setIsRefreshing(false);
    }
  };

  const handleRefresh = () => {
    setPage(1);
    fetchNewDataOnRefresh();
  };

  const handleLoadMore = () => {
    if (!isLoading && !isEndReached && data?.length > 8) {
      setPage((prevPage) => prevPage + 1);
      fetchData(page + 1);
    }
  };

  useEffect(() => {
    setData([]);
    fetchData(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(queryParams)]);

  const renderFooter = () => {
    if (isLoading && !isRefreshing) {
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
      refreshControl={
        <RefreshControl
          tintColor={colors.grey5}
          refreshing={isRefreshing}
          onRefresh={handleRefresh}
        />
      }
      onEndReached={handleLoadMore}
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
