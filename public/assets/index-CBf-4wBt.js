import{r as d,j as e,D as J,S as P,C as F,P as R,W as z,A as Y,a as H,b as T,c as V,B as E,d as C,e as L,f as A,O as B,G as X,m as M,g as D,V as U,h as _,i as Q,k as Z,M as K,l as ee,n as te,o as ae,R as se}from"./vendor-Pb20Y0CO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();const ne=()=>{const[t,s]=d.useState(!1),[r,n]=d.useState("home");d.useEffect(()=>{const i=()=>{s(window.scrollY>50)};return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[]);const a=[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"skills",label:"Skills"},{id:"projects",label:"Projects"},{id:"contact",label:"Contact"}],o=i=>{n(i);const m=document.getElementById(i);m&&m.scrollIntoView({behavior:"smooth"})};return e.jsxs("nav",{className:`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${t?"nav-scrolled backdrop-blur-lg bg-[#0a192f]/80":"bg-transparent"}`,children:[e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex items-center justify-between h-20",children:[e.jsx("div",{className:"flex-shrink-0 cosmic-logo",children:e.jsx("span",{className:"text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text hover:from-purple-500 hover:to-blue-400 transition-all duration-300",children:"SM"})}),e.jsx("div",{className:"hidden md:block",children:e.jsx("div",{className:"flex space-x-8",children:a.map(i=>e.jsxs("button",{onClick:()=>o(i.id),className:`nav-link relative px-3 py-2 text-sm font-medium transition-colors duration-300
                    ${r===i.id?"text-blue-400":"text-gray-300 hover:text-blue-400"}`,children:[i.label,e.jsx("span",{className:"nav-link-effect"})]},i.id))})}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx(J,{className:"cosmic-button-small"}),e.jsx("button",{className:"mobile-menu-button md:hidden",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("span",{className:"block w-8 h-0.5 bg-gray-300"}),e.jsx("span",{className:"block w-8 h-0.5 bg-gray-300"}),e.jsx("span",{className:"block w-8 h-0.5 bg-gray-300"})]})})]})]})}),e.jsx("div",{className:"md:hidden",children:e.jsx("div",{className:"mobile-menu hidden px-2 pt-2 pb-3 space-y-1",children:a.map(i=>e.jsx("button",{onClick:()=>o(i.id),className:`block px-3 py-2 text-base font-medium rounded-md w-full text-left
                ${r===i.id?"text-blue-400 bg-blue-900/20":"text-gray-300 hover:text-blue-400 hover:bg-blue-900/10"}`,children:i.label},i.id))})})]})},ie=()=>{const t=d.useRef(null);return d.useEffect(()=>{if(!t.current)return;const s=new P;s.background=new F(661807);const r=new R(75,t.current.clientWidth/t.current.clientHeight,.1,1e3),n=new z({antialias:!0,alpha:!0});n.setSize(t.current.clientWidth,t.current.clientHeight),n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.toneMapping=Y,n.toneMappingExposure=1,t.current.appendChild(n.domElement);const a=new H(16777215,.5);s.add(a);const o=new T(16777215,1);o.position.set(5,5,5),s.add(o);const i=new V(5112063,2);i.position.set(-5,5,0),s.add(i);const m=new E,v=5e3,f=new Float32Array(v*3);for(let c=0;c<v*3;c++)f[c]=(Math.random()-.5)*10;m.setAttribute("position",new C(f,3));const u=new L({size:.005,color:16777215,transparent:!0,opacity:.8}),j=new A(m,u);s.add(j);const p=new B(r,n.domElement);p.enableDamping=!0,p.dampingFactor=.05,p.enableZoom=!1,p.autoRotate=!0,p.autoRotateSpeed=.5;const N=new X;let h=null;N.load("/models/blackhole.glb",c=>{h=c.scene,h.scale.set(.5,.5,.5),h.position.set(0,0,0),s.add(h)},void 0,c=>{console.error("Error loading model:",c)}),r.position.set(0,0,3);let g=0,b=0;const x=c=>{g=c.clientX/window.innerWidth*2-1,b=-(c.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",x);const y=()=>{requestAnimationFrame(y),j.rotation.y+=.003,h&&(h.rotation.y+=.005,h.position.y=Math.sin(Date.now()*.001)*.1),r.position.x+=(g*.5-r.position.x)*.05,r.position.y+=(b*.5-r.position.y)*.05,r.lookAt(s.position),p.update(),n.render(s,r)};y();const l=()=>{t.current&&(r.aspect=t.current.clientWidth/t.current.clientHeight,r.updateProjectionMatrix(),n.setSize(t.current.clientWidth,t.current.clientHeight),n.setPixelRatio(Math.min(window.devicePixelRatio,2)))};return window.addEventListener("resize",l),()=>{var c;window.removeEventListener("resize",l),window.removeEventListener("mousemove",x),(c=t.current)==null||c.removeChild(n.domElement)}},[]),e.jsx("div",{ref:t,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:0}})},re=()=>e.jsxs("section",{className:"hero-section relative min-h-screen flex items-center justify-center overflow-hidden",children:[e.jsx(ie,{}),e.jsx("div",{className:"container mx-auto px-4 relative z-10",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"glitch-wrapper mb-4",children:e.jsx("h1",{className:"glitch-text","data-text":"Sharada Marasinha",children:"Sharada Marasinha"})}),e.jsx("div",{className:"cosmic-title-wrapper mb-6",children:e.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-blue-400 cosmic-title",children:"Full Stack Developer & Software Engineer"})}),e.jsx("p",{className:"text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 hero-description",children:"Crafting innovative digital solutions with a passion for clean code and cutting-edge technologies. Specializing in full-stack development and creative problem-solving."}),e.jsxs("div",{className:"flex justify-center gap-6",children:[e.jsxs("button",{className:"cosmic-button primary",children:[e.jsx("span",{className:"button-content",children:"View Projects"}),e.jsx("div",{className:"button-glowing-bg"})]}),e.jsxs("button",{className:"cosmic-button secondary",children:[e.jsx("span",{className:"button-content",children:"Contact Me"}),e.jsx("div",{className:"button-glowing-bg"})]})]}),e.jsx("div",{className:"mt-12 flex justify-center gap-6",children:[{icon:"🌐",link:"https://github.com/yourusername",label:"GitHub"},{icon:"💼",link:"https://linkedin.com/in/yourusername",label:"LinkedIn"},{icon:"📧",link:"mailto:your.email@example.com",label:"Email"}].map((t,s)=>e.jsx("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",className:"social-icon-link","aria-label":t.label,children:e.jsx("span",{className:"text-2xl",children:t.icon})},s))})]})}),e.jsx("div",{className:"cosmic-shapes",children:[...Array(3)].map((t,s)=>e.jsx("div",{className:"cosmic-shape",style:{"--delay":`${s*2}s`,"--size":`${100+s*50}px`}},s))}),e.jsx("div",{className:"absolute bottom-10 left-1/2 transform -translate-x-1/2",children:e.jsxs("div",{className:"scroll-indicator",children:[e.jsx("div",{className:"scroll-arrow"}),e.jsx("div",{className:"scroll-text",children:"Scroll to Explore"})]})})]}),oe="/assets/pro_pic-BqGrABA9.jpg",le=()=>e.jsxs("section",{id:"about",className:"relative py-20 overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-space-gradient opacity-0"}),e.jsx("div",{className:"constellation absolute inset-0"}),e.jsxs("div",{className:"container mx-auto px-4 relative",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-4xl md:text-5xl font-bold cosmic-text mb-4",children:"About Me"}),e.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"})]}),e.jsx("div",{className:"max-w-4xl mx-auto",children:e.jsxs("div",{className:"space-card p-8 backdrop-blur-lg",children:[e.jsxs("div",{className:"grid md:grid-cols-2 gap-8 items-center",children:[e.jsxs("div",{className:"relative group",children:[e.jsx("div",{className:"absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"}),e.jsxs("div",{className:"relative aspect-square rounded-lg overflow-hidden",children:[e.jsx("img",{src:oe,alt:"Profile",className:"w-full h-full object-cover transform transition duration-500 group-hover:scale-105"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"})]})]}),e.jsxs("div",{className:"space-y-6 text-gray-300",children:[e.jsx("p",{className:"text-lg leading-relaxed animate-slide-up",children:"I am a dynamic full-stack developer with a proven history of crafting responsive web applications. Specializing in front-end and back-end technologies, I deliver high-quality projects on time and within budget."}),e.jsx("p",{className:"text-lg leading-relaxed animate-slide-up-delay",children:"My expertise in problem-solving, collaboration, and trend analysis makes me a valuable asset to any team. Currently serving as an Assistant Lecturer while pursuing my undergraduate studies, I bring both academic and practical experience to my work."}),e.jsx("div",{className:"flex flex-wrap gap-3 pt-4",children:["React","Node.js","TypeScript","Three.js","Spring Boot"].map((t,s)=>e.jsx("span",{className:"px-4 py-2 text-sm font-medium rounded-full bg-space-card hover:bg-space-card-hover transition-all duration-300",style:{animationDelay:`${s*100}ms`},children:t},t))})]})]}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6 mt-12",children:[{label:"Projects",value:"15+"},{label:"Experience",value:"2+ Years"},{label:"Technologies",value:"10+"},{label:"Certifications",value:"5+"}].map((t,s)=>e.jsxs("div",{className:"text-center p-4 space-card hover:transform hover:-translate-y-2 transition-all duration-300",style:{animationDelay:`${s*100}ms`},children:[e.jsx("div",{className:"text-3xl font-bold cosmic-text mb-2",children:t.value}),e.jsx("div",{className:"text-gray-400",children:t.label})]},t.label))})]})})]}),e.jsx("div",{className:"absolute top-20 left-10 w-20 h-20 orbit-element opacity-20",children:e.jsx("div",{className:"w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"})}),e.jsx("div",{className:"absolute bottom-20 right-10 w-16 h-16 orbit-element opacity-20",style:{animationDelay:"-5s"},children:e.jsx("div",{className:"w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"})})]}),ce=()=>{const t=[{title:"Associate Software Engineer",company:"Emerging Tech Solutions",period:"May 2024 - Present",description:["Developing innovative software solutions","Implementing cutting-edge technologies","Collaborating with cross-functional teams"],technologies:["React","TypeScript","Node.js","AWS"]},{title:"Assistant Lecturer",company:"Software Engineering Institute",period:"Jan 2024 - Present",description:["Instructing advanced software development courses","Developing comprehensive curriculum for emerging technologies","Mentoring students in application development techniques"],technologies:["Java","Spring Boot","React","Angular"]},{title:"Training Software Engineer",company:"Lex-Code X (ICET)",period:"Oct 2023 - Dec 2023",description:["Led development of enterprise-grade e-commerce platform","Managed agile development processes and team collaboration","Implemented best practices in software design and architecture"],technologies:["Spring Boot","Angular","Agile Methodologies"]}],s={hidden:{opacity:0},visible:{opacity:1,transition:{delayChildren:.3,staggerChildren:.2}}},r={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{type:"spring",stiffness:100}}};return e.jsxs("section",{id:"experience",className:"relative py-20 bg-black text-white overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-space-gradient opacity-30 pointer-events-none"}),e.jsx("div",{className:"constellation absolute inset-0 pointer-events-none"}),e.jsxs("div",{className:"container mx-auto px-4 relative z-10",children:[e.jsx(M.h2,{initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.5},className:"text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600",children:"Professional Trajectory"}),e.jsx(M.div,{variants:s,initial:"hidden",animate:"visible",className:"max-w-4xl mx-auto space-y-8",children:t.map((n,a)=>e.jsxs(M.div,{variants:r,className:"bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 transition-all duration-300 hover:bg-gray-800/70 hover:border-blue-500",children:[e.jsxs("div",{className:"flex justify-between items-start mb-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600",children:n.title}),e.jsx("p",{className:"text-gray-300 text-base",children:n.company})]}),e.jsx("span",{className:"text-sm text-gray-500 font-mono",children:n.period})]}),e.jsx("ul",{className:"space-y-2 text-gray-300 mb-4",children:n.description.map((o,i)=>e.jsx("li",{className:"flex items-start before:content-['▹'] before:text-blue-500 before:mr-2",children:o},i))}),n.technologies&&e.jsx("div",{className:"flex flex-wrap gap-2",children:n.technologies.map((o,i)=>e.jsx("span",{className:"px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs",children:o},i))})]},a))})]}),e.jsxs("div",{className:"absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden",children:[e.jsx("div",{className:"absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"}),e.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse"})]})]})},de=()=>{const[t,s]=d.useState("Frontend"),r=[{name:"React",icon:"⚛️",category:"Frontend",description:"Building interactive and dynamic user interfaces with modern React ecosystem"},{name:"TypeScript",icon:"📘",category:"Frontend",description:"Leveraging strong typing for robust and scalable web applications"},{name:"Three.js",icon:"🎮",category:"Frontend",description:"Creating immersive 3D web experiences and interactive visualizations"},{name:"Next.js",icon:"⚡",category:"Frontend",description:"Server-side rendering and static site generation for optimal performance"},{name:"Tailwind CSS",icon:"🎨",category:"Frontend",description:"Rapid UI development with utility-first CSS framework"},{name:"Node.js",icon:"🟢",category:"Backend",description:"Scalable server-side applications with JavaScript runtime"},{name:"Python",icon:"🐍",category:"Backend",description:"Data processing, machine learning, and backend development"},{name:"Spring Boot",icon:"🍃",category:"Backend",description:"Enterprise-grade Java applications with microservices architecture"},{name:"MongoDB",icon:"💾",category:"Backend",description:"Flexible NoSQL database for modern, scalable applications"},{name:"PostgreSQL",icon:"🐘",category:"Backend",description:"Powerful, open-source relational database system"},{name:"Docker",icon:"🐳",category:"DevOps",description:"Containerization for consistent development and deployment"},{name:"AWS",icon:"☁️",category:"DevOps",description:"Cloud infrastructure and serverless computing solutions"},{name:"Git",icon:"📚",category:"DevOps",description:"Version control and collaborative software development"},{name:"CI/CD",icon:"🔄",category:"DevOps",description:"Continuous Integration and Continuous Deployment pipelines"},{name:"Linux",icon:"🐧",category:"DevOps",description:"Server management and system administration"}],n=Array.from(new Set(r.map(a=>a.category)));return e.jsxs("section",{id:"skills",className:"relative py-20 overflow-hidden bg-black text-white",children:[e.jsx("div",{className:"absolute inset-0 bg-space-gradient opacity-30 pointer-events-none"}),e.jsx("div",{className:"constellation absolute inset-0 pointer-events-none"}),e.jsxs("div",{className:"container mx-auto px-4 relative z-10",children:[e.jsxs("div",{className:"text-center mb-16",children:[e.jsx("h2",{className:"text-4xl md:text-5xl font-bold cosmic-text mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600",children:"Tech Constellation"}),e.jsx("p",{className:"text-gray-300 max-w-2xl mx-auto",children:"A curated collection of technologies that power innovative digital experiences"})]}),e.jsx("div",{className:"flex justify-center space-x-4 mb-12",children:n.map(a=>e.jsx("button",{onClick:()=>s(a),className:`
                px-4 py-2 rounded-full transition-all duration-300
                ${t===a?"bg-gradient-to-r from-blue-500 to-purple-500 text-white":"bg-gray-800 text-gray-400 hover:bg-gray-700"}
              `,children:a},a))}),e.jsx(M.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6",children:r.filter(a=>a.category===t).map((a,o)=>e.jsxs(M.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:o*.1,type:"spring",stiffness:300,damping:20},className:"skill-card group relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 text-center transition-all duration-300 hover:bg-gray-800/70 hover:scale-105",children:[e.jsx("div",{className:"text-6xl mb-4 opacity-80 group-hover:opacity-100 transition-opacity",children:a.icon}),e.jsx("h3",{className:"text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600",children:a.name}),e.jsx("p",{className:"text-xs text-gray-400 line-clamp-3",children:a.description})]},a.name))},t)]}),e.jsxs("div",{className:"absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden",children:[e.jsx("div",{className:"absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"}),e.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse"})]})]})},me=()=>{const t=[{degree:"BSc (Hons) in Computer Science",school:"University of Colombo School of Computing",duration:"2020 - Present",location:"Colombo, Sri Lanka",description:["Specializing in Software Engineering","Member of IEEE Student Branch","Active participant in university hackathons and coding competitions","Research focus on AI and Machine Learning applications"],gpa:"3.8/4.0"},{degree:"Advanced Level Education",school:"Rahula College",duration:"2017 - 2019",location:"Matara, Sri Lanka",description:["Stream: Physical Science","District Rank: Top 10%","Active member of the school's IT Society","Participated in national level competitions"]}];return e.jsxs("section",{id:"education",className:"relative py-20 overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-space-gradient opacity-30"}),e.jsx("div",{className:"constellation absolute inset-0"}),e.jsxs("div",{className:"container mx-auto px-4 relative",children:[e.jsxs("div",{className:"text-center mb-16",children:[e.jsx("h2",{className:"text-4xl md:text-5xl font-bold cosmic-text mb-4",children:"Education"}),e.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"})]}),e.jsx("div",{className:"max-w-4xl mx-auto",children:e.jsx("div",{className:"education-timeline",children:t.map((s,r)=>e.jsxs("div",{className:"education-card",style:{animationDelay:`${r*200}ms`},children:[e.jsxs("div",{className:"education-card-content space-card",children:[e.jsxs("div",{className:"education-header",children:[e.jsxs("div",{className:"education-title",children:[e.jsx("h3",{className:"text-xl md:text-2xl font-bold text-blue-400",children:s.degree}),e.jsx("p",{className:"text-lg text-purple-300",children:s.school})]}),e.jsxs("div",{className:"education-meta",children:[e.jsx("span",{className:"education-duration",children:s.duration}),e.jsx("span",{className:"education-location",children:s.location}),s.gpa&&e.jsxs("span",{className:"education-gpa",children:["GPA: ",s.gpa]})]})]}),e.jsx("div",{className:"education-details",children:e.jsx("ul",{className:"space-y-2",children:s.description.map((n,a)=>e.jsxs("li",{className:"education-detail-item",style:{animationDelay:`${r*200+a*100}ms`},children:[e.jsx("span",{className:"education-bullet"}),n]},a))})})]}),e.jsx("div",{className:"timeline-dot"}),r!==t.length-1&&e.jsx("div",{className:"timeline-line"})]},r))})}),e.jsx("div",{className:"absolute top-20 left-10 w-20 h-20 orbit-element opacity-20",children:e.jsx("div",{className:"w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"})}),e.jsx("div",{className:"absolute bottom-20 right-10 w-16 h-16 orbit-element opacity-20",style:{animationDelay:"-5s"},children:e.jsx("div",{className:"w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"})})]})]})},ue=()=>{const t=[{title:"Online Exam Management System",technologies:["React","Express.js"],description:"Comprehensive online exam management system with admin features for question management and student paper organization. Students can take exams and receive immediate results via email.",features:["Add and manage questions","Organize student papers using categories","User-friendly front-end interface","Immediate mark viewing","Email notifications for results"]},{title:"Student Management System",technologies:["Spring Boot","MySQL","JavaScript","HTML","CSS"],description:"Web-based Student Information Management System using Spring Boot, Lombok, Spring Data, and Fetch API.",links:{frontend:"GitHub Repository Front-End",backend:"GitHub Repository Backend"}},{title:"Clothify Store POS System",technologies:["Hibernate","JavaFX","Jfoenix","MySQL","Maven","Java"],description:"POS system with comprehensive features including user, product, inventory, supplier management, and report generation.",githubLink:"GitHub Repository"},{title:"Real-Time Weather Web Application",technologies:["JavaScript","HTML","CSS","Weather API"],description:"Weather application providing current and forecasted weather, historical data, and interactive maps.",features:["Current and forecasted weather","Historical data","Interactive maps","User customization"],githubLink:"GitHub Repository"}];return e.jsxs("section",{id:"projects",className:"py-20 bg-gradient-to-b from-[#0a192f] to-[#020617] relative overflow-hidden",children:[e.jsxs("div",{className:"absolute inset-0 z-0",children:[e.jsx("div",{className:"stars"}),e.jsx("div",{className:"stars2"}),e.jsx("div",{className:"stars3"})]}),e.jsxs("div",{className:"container mx-auto px-4 relative z-10",children:[e.jsxs("h2",{className:"text-5xl font-bold text-center mb-16 text-white cosmic-title",children:["Featured Projects",e.jsx("div",{className:"h-1 w-24 bg-blue-500 mx-auto mt-4 rounded-full glow-line"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto",children:t.map((s,r)=>e.jsxs("div",{className:"project-card bg-opacity-10 bg-white backdrop-blur-lg rounded-xl p-8 border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-cosmic",children:[e.jsx("h3",{className:"text-2xl font-bold mb-4 text-blue-400 glitch-text-small",children:s.title}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:s.technologies.map((n,a)=>e.jsx("span",{className:"px-3 py-1 bg-blue-900/40 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:border-blue-400 transition-colors duration-300",children:n},a))}),e.jsx("p",{className:"text-gray-300 mb-6 leading-relaxed",children:s.description}),s.features&&e.jsx("ul",{className:"space-y-2 mb-6",children:s.features.map((n,a)=>e.jsxs("li",{className:"text-gray-400 flex items-center",children:[e.jsx("span",{className:"mr-2 text-blue-500",children:"◈"}),n]},a))}),e.jsxs("div",{className:"flex gap-4 mt-auto",children:[s.links&&e.jsx("div",{className:"flex gap-4",children:Object.entries(s.links).map(([n,a])=>e.jsx("a",{href:"#",className:"cosmic-button-small",children:a},n))}),s.githubLink&&e.jsx("a",{href:"#",className:"cosmic-button-small",children:"View on GitHub"})]})]},r))})]})]})},pe=()=>{const t={phone:"+94-77-9911-825",email:"sharadamarasinha@gmail.com",location:"Colombo, Sri Lanka",links:{LinkedIn:"#",GitHub:"#",HackerRank:"#",StackOverflow:"#"}};return e.jsx("section",{id:"contact",className:"py-20",children:e.jsxs("div",{className:"container mx-auto px-4",children:[e.jsx("h2",{className:"text-4xl font-bold text-center mb-12",children:"Contact Me"}),e.jsxs("div",{className:"max-w-4xl mx-auto grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Get in Touch"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{className:"flex items-center",children:[e.jsx("span",{className:"mr-3",children:"📱"}),e.jsx("a",{href:`tel:${t.phone}`,className:"text-blue-600 hover:text-blue-800",children:t.phone})]}),e.jsxs("p",{className:"flex items-center",children:[e.jsx("span",{className:"mr-3",children:"📧"}),e.jsx("a",{href:`mailto:${t.email}`,className:"text-blue-600 hover:text-blue-800",children:t.email})]}),e.jsxs("p",{className:"flex items-center",children:[e.jsx("span",{className:"mr-3",children:"📍"}),t.location]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Professional Links"}),e.jsx("div",{className:"flex flex-wrap gap-4",children:Object.entries(t.links).map(([s,r])=>e.jsx("a",{href:r,className:"px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700",target:"_blank",rel:"noopener noreferrer",children:s},s))})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Send a Message"}),e.jsxs("form",{className:"space-y-4",children:[e.jsx("div",{children:e.jsx("input",{type:"text",placeholder:"Your Name",className:"w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"})}),e.jsx("div",{children:e.jsx("input",{type:"email",placeholder:"Your Email",className:"w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"})}),e.jsx("div",{children:e.jsx("textarea",{placeholder:"Your Message",rows:4,className:"w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"})}),e.jsx("button",{type:"submit",className:"w-full bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors",children:"Send Message"})]})]})]})]})})},xe=()=>e.jsx("div",{children:e.jsx("footer",{className:"m-4 rounded-lg",children:e.jsxs("div",{className:"mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between",children:[e.jsxs("span",{className:"text-sm sm:text-center",children:["2024"," ",e.jsx("a",{href:"https://sharadamarasinha.com/",className:"hover:underline",children:"Sharada Marasinha"}),". All Rights Reserved."]}),e.jsxs("ul",{className:"mt-3 flex flex-wrap items-center text-sm font-medium sm:mt-0",children:[e.jsx("li",{children:e.jsx("a",{href:"#about",className:"me-4 hover:underline md:me-6",children:"About"})}),e.jsx("li",{children:e.jsx("a",{href:"#projects",className:"me-4 hover:underline md:me-6",children:"Projects"})}),e.jsx("li",{children:e.jsx("a",{href:"#experience",className:"me-4 hover:underline md:me-6",children:"Experience"})}),e.jsx("li",{children:e.jsx("a",{href:"#contact",className:"hover:underline",children:"Contact"})})]})]})})}),he=()=>{const t=d.useRef(null);return d.useEffect(()=>{if(!t.current)return;const s=new P,r=new R(75,t.current.clientWidth/t.current.clientHeight,.1,1e3),n=new z({antialias:!0,alpha:!0});n.setSize(t.current.clientWidth,t.current.clientHeight),n.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.current.appendChild(n.domElement);const a=new E,o=1e4,i=new Float32Array(o*3);for(let l=0;l<o*3;l+=3){const c=Math.random()*100,w=Math.random()*Math.PI*2,S=Math.random()*Math.PI;i[l]=c*Math.sin(S)*Math.cos(w),i[l+1]=c*Math.sin(S)*Math.sin(w),i[l+2]=c*Math.cos(S)}a.setAttribute("position",new C(i,3));const m=new L({size:.1,color:16777215,transparent:!0,opacity:.8,blending:D,sizeAttenuation:!0}),v=new A(a,m);s.add(v);const f=new E,u=5e3,j=new Float32Array(u*3),p=new Float32Array(u*3);for(let l=0;l<u;l++){const c=l*3,w=Math.random()*20,S=w*5,I=l%3*Math.PI*2/3,G=Math.pow(Math.random(),3)*(Math.random()<.5?1:-1)*.3,$=Math.pow(Math.random(),3)*(Math.random()<.5?1:-1)*.3,q=Math.pow(Math.random(),3)*(Math.random()<.5?1:-1)*.3;j[c]=Math.cos(I+S)*w+G,j[c+1]=$,j[c+2]=Math.sin(I+S)*w+q;const k=new F;k.setHSL(l/u,.8,.6),p[c]=k.r,p[c+1]=k.g,p[c+2]=k.b}f.setAttribute("position",new C(j,3)),f.setAttribute("color",new C(p,3));const N=new L({size:.1,sizeAttenuation:!0,depthWrite:!1,blending:D,vertexColors:!0,transparent:!0}),h=new A(f,N);s.add(h),r.position.z=50,r.position.y=10,r.lookAt(new U(0,0,0));const g=new B(r,n.domElement);g.enableDamping=!0,g.dampingFactor=.05,g.enableZoom=!1,g.autoRotate=!0,g.autoRotateSpeed=.5;const b=new _,x=()=>{const l=b.getElapsedTime();v.rotation.y=l*.05,h.rotation.y=l*.1,h.rotation.z=l*.05,g.update(),n.render(s,r),requestAnimationFrame(x)};x();const y=()=>{t.current&&(r.aspect=t.current.clientWidth/t.current.clientHeight,r.updateProjectionMatrix(),n.setSize(t.current.clientWidth,t.current.clientHeight),n.setPixelRatio(Math.min(window.devicePixelRatio,2)))};return window.addEventListener("resize",y),()=>{var l;window.removeEventListener("resize",y),(l=t.current)==null||l.removeChild(n.domElement),a.dispose(),m.dispose(),f.dispose(),N.dispose(),n.dispose()}},[]),e.jsx("div",{ref:t,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-1,background:"radial-gradient(circle at center, #0a192f 0%, #020617 100%)"}})},O=d.memo(()=>{const[t,s]=d.useState({x:0,y:0}),[r,n]=d.useState(!1),a=d.useCallback(i=>{requestAnimationFrame(()=>{s({x:i.clientX,y:i.clientY}),n(!0)})},[]),o=d.useCallback(()=>{n(!1)},[]);return d.useEffect(()=>(window.addEventListener("mousemove",a,{passive:!0}),window.addEventListener("mouseenter",a,{passive:!0}),window.addEventListener("mouseleave",o,{passive:!0}),()=>{window.removeEventListener("mousemove",a),window.removeEventListener("mouseenter",a),window.removeEventListener("mouseleave",o)}),[a,o]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:`cursor cursor-astronaut fixed pointer-events-none z-50 ${r?"moving":""}`,style:{transform:`translate(${t.x}px, ${t.y}px)`,willChange:"transform"}}),e.jsx("div",{className:"cursor cursor-default fixed pointer-events-none z-50",style:{transform:`translate(${t.x}px, ${t.y}px)`,willChange:"transform"}})]})});O.displayName="AstronautCursor";const W=d.memo(()=>{const t=d.useRef(null),s=d.useRef({}),[r,n]=d.useState({loaded:!1,error:!1}),a=d.useCallback(()=>{const{scene:o,renderer:i,controls:m,animationFrameId:v}=s.current;v&&cancelAnimationFrame(v),m&&m.dispose(),i&&(i.dispose(),i.domElement.remove()),o&&o.clear(),s.current={}},[]);return d.useEffect(()=>{if(!t.current)return a;const o=new P,i=new R(45,t.current.clientWidth/t.current.clientHeight,.1,1e3);i.position.set(0,10,50);const m=new z({antialias:!0,alpha:!0,powerPreference:"high-performance"});m.setPixelRatio(Math.min(window.devicePixelRatio,2)),m.setSize(t.current.clientWidth,t.current.clientHeight),t.current.appendChild(m.domElement);const v=new H(4210752,1.5),f=new T(16777215,.8);f.position.set(5,5,5),o.add(v,f);const u=new Q(i,m.domElement);u.enableDamping=!0,u.dampingFactor=.05,u.enableZoom=!1,u.autoRotate=!0,u.autoRotateSpeed=.3;const j=new Z(20,10,5),p=new K({color:6600182,transparent:!0,opacity:.5}),N=new ee(j,p);new te().load("/assets/3d-models/colonization_ship.glb",b=>{const x=b.scene;x.scale.set(10,10,10),x.position.set(0,0,0),o.add(x),n({loaded:!0,error:!1});let y=0;const l=()=>{y=requestAnimationFrame(l),x.position.y+=Math.sin(Date.now()*.001)*.02,u.update(),m.render(o,i)};s.current={scene:o,camera:i,renderer:m,controls:u,animationFrameId:y},l()},void 0,b=>{console.error("Model loading error:",b),o.add(N),n({loaded:!1,error:!0})});const g=()=>{if(!t.current)return;const b=t.current.clientWidth,x=t.current.clientHeight;i.aspect=b/x,i.updateProjectionMatrix(),m.setSize(b,x)};return window.addEventListener("resize",g),()=>{window.removeEventListener("resize",g),a()}},[a]),e.jsx("div",{ref:t,className:`absolute inset-0 -z-20 transition-all duration-500 
        ${r.loaded?"opacity-50":"opacity-30"}
        ${r.error?"brightness-50 contrast-50":"brightness-70 contrast-120"}`,children:r.error&&e.jsxs("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-blue-300",children:[e.jsx("p",{children:"Unable to load 3D model"}),e.jsx("p",{children:"Displaying fallback visualization"})]})})});W.displayName="ColonizationShip";function ge(){return e.jsxs("div",{className:"relative min-h-screen",children:[e.jsx(O,{}),e.jsx(W,{}),e.jsx(he,{}),e.jsx("div",{className:"nebula-bg"}),e.jsxs("div",{className:"relative z-10",children:[e.jsx("div",{className:"meteor",style:{top:"10%",left:"20%"}}),e.jsx("div",{className:"meteor",style:{top:"30%",left:"70%",animationDelay:"1s"}}),e.jsx("div",{className:"meteor",style:{top:"60%",left:"40%",animationDelay:"2s"}}),e.jsx(ne,{}),e.jsx(re,{}),e.jsx("div",{className:"space-card mx-4 md:mx-8 my-8 p-8",children:e.jsx(le,{})}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"constellation absolute top-0 left-0 w-full h-full"}),e.jsx(ce,{})]}),e.jsx("div",{className:"space-card mx-4 md:mx-8 my-8 p-8",children:e.jsx(de,{})}),e.jsx("div",{className:"relative",children:e.jsx(me,{})}),e.jsx("div",{className:"space-card mx-4 md:mx-8 my-8 p-8",children:e.jsx(ue,{})}),e.jsx("div",{className:"relative",children:e.jsx(pe,{})}),e.jsx(xe,{})]})]})}ae.createRoot(document.getElementById("root")).render(e.jsx(se.StrictMode,{children:e.jsx(ge,{})}));
//# sourceMappingURL=index-CBf-4wBt.js.map