import classNames from 'classnames';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import CardTitle from './CardTitle';

export default function Card({ children, className, ...otherProps }) {
  return (
    <div
      className={classNames(
        'card rounded-md overflow-hidden flex flex-col p-4',
        className
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Title = CardTitle;
