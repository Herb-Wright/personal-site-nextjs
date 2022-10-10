import Section from './Section';

const FooterSection = (props) => {
	return (
		<Section bg='secondary' {...props}>
			<h1>Contact Me</h1>
			<h2>Email: <b>herb.e.wright@gmail.com</b></h2>
		</Section>
	);
}

export default FooterSection;