import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// ? redux-query //
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from 'react-query';

// ? redux-toolkit //
import { store } from './store/store';
import { Provider } from 'react-redux';

// ? react-router-dom //
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
);
