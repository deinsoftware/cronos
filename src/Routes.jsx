import {
  HashRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';

import Home from './components/Home/Home';
import NumberToWords  from './components/Pages/Numbers/NumberToWords/NumberToWords';

const Routes = () => {
  const history = useHistory();

  return (
    <Router>
      <Switch history={history}>
        <Route exact path="/" component={Home} />
        <Route exact path="/n2w" component={NumberToWords} />
      </Switch>
    </Router>
  );
};

export default Routes;