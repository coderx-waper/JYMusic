/**第三方 */
import React, { PureComponent } from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux'


/**功能性 */
import routes from './router';
import store from './store'

/**组件*/
import JYAppHeader from '@/components/app-header';
import JYAppfooter from '@/components/app-footer';
import JYPlayerBar from './pages/player'


export default class App extends PureComponent {

    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <JYAppHeader />
                    {renderRoutes(routes)}
                    <JYAppfooter />
                    <JYPlayerBar />
                </HashRouter>
            </Provider>
        )
    }
}
