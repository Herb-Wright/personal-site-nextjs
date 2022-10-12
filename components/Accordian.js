import { useState } from 'react';
import styles from '../styles/modules/Accordian.module.scss'
import IconButton from './IconButton';
import { IoTriangleSharp } from 'react-icons/io5';
import { motion } from 'framer-motion';
import ResponsiveDiv from './ResponsiveDiv';
import Button from './Button';
import { Link, Element } from 'react-scroll';

const Accordian = ({ children, links = [] }) => {

	return (
		<ResponsiveDiv
			mobile={
				<div className={styles.accordianWrapper}>{children}</div>
			}
		>
			<div className={styles.desktopWrapper}>
				<div className={styles.accordianLeft}>
					{links.map(link => (
						<Link key={link} to={link.toLowerCase()}>
							<Button variant='text'>{link}</Button>
						</Link>
					))}
				</div>
				<div className={styles.divider} />
				<div className={styles.accordianWrapper}>{children}</div>
			</div>
		</ResponsiveDiv>
	);
}

Accordian.item = ({ title, children }) => {
	const [open, setOpen] = useState(false);

	return (
		<div className={styles.itemWrapper}>
			<div style={{ top: '-6rem', position: 'relative' }} >
				<Element name={title.toLowerCase()} />
			</div>
			<div className={styles.itemTitleSection}>
				{title}
				<motion.div
					className={styles.iconButtonWrapper}
					initial={{ rotate: '0deg', width: 0 }}
					animate={{ rotate: open ? '180deg' : '90deg' }}
				>
					<IconButton
						variant='text'
						icon={<IoTriangleSharp />}
						onClick={() => setOpen(!open)}
					/>
				</motion.div>
			</div>
			<motion.div
				className={styles.contentWrapper}
				initial={{ height: 0 }}
				animate={{
					height: open ? 'fit-content' : 0,
					marginTop: open ? '0.5rem' : 0,
					marginBottom: open ? '0.5rem' : 0
				}}
				transition={{ type: 'tween' }}
			>
				{children}
			</motion.div>
		</div>
	);
}

export default Accordian;