import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from '../../sections/Home/Home';
import NotFound from '../../sections/NotFound/NotFound';
import {menuOptions} from '../../../data/menu'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact component={Home} path="/" />
        {menuOptions.map((menu) => (
          <Route
            key={menu.path}
            exact
            component={menu.component}
            path={`/${menu.path}`}
          />
        ))}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;