import React, {useCallback, useMemo} from 'react';
import {Platform, StyleSheet} from 'react-native';
import {colors} from '_theme/';
import {Calendar} from 'react-native-calendars';
import CalendarHeader from '_components/atoms/Inputs/datepickerInput/horizontalPadding';

const CCalendar = ({value, onChange, ...props}) => {
  const marked = useMemo(() => {
    return {
      [value]: {
        selected: true,
        disableTouchEvent: true,
      },
    };
  }, [value]);

  const onDayPress = useCallback(
    (day) => {
      onChange(day.dateString);
    },
    [onChange],
  );

  return (
    <Calendar
      firstDay={1}
      style={styles.root}
      onDayPress={onDayPress}
      markedDates={marked}
      theme={styles.theme}
      customHeader={CalendarHeader}
      {...props}
    />
  );
};
export default CCalendar;

const styles = StyleSheet.create({
  root: {
    height: Platform.select({
      ios: 410,
      android: 385,
    }),
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.grey3,
  },
  theme: {
    backgroundColor: colors.white,
    calendarBackground: colors.white,
    textSectionTitleColor: '#b6c1cd',
    textSectionTitleDisabledColor: '#d9e1e8',
    selectedDayBackgroundColor: colors.primary,
    selectedDayTextColor: colors.white,
    todayTextColor: colors.primary,
    dayTextColor: colors.grey6,
    textDisabledColor: '#d9e1e8',
    dotColor: colors.primary,
    selectedDotColor: '#ffffff',
    arrowColor: colors.black,
    disabledArrowColor: '#d9e1e8',
    monthTextColor: colors.black,
    indicatorColor: colors.primary,
    textDayFontWeight: '500',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '600',
    textDayFontSize: 15,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16,
  },
});
