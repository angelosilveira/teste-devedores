import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  img{
    max-width: 100%;
  };

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Roboto', sans-serif;
    font-weight:300;
    background: #FEFEFE;
    font-size: 13px;
  };

  .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    margin-bottom: .5rem;
    font-family: inherit;
    font-weight: 500;
  }

  a {
    &:hover {
      text-decoration: none;
    };

    &[disabled] {
      cursor: not-allowed;
      &:active {
        pointer-events: none;
        box-shadow: none;
      };
    };
  };

  button {
    border: 0;
    background: none;
    cursor: pointer;

    &:focus {
      outline:none;
    };
    &[disabled] {
      cursor: not-allowed;
      &:active {
        box-shadow: none;
      };
    };
  };

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  };

  .form-control{
    outline: initial!important;
    background: #f8f9fa;
    border: 1px solid #ced4da;
    color: #47404f;
    height: calc(1.9695rem + 2px);
    padding: .375rem .75rem;
    font-size: .813rem;
    font-weight: 400;

    &:focus{
      color: #665c70;
      background-color: #fff;
      border-color: #06aed5;
      box-shadow: 0 0 0 0.2rem rgba(6, 174, 213,.25);
    }
  }

  .form-group label{
    color: #70657b;
    font-size: 13px;
    font-weight: 400;
  }

`;

export default GlobalStyle;
