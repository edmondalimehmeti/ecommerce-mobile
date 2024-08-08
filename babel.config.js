module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          _assets: './src/assets',
          _components: './src/components',
          _config: './src/config',
          _i18n: './src/i18n',
          _navigations: './src/navigations',
          _redux: './src/redux',
          _scenes: './src/scenes',
          _theme: './src/theme',
          _utils: './src/utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
