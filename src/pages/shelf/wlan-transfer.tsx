import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import FtpServer from 'react-native-ftp-server';
import WifiManager from 'react-native-wifi-reborn';

const WlanTransfer = () => {
  useEffect(() => {
    // 创建WLAN
    WifiManager.setEnabled(true);

    // 获取设备的IP地址
    WifiManager.getCurrentWifiSSID().then(ssid => {
      WifiManager.getIP(ssid).then(ip => {
        // 启动FTP服务器
        const ftpServer = new FtpServer(ip, 2221, 'username', 'password');

        ftpServer.startServer();
      });
    });

    return () => {
      // 在组件卸载时停止FTP服务器
      ftpServer.stopServer();
    };
  }, []);

  return (
    <View>
      <Text>WLAN Transfer</Text>
    </View>
  );
};

export default WlanTransfer;
