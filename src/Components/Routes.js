import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Scheduler from "./Scheduler";
import Introduction from "./Introduction";
import LogIn from "./LogIn";
import Disclaimer from "./Disclaimer";

export default () =>
    (<BrowserRouter hosted-basename={"/"}>
            <Routes>
                <Route exact path="/" element={<Disclaimer/>} />
                <Route path="/introduction" element={<Introduction/>} />
                <Route path="/login" element={<LogIn/>} />
                <Route path="/scheduler" element={<Scheduler/>} />
            </Routes>
        </BrowserRouter>
    );