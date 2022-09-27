import styles from '../styles/modules/Button.module.scss';
import '@fontsource/open-sans/300.css'

const Button = ({
	variant = 'normal',
	children,
	className,
	size = 'med',
	color = 'primary',
	onClick,
	...props
}) => {
	return (
		<button
			className={
				styles[size] + ' '
				+ styles[color] + ' '
				+ styles.button + ' '
				+ styles[variant] + ' '
				+ className
			}
			onClick={onClick}
			{...props}
		>
			{children}
		</button>
	);
}

export default Button;
