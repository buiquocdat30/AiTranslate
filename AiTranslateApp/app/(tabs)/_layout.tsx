import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="translate"
        options={{
          title: 'Translate',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="chevron.left.forwardslash.chevron.right" color={color} />, // icon translate
        }}
      />
      <Tabs.Screen
        name="text-to-speech"
        options={{
          title: 'Text to Speech',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="speaker.wave.2.fill" color={color} />, // icon loa
        }}
      />
      <Tabs.Screen
        name="speech-to-text"
        options={{
          title: 'Speech to Text',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="mic.fill" color={color} />, // icon micro
        }}
      />
    </Tabs>
  );
}
