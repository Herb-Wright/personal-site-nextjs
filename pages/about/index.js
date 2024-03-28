import FooterSection from '../../components/FooterSection';
import Section from '../../components/Section';


const AboutPage = ({ }) => {
	return (<>
		<Section bg='/lampphoto.png'>
			<div className='titleBlock'>
				<h1 className='title'>About</h1>
			</div>
		</Section>
		<Section img='/utah.jpg'>
			<h1>College</h1>
			<ul>
				<li>I am studying for a Bachelors in Computer Science with a minor Mathematics at the University of Utah.</li>
				<li>My expected graduation date is December 2024.</li>
				<li>Multiple year participant in the Rocky Mountain region ICPC competition</li>
			</ul>
		</Section>
		<FooterSection />
	</>);
}

export default AboutPage;
