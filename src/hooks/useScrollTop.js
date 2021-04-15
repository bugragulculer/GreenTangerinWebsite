import { useEffect } from 'react';

// Custom hook for scrolling the page to the top when opened.
const useScrollTop = () => {
    useEffect(() => {
        window.scrollTo(0, 2);
    }, []);
};

export default useScrollTop;
