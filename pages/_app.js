import Navbar from '../components/Navbar';
import '../styles/globals.scss';
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/400.css'

function MyApp({ Component, pageProps }) {
	return (
		<>
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
