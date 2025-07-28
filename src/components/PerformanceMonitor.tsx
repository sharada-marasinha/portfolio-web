import { useEffect } from 'react';

interface PerformanceEventTiming extends PerformanceEntry {
    processingStart: number;
}

const PerformanceMonitor: React.FC = () => {
    useEffect(() => {
        // Monitor loading performance
        const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
                if (entry.entryType === 'navigation') {
                    const navigationEntry = entry as PerformanceNavigationTiming;
                    console.log('Page Load Time:', navigationEntry.loadEventEnd - navigationEntry.fetchStart, 'ms');
                    console.log('DOM Content Loaded:', navigationEntry.domContentLoadedEventEnd - navigationEntry.fetchStart, 'ms');
                    const paintEntries = performance.getEntriesByType('paint');
                    if (paintEntries[0]) console.log('First Paint:', paintEntries[0].startTime, 'ms');
                    if (paintEntries[1]) console.log('First Contentful Paint:', paintEntries[1].startTime, 'ms');
                }
            });
        });

        observer.observe({ entryTypes: ['navigation', 'paint', 'measure'] });

        // Monitor Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log('Largest Contentful Paint:', lastEntry.startTime, 'ms');
        });

        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Monitor First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
                const eventEntry = entry as PerformanceEventTiming;
                console.log('First Input Delay:', eventEntry.processingStart - eventEntry.startTime, 'ms');
            });
        });

        fidObserver.observe({ entryTypes: ['first-input'] });

        // Monitor Cumulative Layout Shift
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                const layoutEntry = entry as any;
                if (!layoutEntry.hadRecentInput) {
                    clsValue += layoutEntry.value;
                }
            }
            console.log('Cumulative Layout Shift:', clsValue);
        });

        clsObserver.observe({ entryTypes: ['layout-shift'] });

        return () => {
            observer.disconnect();
            lcpObserver.disconnect();
            fidObserver.disconnect();
            clsObserver.disconnect();
        };
    }, []);

    return null; // This component doesn't render anything
};

export default PerformanceMonitor;
