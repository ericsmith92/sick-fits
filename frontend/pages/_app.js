import Page from '../components/Page';
import NProgress from 'nprogress';
import Router from 'next/router';

import '../components/styles/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
//duplicate for error as well, just to turn it off if we error out
Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp({ Component, pageProps }){
    return <Page>
        <Component {...pageProps} />
    </Page>
}
