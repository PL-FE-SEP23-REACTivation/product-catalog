import './App.css';
import { PaginationButton } from './components/PaginationButton';

function App() {
  return (
    <>
      <PaginationButton>1</PaginationButton>
      <hr></hr>
      <PaginationButton darkBorder>2</PaginationButton>
      <hr></hr>
      <PaginationButton darkBorder disabled>
        3
      </PaginationButton>
    </>
  );
}

export default App;
