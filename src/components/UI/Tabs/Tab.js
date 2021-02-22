export default function Tab({ children, ...otherProps }) {
  return (
    <button type="button" {...otherProps}>
      {children}
    </button>
  );
}
