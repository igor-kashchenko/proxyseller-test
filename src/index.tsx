import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const Root: React.FC = () => (
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<Root />);
