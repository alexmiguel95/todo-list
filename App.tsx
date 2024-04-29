import React from 'react';
import './src/i18n/i18n';
import defaultTheme from './src/theme/default';
import { ThemeProvider } from 'styled-components/native';
import Header from './src/components/header/Header';
import { SafeAreaView } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
    return (
        <QueryClientProvider client={queryClient}>
            <SafeAreaView>
                <ThemeProvider theme={defaultTheme}>
                    <Header />
                </ThemeProvider>
            </SafeAreaView>
        </QueryClientProvider>
    );
}

export default App;
