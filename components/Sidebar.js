import styles from '../styles/modules/Sidebar.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import { useRouter } from 'next/router';

const Sidebar = ({ isOpen, links, onClose = () => { } }) => {
	const router = useRouter();

	return (
		<AnimatePresence>
			{isOpen &&
				<motion.div
					initial={{ background: 'rgba(0, 0, 0, 0)' }}
					animate={{ background: 'rgba(0, 0, 0, 0.5)' }}
					exit={{ background: 'rgba(0, 0, 0, 0)' }}
					className={styles.backdrop}
					onClick={onClose}
				>
					<motion.div
						initial={{ width: 0 }}
						animate={{ width: 'calc(min(70vw, 400px))' }}
						exit={{ x: '100vw' }}
						className={styles.sidebar}
						onClick={e => console.log(e)}
					>
						<div className={styles.linksWrapper}>
							{links.map(({ label, path }) => (
								<div>
									<Button
										variant='text'
										key='path'
										size='lg'
										className={router.route === path ? styles.underline : ''}
										onClick={() => router.push(path)}
									>
										{label}
									</Button>
								</div>
							))}
						</div>
					</motion.div>
				</motion.div>
			}
		</AnimatePresence>
	);
}

export default Sidebar;