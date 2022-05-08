import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Solutions from './pages/solutions/SolutionsHome'
import VisionsHome from './pages/visions/VisionsHome'
import NotFoundPage from './pages/NotFoundPage'
import { ROUTES } from './resources/routes-constants'
import './styles/main.sass'
import './styles/axleTech.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const RootComponent: React.FC = () => {

    return (
        <Router>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} />
                <Route path={ROUTES.SOLUTIONSPAGE_ROUTE} element={<Solutions />} />
                <Route path={ROUTES.VISIONSPAGE_ROUTE} element={<VisionsHome />} />
            </Routes>
        </Router>
    )
}

export default RootComponent
