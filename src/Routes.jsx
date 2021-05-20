import {
  HashRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';

import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

import {menuOptions} from './data/menu'

const Routes = () => {
  const history = useHistory();

  return (
    <Router>
      <Switch history={history}>
        <Route exact path="/" component={Home} />
        {menuOptions.map((menu, index) => (
          <Route
            key={index}
            exact
            path={`/${menu.path}`}
            component={menu.component}
          />
        ))}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;