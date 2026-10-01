    import { createGlobalStyle } from 'styled-components'

    const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }

    body {
        background-color: #fff8f2;
        color: #e66767;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
    }
    `

    export default GlobalStyle