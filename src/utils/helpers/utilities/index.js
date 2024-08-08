import {colors} from '_theme/index';
import CarIcon from '_assets/icons/car.svg';
import Digicom from '_assets/svg/utilities/digicom.svg';
import Vodafone from '_assets/svg/utilities/vodafone.svg';
import One from '_assets/svg/utilities/one.svg';
import Albsig from '_assets/svg/utilities/albsig.svg';
import Ansig from '_assets/svg/utilities/ansig.svg';
import Intersig from '_assets/svg/utilities/intersig.svg';
import Digitalb from '_assets/svg/utilities/digitalb.svg';
import Tring from '_assets/svg/utilities/tring.svg';
import Oshee from '_assets/svg/utilities/oshee.svg';
import NewConstruction from '_assets/svg/utilities/new_construction.svg';
import React from 'react';
import Ukt from '_assets/svg/utilities/ukt.svg';
import Ukd from '_assets/svg/utilities/ukd.svg';
import Ukv from '_assets/svg/utilities/ukv.svg';

const HEIGHT = 40;

export const UKT = {
  utilityKey: 'UKT',
  icon: <Ukt />,
  screenName: 'ukt',
};

export const UKD = {
  utilityKey: 'UKD',
  icon: <Ukd />,
  screenName: 'ukd',
};

export const UKV = {
  utilityKey: 'UKV',
  icon: <Ukv />,
  screenName: 'ukv',
};

export const VEHICLE_FINES = {
  utilityKey: 'VEHICLE_FINES',
  icon: <CarIcon color={colors.grey7} />,
  screenName: 'vehicleFines',
};

export const DIGICOM = {
  utilityKey: 'DIGICOM',
  icon: <Digicom height={HEIGHT} />,
  screenName: 'digicom',
};

export const VODAFONE = {
  utilityKey: 'VODAFONE',
  icon: <Vodafone height={HEIGHT} />,
  screenName: 'vodafone',
};

export const VODAFONE_NEXT = {
  utilityKey: 'VODAFONE_NEXT',
  icon: <Vodafone height={HEIGHT} />,
  screenName: 'vodafoneNext',
};

export const ONE = {
  utilityKey: 'ONE',
  icon: <One height={HEIGHT} />,
  screenName: 'one',
};

export const ALBSIG = {
  utilityKey: 'ALBSIG',
  icon: <Albsig height={HEIGHT} />,
  screenName: 'albsig',
};

export const ANSIG = {
  utilityKey: 'ANSIG',
  icon: <Ansig height={HEIGHT} />,
  screenName: 'ansig',
};

export const INTERSIG = {
  utilityKey: 'INTERSIG',
  icon: <Intersig height={40} width={40} />,
  screenName: 'intersig',
};

export const DIGITALB = {
  utilityKey: 'DIGITALB',
  icon: <Digitalb />,
  screenName: 'digitalb',
};

export const TRING = {
  utilityKey: 'TRING',
  icon: <Tring />,
  screenName: 'tring',
};

export const OSHEE = {
  utilityKey: 'OSHEE',
  icon: <Oshee />,
  screenName: 'oshee',
  comingSoon: true,
};

export const TAXES = {
  utilityKey: 'TAXES',
  icon: <NewConstruction />,
  screenName: 'taxes',
  comingSoon: true,
};

export default [
  UKT,
  UKD,
  UKV,
  VEHICLE_FINES,
  DIGICOM,
  VODAFONE,
  VODAFONE_NEXT,
  ONE,
  ALBSIG,
  ANSIG,
  INTERSIG,
  DIGITALB,
  TRING,
  OSHEE,
  TAXES,
];
