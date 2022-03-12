import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Scheduler from "./Scheduler";
import Introduction from "./Introduction";
import LogIn from "./LogIn";
import Disclaimer from "./Disclaimer";

export default () =>
    (<BrowserRouter hosted-basename={"/"}>
            <Switch>
                <Route exact path="/" component={Disclaimer} />
                <Route path="/introduction" component={Introduction} />
                <Route path="/login" component={LogIn} />
                <Route path="/scheduler" component={Scheduler} />
            </Switch>
        </BrowserRouter>
    );