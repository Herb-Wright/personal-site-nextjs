import styles from '../styles/modules/Carousel.module.scss';
import ScrollContainer from 'react-indiana-drag-scroll'
import ResponsiveDiv from './ResponsiveDiv';

const Carousel = ({ children, items }) => {
	const content = items.map(item => (
		<div className={styles.item}>
			{item}
		</div>
	));

	return (
		<ResponsiveDiv
			mobile={
				<div
					className={styles.carouselWrapper + ' ' + styles.scrollSnap}
				>
					{content}
				</div>
			}
		>
			<ScrollContainer
				hideScrollbars={false}
				className={styles.carouselWrapper}
			>
				{content}
			</ScrollContainer>
		</ResponsiveDiv>
	);
}

Carousel.Item = ({ children }) => {
	return (<div className={styles.item}>
		{children}
	</div>)
}

export default Carousel;
