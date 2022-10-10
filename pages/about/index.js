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
				<li>I study Computer Science and Mathematics at the University of Utah.</li>
				<li>My expected graduation date is May 2024.</li>
			</ul>
		</Section>
		<Section bg='secondary' img='/redrock.png' dir='right'>
			<h1>Hobbies</h1>
			<ul>
				<li>I enjoy hiking and canyoneering in southern Utah.</li>
				<li>I enjoy skiing</li>
				<li>I enjoy learning new things</li>
			</ul>
		</Section>
		<Section img='/football.jpg'>
			<h1>High School and Before</h1>
			<ul>
				<li>I played multiple sports growing up, including football, baseball, and track.</li>
				<li>I learned to love math and computers at an early age</li>
			</ul>
		</Section>
		<FooterSection />
	</>);
}

export default AboutPage;
