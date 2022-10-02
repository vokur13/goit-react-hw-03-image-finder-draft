import { Box } from 'components/Box';
import 'css/styles.css';

export const SearchBar = () => {
  return (
    <Box
      top={0}
      left={0}
      position="sticky"
      zIndex="appBar"
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight={7}
      px={5}
      py={3}
      color="white"
      bg="accent"
      boxShadow="appBarr"
      as="header"
    >
      <form className="form">
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </Box>
  );
};
