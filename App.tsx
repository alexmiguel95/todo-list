import React from 'react';
import './src/i18n/i18n';
import defaultTheme from './src/theme/default';
import { ThemeProvider } from 'styled-components/native';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={defaultTheme}>
      <></>
    </ThemeProvider>
  );
}

export default App;
