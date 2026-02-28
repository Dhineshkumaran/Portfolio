import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    User,
    GraduationCap,
    Code2,
    Briefcase,
    Trophy,
    BookOpen,
    Info,
    BarChart3,
    Github,
    Linkedin,
    FileText,
    Phone,
    Mail,
    Menu,
    X,
    ExternalLink
} from 'lucide-react'

// Constants
const SKILLS = [
    { name: 'NodeJS', level: 80, icon: 'https://icon.icepanel.io/Technology/svg/Node.js.svg' },
    { name: 'ExpressJS', level: 80, icon: 'https://icon.icepanel.io/Technology/svg/Express.svg' },
    { name: 'ReactJS', level: 70, icon: 'https://icon.icepanel.io/Technology/svg/React.svg' },
    { name: 'MongoDB', level: 80, icon: 'https://icon.icepanel.io/Technology/svg/MongoDB.svg' },
    { name: 'TailwindCSS', level: 70, icon: 'https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg' },
    { name: 'SQL', level: 70, icon: 'https://icon.icepanel.io/Technology/svg/MySQL.svg' },
    { name: 'Postman', level: 90, icon: 'https://icon.icepanel.io/Technology/svg/Postman.svg' },
    { name: 'Git', level: 80, icon: 'https://icon.icepanel.io/Technology/svg/Git.svg' },
    { name: 'Docker', level: 70, icon: 'https://icon.icepanel.io/Technology/svg/Docker.svg' },
    { name: 'AWS EC2', level: 70, icon: 'https://icon.icepanel.io/Technology/svg/AWS.svg' }
]

const PROJECTS = [
    {
        title: 'Food Ordering System',
        description: 'A serverless solution for hotels, allowing customers to place orders via their mobile devices. Automates ordering, reduces labor costs, and enhances efficiency.',
        skills: ['MongoDB', 'Express.js', 'Node.js', 'Docker'],
        github: 'https://github.com/Dhineshkumaran/Food-ordering',
        image: '/images/Screenshot 2024-07-08 195057.png'
    },
    {
        title: 'SAP (Student Activity Points)',
        description: 'Revolutionizes calculating and managing activity points using image processing. Streamlines tracking participation for both students and faculty.',
        skills: ['Python', 'Flask', 'Image processing'],
        github: 'https://github.com/Dhineshkumaran/SAP',
        image: '/images/Screenshot 2024-07-08 200730.png'
    },
    {
        title: 'HarvestHub',
        description: 'Empowers farmers to sell products directly to consumers, eliminating intermediaries and ensuring fresh produce at better prices.',
        skills: ['MongoDB', 'Express.js', 'Node.js'],
        github: 'https://github.com/Dhineshkumaran/HarvestHub',
        image: '/images/Screenshot 2024-08-18 054843.png'
    }
]

const ACHIEVEMENTS = [
    {
        title: '2nd Place - Hackathon',
        event: 'Student Activity Point Calculator',
        description: '30-hour hackathon project focused on automation and innovative calculator solutions.',
        image: '/images/IMG-20240501-WA0000.jpg'
    },
    {
        title: '1st Place - Hackbuzz',
        event: 'Harvest Hub Challenge',
        description: 'Won the challenge at Hackbuzz organized by CSE coding club in collaboration with Pentafox & Winfomi.',
        image: '/images/IMG-20240418-WA0005.jpg'
    },
    {
        title: '3rd Place - KEC-Ideathon\'24',
        event: 'E-commerce Industry Innovation',
        description: 'Won for project aiming to foster the eCommerce industry, organized by TBI KEC.',
        image: '/images/Ideathon.png'
    }
]

const COURSES = [
    {
        title: 'MongoDB Associate Developer',
        img: 'https://images.credly.com/size/680x680/images/650ebdbe-d526-4b47-b186-c1ab516b5a7c/image.png',
        link: 'https://www.credly.com/badges/fc12ca5f-1fb1-4ffe-8d0b-3c581e9873d0/public_url'
    },
    {
        title: 'Google AI Essentials',
        img: 'https://static.cdnlogo.com/logos/c/82/coursera.svg',
        link: 'https://www.credly.com/badges/c7eecf51-a02f-4c96-8f7a-8e634090d0d5/linked_in_profile'
    },
    {
        title: 'Postman API Fundamentals Student Expert',
        img: 'https://static.cdnlogo.com/logos/p/20/postman.svg',
        link: 'https://badgr.com/public/assertions/HVndvOU4SnCTWAiSI9pCvQ?identity__email=dhineshkumaran2004@outlook.com'
    },
    {
        title: 'JPMorgan Chase & Co. Excel Skills',
        img: 'https://static.cdnlogo.com/logos/j/3/jpmorgan.svg',
        link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/JPMorgan%20Chase%20Corporate/XiuvjcwqWRqH9oy38_JPMorgan%20Chase%20&%20Co._59LsM3CzyCcua4M7H_1727597434182_completion_certificate.pdf'
    }
]

const NAV_ITEMS = [
    { id: 'about', label: 'About', icon: <User className="w-5 h-5" /> },
    { id: 'education', label: 'Education', icon: <GraduationCap className="w-5 h-5" /> },
    { id: 'skills', label: 'Skills', icon: <Code2 className="w-5 h-5" /> },
    { id: 'projects', label: 'Projects', icon: <Briefcase className="w-5 h-5" /> },
    { id: 'achievements', label: 'Achievements', icon: <Trophy className="w-5 h-5" /> },
    { id: 'courses', label: 'Courses', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'profile', label: 'Profile', icon: <Info className="w-5 h-5" /> },
    { id: 'stats', label: 'Stats', icon: <BarChart3 className="w-5 h-5" /> },
]

export default function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('about')
    const [isLargeScreen, setIsLargeScreen] = useState(true)

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 1024)
        }
        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)
        return () => window.removeEventListener('resize', checkScreenSize)
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section')
            let current = 'about'
            sections.forEach((section) => {
                const sectionTop = section.offsetTop
                if (window.scrollY >= sectionTop - 100) {
                    current = section.id
                }
            })
            setActiveSection(current)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800">
            {/* Mobile Menu Toggle */}
            <button
                onClick={toggleSidebar}
                className="fixed top-6 right-6 z-50 p-2 bg-violet-600 text-white rounded-full shadow-lg lg:hidden"
            >
                {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Sidebar */}
            <motion.nav
                initial={false}
                animate={isLargeScreen ? { x: 0 } : (isSidebarOpen ? { x: 0 } : { x: "-100%" })}
                className="fixed top-0 left-0 z-40 w-72 h-screen bg-violet-600 text-white shadow-2xl transition-all"
            >
                <div className="flex flex-col h-full p-8">
                    <div className="flex flex-col items-center mb-10 text-center">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="w-32 h-32 mb-4 rounded-full border-4 border-white/20 overflow-hidden shadow-xl"
                        >
                            <img src="/images/IMG_20240719_104822.jpg" alt="Profile" className="w-full h-full object-cover" />
                        </motion.div>
                        <h2 className="text-xl font-bold">Dhinesh kumaran S</h2>
                        <p className="text-violet-200 text-sm mb-6">Computer Science Engineer</p>

                        <a
                            href="/22CSR048_Resume.pdf"
                            target="_blank"
                            className="px-6 py-2 bg-white text-violet-600 rounded-full font-semibold text-sm hover:bg-violet-100 transition-colors shadow-md"
                        >
                            View Resume
                        </a>
                    </div>

                    <ul className="space-y-2 flex-grow overflow-y-auto">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    onClick={() => setIsSidebarOpen(false)}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeSection === item.id
                                        ? 'bg-white/20 text-white font-medium shadow-inner'
                                        : 'hover:bg-white/10 text-violet-100'
                                        }`}
                                >
                                    {item.icon}
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="pt-8 border-t border-white/20">
                        <h3 className="text-xs font-semibold text-violet-200 uppercase tracking-widest mb-4">Find Me On</h3>
                        <div className="flex gap-4">
                            <motion.a whileHover={{ y: -3 }} href="https://linkedin.com/in/dhinesh-kumaran-s" target="_blank" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                                <Linkedin className="w-5 h-5 text-white" />
                            </motion.a>
                            <motion.a whileHover={{ y: -3 }} href="https://github.com/Dhineshkumaran" target="_blank" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                                <Github className="w-5 h-5 text-white" />
                            </motion.a>
                            <motion.a whileHover={{ y: -3 }} href="https://leetcode.com/u/22CSR048_Dhinesh/" target="_blank" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                                <Code2 className="w-5 h-5 text-white" />
                            </motion.a>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Main Content */}
            <main className="lg:pl-72">
                <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12">

                    {/* About Section */}
                    <section id="about" className="py-20">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.h1 variants={itemVariants} className="text-5xl font-black mb-12 text-slate-900 merriweather-black tracking-tight">
                                About Me
                            </motion.h1>
                            <motion.div variants={itemVariants} className="grid lg:grid-cols-5 gap-12 items-center">
                                <div className="lg:col-span-3 space-y-6 text-lg leading-relaxed text-slate-600">
                                    <p className="p-8 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
                                        🌟 <strong className="text-slate-900 font-bold">Hi! I'm a Computer Science and Engineering student at Kongu Engineering College.</strong>
                                        <br /><br />
                                        I'm passionate about crafting innovative and efficient solutions through software development,
                                        mastering cutting-edge technologies, and delivering seamless, responsive web experiences.
                                    </p>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="p-6 bg-slate-100 rounded-2xl border border-slate-200">
                                            <h3 className="font-bold text-slate-900 mb-2">My Vision</h3>
                                            <p className="text-sm">Building scalable, impactful solutions that solve real-world problems.</p>
                                        </div>
                                        <div className="p-6 bg-slate-100 rounded-2xl border border-slate-200">
                                            <h3 className="font-bold text-slate-900 mb-2">What Drives Me</h3>
                                            <p className="text-sm">Growth through rapid learning, collaboration, and excellence.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:col-span-2">
                                    <motion.img
                                        initial={{ rotate: -5, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                        src="/images/undraw_welcome_cats_thqn.svg"
                                        className="w-full drop-shadow-2xl"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    </section>

                    {/* Education Section */}
                    <section id="education" className="py-20 border-t border-slate-100">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.h2 variants={itemVariants} className="text-4xl font-black mb-12 text-slate-900 merriweather-black">
                                Education
                            </motion.h2>
                            <div className="space-y-8 relative before:absolute before:left-8 before:top-0 before:bottom-0 before:w-0.5 before:bg-slate-200">
                                {[
                                    { years: '2019-2020', degree: 'SSLC', school: 'Shri Ganga Matriculation School', grade: '92.6%' },
                                    { years: '2021-2022', degree: 'HSC', school: 'Shri Ganga Higher Secondary School', grade: '85.33%' },
                                    { years: '2022-2026', degree: 'B.E. Computer Science and Engineering', school: 'Kongu Engineering College', grade: '7.54 CGPA' },
                                ].map((edu, idx) => (
                                    <motion.div key={idx} variants={itemVariants} className="relative pl-20">
                                        <div className="absolute left-0 top-0 w-16 h-16 bg-white rounded-full border-4 border-slate-100 shadow-sm flex items-center justify-center z-10">
                                            <GraduationCap className="w-8 h-8 text-violet-500" />
                                        </div>
                                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                                            <span className="text-violet-600 font-bold text-sm mb-1 block uppercase tracking-wider">{edu.years}</span>
                                            <h3 className="text-xl font-bold text-slate-900">{edu.degree}</h3>
                                            <p className="text-slate-500 font-medium mb-2">{edu.school}</p>
                                            <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-lg border border-slate-200">
                                                Grade: {edu.grade}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </section>

                    {/* Skills Section */}
                    <section id="skills" className="py-20 border-t border-slate-100">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.h2 variants={itemVariants} className="text-4xl font-black mb-12 text-slate-900 merriweather-black">
                                Technical Toolkit
                            </motion.h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                {SKILLS.map((skill, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={itemVariants}
                                        whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                                        className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm text-center transition-all group"
                                    >
                                        <div className="w-16 h-16 mx-auto mb-4 p-2 bg-slate-50 rounded-2xl group-hover:bg-violet-50 transition-colors">
                                            <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                                        </div>
                                        <h3 className="font-bold text-slate-900 mb-4">{skill.name}</h3>
                                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: 0.2 }}
                                                className="h-full bg-violet-500 rounded-full"
                                            />
                                        </div>
                                        <span className="text-[10px] mt-2 block text-slate-400 font-bold uppercase tracking-wider">{skill.level}% Proficiency</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </section>

                    {/* Projects Section */}
                    <section id="projects" className="py-20 border-t border-slate-100">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.h2 variants={itemVariants} className="text-4xl font-black mb-12 text-slate-900 merriweather-black">
                                Featured Projects
                            </motion.h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                {PROJECTS.map((project, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={itemVariants}
                                        className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full group"
                                    >
                                        <div className="h-64 overflow-hidden relative">
                                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                            <a href={project.github} target="_blank" className="absolute top-6 right-6 p-3 bg-white text-slate-900 rounded-2xl shadow-lg hover:bg-violet-600 hover:text-white transition-all transform hover:rotate-12 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                                <Github className="w-6 h-6" />
                                            </a>
                                        </div>
                                        <div className="p-8 flex flex-col flex-grow">
                                            <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                                            <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.skills.map((skill, sIdx) => (
                                                    <span key={sIdx} className="px-3 py-1 bg-violet-50 text-violet-600 text-[10px] font-black rounded-lg uppercase border border-violet-100">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </section>

                    {/* Achievements Section */}
                    <section id="achievements" className="py-20 border-t border-slate-100">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.h2 variants={itemVariants} className="text-4xl font-black mb-12 text-slate-900 merriweather-black">
                                Achievements
                            </motion.h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                {ACHIEVEMENTS.map((achieve, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={itemVariants}
                                        whileHover={{ y: -5 }}
                                        className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100"
                                    >
                                        <div className="aspect-video mb-6 overflow-hidden rounded-2xl bg-slate-100">
                                            <img src={achieve.image} alt={achieve.title} className="w-full h-full object-cover" />
                                        </div>
                                        <h3 className="font-bold text-slate-900 mb-1">{achieve.title}</h3>
                                        <p className="text-violet-600 text-xs font-black uppercase tracking-wider mb-4">{achieve.event}</p>
                                        <p className="text-slate-500 text-sm">{achieve.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </section>

                    {/* Courses Section */}
                    <section id="courses" className="py-20 border-t border-slate-100 text-center">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.h2 variants={itemVariants} className="text-4xl font-black mb-12 text-slate-900 merriweather-black">
                                Certifications
                            </motion.h2>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {COURSES.map((course, idx) => (
                                    <motion.a
                                        key={idx}
                                        href={course.link}
                                        target="_blank"
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all flex flex-col items-center group"
                                    >
                                        <div className="w-20 h-20 mb-6 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                                            <img src={course.img} alt={course.title} className="max-w-full max-h-full" />
                                        </div>
                                        <h3 className="text-sm font-bold text-slate-900 mb-4">{course.title}</h3>
                                        <div className="mt-auto flex items-center gap-2 text-violet-600 text-xs font-bold uppercase tracking-widest">
                                            Verify <ExternalLink className="w-3 h-3" />
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </section>

                    {/* Profile Section */}
                    <section id="profile" className="py-20 border-t border-slate-100">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.h2 variants={itemVariants} className="text-4xl font-black mb-12 text-slate-900 merriweather-black">
                                Personal Profile
                            </motion.h2>
                            <div className="bg-white rounded-[3rem] p-12 shadow-2xl shadow-slate-200/50 border border-slate-100">
                                <div className="grid md:grid-cols-3 gap-12">
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="flex items-center gap-2 text-slate-400 font-black text-[10px] uppercase tracking-[0.2em] mb-3">
                                                <User className="w-4 h-4" /> Full Name
                                            </h4>
                                            <p className="text-slate-900 font-bold text-lg">Dhineshkumaran S</p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center gap-2 text-slate-400 font-black text-[10px] uppercase tracking-[0.2em] mb-3">
                                                <User className="w-4 h-4" /> Date of Birth
                                            </h4>
                                            <p className="text-slate-900 font-bold text-lg">July 26, 2004</p>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center gap-2 text-slate-400 font-black text-[10px] uppercase tracking-[0.2em] mb-3">
                                                <User className="w-4 h-4" /> Languages
                                            </h4>
                                            <p className="text-slate-900 font-bold text-lg">Tamil, English</p>
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="flex items-center gap-2 text-slate-400 font-black text-[10px] uppercase tracking-[0.2em] mb-3">
                                                <User className="w-4 h-4" /> Address
                                            </h4>
                                            <address className="not-italic text-slate-900 font-bold leading-relaxed">
                                                25, Thottiankinathupudur,<br />
                                                Kasthuriba grammam(PO),<br />
                                                Arachalur(Via), Erode - 638101
                                            </address>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center gap-2 text-slate-400 font-black text-[10px] uppercase tracking-[0.2em] mb-3">
                                                <User className="w-4 h-4" /> Hobbies
                                            </h4>
                                            <p className="text-slate-900 font-bold leading-relaxed">
                                                Coding, Research, Listening to Music, Playing Sports
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="flex items-center gap-2 text-slate-400 font-black text-[10px] uppercase tracking-[0.2em] mb-3">
                                                <Mail className="w-4 h-4" /> Email & Contact
                                            </h4>
                                            <div className="space-y-3">
                                                <a href="mailto:dhineshkumaran2004@outlook.com" className="flex items-center gap-3 text-slate-900 font-bold hover:text-violet-600 transition-colors">
                                                    <Mail className="w-5 h-5 text-violet-500" /> dhineshkumaran2004@outlook.com
                                                </a>
                                                <a href="tel:+919952237496" className="flex items-center gap-3 text-slate-900 font-bold hover:text-violet-600 transition-colors">
                                                    <Phone className="w-5 h-5 text-violet-500" /> +91 9952237496
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </section>

                    {/* Stats Section */}
                    <section id="stats" className="py-20 border-t border-slate-100">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.h2 variants={itemVariants} className="text-4xl font-black mb-12 text-slate-900 merriweather-black">
                                Contribution Stats
                            </motion.h2>
                            <div className="grid lg:grid-cols-2 gap-8">
                                <motion.div variants={itemVariants} className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-slate-100 overflow-hidden text-center">
                                    <img src="https://leetcard.jacoblin.cool/22CSR048_Dhinesh?ext=heatmap" className="w-full mb-4" alt="LeetCode" />
                                    <p className="font-bold text-slate-900">Leetcode Heatmap</p>
                                </motion.div>
                                <motion.div variants={itemVariants} className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-slate-100 overflow-hidden text-center">
                                    <img src="https://github-readme-streak-stats.herokuapp.com/?user=Dhineshkumaran" className="h-[200px] mb-4 mx-auto" alt="GitHub Stats" />
                                    <p className="font-bold text-slate-900">GitHub Activity</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </section>

                </div>
            </main>

            {/* Footer */}
            <footer className="lg:pl-72 py-12 text-center text-slate-400 text-xs font-bold uppercase tracking-widest border-t border-slate-100">
                © {new Date().getFullYear()} Dhinesh Kumaran S · Built with React & Framer Motion
            </footer>
        </div>
    )
}
