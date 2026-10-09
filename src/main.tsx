
    import { StrictMode } from 'react'
    import { createRoot } from 'react-dom/client'
    import { BrowserRouter } from 'react-router-dom'
    import { Provider } from 'react-redux'

    import App from './App'
    import GlobalStyle from './styles/GlobalStyle'
    import { store } from './store'

    createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
        <BrowserRouter>
            <GlobalStyle />
            <App />
        </BrowserRouter>
        </Provider>
    </StrictMode>
    )
