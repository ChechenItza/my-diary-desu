import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import App from './App';
import CalendarDateValidator from './guards/CalendarDateValidator';
import { toCalendarLink } from './utils/date';
import EntryDateValidator from './guards/EntryDateValidator';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route
              index
              element={<Navigate to={toCalendarLink(new Date())} />}
            />
            <Route path="/entry/:date" element={<EntryDateValidator />} />
            <Route path=":date" element={<CalendarDateValidator />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
