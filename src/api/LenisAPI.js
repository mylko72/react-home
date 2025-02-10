import { useEffect } from 'react';
import Lenis from 'lenis';

// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

export default function LenisAPI() {
    
    useEffect(() => {
        requestAnimationFrame(raf);
    });

    return null;
}

