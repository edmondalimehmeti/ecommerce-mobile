import Geocoder from 'react-native-geocoding';
import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {GOOGLE_MAPS_API_KEYS} from '_config/index';

Geocoder.init(GOOGLE_MAPS_API_KEYS);

export const distanceInKm = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = Number(R * c) || 0;
  return distance.toFixed(1);
};

export const getCurrentLocation = async (onResult) => {
  try {
    const permissionGrated =
      Platform.OS === 'ios'
        ? await requestIosLocationPermission()
        : await requestAndroidLocationPermission();

    if (permissionGrated) {
      Geolocation.getCurrentPosition(
        async (position) => {
          const {latitude, longitude} = position.coords;
          const result = await Geocoder.from(latitude, longitude);

          let formatted_address = result.results[0].formatted_address;

          result.results.forEach((item) => {
            if (item.types.includes('route')) {
              formatted_address = item.formatted_address;
            }
          });
          onResult({
            coordinates: {lat: latitude, lng: longitude},
            address: formatted_address,
          });
        },
        (error) => {
          onResult(null);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    } else {
      onResult(null);
    }
  } catch (e) {
    onResult(null);
  }
};

export const getCurrentCoordinates = async (onResult) => {
  try {
    const permissionGrated =
      Platform.OS === 'ios'
        ? await requestIosLocationPermission()
        : await requestAndroidLocationPermission();

    if (permissionGrated) {
      Geolocation.getCurrentPosition(
        async (position) => {
          const {latitude, longitude} = position.coords;
          onResult({latitude, longitude});
        },
        (error) => {
          onResult(null);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    } else {
      onResult(null);
    }
  } catch (e) {
    onResult(null);
  }
};

const requestIosLocationPermission = async () => {
  try {
    const result = await Geolocation.requestAuthorization('whenInUse');

    return result === 'granted';
  } catch (e) {
    return false;
  }
};

const requestAndroidLocationPermission = async () => {
  try {
    const result = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
    ]);

    return (
      result['android.permission.ACCESS_FINE_LOCATION'] ===
        PermissionsAndroid.RESULTS.GRANTED ||
      result['android.permission.ACCESS_COARSE_LOCATION'] ===
        PermissionsAndroid.RESULTS.GRANTED
    );
  } catch (err) {
    return false;
  }
};
