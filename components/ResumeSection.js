import Button from './Button';
import { BsFilePdf } from 'react-icons/bs';
import Accordian from './Accordian';
import styles from '../styles/modules/ResumeSection.module.scss';
import ResponsiveDiv from './ResponsiveDiv';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ResumeItem = ({ title, subtitle, leftTop, leftBottom, bullets }) => (
	<div className={styles.resumeItemWrapper}>
		<ResponsiveDiv
			mobile={<>
				<div>
					<b>{title}</b>
				</div>
				<i>{subtitle}</i>
			</>}
		>
			<div className={styles.resumeHeadWrapper}>
				<b>{title}</b>
				<div>{leftTop}</div>
				<i>{subtitle}</i>
				<div>{leftBottom}</div>
			</div>
		</ResponsiveDiv>
		<ul className={styles.resumeUl}>
			{bullets.map((bullet, i) => (<li key={i}>{bullet}</li>))}
		</ul>
	</div >
)

const ResumeSection = () => {
	const router = useRouter();
	return (<>
		<h1>Resume</h1>
		<Link href='/resume.pdf'>
			<Button size='sm' variant='secondary'>
				<BsFilePdf />
				PDF
			</Button>
		</Link>
		<div className={styles.fullWidth}>

			<Accordian links={['Education', 'Experience', 'Projects', 'Skills']}>
				<Accordian.item
					title='Education'
				>
					<ResumeItem
						title='University of Utah - School of Computing'
						subtitle='3.94 GPA | B.S. in Computer Science, Minor in Math'
						leftTop='Salt Lake City, UT'
						leftBottom='Aug 2021 - May 2024'
						bullets={[
							<>2x <i>College of Engineering Deans List</i></>,
							(<>
								Relevant Courses Completed:
								<ul>
									<li>Software Practice I &amp; II</li>
									<li>Algorithms (4000 Level)</li>
									<li>Engineering Probability and Statistics &amp; TA'd</li>
									<li>Linear Algebra</li>
									<li>Calculus I, II, &amp; III</li>
									<li>Models of Computation</li>
									<li>Algorithms and Data Structures</li>
									<li>Foundations of Analysis I (Real Analysis)</li>
									<li>Computer Organization and Architecture</li>
								</ul>
							</>),
							(<>
								Relevant Courses Completed:
								<ul>
									<li>Intro to Optimization (5000 Level)</li>
									<li>Graduate Algorithms (5000 Level)</li>
									<li>Deep Learning</li>
									<li>Foundations of Data Analysis</li>
								</ul>
							</>),
							'Relevant Course Currently Taking: Intro to Optimization, Algorithms (Graduate Level), Deep Learning',
							'4.00 GPA in Math and Computer Science classes',
						]}
					/>
					<ResumeItem
						title='Maple Mountain High School'
						subtitle='3.92 GPA | 32 ACT'
						leftTop='Spanish Fork, UT'
						leftBottom='Sept 2016 - May 2019'
						bullets={[
							'Mathematics Sterling Scholar',
							<><i>5A Academic All-State</i> in Football and Track</>,
							<><i>Eagle Scout</i>, Boy Scouts of America</>,
						]}
					/>
				</Accordian.item>
				<Accordian.item
					title='Experience'
				>
					<ResumeItem
						title='Henry Schein One'
						subtitle='Software Engineering Intern'
						leftTop='American Fork, UT'
						leftBottom='May 2022 - Now'
						bullets={[
							'Used JavaScript, ReactJS, NextJS, as well as other frameworks in a corporate setting',
							'Learned how to develop enterprise software on a team in an agile environment',
							'Used tools such as GitLab, Jira, Figma, Postman, and others',
						]}
					/>
					<ResumeItem
						title='University of Utah - School of Computing'
						subtitle="Teacher's Assistant"
						leftTop='Salt Lake City, UT'
						leftBottom='Jan 2022 - May 2022'
						bullets={[
							'TA for CS3130: Engineering Probability and Statistics',
							'Learned how to communicate technical concepts effectively',
						]}
					/>
				</Accordian.item>
				<Accordian.item
					title='Projects'
				>
					<ResumeItem
						title='VR Petting Zoo Website'
						subtitle={<a href='https://bradandchadsvrpettingzoo.com'><u>https://bradandchadsvrpettingzoo.com</u></a>}
						leftTop='HTML/CSS'
						bullets={[
							'Used HTML and CSS to make a website for my friends',
							'Hosted on Digital Ocean',
						]}
					/>
					<img
						src='/pettingzooscreenshot.png'
						className={styles.inlineImg}
						width={250}
						height={150}
					/>
					<ResumeItem
						title='Spreadsheet Application'
						subtitle={<a href='https://github.com/Herb-Wright/spreadsheet-application'><u>https://github.com/Herb-Wright/spreadsheet-application</u></a>}
						leftTop='C#'
						bullets={[
							'Spreadsheet Application that supports formulas, copying cells, and saving/loading from a file',
						]}
					/>
					<img
						src='/spreadsheetscreenshot.png'
						className={styles.inlineImg}
						width={250}
						height={150}
					/>
					<ResumeItem
						title='Portfolio Website (This Website)'
						subtitle={<a href='https://github.com/Herb-Wright/personal-site'><u>https://github.com/Herb-Wright/personal-site</u></a>}
						leftTop='JavaScript/SCSS'
						bullets={[
							'This website was created using ReactJS, NextJS, Sass, and other frameworks/libraries',
							'Dockerfile lets it be run in a docker container',
						]}
					/>
					<div className={styles.actionDiv}>
						<h3>And a bunch more on the</h3>
						<Button onClick={() => router.push('/projects')}> Projects Page</Button>
					</div>
				</Accordian.item>
				<Accordian.item
					title='Skills'
				>
					<ul className={styles.resumeUl}>
						<li>Proficient in <b>JavaScript</b>, have used React, NextJS, Express, Jest, Node, Prisma, styled-components, next-auth, and others</li>
						<li>Proficient in <b>Python</b>, have used Pytorch, ROS, Numpy, Matplotlib, Conda/Mamba, and others</li>
						<li>Proficient in <b>Git</b>, have used Github and Gitlab</li>
						<li>Proficient in <b>HTML/CSS</b>, have used Sass and Bootstrap</li>
						<li>Familiar with <b>C#</b>, have used ASP.NET and Windows Forms</li>
						<li>Familiar with <b>C/C++</b>, have used Qt</li>
						<li>Other technology I've used: Java, <b>Docker</b>, Linux, <b>SQL</b>, MongoDB, ROS, Figma, Jira, and others</li>
					</ul>
				</Accordian.item>
			</Accordian>
		</div>
	</>);
}

export default ResumeSection;
