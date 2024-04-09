import ResponsiveDiv from './ResponsiveDiv';
import styles from '../styles/modules/IAmSection.module.scss';


const items = [
	'⚛️ React',
	'🌐 Fullstack',
	'🤖 Robotic Perception',
	'📈 Machine Learning',
	'🖥️ Computer Science',
	'📏 Mathematics',
];

const IAmSection = () => {
	return (
		<>
			<h1 className={styles.centered}>I Do...</h1>
			<ResponsiveDiv
				mobile={<>
					<ul>
						{items.slice(0, 4).map(item => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</>}
			>
				<ul className={styles.twoCol}>
					{items.slice(0, 6).map(item => (
						<li key={item}>{item}</li>
					))}
				</ul>
			</ResponsiveDiv>
		</>
	);
}

export default IAmSection;
