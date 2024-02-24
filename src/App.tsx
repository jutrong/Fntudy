import Router from './Router'
import Layout from './components/Layout';
import GlobalStyle from './styles/global';

const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Router />
    </Layout>
  );
}

export default App;
