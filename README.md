This is a [ReactNative](https://reactnative.dev/) project created with [`npx react-native init appName`].

## Getting Started

### Config Files

Add Live Base and Map key url to app>config>config.js

```sh
module.exports = {
  BASE_URL: 'https://4d53-2405-201-2006-7803-5dbb-7a3-38c5-b39b.ngrok.io',
  GOOGLE_API_KEY: {
    key: 'AIzaSyBm1a7GUXngk3vzhzmxronDeDSqr_9drZk',
    language: 'en',
    types: 'geocode',
  },
};
```

First, run the metro server:

```bash

# for the run on android device or emulator
yarn android
# or
react-native run-android

# for the run on ios device or simulator
yarn ios
# or
react-native run-ios
```

open your device or simulator or emulator to see the result.

You can start editing the page by modifying `./app/App.js`.

## Learn More

To learn more about ReactNative, take a look at the following resources:

- [ReactNative Documentation](https://reactnative.dev/docs/getting-started) - learn about ReactNative features and API.
- [setup ReactNative](https://reactnative.dev/docs/environment-setup) - to setup ReactNative in system

You can check out [the ReactNative GitHub repository](https://github.com/facebook/react-native) - your feedback and contributions are welcome!
