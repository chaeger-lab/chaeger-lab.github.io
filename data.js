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
        image: "images/jose_ramos.jpg",
        email: "josemi@chalmers.se",
        linkedin: "https://www.linkedin.com/in/jmateosramos/",
        website: "https://sites.google.com/view/jmateos"
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
        type: "review",
        year: "2023",
        title: "End-to-End Learning for VCSEL-based Optical Interconnects: State-of-the-Art, Challenges, and Opportunities",
        authors: "Muralikrishnan Srinivasan, Jinxiang Song, Alexander Grabowski, Krzysztof Szczerba, Holger K. Iversen, Mikkel N. Schmidt, Darko Zibar, Jochen Schröder, Anders Larsson, Christian Häger, and Henk Wymeersch",
        source: "J. Lightw. Technol., vol. 41, no. 11, pp. 3261-3277",
        link: "https://research.chalmers.se/publication/535085"
    },
    {
        id: 2,
        type: "journal",
        year: "2023",
        title: "Spatial Signal Design for Positioning via End-to-End Learning",
        authors: "Steven Rivetti, José Miguel Mateos-Ramos, Yibo Wu, Jinxiang Song, Musa Furkan Keskin, Vijaya Yajnanarayana, Christian Häger, and Henk Wymeersch",
        source: "IEEE Wireless Commun. Lett., vol. 12, no. 3, pp. 525-529",
        link: "https://research.chalmers.se/publication/535817"
    },
    {
        id: 3,
        type: "journal",
        year: "2023",
        title: "Model-Based End-to-End Learning for Multi-Target Integrated Sensing and Communication",
        authors: "José Miguel Mateos-Ramos, Christian Häger, Musa Furkan Keskin, Luc Le Magoarou, and Henk Wymeersch",
        source: "submitted to JSTSP",
        link: "http://arxiv.org/abs/2307.04111"
    },
    {
        id: 4,
        type: "journal",
        year: "2023",
        title: "Blind Channel Equalization Using Vector-Quantized Variational Autoencoders",
        authors: "Jinxiang Song, Vincent Lauinger, Yibo Wu, Christian Häger, Jochen Schröder, Alexandre Graell I Amat, Laurent Schmalen, and Henk Wymeersch",
        source: "submitted to TCOM",
        link: "http://arxiv.org/abs/2302.11687"
    },
    {
        id: 5,
        type: "journal",
        year: "2022",
        title: "Data-Driven Estimation of Capacity Upper Bounds",
        authors: "Christian Häger and Erik Agrell",
        source: "IEEE Commun. Lett., vol. 26, no. 12, pp. 2939-2943",
        link: "https://research.chalmers.se/publication/532569"
    },
    {
        id: 6,
        type: "journal",
        year: "2022",
        title: "Polarization Tracking in the Presence of PDL and Fast Temporal Drift",
        authors: "Mohammad Farsi, Christian Häger, Magnus Karlsson, and Erik Agrell",
        source: "J. Lightw. Technol., vol. 40, no. 19, pp. 6408-6416",
        link: "https://research.chalmers.se/publication/531649"
    },
    {
        id: 7,
        type: "journal",
        year: "2022",
        title: "Periodicity-Enabled Size Reduction of Symbol Based Predistortion for High-Order QAM",
        authors: "Zonglong He, Jinxiang Song, Kovendhan Vijayan, Christian Häger, Alexandre Graell i Amat, Henk Wymeersch, Peter A. Andrekson, Magnus Karlsson, and Jochen Schröder",
        source: "J. Lightw. Technol., vol. 40, no. 18, pp. 6168-6178",
        link: "https://research.chalmers.se/publication/531503"
    },
    {
        id: 8,
        type: "journal",
        year: "2022",
        title: "Benchmarking and Interpreting End-to-end Learning of MIMO and Multi-User Communication",
        authors: "Jinxiang Song, Christian Häger, Jochen Schröder, Tim O'Shea, Erik Agrell, and Henk Wymeersch",
        source: "IEEE Trans. Wireless Commun., vol. 21, no. 9, pp. 7287-7298",
        link: "https://research.chalmers.se/publication/529190"
    },
    {
        id: 9,
        type: "journal",
        year: "2022",
        title: "Model-Based End-to-End Learning for WDM Systems With Transceiver Hardware Impairments",
        authors: "Jinxiang Song, Christian Häger, Jochen Schröder, Alexandre Graell i Amat, and Henk Wymeersch",
        source: "IEEE J. Sel. Topics Quantum Electron., vol. 28, no. 4",
        link: "https://research.chalmers.se/publication/529436"
    },
    {
        id: 10,
        type: "journal",
        year: "2021",
        title: "Autoencoder-Based Unequal Error Protection Codes",
        authors: "Vukan Ninkovic, Dejan Vukobratovic, Christian Häger, Henk Wymeersch, and Alexandre Graell i Amat",
        source: "IEEE Commun. Lett., vol. 25, no. 11, pp. 3575-3579",
        link: "https://research.chalmers.se/publication/527235"
    },
    {
        id: 11,
        type: "journal",
        year: "2021",
        title: "Pruning and Quantizing Neural Belief Propagation Decoders",
        authors: "Andreas Buchberger, Christian Häger, Henry D. Pfister, Laurent Schmalen, and Alexandre Graell i Amat",
        source: "IEEE J. Sel. Areas Commun., vol. 39, no. 7, pp. 1957-1966",
        link: "https://research.chalmers.se/publication/520824"
    },
    {
        id: 12,
        type: "journal",
        year: "2021",
        title: "Model-Based Machine Learning for Joint Digital Backpropagation and PMD Compensation",
        authors: "Rick M. Bütler, Christian Häger, Henry D. Pfister, Gabriele Liga, and Alex Alvarado",
        source: "J. Lightw. Technol., vol. 39, no. 4, pp. 949-959",
        link: "https://research.chalmers.se/publication/522520"
    },
    {
        id: 13,
        type: "journal",
        year: "2021",
        title: "Physics-Based Deep Learning for Fiber-Optic Communication Systems",
        authors: "Christian Häger and Henry D. Pfister",
        source: "IEEE J. Sel. Areas Commun., vol. 39, no. 1, pp. 280-294",
        link: "https://research.chalmers.se/publication/521455"
    },
    {
        id: 14,
        type: "journal",
        year: "2020",
        title: "Revisiting Efficient Multi-Step Nonlinearity Compensation with Machine Learning: An Experimental Demonstration",
        authors: "Vinicius Oliari, Sebastiaan Goossens, Christian Häger, Gabriele Liga, Rick M. Bütler, Menno van den Hout, Sjoerd van der Heide, Henry D. Pfister, Chigo Okonkwo, and Alex Alvarado",
        source: "J. Lightw. Technol., vol. 38, no. 12, pp. 3114-3124",
        link: "https://research.chalmers.se/publication/517155"
    },
    {
        id: 15,
        type: "journal",
        year: "2020",
        title: "Learning Physical-Layer Communication with Quantized Feedback",
        authors: "Jinxiang Song, Bile Peng, Christian Häger, Henk Wymeersch, and Anant Sahai",
        source: "IEEE Trans. Commun., vol. 68, no. 1, pp. 645-653",
        link: "https://research.chalmers.se/publication/515229"
    },
    {
        id: 16,
        type: "journal",
        year: "2018",
        title: "Approaching Miscorrection-free Performance of Product Codes with Anchor Decoding",
        authors: "Christian Häger and Henry D. Pfister",
        source: "IEEE Trans. Commun., vol. 66, no. 7, pp. 2797-2808",
        link: "https://research.chalmers.se/publication/504281"
    },
    {
        id: 17,
        type: "journal",
        year: "2017",
        title: "Density Evolution for Deterministic Generalized Product Codes on the Binary Erasure Channel at High Rates",
        authors: "Christian Häger, Henry D. Pfister, Alexandre Graell i Amat, and Fredrik Brännström",
        source: "IEEE Trans. Inf. Theory, vol. 63, no. 7, pp. 4357-4378",
        link: "https://research.chalmers.se/publication/249582"
    },
    {
        id: 18,
        type: "journal",
        year: "2016",
        title: "On the Information Loss of the Max-Log Approximation in BICM Systems",
        authors: "Mikhail Ivanov, Christian Häger, Fredrik Brännström, Alexandre Graell i Amat, Alex Alvarado, and Erik Agrell",
        source: "IEEE Trans. Inf. Theory, vol. 62, no. 6, pp. 3011-3025",
        link: "https://research.chalmers.se/publication/237105"
    },
    {
        id: 19,
        type: "journal",
        year: "2015",
        title: "Terminated and Tailbiting Spatially Coupled Codes with Optimized Bit Mappings for Spectrally Efficient Fiber-Optical Systems",
        authors: "Christian Häger, Alexandre Graell i Amat, Fredrik Brännström, Alex Alvarado, and Erik Agrell",
        source: "J. Lightw. Technol., vol. 33, no. 7, pp. 1275-1285",
        link: "https://research.chalmers.se/publication/211703"
    },
    {
        id: 20,
        type: "journal",
        year: "2014",
        title: "Improving Soft FEC Performance for Higher-Order Modulations via Optimized Bit Channel Mappings",
        authors: "Christian Häger, Alexandre Graell i Amat, Fredrik Brännström, Alex Alvarado, and Erik Agrell",
        source: "Opt. Express, vol. 22, no. 12, pp. 14544-14558",
        link: "https://research.chalmers.se/publication/199123"
    },
    {
        id: 21,
        type: "journal",
        year: "2014",
        title: "A Low-Complexity Detector for Memoryless Polarization-Multiplexed Fiber-Optical Channels",
        authors: "Christian Häger, Lotfollah Beygi, Erik Agrell, Pontus Johannisson, Magnus Karlsson, and Alexandre Graell i Amat",
        source: "IEEE Commun. Lett., vol. 18, no. 2, pp. 368-371",
        link: "https://research.chalmers.se/publication/188885"
    },
    {
        id: 22,
        type: "journal",
        year: "2013",
        title: "Design of APSK Constellations for Coherent Optical Channels with Nonlinear Phase Noise",
        authors: "Christian Häger, Alexandre Graell i Amat, Alex Alvarado, and Erik Agrell",
        source: "IEEE Trans. Commun., vol. 61, no. 8, pp. 3362-3373",
        link: "https://research.chalmers.se/publication/178235"
    },
    {
        id: 23,
        type: "conference",
        year: "2024",
        title: "Real-Time Implementation of Machine-Learning DSP",
        authors: "Erik Börjeson, Christian Häger, and Per Larsson-Edefors",
        source: "Proc. Optical Fiber Communication Conf. (OFC), Invited Paper [to Be Presented], San Diego, CA",
        link: ""
    },
    {
        id: 24,
        type: "conference",
        year: "2024",
        title: "Learning to Extract Distributed Polarization Sensing Data from Noisy Jones Matrices",
        authors: "Mohammad Farsi, Christian Häger, Magnus Karlsson, and Erik Agrell",
        source: "Proc. Optical Fiber Communication Conf. (OFC) [to Be Presented], San Diego, CA",
        link: ""
    },
    {
        id: 25,
        type: "conference",
        year: "2024",
        title: "Semi-Supervised End-to-End Learning for Integrated Sensing and Communications",
        authors: "José Miguel Mateos-Ramos, Baptiste Chatelier, Christian Häger, Musa Furkan Keskin, Luc Le Magoarou, and Henk Wymeersch",
        source: "Proc. Int. Conf. Mach. Learning for Communication and Networking (ICMLCN) [to Be Presented], Stockholm, Sweden",
        link: "http://arxiv.org/abs/2310.09940"
    },
    {
        id: 26,
        type: "conference",
        year: "2023",
        title: "Physics-Informed Neural Networks for Studying Charge Dynamics in Air",
        authors: "O Hjortstam, Á Konrádsson, Y V Serdyuk, and C Häger",
        source: "Proc. IEEE Conf. Electrical Insulation and Dielectric Phenomena (CEIDP), East Rutherford, NJ",
        link: "https://research.chalmers.se/publication/538449"
    },
    {
        id: 27,
        type: "conference",
        year: "2023",
        title: "Model-Driven End-to-End Learning for Integrated Sensing and Communication",
        authors: "José Miguel Mateos-Ramos, Christian Häger, Musa Furkan Keskin, Luc Le Magoarou, and Henk Wymeersch",
        source: "Proc. IEEE Int. Conf. Communications (ICC), Rome, Italy",
        link: "https://research.chalmers.se/publication/537230"
    },
    {
        id: 28,
        type: "conference",
        year: "2023",
        title: "FPGA Implementation of Multi-Layer Machine Learning Equalizer with On-Chip Training",
        authors: "Keren Liu, Erik Börjeson, Christian Häger, and Per Larsson-Edefors",
        source: "Proc. Optical Fiber Communication Conf. (OFC), Los Angeles, CA",
        link: "http://arxiv.org/abs/2212.03515"
    },
    {
        id: 29,
        type: "conference",
        year: "2023",
        title: "Rateless Autoencoder Codes: Trading off Decoding Delay and Reliability",
        authors: "Vukan Ninkovic, Dejan Vukobratovic, Christian Häger, Henk Wymeersch, and Alexandre Graell I Amat",
        source: "Proc. IEEE Int. Conf. Communications (ICC), Rome, Italy",
        link: "http://arxiv.org/abs/2301.12231"
    },
    {
        id: 30,
        type: "conference",
        year: "2023",
        title: "Blind Frequency-Domain Equalization Using Vector-Quantized Variational Autoencoders",
        authors: "Jinxiang Song, Vincent Lauinger, Christian Häger, Jochen Schröder, Alexandre Graell I Amat, Laurent Schmalen, and Henk Wymeersch",
        source: "Proc. European Conf. Optical Communication (ECOC), Glasgow, UK",
        link: ""
    },
    {
        id: 31,
        type: "conference",
        year: "2022",
        title: "Improved Polarization Tracking in the Presence of PDL",
        authors: "Mohammad Farsi, Christian Häger, Magnus Karlsson, and Erik Agrell",
        source: "Proc. European Conf. Optical Communication (ECOC), Basel, Switzerland",
        link: "https://research.chalmers.se/publication/535214"
    },
    {
        id: 32,
        type: "conference",
        year: "2022",
        title: "Experimental Demonstration of Learned Pulse Shaping Filter for Superchannels",
        authors: "Zonglong He, Jinxiang Song, Christian Häger, Alexandre Graell i Amat, Henk Wymeersch, Peter A. Andrekson, Magnus Karlsson, and Jochen Schröder",
        source: "Proc. Optical Fiber Communication Conf. (OFC), Washington, D.C.",
        link: "https://research.chalmers.se/publication/537146"
    },
    {
        id: 33,
        type: "conference",
        year: "2022",
        title: "End-to-End Learning for Integrated Sensing and Communication",
        authors: "José Miguel Mateos-Ramos, Jinxiang Song, Yibo Wu, Christian Häger, Musa Furkan Keskin, Vijaya Yajnanarayana, and Henk Wymeersch",
        source: "Proc. IEEE Int. Conf. Communications (ICC), Seoul, South Korea",
        link: "https://research.chalmers.se/publication/532058"
    },
    {
        id: 34,
        type: "conference",
        year: "2022",
        title: "FPGA-based Optical Kerr Effect Emulator",
        authors: "Keren Liu, Erik Börjeson, Christian Häger, and Per Larsson-Edefors",
        source: "Proc. Advanced Photonics Congress (APC), Maastricht, the Netherlands",
        link: "https://research.chalmers.se/publication/534419"
    },
    {
        id: 35,
        type: "conference",
        year: "2022",
        title: "Learning Optimal PAM Levels for VCSEL-based Optical Interconnects",
        authors: "Muralikrishnan Srinivasan, Jinxiang Song, Christian Häger, Krzysztof Szczerba, Henk Wymeersch, and Jochen Schröder",
        source: "Proc. European Conf. Optical Communication (ECOC), Basel, Switzerland",
        link: "https://research.chalmers.se/publication/535224"
    },
    {
        id: 36,
        type: "conference",
        year: "2022",
        title: "Symbol-Based Over-the-Air Digital Predistortion Using Reinforcement Learning",
        authors: "Yibo Wu, Jinxiang Song, Christian Häger, Ulf Gustavsson, Alexandre Graell i Amat, and Henk Wymeersch",
        source: "Proc. IEEE Int. Conf. Communications (ICC), Seoul, South Korea",
        link: "https://research.chalmers.se/publication/532069"
    },
    {
        id: 37,
        type: "conference",
        year: "2021",
        title: "Learned Decimation for Neural Belief Propagation Decoders",
        authors: "Andreas Buchberger, Christian Häger, Henry D. Pfister, Laurent Schmalen, and Alexandre Graell i Amat",
        source: "Proc. IEEE Int. Conf. Acoustics, Speech and Signal Processing (ICASSP), Toronto, Canada",
        link: "https://research.chalmers.se/publication/526182"
    },
    {
        id: 38,
        type: "conference",
        year: "2021",
        title: "Symbol-Based Supervised Learning Predistortion for Compensating Transmitter Nonlinearity",
        authors: "Zonglong He, Jinxiang Song, Christian Häger, Kovendhan Vijayan, Peter Andrekson, Magnus Karlsson, Alexandre Graell i Amat, Henk Wymeersch, and Jochen Schröder",
        source: "Proc. European Conf. Optical Communication (ECOC), Bordeaux, France",
        link: "https://research.chalmers.se/publication/528424"
    },
    {
        id: 39,
        type: "conference",
        year: "2021",
        title: "Over-the-Fiber Digital Predistortion Using Reinforcement Learning",
        authors: "Jinxiang Song, Zonglong He, Christian Häger, Magnus Karlsson, Alexandre Graell i Amat, Henk Wymeersch, and Jochen Schröder",
        source: "Proc. European Conf. Optical Communication (ECOC), Bordeaux, France",
        link: "https://research.chalmers.se/publication/528407"
    },
    {
        id: 40,
        type: "conference",
        year: "2021",
        title: "End-to-End Autoencoder for Superchannel Transceivers with Hardware Impairment",
        authors: "Jinxiang Song, Christian Häger, Jochen Schröder, Alexandre Graell i Amat, and Henk Wymeersch",
        source: "Proc. Optical Fiber Communication Conf. (OFC), Virtual Conference",
        link: "https://research.chalmers.se/publication/531248"
    },
    {
        id: 41,
        type: "conference",
        year: "2020",
        title: "Pruning Neural Belief Propagation Decoders",
        authors: "Andreas Buchberger, Christian Häger, Henry D. Pfister, Laurent Schmalen, and Alexandre Graell Amat",
        source: "Proc. IEEE Int. Symp. Information Theory (ISIT), Los Angeles, CA",
        link: "https://research.chalmers.se/publication/519132"
    },
    {
        id: 42,
        type: "conference",
        year: "2020",
        title: "End-to-End Learning of Geometrical Shaping Maximizing Generalized Mutual Information",
        authors: "Kadir Gümüs, Alex Alvarado, Bin Chen, Christian Häger, and Erik Agrell",
        source: "Proc. Optical Fiber Communication Conf. (OFC), San Diego, CA",
        link: "https://research.chalmers.se/publication/517148"
    },
    {
        id: 43,
        type: "conference",
        year: "2020",
        title: "Model-Based Machine Learning for Joint Digital Backpropagation and PMD Compensation",
        authors: "Christian Häger, Henry D. Pfister, Rick M. Bütler, Gabriele Liga, and Alex Alvarado",
        source: "Proc. Optical Fiber Communication Conf. (OFC), San Diego, CA",
        link: "http://arxiv.org/abs/2001.09277"
    },
    {
        id: 44,
        type: "conference",
        year: "2020",
        title: "Decoding Reed-Muller Codes Using Redundant Code Constraints",
        authors: "Mengke Lian, Christian Häger, and Henry D. Pfister",
        source: "Proc. IEEE Int. Symp. Information Theory (ISIT), Los Angeles, CA",
        link: "https://research.chalmers.se/publication/517153"
    },
    {
        id: 45,
        type: "conference",
        year: "2020",
        title: "Benchmarking End-to-end Learning of MIMO Physical-Layer Communication",
        authors: "Jinxiang Song, Christian Häger, Jochen Schröder, Tim O'Shea, and Henk Wymeersch",
        source: "Proc. IEEE Glob. Communication Conf. (GLOBECOM), Taipei, Taiwan",
        link: "https://research.chalmers.se/publication/523204"
    },
    {
        id: 46,
        type: "conference",
        year: "2019",
        title: "Reinforcement Learning for Channel Coding: Learned Bit-Flipping Decoding",
        authors: "Fabrizio Carpi, Christian Häger, Marco Martalò, Riccardo Raheli, and Henry D. Pfister",
        source: "Proc. Annual Allerton Conference on Communication, Control, and Computing, Monticello, IL",
        link: "https://research.chalmers.se/publication/513360"
    },
    {
        id: 47,
        type: "conference",
        year: "2019",
        title: "Revisiting Multi-Step Nonlinearity Compensation with Machine Learning",
        authors: "Christian Häger, Henry D. Pfister, Rick M. Bütler, Gabriele Liga, and Alex Alvarado",
        source: "Proc. European Conf. Optical Communication (ECOC), Dublin, Ireland",
        link: "https://research.chalmers.se/publication/513361"
    },
    {
        id: 48,
        type: "conference",
        year: "2019",
        title: "Learned Belief-Propagation Decoding with Simple Scaling and SNR Adaptation",
        authors: "Mengke Lian, Fabrizio Carpi, Christian Häger, and Henry D. Pfister",
        source: "Proc. IEEE Int. Symp. Information Theory (ISIT), Paris, France",
        link: "https://research.chalmers.se/publication/513359"
    },
    {
        id: 49,
        type: "conference",
        year: "2018",
        title: "ASIC Implementation of Time-Domain Digital Backpropagation with Deep-Learned Chromatic Dispersion Filters",
        authors: "Christoffer Fougstedt, Christian Häger, Lars Svensson, Henry D. Pfister, and Per Larsson-Edefors",
        source: "Proc. European Conf. Optical Communication (ECOC), Rome, Italy",
        link: "https://research.chalmers.se/publication/505176"
    },
    {
        id: 50,
        type: "conference",
        year: "2018",
        title: "Wideband Time-Domain Digital Backpropagation via Subband Processing and Deep Learning",
        authors: "Christian Häger and Henry D. Pfister",
        source: "Proc. European Conf. Optical Communication (ECOC), Rome, Italy",
        link: "https://research.chalmers.se/publication/508107"
    },
    {
        id: 51,
        type: "conference",
        year: "2018",
        title: "Deep Learning of the Nonlinear Schrödinger Equation in Fiber-Optic Communications",
        authors: "Christian Häger and Henry D. Pfister",
        source: "Proc. IEEE Int. Symp. Information Theory (ISIT), Vail, CO",
        link: "https://research.chalmers.se/publication/507231"
    },
    {
        id: 52,
        type: "conference",
        year: "2018",
        title: "Nonlinear Interference Mitigation via Deep Neural Networks",
        authors: "Christian Häger and Henry D. Pfister",
        source: "Proc. Optical Fiber Communication Conf. (OFC), San Diego, CA",
        link: "https://research.chalmers.se/publication/254493"
    },
    {
        id: 53,
        type: "conference",
        year: "2018",
        title: "What Can Machine Learning Teach Us about Communications?",
        authors: "Mengke Lian, Christian Häger, and Henry D. Pfister",
        source: "Proc. IEEE Information Theory Workshop (ITW), Guangzhou, China",
        link: "https://research.chalmers.se/publication/508108"
    },
    {
        id: 54,
        type: "conference",
        year: "2018",
        title: "Decoding Reed-Muller Codes Using Minimum-Weight Parity Checks",
        authors: "Elia Santi, Christian Häger, and Henry D. Pfister",
        source: "Proc. IEEE Int. Symp. Information Theory (ISIT), Vail, CO",
        link: "https://research.chalmers.se/publication/507229"
    },
    {
        id: 55,
        type: "conference",
        year: "2018",
        title: "On Low-Complexity Decoding of Product Codes for High-Throughput Fiber-Optic Systems",
        authors: "Alireza Sheikh, Alexandre Graell i Amat, Gianluigi Liva, Christian Häger, and Henry D. Pfister",
        source: "Proc. Int. Symp. Turbo Codes and Iterative Information Processing (ISTC), Hong Kong",
        link: "https://research.chalmers.se/publication/505343"
    },
    {
        id: 56,
        type: "conference",
        year: "2018",
        title: "Achievable Information Rates for Nonlinear Fiber Communication via End-to-end Autoencoder Learning",
        authors: "Shen Li, Christian Häger, Nil Garcia, and Henk Wymeersch",
        source: "Proc. European Conf. Optical Communication (ECOC), Rome, Italy",
        link: "https://research.chalmers.se/publication/505874"
    },
    {
        id: 57,
        type: "conference",
        year: "2017",
        title: "Miscorrection-Free Decoding of Staircase Codes",
        authors: "Christian Häger and Henry D. Pfister",
        source: "Proc. European Conf. Optical Communication (ECOC), Gothenburg, Sweden",
        link: "https://research.chalmers.se/publication/507317"
    },
    {
        id: 58,
        type: "conference",
        year: "2016",
        title: "Deterministic and Ensemble-Based Spatially-Coupled Product Codes",
        authors: "Christian Häger, Henry D. Pfister, Alexandre Graell i Amat, and Fredrik Brännström",
        source: "Proc. IEEE Int. Symp. Information Theory (ISIT), Barcelona, Spain",
        link: "https://research.chalmers.se/publication/236657"
    },
    {
        id: 59,
        type: "conference",
        year: "2016",
        title: "Density Evolution for Deterministic Generalized Product Codes with Higher-Order Modulation",
        authors: "Christian Häger, Alexandre Graell i Amat, Henry D. Pfister, and Fredrik Brännström",
        source: "Proc. Int. Symp. Turbo Codes and Iterative Information Processing (ISTC), Brest, France",
        link: "https://research.chalmers.se/publication/238238"
    },
    {
        id: 60,
        type: "conference",
        year: "2016",
        title: "A Deterministic Construction and Density Evolution Analysis for Generalized Product Codes",
        authors: "Christian Häger, Henry D. Pfister, Alexandre Graell i Amat, Fredrik Brännström, and Erik Agrell",
        source: "Proc. Int. Zurich Seminar on Communications (IZS), Zurich, Switzerland",
        link: "https://research.chalmers.se/publication/235015"
    },
    {
        id: 61,
        type: "conference",
        year: "2016",
        title: "Density Evolution and Error Floor Analysis of Staircase and Braided Codes",
        authors: "Christian Häger, Henry D. Pfister, Alexandre Graell i Amat, and Fredrik Brännström",
        source: "Proc. Optical Fiber Communication Conf. (OFC), Anaheim, CA",
        link: "https://research.chalmers.se/publication/235014"
    },
    {
        id: 62,
        type: "conference",
        year: "2015",
        title: "Spatially-Coupled Codes for Optical Communications: State-of-the-Art and Open Problems",
        authors: "Alexandre Graell i Amat, Christian Häger, Fredrik Brännström, and Erik Agrell",
        source: "Proc. Optoelectronics and Communications Conf. (OECC), Shanghai, China",
        link: "https://research.chalmers.se/publication/217254"
    },
    {
        id: 63,
        type: "conference",
        year: "2015",
        title: "On Parameter Optimization for Staircase Codes",
        authors: "Christian Häger, Alexandre Graell i Amat, Henry D. Pfister, Alex Alvarado, Fredrik Brännström, and Erik Agrell",
        source: "Proc. Optical Fiber Communication Conf. (OFC), Los Angeles, CA",
        link: "https://research.chalmers.se/publication/211702"
    },
    {
        id: 64,
        type: "conference",
        year: "2014",
        title: "Comparison of Terminated and Tailbiting Spatially Coupled LDPC Codes With Optimized Bit Mapping for PM-64-QAM",
        authors: "Christian Häger, Alexandre Graell i Amat, Fredrik Brännström, Alex Alvarado, and Erik Agrell",
        source: "Proc. European Conf. Optical Communication (ECOC), Cannes, France",
        link: "https://research.chalmers.se/publication/199124"
    },
    {
        id: 65,
        type: "conference",
        year: "2014",
        title: "Optimized Bit Mappings for Spatially Coupled LDPC Codes over Parallel Binary Erasure Channels",
        authors: "Christian Häger, Alexandre Graell i Amat, Alex Alvarado, Fredrik Brännström, and Erik Agrell",
        source: "Proc. IEEE Int. Conf. Communications (ICC), Sydney, Australia",
        link: "https://research.chalmers.se/publication/196846"
    },
    {
        id: 66,
        type: "conference",
        year: "2012",
        title: "Constellation Optimization for Coherent Optical Channels Distorted by Nonlinear Phase Noise",
        authors: "Christian Häger, Alexandre Graell i Amat, Alex Alvarado, and Erik Agrell",
        source: "Proc. IEEE Glob. Communication Conf. (GLOBECOM), Anaheim, CA",
        link: "https://research.chalmers.se/publication/163620"
    },
    {
        id: 67,
        type: "conference",
        year: "2026",
        title: "PIDT: Physics-Informed Digital Twin for Optical Fiber Parameter Estimation",
        authors: "Zicong Jiang, Magnus Karlsson, Erik Agrell, Christian Häger",
        source: "Proc. Optical Fiber Communication Conf. (OFC), Los Angeles, CA",
        link: "https://arxiv.org/abs/2601.07436"
    }
];

// --- 5. NEWS & EVENTS ---
const newsData = [
    { 
        id: 1, 
        type: 'event', 
        year: '2026',
        date: '29 January, 2026', 
        title: 'Christian has been promoted to Associate Professor', 
        desc: 'Christian Häger has given his promotion lecture - "From Communication to Sensing: Machine Learning in Optical Fiber Systems", and has become an Associate Professor. Congratulations!',
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
        year: '2026',
        date: '30 January, 2026', 
        title: 'Open PhD Positions in Optical Communications and Fiber Sensing', 
        desc: 'The starting date for this position is Fall 2026. Check the following link for more details.',
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
        year: '2025',
        date: 'xxx xx, 20xx', 
        title: 'Seminar on xxx', 
        desc: 'xxx.',
        body: [
            'Write the full seminar description here.',
            'This text will be shown inside the news modal when the user clicks the news title.'
        ],
        link: '' 
    },
    { 
        id: 4, 
        type: 'event', 
        year: '2024',
        date: 'xxx xx, 20xx', 
        title: 'Received a Grant xxx', 
        desc: 'xxx.',
        body: [
            'Write the full grant announcement here.',
            'You can add one or more paragraphs depending on how much context you want to show in the modal.'
        ],
        link: '' 
    }
];

// --- 6. JOBS, INTERNSHIPS & THESIS PROJECTS ---
const thesisProjectsData = {
    available: [
        {
            id: "thesis-1",
            type: "Bachelor / Master Thesis",
            status: "available",
            year: "2026",
            title: "Physics-Informed Machine Learning for Optical Fiber Channel Modeling",
            term: "Flexible start in 2026",
            location: "Chalmers",
            description: "Optical fiber communication systems form the backbone of modern digital infrastructure, enabling global Internet connectivity with ultra-high bandwidth and low latency. An accurate fiber channel model plays a critical role in optimizing transmission performance, as it enables the development of advanced receivers, analysis of signal distortions, signal shaping and coding design, and reliable system performance prediction. The nonlinear Schrödinger equation (NLSE) serves as the fundamental mathematical model for describing optical signal propagation in fibers. However, the NLSE is a nonlinear partial differential equation that lacks an analytical solution except for a few specific cases. Traditional numerical methods such as the split-step Fourier method (SSFM), have been widely used to obtain approximate solutions. While these methods are physically accurate, they are computationally expensive and limited in scalability for real-time applications. Recent advances in physics-informed machine learning offer new opportunities for efficient and physically consistent optical fiber modeling. By embedding physical laws (such as the NLSE) directly into the learning process through a customized loss, models such as physics-informed neural networks (PINNs) or physics-informed neural operators (PINO) can learn to approximate fiber channel behavior and perform fast inference without requiring large datasets [1,2]. In this project, we will explore how recent physics-informed machine learning methods can be utilized for fiber channel modeling together and evaluate their performance.",
            references: [
                {
                    label: "Song, Yuchen, et al. Physics-informed neural operator-based full wavefield back-propagation for multi-span optical transmission. Optical Fiber Communication Conference. Optica Publishing Group, 2023.",
                    url: "https://opg.optica.org/abstract.cfm?uri=OFC-2023-M2F.5"
                },
                {
                    label: "Wang, Sifan, et al. Fundiff: Diffusion models over function spaces for physics-informed generative modeling. arXiv preprint arXiv:2506.07902 (2025).",
                    url: "https://arxiv.org/abs/2506.07902"
                },

            ],
            supervisors: [
                {
                    name: "Christian Häger",
                    role: "Associate Professor",
                    email: "christian.haeger@chalmers.se"
                },
                {
                    name: "Zicong Jiang",
                    role: "PhD Candidate",
                    email: "zicongj@chalmers.se"
                }
            ],
            contact: {
                name: "Zicong Jiang",
                email: "zicongj@chalmers.se",
                note: "Please send your CV, transcript, and a short summary of your interests."
            }
        },
        {
            id: "thesis-2",
            type: "Master Thesis",
            status: "available",
            year: "2027",
            title: "TBD",
            term: "Spring / Fall semester 2027",
            location: "DDCS Lab, Chalmers",
            description: "Explore how machine learning can be used for monitoring, diagnosis, and adaptation in optical communication systems. The scope can be tuned toward simulations, data analysis, or model development.",
            references: [
                {
                    label: "DDCS Lab Website",
                    url: "https://chaeger-lab.github.io/"
                },
                {
                    label: "Chalmers University of Technology",
                    url: "https://www.chalmers.se/en/"
                }
            ],
            supervisors: [
                {
                    name: "TBD",
                    role: "Associate Professor",
                    email: "christian.haeger@chalmers.se"
                }
            ],
            contact: {
                name: "TBD",
                email: "christian.haeger@chalmers.se",
                note: "Students with backgrounds in communication systems, machine learning, or applied mathematics are welcome."
            }
        }
    ],
    past: [
        {
            id: "past-1",
            type: "Master Thesis",
            year: "2025",
            title: "Channel Charting...",
            thesisLink: "https://odr.chalmers.se/",
            description: "A brief study of neural-network-based equalization strategies for short-reach optical links.",
            supervisors: [
                {
                    name: "Christian Häger",
                    role: "Associate Professor",
                    email: "christian.haeger@chalmers.se"
                }
            ],
            contact: {
                name: "DDCS Lab",
                email: "christian.haeger@chalmers.se",
                note: "Contact us if you want to discuss related follow-up topics."
            }
        },
        {
            id: "past-2",
            type: "Master Thesis",
            year: "2025",
            title: "Data-Driven Event Detection in Fiber Sensing",
            thesisLink: "https://odr.chalmers.se/",
            description: "A short thesis on machine-learning pipelines for event detection in distributed fiber sensing data.",
            supervisors: [
                {
                    name: "Zicong Jiang",
                    role: "PhD Candidate",
                    email: "zicongj@chalmers.se"
                }
            ],
            contact: {
                name: "DDCS Lab",
                email: "zicongj@chalmers.se",
                note: "We can share related background reading after an initial discussion."
            }
        }
    ]
};

// --- 7. TALKS ---
const talksData = {
    invited: [
        {
            id: "invited-1",
            year: "2022",
            title: "End-to-End Learning of Optical Communication Systems: A Beginner's Guide",
            date: "Sep. 2022",
            venue: "Invited Tutorial at the 2022 European Conf. Optical Comm. (ECOC), Basel, Switzerland",
            links: [
                {
                    label: "Slides",
                    url: "https://chaeger.github.io/assets/pdf/slides_Haeger2022ecoc.pdf"
                }
            ]
        },
        {
            id: "invited-2",
            year: "2021",
            title: "Physics-Based Machine Learning for Fiber-Optic Communication Systems",
            date: "Dec. 2021",
            venue: "Workshop on \"Neuromorphic High-Speed Communciations (NeuCoS)\", virtual",
            links: [
                {
                    label: "Slides",
                    url: "https://chaeger.github.io/assets/pdf/slides_Haeger2021realnet.pdf"
                }
            ]
        },
        {
            id: "invited-3",
            year: "2021",
            title: "Physics-Based Machine Learning for Fiber-Optic Communication Systems",
            date: "Oct. 2021",
            venue: "Workshop on \"Digital Signal Processing in Optical Fiber Communication\", virtual",
            links: [
                {
                    label: "Slides",
                    url: "https://chaeger.github.io/assets/pdf/slides_Haeger2021realnet.pdf"
                }
            ]
        },
        {
            id: "invited-4",
            year: "2021",
            title: "Physics-Based Deep Learning for Fiber-Optic Communication Systems",
            date: "Oct. 2021",
            venue: "Asia Communications and Photonics Conference (ACP), Shanghai, China",
            links: [
                {
                    label: "Slides",
                    url: "https://chaeger.github.io/assets/pdf/slides_Haeger2021acp.pdf"
                }
            ]
        },
        {
            id: "invited-5",
            year: "2021",
            title: "Reducing the Complexity of Digital Backpropagation with Machine Learning",
            date: "Oct. 2021",
            venue: "Workshop at the Asia Communications and Photonics Conference (ACP), Shanghai, China",
            links: [
                {
                    label: "Slides",
                    url: "https://chaeger.github.io/assets/pdf/slides_Haeger2021acpworkshop.pdf"
                }
            ]
        },
        {
            id: "invited-6",
            year: "2021",
            title: "Model-Based Machine Learning for Physical-Layer Communication over Optical Fiber",
            date: "Sep. 2021",
            venue: "Summer School \"Optical Networks and Neuromorphic Photonics for AI Acceleration\"",
            links: [
                {
                    label: "Slides",
                    url: "https://chaeger.github.io/assets/pdf/slides_Haeger2021hhi.pdf"
                }
            ]
        },
        {
            id: "invited-7",
            year: "2020",
            title: "Physics-Based Machine Learning for Fiber-Optic Communication Systems",
            date: "Oct. 2020",
            venue: "IEEE Photonics Society Workshop \"Machine Learning and Optical Systems\", Boston, USA",
            links: [
                {
                    label: "Video",
                    url: "http://www.bostonphotonics.org/workshops/mlos20/workshopseminar.aspx?seminar=328"
                },
                {
                    label: "Slides",
                    url: "https://chaeger.github.io/assets/pdf/talk_2020_boston.pdf"
                }
            ]
        },
        {
            id: "invited-8",
            year: "2020",
            title: "Model-Based Machine Learning for Joint Digital Backpropagation and PMD Compensation",
            date: "Mar. 2020",
            venue: "Optical Fiber Communication Conf. (OFC), San Diego, USA",
            links: [
                {
                    label: "Slides",
                    url: "https://chaeger.github.io/assets/pdf/slides_Haeger2020ofc.pdf"
                }
            ]
        },
        {
            id: "invited-9",
            year: "2019",
            title: "Model-Based Machine Learning for Fiber-Optic Communication Systems",
            date: "Dec. 2019",
            venue: "8th Van Der Meulen Seminar, Eindhoven, the Netherlands",
            links: [
                {
                    label: "Slides",
                    url: "https://chaeger.github.io/assets/pdf/talk_vanderMeulen2019.pdf"
                }
            ]
        },
        {
            id: "invited-10",
            year: "2019",
            title: "Revisiting Multi-Step Nonlinearity Compensation with Machine Learning",
            date: "Sep. 2019",
            venue: "European Conf. on Optical Communication (ECOC), Dublin, Ireland",
            links: [
                {
                    label: "Video",
                    url: "https://tv.theiet.org/?eventvideoid=13654"
                },
                {
                    label: "Slides",
                    url: "https://chaeger.github.io/assets/pdf/slides_Haeger2019ecoc.pdf"
                }
            ]
        },
        {
            id: "invited-11",
            year: "2018",
            title: "Digital Backpropagation with Deep-Learned Chromatic Dispersion Filters",
            date: "Aug. 2018",
            venue: "Seminar at University College London (UCL), London, UK",
            links: [
                {
                    label: "Slides",
                    url: "https://chaeger.github.io/assets/pdf/talk_2018_ucl.pdf"
                }
            ]
        },
        {
            id: "invited-12",
            year: "2018",
            title: "ASIC Implementation of Digital Backpropagation with Deep-Learned Chromatic Dispersion Filters",
            date: "May 2018",
            venue: "Seminar at Eindhoven University of Technology (TU/e), Eindhoven, the Netherlands",
            links: [
                {
                    label: "Slides",
                    url: "https://chaeger.github.io/assets/pdf/talk_2018_tue.pdf"
                }
            ]
        },
        {
            id: "invited-13",
            year: "2018",
            title: "Performance Analysis and Anchor Decoding of Staircase Codes",
            date: "May 2018",
            venue: "Seminar at Eindhoven University of Technology (TU/e), Eindhoven, the Netherlands",
            links: [
                {
                    label: "Slides",
                    url: "https://chaeger.github.io/assets/pdf/talk_2018_tue2.pdf"
                }
            ]
        },
        {
            id: "invited-14",
            year: "2017",
            title: "Coding and Deep Learning for High-Speed Fiber-Optic Communication Systems",
            date: "Dec. 2017",
            venue: "Seminar at the Technical University Munich (TUM) and the German Aerospace Center (DLR), Munich, Germany",
            links: [
                {
                    label: "Slides",
                    url: "https://chaeger.github.io/assets/pdf/talk_2017_tum.pdf"
                }
            ]
        },
        {
            id: "invited-15",
            year: "2017",
            title: "Deterministic and Ensemble-Based Spatially-Coupled Product Codes",
            date: "June 2017",
            venue: "Swedish Communication Technologies Workshop (Swe-CTW), Gothenburg, Sweden",
            links: [
                {
                    label: "Slides",
                    url: "https://chaeger.github.io/assets/pdf/talk_swectw2017.pdf"
                }
            ]
        },
        {
            id: "invited-16",
            year: "2013",
            title: "Optimized Bit Mappings for Spatially Coupled LDPC Codes over Parallel Binary Erasure Channels",
            date: "Nov. 2013",
            venue: "7th IEEE Workshop on Advanced Information Processing for Wireless Communication Systems, Aalborg",
            links: [
                {
                    label: "Slides",
                    url: "https://chaeger.github.io/assets/pdf/talk_scldpc.pdf"
                }
            ]
        },
        {
            id: "invited-17",
            year: "2013",
            title: "Design of APSK Constellations for Coherent Optical Channels with Nonlinear Phase Noise",
            date: "2013",
            venue: "Swedish Communication Technologies Workshop (Swe-CTW) 2013, Gothenburg, Sweden",
            links: [
                {
                    label: "Poster",
                    url: "https://chaeger.github.io/assets/pdf/poster_swe-ctw2013.pdf"
                }
            ]
        },
        {
            id: "invited-18",
            year: "2013",
            title: "Constellation Optimization for Coherent Optical Channels Distorted by Nonlinear Phase Noise",
            date: "Apr. 2013",
            venue: "University of Cambridge, Cambridge, UK",
            links: [
                {
                    label: "Slides",
                    url: "https://chaeger.github.io/assets/pdf/talk_apsk_cambridge.pdf"
                }
            ]
        },
        {
            id: "invited-19",
            year: "2012",
            title: "Bidrectional Multi-Hop Communication via Two Relays Using Nested Voronoi Codes",
            date: "May 2012",
            venue: "6th IEEE Workshop on Advanced Information Processing for Wireless Communication Systems, Copenhagen",
            links: [
                {
                    label: "Slides",
                    url: "https://chaeger.github.io/assets/pdf/talk_bidirectional.pdf"
                }
            ]
        }
    ],
    other: [
        {
            id: "other-1",
            year: "2012",
            title: "LP Decoding",
            date: "Oct. 2012",
            venue: "Seminar for the PhD course Bayesian Statistics",
            links: [
                {
                    label: "Slides",
                    url: "https://chaeger.github.io/assets/pdf/talk_lpdecoding.pdf"
                }
            ]
        },
        {
            id: "other-2",
            year: "2012",
            title: "The Main Principle Behind Error-Correction Techniques",
            date: "Sep. 2012",
            venue: "Microteaching Seminar",
            links: [
                {
                    label: "Slides",
                    url: "https://chaeger.github.io/assets/pdf/talk_microteaching.pdf"
                }
            ]
        },
        {
            id: "other-3",
            year: "2012",
            title: "Density Evolution and LDPC Convolutional Codes",
            date: "May 2012",
            venue: "Seminar for the PhD course Error Control Coding",
            links: [
                {
                    label: "Slides",
                    url: "https://chaeger.github.io/assets/pdf/talk_densityevolution.pdf"
                }
            ]
        }
    ]
};

// --- 8. GALLERY ---
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
