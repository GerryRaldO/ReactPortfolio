import { Routes, Route } from "react-router-dom";
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Portfolio from './Portfolio';
import Resume from './Resume';

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/contactme" element={<ContactMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
        </Routes>
    )
}