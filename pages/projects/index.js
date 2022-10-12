import Button from '../../components/Button';
import FooterSection from '../../components/FooterSection';
import Section from '../../components/Section';
import { AiFillGithub } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg'
import OtherProjectsSection from '../../components/OtherProjectsSection';

const ProjectsPage = ({ }) => {
	return (<>
		<Section bg='/bannerImg1.png'>
			<div className='titleBlock'>
				<h1 className='title'>Projects</h1>
				<a href='https://github.com/Herb-Wright'>
					<Button size='lg'><AiFillGithub />GitHub</Button>
				</a>
			</div>
		</Section>
		<Section img='/pettingzooscreenshot.png'>
			<div>
				<h1>Petting Zoo Website</h1>
				<a href='https://bradandchadsvrpettingzoo.com/'>
					<Button><CgWebsite />View Website</Button>
				</a>
				<ul>
					<li>HTML/CSS</li>
					<li>Created a website for my friends</li>
				</ul>
			</div>
		</Section>
		<Section dir='right' bg='secondary' img='spreadsheetscreenshot.png'>
			<div>
				<h1>Spreasheet Application</h1>
				<a href='https://github.com/Herb-Wright/spreadsheet-application'>
					<Button><AiFillGithub />View Code</Button>
				</a>
				<ul>
					<li>C#</li>
					<li>Spreadsheet application that supports copying cells, formulas, and saving/loading from file</li>
				</ul>
			</div>
		</Section>
		<OtherProjectsSection />
		<FooterSection />
	</>);
}

export default ProjectsPage;