import styles from '../styles/modules/Section.module.scss';
import { useScroll, motion, useTransform } from 'framer-motion';
import { useRef } from 'react';

const contentInitial = {
	opacity: 0,
	y: 40,
};

const contentWhileInView = {
	opacity: 1,
	y: 0
};

const contentTransition = {
	delay: 0.2,
	duration: 0.4,
}

const variants = ['primary', 'secondary', 'alt'];

const Section = ({ bg = 'primary', children, img, dir = 'left' }) => {
	const scrollRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: scrollRef,
		offset: ['end start', 'start end'],
	})
	const isParallax = !variants.includes(bg);
	const offset = useTransform(
		scrollYProgress, [0, 1],
		(img ? ['0vh', '-20vh'] : ['0vh', '-60vh'])
	);
	if (img) {
		return (
			<div
				ref={scrollRef}
				className={styles.section + ' ' + styles.imgSection + ' ' + (dir === 'right' && styles.reverse)}
			>
				<motion.div
					className={styles.contentWrapper + ' ' + styles.centered}
					initial={contentInitial}
					whileInView={contentWhileInView}
					transition={contentTransition}
				>
					{children}
				</motion.div>
				<div
					className={styles.imgContainer}
				>
					<motion.img
						src={img}
						style={{ y: offset }}
						className={dir === 'left' ? styles.sideImageLeft : styles.sideImageRight}
					/>
				</div>
			</div>
		);
	}
	if (isParallax) {
		return (
			<div ref={scrollRef} className={styles.section + ' ' + styles.parallaxSection}>
				<motion.img
					className={styles.bgImage}
					src={bg}
					style={{ y: offset }}
				/>
				<motion.div
					initial={contentInitial}
					className={styles.centered}
					transition={contentTransition}
					whileInView={contentWhileInView}
				>
					{children}
				</motion.div>
			</div>
		);
	}
	return (
		<>
			<div className={styles.section + ' ' + styles[bg]}>
				<motion.div
					className={styles.centered}
					initial={contentInitial}
					whileInView={contentWhileInView}
				>
					{children}
				</motion.div>
			</div>
		</>
	);
}

export default Section;
