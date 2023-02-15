import React from 'react';
import {
    Routes,
    Route
} from 'react-router-dom';
import CareerPage from './pages/career/view';
import IntroductioPage from './pages/introduction/view';
import ProjectsPage from './pages/projects/view';
import Navbar from './components/navbar/view';
import ComingSoonPage from './pages/comingSoon/view';
import NotFoundPage from './pages/notFound/view';
import SkillsPage from './pages/skills/view';
import ProjectPage from './pages/project/view';

function buildPage(page){
    return (
    <>
        <Navbar />
            {page}
    </>  
    );
}

export default function MainRoutes() {
    return (
        <Routes>
            {/* Rota para acessar pelo servidor local */}
            <Route path="/" element={<IntroductioPage />} />
            {/* Rota para acessar pelo gh pages */}
            <Route path="portfolio" element={<IntroductioPage />} />
            <Route path="skills" element={buildPage(<SkillsPage/>)} />
            <Route path="career" element={buildPage(<CareerPage />)} />
            <Route path="projects" element={buildPage(<ProjectsPage />)} />
            <Route path="coming-soon" element={buildPage(<ComingSoonPage />)} />
            <Route path="projects/:id" element={buildPage(<ProjectPage />)} />

            <Route path="*" element={buildPage(<NotFoundPage />)} />
        </Routes>
    );
}
