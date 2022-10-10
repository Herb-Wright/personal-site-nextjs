import Navbar from '../components/Navbar';
import '../styles/globals.scss';
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/600.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<Navbar
				links={[
					{ label: 'Home', path: '/' },
					{ label: 'Projects', path: '/projects' },
					{ label: 'About', path: '/about' },
				]}
			/>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
