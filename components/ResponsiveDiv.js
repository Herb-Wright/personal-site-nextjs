import styles from '../styles/modules/ResponsiveDiv.module.scss';


const ResponsiveDiv = ({ mobile, children, className, ...props }) => {
	return (
		<>
			<div className={styles.mobileDiv + ' ' + className}>{mobile}</div>
			<div className={styles.desktopDiv + ' ' + className}>{children}</div>
		</>
	);
}

export default ResponsiveDiv;
