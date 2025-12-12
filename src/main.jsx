import { CssBaseline, createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { store } from './store/store.js';

const theme = createTheme();

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <StrictMode>
                    <CssBaseline />
                    <App />
                </StrictMode>
            </ThemeProvider>
        </BrowserRouter>
    </Provider>
);
