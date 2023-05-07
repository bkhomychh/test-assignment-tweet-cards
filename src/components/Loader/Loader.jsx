import { MutatingDots } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

const Loader = () => {
  return (
    <Wrapper>
      <MutatingDots
        height="100"
        width="100"
        color="#471CA9"
        secondaryColor="#471CA9"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        visible={true}
      />
    </Wrapper>
  );
};

export default Loader;
