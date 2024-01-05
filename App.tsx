import React from 'react';
import { ScrollView, View } from 'react-native';

import { useEffect } from 'react';
import { Notifications } from 'react-native-notifications';
import tw from 'twrnc';
import ContestList from './components/ContestList';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Registered } from 'react-native-notifications';
import Notification from './components/Notification';


console.log('hello world23');

const App: React.FC = () => {
  useEffect(() => {
    // Add event listeners for notifications
    const handleRemoteNotificationsRegistered = (event: Registered) => {
      console.log('Device registered for push notifications:', event.deviceToken);
    };

    Notifications.events().registerRemoteNotificationsRegistered(
      handleRemoteNotificationsRegistered
    );

    Notifications.events().registerNotificationReceivedForeground((notification, completion) => {
      console.log('Notification received while app is in the foreground:', notification);
      // Handle the notification here
      completion({ alert: true, sound: true, badge: false });
    });

    Notifications.events().registerNotificationOpened((notification, completion) => {
      console.log('Notification opened:', notification);
      // Handle the notification opening here
      completion();
    });

    return () => {
      // Remove event listeners on component unmount
      Notifications.events().registerRemoteNotificationsRegistered(
        handleRemoteNotificationsRegistered
      );
      Notifications.events().registerNotificationReceivedForeground(
        (notification, completion) => {
          console.log('Notification received while app is in the foreground:', notification);
          // Handle the notification here
          completion({ alert: true, sound: true, badge: false });
        }
      );
      Notifications.events().registerNotificationOpened(
        (notification, completion) => {
          console.log('Notification opened:', notification);
          // Handle the notification opening here
          completion();
        }
      );
    };
  }, []);


  return (
    <ScrollView style={tw`bg-[#2d3250]`}>
      <View style={tw` flex flex-col justify-center items-center`}>
        <Notification/>
        <Navbar />
        <ContestList />
        <Footer />
      </View>
    </ScrollView>

  );
};

export default App;
