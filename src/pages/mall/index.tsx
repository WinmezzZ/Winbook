import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
// import {NetworkInfo} from 'react-native-network-info';
import RNFS from 'react-native-fs';
import StaticServer from 'react-native-static-server';

export function MallPage() {
  useEffect(() => {
    const path = RNFS.DocumentDirectoryPath;

    const server = new StaticServer(12345, path, { keepAlive: true });

    console.log('serverserverserverserverserverserverserver', server);

    server.start().then(url => {
      console.log('Serving at URL', url);
    });

    // 获取设备的IP地址

    return () => {
      server.stop();
    };
  }, []);

  return (
    <View>
      <Text>WLAN Transfer</Text>
    </View>
  );
}
