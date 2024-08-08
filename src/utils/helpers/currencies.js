import React from 'react';
import All from '_assets/svg/currencies/all.svg';
import Eur from '_assets/svg/currencies/eur.svg';
import Usd from '_assets/svg/currencies/usd.svg';
import Gbp from '_assets/svg/currencies/gbp.svg';
import colors from '_theme/colors';

export const supportedCurrencies = ['ALL', 'EUR'];

export const isCurrencySupported = (currencyCode) => {
  return supportedCurrencies.includes(currencyCode);
};

const currencies = {
  ALL: {
    label: 'Lekë',
    logo: <All color={colors.brandDarkBlue} />,
    logoSm: <All width={20} color={colors.brandDarkBlue} />,
    logoLightBadge: <All width={18} color={colors.primary} />,
    limit: 50,
    withdrawLimit: 50,
    suggestions: [
      {
        label: '1,000 Lekë',
        value: 1000,
      },
      {
        label: '5,000 Lekë',
        value: 5000,
      },
      {
        label: '10,000 Lekë',
        value: 10000,
      },
    ],
    initialTip: 50,
    tipLimit: 20,
    tips: [
      {
        label: '50 Lekë',
        value: 50,
      },
      {
        label: '100 Lekë',
        value: 100,
      },
      {
        label: '500 Lekë',
        value: 500,
      },
    ],
  },
  EUR: {
    label: 'Euro',
    logo: <Eur color={colors.brandDarkBlue} />,
    logoSm: <Eur width={20} color={colors.brandDarkBlue} />,
    logoLightBadge: <Eur width={18} color={colors.primary} />,
    limit: 0.5,
    withdrawLimit: 5,
    suggestions: [
      {
        label: '10 Euro',
        value: 10,
      },
      {
        label: '50 Euro',
        value: 50,
      },
      {
        label: '100 Euro',
        value: 100,
      },
    ],
    initialTip: 0.5,
    tipLimit: 0.2,
    tips: [
      {
        label: '0.50 Euro',
        value: 0.5,
      },
      {
        label: '1 Euro',
        value: 1,
      },
      {
        label: '5 Euro',
        value: 5,
      },
    ],
  },
  USD: {
    label: 'Dollar',
    logo: <Usd color={colors.brandDarkBlue} />,
    logoSm: <Usd width={20} color={colors.brandDarkBlue} />,
    logoLightBadge: <Usd width={18} color={colors.primary} />,
    limit: 0.5,
    withdrawLimit: 5,
    suggestions: [
      {
        label: '10 Dollar',
        value: 10,
      },
      {
        label: '50 Dollar',
        value: 50,
      },
      {
        label: '100 Dollar',
        value: 100,
      },
    ],
    initialTip: 0.5,
    tipLimit: 0.2,
    tips: [
      {
        label: '0.50 Dollar',
        value: 0.5,
      },
      {
        label: '1 Dollar',
        value: 1,
      },
      {
        label: '5 Dollar',
        value: 5,
      },
    ],
  },
  GBP: {
    label: 'Pound',
    logo: <Gbp color={colors.brandDarkBlue} />,
    logoSm: <Gbp width={20} color={colors.brandDarkBlue} />,
    logoLightBadge: <Gbp width={18} color={colors.primary} />,
    limit: 0.5,
    withdrawLimit: 5,
    suggestions: [
      {
        label: '10 Pound',
        value: 10,
      },
      {
        label: '50 Pound',
        value: 50,
      },
      {
        label: '100 Pound',
        value: 100,
      },
    ],
    initialTip: 0.5,
    tipLimit: 0.2,
    tips: [
      {
        label: '0.50 Pound',
        value: 0.5,
      },
      {
        label: '1 Pound',
        value: 1,
      },
      {
        label: '5 Pound',
        value: 5,
      },
    ],
  },
};

export default currencies;
