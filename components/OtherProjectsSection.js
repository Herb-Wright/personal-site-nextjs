import Button from './Button';
import Section from './Section';
import Carousel from './Carousel';
import styles from '../styles/modules/OtherProjectsSection.module.scss';
import { AiFillGithub } from 'react-icons/ai';

const GithubAction = ({ link }) => (
	<a href={link}><Button><AiFillGithub />View code</Button></a>
)

const ProjectCard = ({ title, img, action, items }) => (
	<div className={styles.card}>
		<div className={styles.cardImgWrapper}>
			<img className={styles.cardImg} src={img} />
		</div>
		<div className={styles.cardContent}>
			<h3 className={styles.cardTitle}>{title}</h3>
			<ul className={styles.cardUl}>
				{items.map(item => <li>{item}</li>)}
			</ul>
			<div className={styles.right}>
				{action}
			</div>
		</div>
	</div>
);

const projects = [
	{
		title: 'Portfolio Website',
		action: <GithubAction link='https://github.com/Herb-Wright/personal-site' />,
		img: '/bannerImg1.png',
		items: [
			'ReactJS, NextJS, and Sass',
			'Static export hosted on Digital Ocean',
		],
	},
	{
		title: 'BertonGAN',
		action: <GithubAction link='https://github.com/Herb-Wright/berton-gan' />,
		img: '/bertongan.png',
		items: [
			'A style-transfer and metric learning GAN architecture',
			'Worked as a partnership'
		]
	},
	{
		title: 'C# AVL Binary Tree',
		action: <GithubAction link='https://github.com/Herb-Wright/avl-binary-tree' />,
		img: '/avltree.png',
		items: [
			'C# implementation of an AVL Binary Tree',
		],
	},
	{
		title: 'Squared',
		action: <GithubAction link='https://github.com/Herb-Wright/squared' />,
		img: '/squared.png',
		items: [
			'Python game where you run away from red squares',
		],
	},
	{
		title: 'Joke Wars Website',
		action: <GithubAction link='https://github.com/Herb-Wright/joke-wars-website' />,
		img: '/jokewars.png',
		items: [
			'ReactJS, ExpressJS, MongoDB',
			'Website where you make and rank jokes'
		],
	},
	{
		title: 'ML Essay',
		action: <GithubAction link='https://github.com/Herb-Wright/school-essay' />,
		img: '/essay.png',
		items: [
			'LaTeX, Python, Markdown',
			'On Bayesian optimization for choosing hyperparameters',
		],
	},
]


const OtherProjectsSection = ({ }) => {
	return (
		<Section>
			<h1>Other Projects</h1>
			<Carousel items={projects.map(project => <ProjectCard {...project} />)} />
		</Section>
	);
}

export default OtherProjectsSection;
