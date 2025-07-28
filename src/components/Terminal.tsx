import React, { useEffect, useRef } from 'react';
import { Terminal as XTerm } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import '@xterm/xterm/css/xterm.css';

interface TerminalProps {
    isVisible: boolean;
    onClose: () => void;
}

const Terminal: React.FC<TerminalProps> = ({ isVisible, onClose }) => {
    const terminalRef = useRef<HTMLDivElement>(null);
    const xtermRef = useRef<XTerm | null>(null);
    const fitAddonRef = useRef<FitAddon | null>(null);

    const personalData = {
        profile: {
            name: "Sharada Marasinha",
            title: "Full Stack Developer | Undergraduate | Kingston University BSc (Hons) Computer Science (Software Engineering)",
            location: "Colombo, Sri Lanka",
            phone: "+94 77 9911 825",
            email: "sharadamarasinha@gmail.com"
        },
        summary: "Skilled Software Engineer and Assistant Lecturer with 3+ years of experience in full-stack development and academic mentoring. Proficient in Java, Spring Boot, Angular, and JavaFX. Delivered 15+ real-world projects, guided 1000+ students, and contributed to international software teams using Agile and CI/CD practices.",
        experience: [
            {
                title: "Assistant Lecturer",
                company: "iCET, Colombo",
                period: "Mar 2024 - Present",
                responsibilities: [
                    "Trained 1000+ students in Java, HTML/CSS, and JS.",
                    "Guided 15+ full-stack projects (Spring Boot, Angular, React).",
                    "Supervised 30+ final-year projects; 95% scored distinction.",
                    "Led large-scale systems (WeCare, EVO-PLANE) with Kafka, OAuth, SendGrid."
                ]
            },
            {
                title: "Associate Software Engineer",
                company: "Eco X-pert Group, New Zealand (Remote)",
                period: "Mar 2024 – Mar 2025",
                responsibilities: [
                    "Developed and maintained 5+ web applications, reducing bug rate by 30% post-QA testing.",
                    "Improved CI/CD deployment time by 45% by optimizing Git workflows and build pipelines.",
                    "Boosted API performance by 25% by refactoring REST endpoints and implementing caching strategies."
                ]
            },
            {
                title: "Intern Software Engineer",
                company: "Tech Z Solution – Ratnapura, Sri Lanka",
                period: "Jan 2022 – Jun 2022",
                responsibilities: [
                    "Collaborated on 3 major modules, reducing delivery time by 20% through efficient team communication and unit testing.",
                    "Participated in Agile stand-ups and collaborative debugging sessions.",
                    "Helped increase bug fix rate by 35% by automating local test cases and using Git effectively."
                ]
            }
        ],
        education: [
            {
                degree: "Kingston University, BSc (Hons) Computer Science (Software Engineering)",
                period: "2024-Present",
                major: "Software Engineering"
            },
            {
                degree: "Pearson College London, BTEC Higher National Diploma (HND) in Computing",
                period: "2024-2026",
                major: "Computing"
            },
            {
                degree: "Institute of Computer Engineering Technology, Higher Diploma in Software Engineering",
                period: "2023",
                activities: "LexcodeX Software Team – Team Leader"
            }
        ],
        skills: {
            languages: ["Java", "Python", "C#.NET", "JavaScript", "TypeScript"],
            frameworks: ["Spring Boot", "Angular", "React.js", "Node.js", "Express.js", "ASP.NET", "Electron.js", "Next.js"],
            tools: ["IntelliJ IDEA", "VS Code", "Git", "GitHub", "Maven", "Jenkins", "Docker", "Postman", "Prisma", "Figma", "JIRA", "Taiga"],
            cloud: ["AWS (EC2, S3)", "CI/CD", "REST APIs"],
            databases: ["MySQL", "PostgreSQL", "MongoDB"],
            ai: ["Google AI Studio", "TensorFlow.js", "OpenAI API"],
            soft: ["Communication", "Team Leadership", "Problem Solving", "Agile", "Scrum", "Time Management", "Mentoring"]
        },
        projects: [
            {
                name: "WeCare System (WE-Care)",
                description: "Supervised 85+ developers to build a health management platform using Spring Boot and Angular, integrating SendGrid, WhatsApp SDK, Apache Kafka, and OAuth authentication."
            },
            {
                name: "Event Management System (EVO-Plane)",
                description: "Led 48+ developers in creating an event planning system with Spring Boot, Angular, and third-party APIs like SendGrid and social logins."
            },
            {
                name: "QuBeM – Social Media Platform",
                description: "Developed a social media app using Spring Boot, React, and MySQL featuring user registration, secure authentication, posting, and commenting with a scalable REST API backend."
            },
            {
                name: "Wedding Management System (Dream Day)",
                description: "Created a C# .NET web app for wedding logistics with secure JWT authentication and database migrations."
            },
            {
                name: "Exam-Q Platform",
                description: "Enabled real-time question generation and tracking; tested by 50+ users during internal evaluations."
            }
        ],
        awards: [
            "Best Scientist of the Year, Inter-School ECO Competition, 2014",
            "Junior Inventor of the Year, Institution of Engineers Competition, 2014",
            "Best Company Environment Award, Innovesta '23 (IJSE), 2023",
            "Certificate in Professional Acting, Institute of Media & Performing Arts, 2019"
        ],
        links: {
            linkedin: "https://www.linkedin.com/in/sharada-marasinha",
            github: "https://github.com/sharada-marasinha",
            w3schools: "https://www.w3schools.com/users/sharada",
            hackerrank: "https://www.hackerrank.com/sharada",
            stackoverflow: "https://stackoverflow.com/users/sharada",
            dailydev: "https://daily.dev/@sharada"
        },
        references: [
            {
                name: "Dr. Niroth Samarawickrama",
                title: "Founder, Institute of Computer Engineering Technology",
                location: "Panadura, Sri Lanka",
                phone: "+94 717 640 600"
            },
            {
                name: "Mr. Frank Demiand",
                title: "Snr. Engineering Lead / Manager – CRM at Dialog Axiata PLC",
                phone: "+94 715 829 295"
            }
        ]
    };

    const commands = {
        help: () => `Available commands:
  help          - Show this help message
  clear         - Clear the terminal
  whoami        - Display personal information
  profile       - Show complete profile
  experience    - Show work experience
  education     - Show educational background
  skills        - Display technical skills
  projects      - Show recent projects
  awards        - Display achievements and awards
  contact       - Show contact information
  links         - Show social media and professional links
  references    - Show professional references
  resume        - Display complete resume
  about         - Show professional summary
  ls            - List available information
  cat [file]    - Display file contents (try: cat profile.json)
  pwd           - Show current directory
  tree          - Show directory structure
  exit          - Close terminal`,

        clear: () => '\x1b[2J\x1b[H',

        whoami: () => `${personalData.profile.name}
${personalData.profile.title}
📍 ${personalData.profile.location}
📧 ${personalData.profile.email}
📱 ${personalData.profile.phone}`,

        profile: () => JSON.stringify(personalData.profile, null, 2),

        experience: () => personalData.experience.map(exp =>
            `\x1b[36m${exp.title}\x1b[0m at \x1b[33m${exp.company}\x1b[0m
Period: ${exp.period}
Responsibilities:
${exp.responsibilities.map(r => `  • ${r}`).join('\n')}
`).join('\n'),

        education: () => personalData.education.map(edu =>
            `\x1b[32m${edu.degree}\x1b[0m
Period: ${edu.period}
Major: ${edu.major}
${edu.activities ? `Activities: ${edu.activities}` : ''}
`).join('\n'),

        skills: () => `\x1b[36mTechnical Skills:\x1b[0m

\x1b[33mProgramming Languages:\x1b[0m
${personalData.skills.languages.join(', ')}

\x1b[33mFrameworks & Libraries:\x1b[0m
${personalData.skills.frameworks.join(', ')}

\x1b[33mTools & Technologies:\x1b[0m
${personalData.skills.tools.join(', ')}

\x1b[33mCloud & DevOps:\x1b[0m
${personalData.skills.cloud.join(', ')}

\x1b[33mDatabases:\x1b[0m
${personalData.skills.databases.join(', ')}

\x1b[33mAI Tools:\x1b[0m
${personalData.skills.ai.join(', ')}

\x1b[33mSoft Skills:\x1b[0m
${personalData.skills.soft.join(', ')}`,

        projects: () => personalData.projects.map(project =>
            `\x1b[35m${project.name}\x1b[0m
${project.description}
`).join('\n'),

        awards: () => personalData.awards.map(award => `🏆 ${award}`).join('\n'),

        contact: () => `\x1b[36mContact Information:\x1b[0m
📧 Email: ${personalData.profile.email}
📱 Phone: ${personalData.profile.phone}
📍 Location: ${personalData.profile.location}`,

        links: () => `\x1b[36mProfessional Links:\x1b[0m
💼 LinkedIn: ${personalData.links.linkedin}
🐙 GitHub: ${personalData.links.github}
📚 W3Schools: ${personalData.links.w3schools}
🏆 HackerRank: ${personalData.links.hackerrank}
❓ Stack Overflow: ${personalData.links.stackoverflow}
📰 Daily.dev: ${personalData.links.dailydev}`,

        references: () => personalData.references.map(ref =>
            `\x1b[32m${ref.name}\x1b[0m
${ref.title}
${ref.location}
📱 ${ref.phone}
`).join('\n'),

        about: () => personalData.summary,

        resume: () => `\x1b[1m\x1b[36m${personalData.profile.name}\x1b[0m
${personalData.profile.title}

\x1b[33mPROFESSIONAL SUMMARY\x1b[0m
${personalData.summary}

\x1b[33mEXPERIENCE\x1b[0m
${personalData.experience.map(exp => `${exp.title} | ${exp.company} | ${exp.period}`).join('\n')}

\x1b[33mEDUCATION\x1b[0m
${personalData.education.map(edu => `${edu.degree} | ${edu.period}`).join('\n')}

\x1b[33mCONTACT\x1b[0m
${personalData.profile.email} | ${personalData.profile.phone}`,

        ls: () => `total 8
drwxr-xr-x  1 sharada  staff   256 Dec  7 20:59 .
drwxr-xr-x  1 root     wheel   512 Dec  7 20:59 ..
-rw-r--r--  1 sharada  staff  2048 Dec  7 20:59 profile.json
-rw-r--r--  1 sharada  staff  4096 Dec  7 20:59 resume.md
-rw-r--r--  1 sharada  staff  1024 Dec  7 20:59 contact.txt
drwxr-xr-x  1 sharada  staff   128 Dec  7 20:59 projects/
drwxr-xr-x  1 sharada  staff   128 Dec  7 20:59 experience/
drwxr-xr-x  1 sharada  staff   128 Dec  7 20:59 education/`,

        pwd: () => '/home/sharada',

        tree: () => `/home/sharada
├── profile.json
├── resume.md
├── contact.txt
├── projects/
│   ├── wecare-system/
│   ├── evo-plane/
│   ├── qubem-social/
│   ├── dream-day/
│   └── exam-q-platform/
├── experience/
│   ├── icet-lecturer.md
│   ├── eco-xpert-engineer.md
│   └── techz-intern.md
└── education/
    ├── kingston-university/
    ├── pearson-college/
    └── icet-diploma/`,

        cat: (args: string[]) => {
            const file = args[0];
            switch (file) {
                case 'profile.json':
                    return JSON.stringify(personalData, null, 2);
                case 'resume.md':
                    return commands.resume();
                case 'contact.txt':
                    return commands.contact();
                default:
                    return `cat: ${file}: No such file or directory`;
            }
        },

        exit: () => 'Goodbye! 👋'
    };

    useEffect(() => {
        if (isVisible && terminalRef.current && !xtermRef.current) {
            const terminal = new XTerm({
                theme: {
                    background: '#0a0a0a',
                    foreground: '#ffffff',
                    cursor: '#64b5f6',
                    black: '#000000',
                    red: '#ff6b6b',
                    green: '#51cf66',
                    yellow: '#ffd43b',
                    blue: '#64b5f6',
                    magenta: '#cc5de8',
                    cyan: '#22d3ee',
                    white: '#ffffff',
                    brightBlack: '#495057',
                    brightRed: '#ff8787',
                    brightGreen: '#69db7c',
                    brightYellow: '#ffe066',
                    brightBlue: '#74c0fc',
                    brightMagenta: '#d084ff',
                    brightCyan: '#4dd4f0',
                    brightWhite: '#ffffff',
                },
                fontFamily: '"Fira Code", "Monaco", "Menlo", "Ubuntu Mono", monospace',
                fontSize: 14,
                lineHeight: 1.2,
                rows: 32,
                cols: 120,
                cursorBlink: true,
                allowTransparency: true,
                scrollback: 1000,
            });

            const fitAddon = new FitAddon();
            terminal.loadAddon(fitAddon);

            terminal.open(terminalRef.current);
            fitAddon.fit();

            xtermRef.current = terminal;
            fitAddonRef.current = fitAddon;

            let currentLine = '';
            let commandHistory: string[] = [];
            let historyIndex = -1;

            const showPrompt = () => {
                terminal.write('\r\n\x1b[32msharada@portfolio\x1b[0m:\x1b[34m~\x1b[0m$ ');
            };

            const processCommand = (command: string) => {
                const parts = command.trim().split(' ');
                const cmd = parts[0].toLowerCase();
                const args = parts.slice(1);

                if (commandHistory[commandHistory.length - 1] !== command) {
                    commandHistory.push(command);
                }
                historyIndex = commandHistory.length;

                let output = '';

                if (cmd === 'clear') {
                    terminal.clear();
                    return;
                } else if (cmd === 'exit') {
                    terminal.write('\r\n' + commands.exit());
                    setTimeout(() => onClose(), 1000);
                    return;
                } else if (commands[cmd as keyof typeof commands]) {
                    if (cmd === 'cat') {
                        output = commands.cat(args);
                    } else {
                        output = (commands[cmd as keyof typeof commands] as () => string)();
                    }
                } else if (command.trim()) {
                    output = `Command not found: ${cmd}. Type 'help' for available commands.`;
                }

                if (output) {
                    terminal.write('\r\n' + output);
                }
                showPrompt();
            };

            // Welcome message
            terminal.write('\x1b[36m╔══════════════════════════════════════════════════════════════╗\x1b[0m\r\n');
            terminal.write('\x1b[36m║\x1b[0m                    \x1b[1m\x1b[33mSharada Marasinha Terminal\x1b[0m                   \x1b[36m║\x1b[0m\r\n');
            terminal.write('\x1b[36m║\x1b[0m              \x1b[32mFull Stack Developer & Software Engineer\x1b[0m           \x1b[36m║\x1b[0m\r\n');
            terminal.write('\x1b[36m╚══════════════════════════════════════════════════════════════╝\x1b[0m\r\n');
            terminal.write('\r\nWelcome! Type \x1b[33mhelp\x1b[0m to see available commands or \x1b[33mwhoami\x1b[0m to get started.\r\n');
            showPrompt();

            terminal.onData((data) => {
                const char = data.charCodeAt(0);

                if (char === 13) { // Enter
                    processCommand(currentLine);
                    currentLine = '';
                } else if (char === 127) { // Backspace
                    if (currentLine.length > 0) {
                        currentLine = currentLine.slice(0, -1);
                        terminal.write('\b \b');
                    }
                } else if (char === 27) { // Escape sequences (arrow keys)
                    // Handle arrow keys for command history
                    if (data === '\x1b[A') { // Up arrow
                        if (historyIndex > 0) {
                            // Clear current line
                            terminal.write('\r\x1b[K');
                            terminal.write('\x1b[32msharada@portfolio\x1b[0m:\x1b[34m~\x1b[0m$ ');

                            historyIndex--;
                            currentLine = commandHistory[historyIndex];
                            terminal.write(currentLine);
                        }
                    } else if (data === '\x1b[B') { // Down arrow
                        if (historyIndex < commandHistory.length - 1) {
                            // Clear current line
                            terminal.write('\r\x1b[K');
                            terminal.write('\x1b[32msharada@portfolio\x1b[0m:\x1b[34m~\x1b[0m$ ');

                            historyIndex++;
                            currentLine = commandHistory[historyIndex];
                            terminal.write(currentLine);
                        } else if (historyIndex === commandHistory.length - 1) {
                            // Clear current line
                            terminal.write('\r\x1b[K');
                            terminal.write('\x1b[32msharada@portfolio\x1b[0m:\x1b[34m~\x1b[0m$ ');

                            historyIndex = commandHistory.length;
                            currentLine = '';
                        }
                    }
                } else if (char >= 32 && char <= 126) { // Printable characters
                    currentLine += data;
                    terminal.write(data);
                }
            });

            // Handle window resize
            const handleResize = () => {
                if (fitAddonRef.current) {
                    requestAnimationFrame(() => {
                        fitAddonRef.current?.fit();
                    });
                }
            };

            // Handle escape key to close terminal
            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === 'Escape') {
                    onClose();
                }
            };

            window.addEventListener('resize', handleResize);
            window.addEventListener('keydown', handleKeyDown);

            return () => {
                window.removeEventListener('resize', handleResize);
                window.removeEventListener('keydown', handleKeyDown);
                if (xtermRef.current) {
                    xtermRef.current.dispose();
                    xtermRef.current = null;
                }
            };
        }
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="terminal-title"
        >
            <div className="bg-gray-900 rounded-lg shadow-2xl w-full max-w-7xl h-[85vh] flex flex-col border border-gray-700">
                {/* Terminal Header */}
                <div className="flex items-center justify-between p-4 bg-gray-800 rounded-t-lg border-b border-gray-700">
                    <div className="flex items-center space-x-2">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors cursor-pointer" onClick={onClose}></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors"></div>
                        </div>
                        <span id="terminal-title" className="text-gray-300 ml-4 font-mono text-sm font-semibold">sharada@portfolio:~</span>
                        <div className="text-xs text-gray-500 ml-2">Terminal v2.0</div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="text-xs text-gray-400 hidden sm:block">ESC to close</div>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors duration-200 p-1 rounded hover:bg-gray-700"
                            aria-label="Close terminal"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Terminal Content */}
                <div className="flex-1 p-4 overflow-hidden">
                    <div ref={terminalRef} className="w-full h-full" />
                </div>
            </div>
        </div>
    );
};

export default Terminal;
