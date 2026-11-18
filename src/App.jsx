import { Navigate, Route, Routes } from 'react-router';
import { useState, useEffect } from 'react';
import faviconDark from './assets/faviconDark.ico';
import faviconLight from './assets/faviconLight.ico';

import Home from './pages/Home.jsx';
import Onboarding from './pages/Onboarding.jsx'

export default function App() {
    const [user, setUser] = useState(null);
    const [isDark, setIsDark] = useState(() => document.documentElement.dataset.theme === 'dark');

    function onAuthChange(state) {
        setUser(state);
    }

    useEffect(() => {
        const theme = isDark ? 'dark' : 'light';
        document.documentElement.dataset.theme = theme;
        localStorage.setItem('theme', theme);
        document.querySelector('#site-favicon').href = isDark ? faviconDark : faviconLight;
    }, [isDark]);

    return (
        <Routes>
            <Route
                path="/login"
                element={!user ? (
                    <Onboarding
                        mode="login"
                        isDark={isDark}
                        onToggleTheme={() => setIsDark((current) => !current)}
                    />
                ) : <Navigate to="/" replace />}
            />

            <Route
                path="/"
                element={<Home isDark={isDark} onToggleTheme={() => setIsDark((current) => !current)} />}
            />

            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
        </Routes>
    );
}