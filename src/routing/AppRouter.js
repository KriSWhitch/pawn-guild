import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    useLocation
} from "react-router-dom";
import FaqPage from '../components/pages/FaqPage';
import HomePage from '../components/pages/HomePage';
import AddPawnPage from '../components/pages/AddPawnPage';
import ErrorModal from '../components/common/modals/ErrorModal';
import { routes } from './routeConsts';

const SmartRoute = ({ component: Component, ...rest }) => {
    let path = null;
    const location = useLocation();

    // some logic with hash
    // if (location.hash === "#/choose-language") {
    //     path = routes.languages;
    // }

    return (
        path
            ? <Navigate to={path} />
            : <HomePage />
    )
};

export default function AppRouter() {
    return (
        <Router>
            <ErrorModal />

            <Routes>
                <Route path={routes.faq} element={<FaqPage />}/>
                <Route path={routes.addPawn} element={<AddPawnPage />}/>
                <Route 
                    path={routes.home} 
                    element={
                        <SmartRoute path={routes.home} />
                    } 
                />

                <Route to={routes.home} />
            </Routes>
        </Router >)
}