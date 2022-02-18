import { createGlobalStyle } from 'styled-components'

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

    .react-modal-overlay{
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0,0,0,.6);
    }

    .react-modal-content {
      width: 100%;
      max-width: 600px;
      background: #f2f2f2;
      position: relative;
      padding: 60px;
      border-radius: 5px;
    }

    .react-modal-close {
      position: absolute;
      right: 1.5rem;
      top: 1.5rem;
      border: 0;
      background: transparent;
      transition: filter .2s;

      &:hover{
        filter: brightness(0.8);
      }
    }
`
