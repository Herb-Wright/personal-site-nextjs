import styles from '../styles/modules/Button.module.scss';
import '@fontsource/open-sans/300.css'
import { forwardRef } from 'react';

const Button = forwardRef(({
	variant = 'normal',
	children,
	className,
	size = 'med',
	color = 'primary',
	onClick,
	...props
}, ref) => {
	return (
		<button
			ref={ref}
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
});

export default Button;
