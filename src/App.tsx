import { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Menu,
  X,
  Download,
  ChevronDown,
  Calendar,
  Briefcase,
  GraduationCap,
  Code,
  Award,
  User,
  CheckCircle,
  Building2,
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'education', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const accomplishments = [
    'Automated log monitoring & test result analysis using SPLUNK dashboards',
    'Security Event Management monitoring via SPLUNK log analysis',
    'Reduced test cycle duration by up to 50% per application through automation',
    'Developed Python scripts for REST API calls and JSON-to-CSV data parsing',
    'Designed automated performance test framework using JMETER, Teamcity, SVN & Oracle DB',
    'Built custom module integrating JIRA, QC & Teamcity for defect tracking & management',
    'Delivered new module in Telecom billing system for customer offer management',
    'Automated continuous core file size checks with email alert notifications',
  ];

  const experiences = [
    {
      title: 'Senior Database Engineer',
      company: 'ServiceNow',
      period: 'Sep 2019 – Present',
      duration: '6 yrs 10 mos',
      location: 'Greater Hyderabad Area',
      description: 'Leading database infrastructure initiatives across 50+ customer instances. Managing proactive alerts, complex escalations, and high-impact performance optimizations. Responsible for operational excellence across PostgreSQL and MySQL/MariaDB environments.',
      achievements: ['50+ customer instances', 'PostgreSQL & MySQL/MariaDB', 'Proactive alerting', 'Splunk & Grafana monitoring', 'Ansible automation', 'ServiceNow Wormhole'],
      current: true,
    },
    {
      title: 'IT Analyst',
      company: 'Tata Consultancy Services',
      period: 'Jun 2019 – Sep 2019',
      duration: '4 mos',
      location: 'Greater Hyderabad Area',
      description: 'Worked on assigned user stories for creation of prototypes, development and testing. Used PL/SQL for data manipulations. Implemented AST framework for Control-M simulation using Shell Scripting. Created automated defect JIRA creation scripts and continuous core file size monitoring.',
      achievements: ['PL/SQL data manipulation', 'Rally Agile / JIRA', 'AST framework (Control-M)', 'Shell scripting automation', 'TeamCity CI/CD', 'CRON job scheduling'],
      current: false,
    },
    {
      title: 'Senior Software Engineer',
      company: 'Accenture Solutions PVT Ltd',
      period: 'Aug 2015 – Jun 2019',
      duration: '3 yrs 11 mos',
      location: 'Hyderabad, India',
      description: 'Worked across Banking (JP Morgan Chase, Credit Suisse) and Telecom (CenturyLink) clients. Automated log monitoring using SPLUNK dashboards for 18+ applications. Developed Python RestAPI scripts, automated performance test frameworks, and defect management integrations.',
      achievements: ['SPLUNK dashboards & alerting', 'Python & Shell scripting', 'PL/SQL / C++ development', 'JIRA/QC/Teamcity integration', 'SVN, Dimensions, GIT', 'Agile/Sprint ceremonies'],
      current: false,
    },
    {
      title: 'Jr. Software Engineer',
      company: 'WiFi Networks PVT Ltd',
      period: 'Jan 2014 – Aug 2015',
      duration: '1 yr 8 mos',
      location: 'Bengaluru, India',
      description: 'Developed Subscriber Management Platform for Airtel Africa and Vodafone India. Responsible for scripting, data collection, log analysis, backup scheduling, and network packet analysis using Wireshark.',
      achievements: ['C / C++ development', 'Shell scripting', 'Wireshark packet analysis', 'Backup scheduling', 'Log maintenance & reporting', 'Linux/Unix systems'],
      current: false,
    },
  ];

  const projects = [
    {
      title: 'Risk & Control – JP Morgan Chase',
      company: 'Accenture Solutions PVT Ltd',
      client: 'JP Morgan Chase Co',
      period: 'Jun 2017 – Sep 2019',
      description: 'Data quality and auditing project focused on maintaining scripts for analysing and reporting audit logs and syslogs. Developed SPLUNK dashboards for 18 applications, sending alerts to unauthorized users. Managed asset tracking with TAMS.',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Shell Scripting', 'Perl', 'SPLUNK', 'TAMS', 'JIRA', 'PRIME'],
    },
    {
      title: 'LATIS Billing Application – CenturyLink',
      company: 'Accenture Solutions PVT Ltd',
      client: 'Century Link (Telecom)',
      period: 'Aug 2016 – Mar 2017',
      description: 'Telecom billing application LCI Advanced Telecommunication Information System (LATIS) built using C++, PL/SQL and Python. Four modules: Cycling Processing, Pricing, Taxing, and Invoicing. Worked on Cycling and Taxing modules.',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Python', 'C++', 'PL/SQL', 'Dimensions', 'Rally', 'Blue Zone'],
    },
    {
      title: 'Risk & Finance Automation – Credit Suisse',
      company: 'Accenture Solutions PVT Ltd',
      client: 'Credit Suisse Bank',
      period: 'Aug 2015 – Jul 2016',
      description: 'Developing Risk and Finance applications for banking clients. Focused on supporting end users and stabilizing applications with well-structured automation frameworks. Reduced test cycle duration by 50% through automated processes.',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Shell Scripting', 'Teamcity', 'Subversion', 'JIRA', 'JMETER'],
    },
    {
      title: 'Subscriber Management Platform – Airtel/Vodafone',
      company: 'WiFi Networks PVT Ltd',
      client: 'Airtel Africa, Vodafone India',
      period: 'Jan 2014 – Aug 2015',
      description: 'Telecom Subscriber Management Platform managing the lifecycle of subscribers for Airtel Africa and Vodafone India. Platform sniffs HSL/LSL links between BSC and MSC for location-based promotional offers.',
      image: 'https://images.pexels.com/photos/1449824/pexels-photo-1449824.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['C', 'C++', 'Shell Scripting', 'Linux', 'Wireshark'],
    },
    {
      title: 'Database Infrastructure @ ServiceNow',
      company: 'ServiceNow',
      client: '50+ Enterprise Customers',
      period: 'Sep 2019 – Present',
      description: 'Leading database infrastructure for 50+ ServiceNow customer instances. Proactive monitoring using Splunk and Grafana, automated alerting pipelines, and high-impact performance optimizations using Ansible and ServiceNow Wormhole.',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['PostgreSQL', 'MySQL/MariaDB', 'Splunk', 'Grafana', 'Ansible', 'Python'],
    },
    {
      title: 'SPLUNK Security Monitoring Dashboard',
      company: 'Accenture Solutions PVT Ltd',
      client: 'JP Morgan Chase Co',
      period: '2017 – 2019',
      description: 'Designed and implemented SPLUNK dashboards for Security Event Management across 18 applications. Automated log forwarding configuration, built real-time alert pipelines for unauthorized access detection.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['SPLUNK', 'Security', 'Log Analysis', 'Alerting', 'Shell', 'Perl'],
    },
  ];

  const skillCategories = [
    {
      category: 'Database Technologies',
      icon: '🗄️',
      skills: [
        { name: 'PostgreSQL', level: 95 },
        { name: 'MySQL / MariaDB', level: 95 },
        { name: 'SQL / PL/SQL', level: 92 },
        { name: 'Oracle Database', level: 82 },
        { name: 'Query Optimization', level: 90 },
      ],
    },
    {
      category: 'Scripting & Programming',
      icon: '💻',
      skills: [
        { name: 'Shell Scripting', level: 95 },
        { name: 'Python', level: 90 },
        { name: 'C++', level: 85 },
        { name: 'C', level: 82 },
        { name: 'Perl Scripting', level: 78 },
      ],
    },
    {
      category: 'Monitoring & Log Analysis',
      icon: '📊',
      skills: [
        { name: 'Splunk', level: 92 },
        { name: 'Grafana', level: 88 },
        { name: 'ServiceNow Wormhole', level: 90 },
        { name: 'Metrics & Alerting', level: 92 },
        { name: 'Security Event Mgmt', level: 88 },
      ],
    },
    {
      category: 'DevOps & Automation',
      icon: '⚙️',
      skills: [
        { name: 'Ansible', level: 85 },
        { name: 'Teamcity CI/CD', level: 85 },
        { name: 'CRON Job Scheduling', level: 90 },
        { name: 'ServiceNow Agent Studio', level: 88 },
        { name: 'JMETER', level: 80 },
      ],
    },
    {
      category: 'Version Control & Tools',
      icon: '🛠️',
      skills: [
        { name: 'GIT', level: 90 },
        { name: 'SVN / Dimensions', level: 88 },
        { name: 'JIRA / Rally', level: 92 },
        { name: 'Wireshark', level: 80 },
        { name: 'Wireshark/Network', level: 78 },
      ],
    },
    {
      category: 'Professional Skills',
      icon: '🤝',
      skills: [
        { name: 'Incident Escalation Mgmt', level: 95 },
        { name: 'Agile / Sprint', level: 90 },
        { name: 'Cross-team Collaboration', level: 92 },
        { name: 'Technical Documentation', level: 88 },
        { name: 'Problem Solving', level: 95 },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50 ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => scrollTo('home')}
              className="text-xl font-bold text-slate-800 hover:text-cyan-600 transition-colors"
            >
              Mohan<span className="text-cyan-600">.dev</span>
            </button>
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-cyan-600 bg-cyan-50'
                      : 'text-slate-600 hover:text-cyan-600 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 bg-white shadow-lg' : 'max-h-0'
          }`}
        >
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-cyan-600 bg-cyan-50'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900"
      >
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 rounded-full border border-cyan-400/30 backdrop-blur-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-cyan-200 text-sm">Open to new opportunities</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            Mohankrishna{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
              Chinagodaba
            </span>
          </h1>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400" />
            <h2 className="text-xl sm:text-2xl text-slate-300 font-medium">
              Senior Database Engineer
            </h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>

          <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Database Infrastructure Specialist at ServiceNow — 12+ years across Banking, Telecom
            & Enterprise SaaS. Expert in PostgreSQL, MySQL, SPLUNK, Python & Shell automation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollTo('contact')}
              className="group px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
            >
              <span className="flex items-center gap-2">
                Get In Touch
                <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <a
              href="/images/image.png"
              download
              className="group px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/20 backdrop-blur-sm inline-flex items-center gap-2"
            >
              Download CV
              <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6">
            <a href="mailto:mkchinagodaba@gmail.com"
              className="p-3 bg-white/10 hover:bg-cyan-500 text-white rounded-xl transition-all duration-300 border border-white/20 hover:border-transparent hover:-translate-y-1">
              <Mail className="w-6 h-6" />
            </a>
            <a href="tel:+918050540820"
              className="p-3 bg-white/10 hover:bg-cyan-500 text-white rounded-xl transition-all duration-300 border border-white/20 hover:border-transparent hover:-translate-y-1">
              <Phone className="w-6 h-6" />
            </a>
            <a href="#"
              className="p-3 bg-white/10 hover:bg-cyan-500 text-white rounded-xl transition-all duration-300 border border-white/20 hover:border-transparent hover:-translate-y-1">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#"
              className="p-3 bg-white/10 hover:bg-cyan-500 text-white rounded-xl transition-all duration-300 border border-white/20 hover:border-transparent hover:-translate-y-1">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>

        <button
          onClick={() => scrollTo('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Mohankrishna Chinagodaba"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl p-6 shadow-xl">
                <div className="text-white text-center">
                  <div className="text-4xl font-bold">12+</div>
                  <div className="text-cyan-100 text-sm">Years Experience</div>
                </div>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-4">
                {[
                  { value: '50+', label: 'Customer Instances' },
                  { value: '4', label: 'Companies' },
                  { value: '2', label: 'Certifications' },
                ].map((stat, i) => (
                  <div key={i} className="bg-slate-50 rounded-xl p-4 text-center border border-slate-100">
                    <div className="text-2xl font-bold text-cyan-600">{stat.value}</div>
                    <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 rounded-full text-cyan-600 text-sm font-medium mb-6">
                <User className="w-4 h-4" />
                About Me
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Database Infrastructure Specialist,{' '}
                <span className="text-cyan-600">Performance & Excellence</span>
              </h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                A goal-oriented professional with 12+ years of experience across Development and Database
                Infrastructure with Banking and Telecom clients. Currently Sr. Database Engineer at
                ServiceNow, Hyderabad, leading initiatives across 50+ customer instances.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Deep expertise in automated log monitoring with SPLUNK, Shell/Python automation,
                C++ on Unix/Linux systems, and continuous integration frameworks for performance testing.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyan-100 rounded-lg"><MapPin className="w-5 h-5 text-cyan-600" /></div>
                  <div>
                    <div className="text-sm text-slate-500">Location</div>
                    <div className="font-medium text-slate-900">Hyderabad, India</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyan-100 rounded-lg"><Mail className="w-5 h-5 text-cyan-600" /></div>
                  <div>
                    <div className="text-sm text-slate-500">Email</div>
                    <div className="font-medium text-slate-900">mkchinagodaba@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyan-100 rounded-lg"><Phone className="w-5 h-5 text-cyan-600" /></div>
                  <div>
                    <div className="text-sm text-slate-500">Phone</div>
                    <div className="font-medium text-slate-900">+91-8050540820</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyan-100 rounded-lg"><Briefcase className="w-5 h-5 text-cyan-600" /></div>
                  <div>
                    <div className="text-sm text-slate-500">Current Role</div>
                    <div className="font-medium text-cyan-600">Sr DB Engineer @ ServiceNow</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-cyan-600" />
                  Key Accomplishments
                </h3>
                <ul className="space-y-2">
                  {accomplishments.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => scrollTo('contact')}
                className="mt-6 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl transition-all duration-300 inline-flex items-center gap-2"
              >
                Let's Talk
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 rounded-full text-cyan-600 text-sm font-medium mb-4">
              <Briefcase className="w-4 h-4" />
              Work Experience
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Professional Journey</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A timeline of my career across Database Engineering, Software Development, and Automation.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-cyan-200 hidden md:block" />
            <div className="space-y-12">
              {experiences.map((job, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row md:items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-100 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} max-w-lg w-full`}>
                      <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <Calendar className="w-4 h-4 text-cyan-600" />
                        <span className="text-sm text-cyan-600 font-medium">{job.period}</span>
                        {job.current && (
                          <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Current</span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{job.title}</h3>
                      <div className={`flex items-center gap-1 mb-1 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <Building2 className="w-4 h-4 text-cyan-600" />
                        <p className="text-cyan-600 font-medium">{job.company}</p>
                      </div>
                      <div className={`flex items-center gap-1 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <p className="text-sm text-slate-400">{job.location} · {job.duration}</p>
                      </div>
                      <p className="text-slate-600 mb-4 text-sm leading-relaxed">{job.description}</p>
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {job.achievements.map((achievement, i) => (
                          <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-white shadow-lg hidden md:block top-8" />
                  <div className="w-full md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 rounded-full text-cyan-600 text-sm font-medium mb-4">
              <Code className="w-4 h-4" />
              Technical Skills
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Skills & Expertise</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Technologies and tools mastered across 12+ years of database engineering and software development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-shadow border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-lg font-bold text-slate-900">{category.category}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-700 font-medium text-sm">{skill.name}</span>
                        <span className="text-cyan-600 text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-teal-400 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-6 text-center">All Technologies & Tools</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'PostgreSQL','MySQL','MariaDB','SQL','PL/SQL','Oracle DB',
                'Shell Scripting','Python','C++','C','Perl',
                'Splunk','Grafana','ServiceNow','Ansible',
                'GIT','SVN','Dimensions','Teamcity','JMETER',
                'JIRA','Rally','Wireshark','Linux/Unix',
                'REST APIs','JSON','CSV Automation','CRON',
              ].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-full hover:border-cyan-400 hover:text-cyan-600 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 rounded-full text-cyan-600 text-sm font-medium mb-4">
              <Award className="w-4 h-4" />
              Project Portfolio
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Client Projects</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real-world projects delivered across Banking, Telecom and Enterprise SaaS domains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col">
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-xs text-white/80 font-medium bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                      {project.period}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-cyan-600 transition-colors">{project.title}</h3>
                  <div className="flex items-center gap-2 mb-1">
                    <Building2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                    <p className="text-sm text-cyan-600 font-medium">{project.company}</p>
                  </div>
                  <p className="text-xs text-slate-400 mb-3">Client: {project.client}</p>
                  <p className="text-slate-600 text-sm mb-4 flex-1 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2.5 py-1 bg-cyan-50 text-cyan-700 text-xs font-medium rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 rounded-full text-cyan-600 text-sm font-medium mb-4">
              <GraduationCap className="w-4 h-4" />
              Education & Certifications
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Academic Background</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Educational qualifications and professional certifications.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-cyan-600" />
                Education
              </h3>
              <div className="space-y-5">
                {[
                  {
                    degree: 'B.Tech – Electronics & Communication Engineering',
                    school: 'JNTUK (Jawaharlal Nehru Technological University Kakinada)',
                    period: '2012',
                    description: 'Bachelor of Technology in ECE. Foundation in electronics, communication systems, programming and embedded systems.',
                  },
                  {
                    degree: 'Diploma – Electronics & Communication Engineering',
                    school: 'State Board of Technical Education',
                    period: '2009',
                    description: 'Diploma in ECE providing core technical grounding in electronics, circuit design and communication technologies.',
                  },
                  {
                    degree: 'SSC – Secondary School Certificate',
                    school: 'Board of Secondary Education',
                    period: '2006',
                    description: 'Completed secondary schooling with a strong foundation in Science and Mathematics.',
                  },
                ].map((edu, index) => (
                  <div key={index} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h4 className="text-base font-bold text-slate-900">{edu.degree}</h4>
                        <p className="text-cyan-600 font-medium text-sm">{edu.school}</p>
                      </div>
                      <span className="text-sm text-slate-500 bg-white px-3 py-1 rounded-full shrink-0 border border-slate-100">{edu.period}</span>
                    </div>
                    <p className="text-slate-600 mt-2 text-sm">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Award className="w-6 h-6 text-cyan-600" />
                  Certifications
                </h3>
                <div className="space-y-4">
                  {[
                    { name: 'PostgreSQL Basic Certification', issuer: 'PostgreSQL', year: 'May 2026', desc: 'Validates core DBA expertise in PostgreSQL database administration.' },
                    { name: 'ServiceNow Certified System Administrator (CSA)', issuer: 'ServiceNow', year: '2024', desc: 'ServiceNow platform administration and configuration expertise.' },
                  ].map((cert, index) => (
                    <div key={index} className="bg-gradient-to-r from-slate-50 to-cyan-50 rounded-xl p-5 border border-slate-100 hover:shadow-md transition-all duration-300">
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <h4 className="font-bold text-slate-900 text-sm">{cert.name}</h4>
                        <span className="text-cyan-600 font-medium bg-white px-3 py-1 rounded-full text-xs shrink-0 border border-cyan-100">{cert.year}</span>
                      </div>
                      <p className="text-xs text-slate-500 mb-1">{cert.issuer}</p>
                      <p className="text-sm text-slate-600">{cert.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-cyan-600" />
                  Personal Details
                </h3>
                <div className="space-y-3">
                  {[
                    { label: 'Date of Birth', value: '15th August 1991' },
                    { label: 'Languages Known', value: 'English, Telugu' },
                    { label: 'Address', value: 'Rayadurgam, Hyderabad – 500086' },
                  ].map((detail, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-sm text-slate-500 w-36 shrink-0">{detail.label}</span>
                      <span className="text-sm font-medium text-slate-800">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 rounded-full text-cyan-300 text-sm font-medium mb-4">
              <Mail className="w-4 h-4" />
              Get In Touch
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Open to new opportunities in database engineering, infrastructure, or related roles.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-cyan-500/20 rounded-xl"><Mail className="w-6 h-6 text-cyan-400" /></div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                  <a href="mailto:mkchinagodaba@gmail.com" className="text-slate-300 hover:text-cyan-300 transition-colors">mkchinagodaba@gmail.com</a>
                  <p className="text-slate-400 text-sm mt-1">I'll respond within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-4 bg-cyan-500/20 rounded-xl"><Phone className="w-6 h-6 text-cyan-400" /></div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Phone</h3>
                  <a href="tel:+918050540820" className="text-slate-300 hover:text-cyan-300 transition-colors">+91-8050540820</a>
                  <p className="text-slate-400 text-sm mt-1">Available Mon–Fri, 9am–6pm IST</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-4 bg-cyan-500/20 rounded-xl"><MapPin className="w-6 h-6 text-cyan-400" /></div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Location</h3>
                  <p className="text-slate-300">Rayadurgam, Hyderabad – 500086</p>
                  <p className="text-slate-400 text-sm mt-1">Open to remote opportunities</p>
                </div>
              </div>
              <div className="pt-8 border-t border-slate-700">
                <h3 className="text-lg font-bold text-white mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  <a href="mailto:mkchinagodaba@gmail.com" className="p-3 bg-slate-800 hover:bg-cyan-500 text-white rounded-xl transition-all duration-300 hover:-translate-y-1"><Mail className="w-6 h-6" /></a>
                  <a href="#" className="p-3 bg-slate-800 hover:bg-cyan-500 text-white rounded-xl transition-all duration-300 hover:-translate-y-1"><Linkedin className="w-6 h-6" /></a>
                  <a href="#" className="p-3 bg-slate-800 hover:bg-cyan-500 text-white rounded-xl transition-all duration-300 hover:-translate-y-1"><Github className="w-6 h-6" /></a>
                </div>
              </div>
            </div>

            <form className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                  <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors" placeholder="Job Opportunity / Collaboration" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors resize-none" placeholder="Tell me about your opportunity..." />
                </div>
                <button type="submit" className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400">© {new Date().getFullYear()} Mohankrishna Chinagodaba. All rights reserved.</p>
            <p className="text-slate-500 text-sm">Sr. Database Engineer · ServiceNow · Hyderabad, India</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
