import React, { useState, useCallback, useEffect } from 'react';
import Terminal from './Terminal';

const TerminalToggle: React.FC = () => {
    const [isTerminalOpen, setIsTerminalOpen] = useState(false);
    const [showHint, setShowHint] = useState(true);

    const openTerminal = useCallback(() => {
        setIsTerminalOpen(true);
        setShowHint(false);
    }, []);

    const closeTerminal = useCallback(() => {
        setIsTerminalOpen(false);
    }, []);

    // Hide hint after 10 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowHint(false);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* Floating Terminal Button */}
            <div className="fixed bottom-6 right-6 z-40">
                <button
                    onClick={openTerminal}
                    className="group relative focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-full"
                    aria-label="Open Terminal"
                    disabled={isTerminalOpen}
                    style={{
                        opacity: isTerminalOpen ? 0.5 : 1,
                        pointerEvents: isTerminalOpen ? 'none' : 'auto'
                    }}
                >
                    <div className="relative">
                        {/* Glow effect */}
                        <div className="absolute -inset-3 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300 animate-pulse"></div>

                        {/* Button */}
                        <div className="relative bg-black border-2 border-green-500 rounded-full p-4 hover:border-green-400 transition-all duration-300 transform hover:scale-110 shadow-2xl backdrop-blur-sm">
                            <svg
                                className="w-7 h-7 text-green-400 group-hover:text-green-300 transition-colors duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Enhanced Tooltip */}
                    {!isTerminalOpen && (
                        <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none transform group-hover:translate-y-0 translate-y-2">
                            <div className="bg-black border border-green-500 text-green-400 text-sm px-4 py-3 rounded-lg whitespace-nowrap shadow-2xl backdrop-blur-sm">
                                <div className="font-mono text-green-300 font-semibold">sharada@portfolio:~$</div>
                                <div className="text-xs text-green-400 mt-1">Click to explore my profile</div>
                                <div className="text-xs text-gray-400 mt-1">Interactive terminal experience</div>
                                {/* Arrow */}
                                <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-green-500"></div>
                            </div>
                        </div>
                    )}
                </button>

                {/* Hint animation - only show if terminal is not open and hint is visible */}
                {!isTerminalOpen && showHint && (
                    <div className="absolute -top-16 -left-8 pointer-events-none">
                        <div className="animate-bounce">
                            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-black text-xs px-3 py-2 rounded-lg font-mono font-semibold shadow-lg">
                                Try the terminal! 🚀
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Terminal Component */}
            <Terminal
                isVisible={isTerminalOpen}
                onClose={closeTerminal}
            />
        </>
    );
};

export default TerminalToggle;
