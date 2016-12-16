//React
import React from 'react';
import ReactDOM from 'react-dom';

//UI
import 'materialize-css/bin/materialize.css';
import 'materialize-css/bin/materialize.js';

//引入组件

import Main from './components/Main.jsx';

//引入配置文件
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
    <Main />,document.getElementById('main')
);
