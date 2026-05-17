import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.neikamal.app',
  appName: 'Neik-Amal',
  webDir: 'www',
  android: {
    allowMixedContent: false,
    backgroundColor: '#0a0e0b',
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true,
      backgroundColor: '#0a0e0b',
      androidSplashResourceName: 'splash',
      showSpinner: false,
    },
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#0a0e0b',
    },
  },
};

export default config;
