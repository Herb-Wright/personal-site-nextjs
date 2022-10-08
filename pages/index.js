import Button from '../components/Button';
import Section from '../components/Section';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { Link } from 'react-scroll';
import IAmSection from '../components/IAmSection';
import ResumeSection from '../components/ResumeSection';
import IconButton from '../components/IconButton';

const Home = () => {
	return (<>
		<Section
			bg='/bannerImg1.png'
		>
			<div className='titleBlock'>
				<h1 className='title'>Hi, I'm Herbie</h1>
			</div>
			<Link to='resume'>
				<Button size='lg'>
					<AiOutlineArrowDown />
					Resume
				</Button>
			</Link>
		</Section>
		<Section bg='secondary'>
			<IAmSection />
		</Section>
		<a id='resume' style={{ top: '-5rem', position: 'relative' }} />
		<Section>
			<ResumeSection />
		</Section>
		<Section bg='secondary'>
			<h1>Contact Me</h1>
			<h2>Email: <b>herb.e.wright@gmail.com</b></h2>
		</Section>
	</>);
}

export default Home;
