import styles from './Button.module.css'

function Button({
  children,
  variant = 'primary',
  size = 'default',
  disabled = false,
  type = 'button',
  onClick,
  className = '',
  ...props
}) {
  const classes = [
    styles.btn,
    styles[variant],
    size !== 'default' && styles[size],
    disabled && styles.disabled,
    className
  ].filter(Boolean).join(' ')

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
