import styles from '../styles/modules/Button.module.scss';

/** size should be one of ['sm', 'med', 'lg'] */
const IconButton = ({ icon, onClick, size = 'med', color = 'primary', variant = 'normal' }) => {
	return (
		<button
			className={
				styles.iconOnlyButton + ' '
				+ styles[size] + ' '
				+ styles[color] + ' '
				+ (variant === 'text' ? styles.text : '')}
			onClick={onClick}
		>
			{icon}
		</button>
	);
}

export default IconButton;
