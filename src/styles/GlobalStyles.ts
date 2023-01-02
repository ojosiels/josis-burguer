import { createGlobalStyle } from "styled-components";

interface iGlobalStylesProps {
  theme: {
    colorPrimary: string;
    colorPrimary50: string;
    colorSecondary: string;

    backgroundColor: string;

    grey100: string;
    grey50: string;
    grey20: string;
    grey0: string;
  };
}

export default createGlobalStyle`
    :root {
    --color-primary: ${(props: iGlobalStylesProps) => props.theme.colorPrimary};
    --color-primary-50: ${(props) => props.theme.colorPrimary50};
    --color-secondary: ${(props) => props.theme.colorSecondary};

    --grey-100: ${(props) => props.theme.grey100};
    --grey-50: ${(props) => props.theme.grey50};
    --grey-20: ${(props) => props.theme.grey20};
    --grey-0: ${(props) => props.theme.grey0};
    }

    body {
    font-family: "Inter", sans-serif;
    color: var(--grey-100);
    background-color: ${(props) => props.theme.backgroundColor};
    transition: 0.3s linear ;
    }

    input {
    color: var(--grey-100);
    padding: 15px;
    background-color: ${(props) => props.theme.backgroundColor};
    border-radius: 6px;
    border: 2px solid var(--grey-20);
    }

    input::placeholder {
    color: var(--grey-20);
    }

    //Buttons
    button {
    color: var(--grey-100);
    background-color: var(--grey-20);
    font-weight: 600;
    padding: 0.7rem;

    border-radius: 5px;
    border-color: transparent;
    transition: 0.2s;
    }

    button:hover {
    color: var(--grey-20);
    background-color: var(--grey-50);
    }

    button.medium {
    padding: 0.4rem 0.7rem;
    }

    button.green {
    color: white;
    background-color: var(--color-primary);
    }

    button.green:hover {
    background-color: var(--color-primary-50);
    }


    //Typography
    .heading1 {
    font-size: 26px;
    font-weight: 700;
    }

    .heading2 {
    font-size: 22px;
    font-weight: 700;
    }
    .heading3 {
    font-size: 18px;
    font-weight: 700;
    }
    .heading4 {
    font-size: 14px;
    font-weight: 700;
    }

    .headline {
    font-size: 16px;
    font-weight: 400;
    }

    .bodyText {
    font-size: 14px;
    font-weight: 400;
    }

    .bodyBold {
    font-size: 14px;
    font-weight: 600;
    }

    .caption {
    font-size: 12px;
    font-weight: 400;
    }


    //reset
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font-family: "Inter", sans-serif;;
        vertical-align: baseline;
    }
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }


`;
