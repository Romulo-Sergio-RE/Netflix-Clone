import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { MovieProvider } from './app/context/movieContext';
import { TrendingProvider } from './app/context/trendingContext';
import { TvShowsProvider } from './app/context/tvShowsContext';
import { GlobalStyles } from './GlobalStyle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <MovieProvider>
      <TvShowsProvider>
        <TrendingProvider>
          <App />
        </TrendingProvider>
      </TvShowsProvider>
    </MovieProvider>
  </React.StrictMode>
);
