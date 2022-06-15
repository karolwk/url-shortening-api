import MainView from '../pages/MainView/MainView';
import NavBar from './NavBar/NavBar';

type Props = {};

const App = (props: Props) => {
  return (
    <>
      <NavBar />
      <MainView />
    </>
  );
};

export default App;
