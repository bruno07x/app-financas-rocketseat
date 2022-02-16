import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        /** COLORS */
        --bg: #f0f2f5;
        --red: #e52e4d;
        --blue: #5429cc;
        --green: #33cc95;
        --blue--light: #6933ff;
        --colorTitle: #363f5f;
        --textColor: #969cb3;
        --white: #ffffff;
        /** SIZES DEVICES*/
        --min-desktop: 1080px;
        --min-tablet: 720px;
    }

    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    html{
        @media(max-width: var(---min-desktop)){
            font-size: 93.75%;
        }
        @media(max-width: var(---min-tablet)){
            font-size: 87.5%;
        }
    }

    body{
        background-color: var(--bg);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font: normal 400 1rem/125% 'Poppins', sans-serif;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: .6;
        cursor: not-allowed;
    }
`