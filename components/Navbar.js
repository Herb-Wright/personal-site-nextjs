import styles from '../styles/modules/Navbar.module.scss';
import ResponsiveDiv from './ResponsiveDiv';
import { MdMenu } from 'react-icons/md';
import IconButton from './IconButton';
import Sidebar from './Sidebar';
import { useState } from 'react';
import Button from './Button';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = ({ links }) => {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();

	return (
		<div className={styles.navbarWrapper}>
			<div className={styles.navbarContentWrapper}>
				<div className={styles.logoWrapper}>
					Herbert Wright
				</div>
				<ResponsiveDiv
					className={styles.linksWrapper}
					mobile={
						<>
							<IconButton
								size='lg'
								variant='text'
								icon={<MdMenu />}
								onClick={() => setIsOpen(true)}
							/>
							<Sidebar
								isOpen={isOpen}
								onClose={() => setIsOpen(false)}
								links={links}
							/>
						</>
					}
				>
					{links.map(({ label, path }) => (
						<Button
							key={path}
							variant='text'
							className={router.route === path ? styles.underline : ''}
							onClick={() => router.push(path)}
						>
							{label}
						</Button>
					))}
				</ResponsiveDiv>
			</div>
		</div>
	);
}

export default Navbar;
