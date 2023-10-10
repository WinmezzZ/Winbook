import express from 'express';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { NetworkInfo } from 'react-native-network-info';

export function MallPage() {
  const [ip, setIp] = useState<string>();
  const [file, setFile] = useState<any>();

  useEffect(() => {
    const server = express();

    server.post('/upload', async (req, res) => {
      console.log(req);
      // do something

      return res.json({ message: 'OK' });
    });
    const app = server.listen(12345, () => {
      console.log(`server start on 12345`);
    });

    NetworkInfo.getIPV4Address().then(ip => {
      setIp(ip || undefined);
    });

    return () => {
      app.close();
    };
  }, []);

  return (
    <View>
      <Text>WLAN Transfer</Text>
    </View>
  );
}
