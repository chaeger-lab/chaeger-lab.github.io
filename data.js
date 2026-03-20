/**
 * ==========================================
 * DDCS LAB WEBSITE DATA (CONTENT CONFIGURATION)
 * ==========================================
 * INSTRUCTIONS:
 * 1. This file contains all the text, links, and data for the website.
 * 2. You do NOT need to touch the HTML or CSS files to update content.
 * 3. Save this file as "data.js" in the same folder as index.html.
 */

// --- 1. GENERAL LAB INFO ---
const labConfig = {
    name: "DDCS Lab",
    fullName: "Data-Driven Communication Systems Lab",
    subText: "DDCS Laboratory, Chalmers University of Technology",
    footerText: "© 2026 DDCS Lab. Chalmers University of Technology.",
    address: "Elektrogården 1, 41258 Göteborg, Sweden"
};

// --- 2. RESEARCH TOPICS (NEW) ---
/**
 * HOW TO ADD RESEARCH:
 * - icon: Lucide icon name (e.g., 'radio', 'cpu', 'network'). https://lucide.dev/icons/
 * - abstract: The detailed text shown in the popup modal.
 * - image: Cover image for the popup modal.
 */
const researchData = [
    {
        id: "oisac",
        icon: "brain", // Lucide icon name
        title: "topic 1",
        desc: "some description here",
        abstract: "Details here.",
        image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "isac",
        icon: "cpu",
        title: "topic 2",
        desc: "some description here.",
        abstract: "Details here.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "ai4coding",
        icon: "network",
        title: "topic 3",
        desc: "some description here.",
        abstract: "Details here.",
        image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&fit=crop&q=80&w=800"
    }
];

// --- 3. TEAM MEMBERS (PEOPLE) ---
const teamData = [
    {
        id: "pi",
        name: "Christian Häger",
        role: "Lab PI, Associate Professor",
        image: "images/christian.jpg", 
        email: "christian.haeger@chalmers.se",
        linkedin: "https://www.linkedin.com/",
        website: "https://chaeger.github.io/"
    },
    {
        id: "postdoc1",
        name: "Rick Butler",
        role: "Postdoc Researcher",
        image: "images/rick.jpg",
        email: "xxx@chalmers.se",
        linkedin: "",
        website: "" 
    },
    {
        id: "phd1",
        name: "José Miguel Mateos Ramos",
        role: "PhD Candidate",
        image: "images/jose.jpeg",
        email: "zicongj@chalmers.se",
        linkedin: "",
        website: ""
    },
    {
        id: "phd2",
        name: "Bingcheng Chen",
        role: "PhD Candidate",
        image: "images/bingcheng.png",
        email: "charlie@chalmers.se",
        linkedin: "",
        website: ""
    },
    {
        id: "phd3",
        name: "Zicong Jiang",
        role: "PhD Candidate",
        image: "images/zicong.jpeg",
        email: "zicongj@chalmers.se",
        linkedin: "",
        website: "https://zicongjiang.github.io/zicong-jiang/"
    },
    {
        id: "master1",
        name: "Jun Cao",
        role: "Master student",
        image: "images/jun.png",
        email: "charlie@chalmers.se",
        linkedin: "",
        website: ""
    }
];

// --- 3.1 ALUMNI ---
/**
 * HOW TO ADD ALUMNI:
 * - type: 'phd', 'visiting', 'master', 'bachelor' (Must match these exactly for classification)
 */
const alumniData = [
    {
        name: "xxx",
        role: "PhD Graduate (20xx)",
        destination: "xxx at xxx",
        link: "https://linkedin.com",
        type: "phd"
    },
    {
        name: "xxx",
        role: "Postdoc (20xx-20xx)",
        destination: "xxxx",
        link: "#",
        type: "phd" // Grouping postdocs with PhDs or separate them if preferred
    },
    {
        name: "xxx",
        role: "Visiting Researcher (20xx)",
        destination: "xxxx",
        link: "#",
        type: "visiting"
    },
    {
        name: "Master Graduate xx",
        role: "MSc Thesis (20xx)",
        destination: "xxxx",
        link: "",
        type: "master"
    },
    {
        name: "xxx",
        role: "BSc Thesis (20xx)",
        destination: "xxxx",
        link: "",
        type: "bachelor"
    }
];

// --- 4. PUBLICATIONS ---
const publicationsData = [
    { 
        id: 1, 
        type: 'journal', 
        year: '20xx', 
        title: 'xxxx', 
        authors: 'xxxx', 
        source: 'Journal of xxxx', 
        link: 'https://ieeexplore.ieee.org/' 
    },
    { 
        id: 2, 
        type: 'conference', 
        year: '20xx', 
        title: 'xxxx', 
        authors: 'xxxx, xxxx', 
        source: 'xxxx', 
        link: '#' 
    },
    { 
        id: 3, 
        type: 'review', 
        year: '20xx', 
        title: 'Survey on xxx', 
        authors: 'xxxx', 
        source: 'xxx', 
        link: '#' 
    }
];

// --- 5. NEWS & EVENTS ---
const newsData = [
    {
        id: 1,
        type: 'event',
        date: '29 January, 2026',
        title: 'Christian has been promoted to Associate Professor',
        desc: 'Christian Häger has given his promotion lecture and has become an Associate Professor.',
        body: [
            'Christian Häger delivered his promotion lecture, "From Communication to Sensing: Machine Learning in Optical Fiber Systems."',
            'Following the lecture, he was promoted to Associate Professor at Chalmers University of Technology.',
            'This milestone reflects his contributions to data-driven optical communication and fiber sensing research.'
        ],
        link: 'https://www.linkedin.com/posts/chalmersuniversity-academiccareer-promotionlecture-ugcPost-7422899621657587712-hd9z?utm_source=share&utm_medium=member_desktop&rcm=ACoAADTLmQUBTJLqTpKccR8hZARr8sZd82OhgLk',
        sourceLabel: 'View LinkedIn Post'
    },
    {
        id: 2,
        type: 'hiring',
        date: '30 January, 2026',
        title: 'Open PhD Positions in Optical Communications and Fiber Sensing',
        desc: 'The starting date for this position is Fall 2026. Check the source page for application details.',
        body: [
            'The lab is opening PhD positions in optical communications and fiber sensing.',
            'The planned starting time for this position is Fall 2026.',
            'Please check the official vacancy page for application requirements, eligibility, and deadlines.'
        ],
        link: 'https://www.chalmers.se/en/about-chalmers/work-with-us/vacancies/?rmpage=job&rmjob=14548&rmlang=UK',
        sourceLabel: 'View Vacancy Page'
    },
    {
        id: 3,
        type: 'publication',
        date: 'xx xxx, 20xx',
        title: 'Seminar on xxx',
        desc: 'Short preview text for this seminar news item.',
        body: [
            'Write the full seminar description here.',
            'You can add multiple paragraphs by adding more strings to this body array.'
        ],
        link: ''
    },
    {
        id: 4,
        type: 'event',
        date: 'xx xxx, 20xx',
        title: 'Received a Grant xxx',
        desc: 'Short preview text for the grant announcement.',
        body: [
            'Write the full grant announcement here.',
            'This full text will be shown inside the floating modal window.'
        ],
        link: ''
    }
];


// --- 6. GALLERY ---
const galleryData = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=1200",
        title: "Optical Lab Setup",
        date: "2025-05-20",
        location: "Lab Room 301"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200",
        title: "Server Room Analysis",
        date: "2025-06-15",
        location: "Data Center"
    }
];