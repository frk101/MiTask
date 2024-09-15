module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@actions': './src/actions',
          '@animations': './src/animations',
          '@components': './src/components',
          '@constants': './src/constants',
          '@locales': './src/locales',
          '@modals': './src/modals',
          '@navigation': './src/navigation',
          '@reducers': './src/reducers',
          '@screens': './src/screens',
          '@services': './src/services',
          '@store': './src/store',
          '@utils': './src/utils',
          '@widgets': './src/widgets',
          '@hooks': './src/hooks',
          '@styles': './src/styles',
        },
      },
    ],
  ],
};
