/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {trpc} from '@/util/trpc';
import {httpBatchLink} from '@trpc/client';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React, {useState} from 'react';
import {StatusBar, StyleSheet, useColorScheme, View} from 'react-native';

import NavigationRoot from './src/navigation';
import {FitTheme} from './src/theme/theme';

const App = () => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3000/trpc',
          // optional
          headers() {
            return {
              authorization: `Bearer hsdhshd`,
            };
          },
        }),
      ],
    }),
  );

  const isDarkMode = useColorScheme() === 'dark';
  const isAuth = false;

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <View style={{flex: 1}}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <NavigationContainer theme={FitTheme}>
            <NavigationRoot isAuth={isAuth} />
          </NavigationContainer>
        </View>
      </QueryClientProvider>
    </trpc.Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
