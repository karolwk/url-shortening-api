import MainView from '../pages/MainView/MainView';
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';

type Props = {};

const App = (props: Props) => {
  return (
    <>
      <NavBar />
      <MainView />
      <Footer />
    </>
  );
};

export default App;
