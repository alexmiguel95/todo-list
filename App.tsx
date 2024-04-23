import React from 'react';
import './src/i18n/i18n';
import defaultTheme from './src/theme/default';
import { ThemeProvider } from 'styled-components/native';
import Header from './src/components/header/Header';
import { SafeAreaView } from 'react-native';

function App(): React.JSX.Element {
    return (
        <SafeAreaView>
            <ThemeProvider theme={defaultTheme}>
                <Header />
            </ThemeProvider>
        </SafeAreaView>
    );
}

export default App;
