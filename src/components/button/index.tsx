import { tw } from 'twind';

interface IButton {
  primary?: boolean;
  children: React.ReactNode;
  modifier?: string;
}

const Button = ({ primary, modifier, children, ...rest }: IButton) => {
  const baseStyle = `font-medium py-2 px-4  rounded`;
  const styles = primary
    ? `ecBlue text-white border-indigo-500 hover:bg-blue-400 rounded-full text-sm`
    : `bg-white text-gray-600 border-gray-300 hover:bg-gray-100 rounded-full`;

  return (
    <button type="button" className={tw(`${baseStyle} ${styles} ${modifier ?? ``}`)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
