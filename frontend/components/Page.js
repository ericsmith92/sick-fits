import Header from '../components/Header';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @font-face{
        font-family: 'radnika_next';
        src: url('/static/radnikanext-medium-webfont.woff2');
        format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    html{
        --red: #ff0000;
        --black: #393939;
        --grey: #3A3A3A;
        --gray: var(--grey);
        --lightGrey: #e1e1e1;
        --lightGray: var(--lightGrey);
        --offWhite: #ededed;
        --maxWidth 1000px;
        --bs: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
        box-sizing: border-box;
        font-size: 62.5%;
    }
    *, *:before, *:after{
        box-sizing: inherit;
    }
    body{
        font-family: 'radnika_next';
        margin: 0;
        padding: 0;
        font-size: 1.5rem;
        line-height: 2;
    }
    a{
        text-decoration: none;
        color: var(--black);
    }
    a:hover{
        text-decoration: underline;
    }
    button{
        font-family: 'radnika_next';
    }
`;

const InnerStyles = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 2rem;
`;

export default function Page({ children }){
    return (
        <div>
            <GlobalStyles />
            <Header></Header>
            <InnerStyles>
                {children}
            </InnerStyles>
        </div>
    )
}
