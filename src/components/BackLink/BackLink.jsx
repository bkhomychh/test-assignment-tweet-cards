import { useLocation, Link } from 'react-router-dom';
import Button from 'components/Button';

const BackLink = () => {
  const location = useLocation();

  return (
    <Button as={Link} to={location.state?.from || '/'}>
      &larr; Back
    </Button>
  );
};

export default BackLink;
