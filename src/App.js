import React, {Component} from 'react';
import routes from './routes'

export default class App extends Component {
  render() {
    return (
        <div>
          <nav className='navbar'>
            <div>Pride Pages</div>

          </nav>
          {routes}
        </div>
      
    )

  };
}