import Button from '../../components/Button';
import FooterSection from '../../components/FooterSection';
import Section from '../../components/Section';
import { AiFillGithub } from 'react-icons/ai';
import { SiArxiv } from "react-icons/si";
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
		<Section img='/vprism_img.png'>
			<div>
				<h1>V-PRISM</h1>
				<a href='https://arxiv.org/abs/2403.08106'>
					<Button><SiArxiv />View Arxiv</Button>
				</a>
				<ul>
					<li>Robotics research paper</li>
					<li>A method for probabilistically mapping unkown tabletop scenes</li>
					<li>Pytorch</li>
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