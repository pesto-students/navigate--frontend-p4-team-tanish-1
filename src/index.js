import React from 'react';
import ReactDOM from 'react-dom/client';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import App from './App.js';
import theme from './chakra-theme.js'
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

Sentry.init({
  dsn: "https://1093f6a72a5d4e6a9f7d0a57151faa87@o4504212214251520.ingest.sentry.io/4504537991479296",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

let persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
          <App />
          </PersistGate>
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
