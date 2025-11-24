    function validateForm() {
      const username = document.getElementById("name").value.trim();
      const password = document.getElementById("pwd").value;
      const emailEl = document.getElementById("email");
      const email = emailEl ? emailEl.value.trim() : "";   
        if (username === "" || password === ""|| (email===""&&emailEl)) {
            alert("Please fill in all fields.");
            return false; // Prevent form submission
          }
          if (username.length < 4) {
            alert("Username must be at least 4 characters long.");
            return false; // stop form submit
          }
        
      
        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            return false; // stop form submit
        }
      
       
        
      // if everything is fine, allow form to submit
      return true;
    }

    /* Simple syllabus data and search + UI glue */
const SYLLABI = {
  "Maths": [
  "Unit-I: Probability Theory","Sample space, Axioms of Probability, Conditional Probability, Bayes' Theorem","Random Variables (Discrete/Continuous), Binomial, Poisson, Exponential distributions","Joint probability distribution", "Unit-II: Statistics and Hypothesis Testing","Measures of Central Tendency and Dispersion, Skewness, Kurtosis","Correlation and Regression (Pearson, Rank, Multiple Regression)","Testing of Hypothesis: Z-test, t-test (small/large samples), Chi-square test (goodness of fit/independence)", "Unit-III: Stochastic Processes","Classification of Stochastic Processes","Markov Chain: Transition Matrix, State transition diagram, Classification of states, Steady state probabilities","Poisson Process, Birth and Death Process, Applications"
  ],
  "COA": [
  "Unit-I: Basic Structure of Computers","Functional Units, Bus Structures, Basic Operational Concepts","Performance Metrics (Processor Clock, Performance Equation)","Instruction Set Architecture: Memory Locations, Addressing Modes, Instruction Sequencing, Subroutines", "Unit-II: Arithmetic and Processing Unit","Signed Number Arithmetic (Addition, Subtraction), Fast Adders","Multiplication and Division (Unsigned and Signed)","Floating-Point Numbers and Operations","Basic Processing Unit: Fundamental Concepts, Hardwired Control, Microprogrammed Control", "Unit-III: Memory and I/O Organization","Memory System: Semiconductor RAM, ROM, Speed, Size, Cost","Cache Memories: Mapping Functions, Replacement Policies (FIFO, LRU), Performance","Virtual Memories","I/O Organization: Accessing Devices, Interrupts, Exceptions, Direct Memory Access (DMA), Buses (PCI, USB)"
  ],
  "Java": [
    "Unit-I: Introduction to OOP and Classes","Comparison of Procedural vs Object Oriented Programming (OOP), Features of OOP","Defining Classes, Creating Objects, Access Specifiers (public, private, protected)","Constructors and Destructors, 'this' pointer, Static Members, Inline Functions", "Unit-II: Inheritance and Polymorphism","Types of Inheritance (Single, Multilevel, Multiple, etc.), Virtual Base Class, Abstract Classes","Polymorphism: Compile-time (Function/Operator Overloading)","Run-time (Virtual Functions, Pure Virtual Functions)","Exception Handling: Try, Catch, Throw, Rethrowing", "Unit-III: Templates, Files and STL","Templates: Function and Class Templates","Files and Streams: Stream Classes, Formatted/Unformatted I/O Operations, File Pointers, Random Access Files","Standard Template Library (STL): Containers (Vector, List, Deque), Iterators, Algorithms"
  ],
  "FEWD": [
   "Unit-I: HTML Fundamentals and CSS","Basics of HTML, HTML5 Semantic Elements, Forms and Input elements","Introduction to CSS, Selectors, CSS Box Model, Display and Position properties","Responsive Web Design principles using Media Queries", "Unit-II: Advanced CSS and Introduction to JavaScript","Advanced CSS Layouts: Flexbox and Grid","CSS Animations and Transitions","Introduction to JavaScript: Data Types, Operators, Control Flow, Functions, Arrays, Objects","DOM Manipulation", "Unit-III: Client-side Scripting and Project","Event Handling and Form Validation","Working with APIs (Fetch, XMLHttpRequest basics)","Introduction to version control (Git basics)","Project: Development of a responsive static website"
  ],
  "DSA": [
   "Unit-I: Stacks and Queues","Introduction to Data Structures and Abstract Data Types (ADT)","Stack implementation (Array, Applications: Expression Evaluation, Tower of Hanoi)","Queue implementation (Array, Types: Circular Queue, Priority Queue, Deque)", "Unit-II: Linked Lists and Trees","Operations and types of Linked Lists (Singly, Doubly, Circular), Polynomial Manipulation","Binary Trees, Binary Search Trees (BST)","AVL Trees (Insertion and Deletion), B-Trees, Heaps (Max/Min Heap), Heap Sort", "Unit-III: Searching, Sorting and Graphs","Searching: Linear Search, Binary Search","Sorting Algorithms: Merge Sort, Quick Sort, Radix Sort (along with Bubble, Insertion, Selection)","Graphs: Representation (Adjacency Matrix/List), Traversal (BFS, DFS)","Minimum Spanning Tree (MST): Kruskal's, Prim's Algorithm","Shortest Path: Dijkstra's Algorithm","Hashing: Hash Functions, Collision Resolution Techniques"
  ],
  "R LAB": [
   "Unit-I (Implied): R Basics and Data Structures","Install R and R Studio, Basics of R (Data types, Control Structures)","Data Structures in R: Vectors, Lists, Matrices, Data Frames, Factors", "Unit-II (Implied): Data Handling and EDA","Data Import and Export (CSV, Text, Excel)","Data Manipulation using the dplyr package (Filter, Mutate, Summarize)","Handling Missing Values, Data Transformation, Data Cleaning","Exploratory Data Analysis (EDA): Descriptive Statistics, Summary Tables", "Unit-III (Implied): Visualization and Statistical Analysis","Data Visualization: Basic plots, Advanced use of the ggplot2 package","Web Scraping and Data Extraction using R packages","Simple Statistical Analysis: t-tests, ANOVA basics","Introduction to Simple Linear Regression model building"
  ],
  "IDT": [
   "Unit-I: Projection of Points and Lines","Review of orthographic projection, Projection of points in all four quadrants","Projection of straight lines (First Angle Projection): parallel to one plane/perpendicular to the other, inclined to one plane","True length and inclinations of lines", "Unit-II: Projection of Planes and Solids","Projection of Planes (First Angle Projection): perpendicular to one/both planes, inclined to both planes","Projection of Solids (First Angle Projection): solids of revolution (cone, cylinder) and polyhedra (prism, pyramid) in simple and inclined positions", "Unit-III: Sectioning of Solids and Development of Surfaces","Sectioning of Solids (First Angle Projection): True shape of section, section plane orientations","Development of surfaces of prisms, pyramids, cylinders, and cones","Introduction to Isometric Projections (Isometric scale, Isometric view of simple solids)"
  ],
  "DPS": [
    "Unit-I: Listening and Speaking Skills","Importance of effective communication, Active Listening, barriers to effective listening","Persuasive speaking, Speech preparation, Public speaking strategies","Group Discussion skills, Formal presentations, Impromptu speaking","Introduction to phonetic sounds (Vowels, Consonants), Role of effective Body Language", "Unit-II: Reading Skills and Vocabulary","Reading for comprehension, Skimming, Scanning, Inferring meaning from context","Techniques for speed reading, Extensive and intensive reading strategies","Developing Vocabulary (Prefixes, Suffixes, Root Words)","Using a dictionary and a thesaurus effectively, Critical reading and analysis", "Unit-III: Writing Skills and Grammar","Principles of clear and coherent writing, Formal and Informal writing styles","Technical Writing (Email etiquette, Memo, Letter writing, Report writing - structure and content)","Grammar: Subject-Verb agreement, Tenses, Articles, Prepositions, Sentence structure, Active/Passive Voice, Punctuations, Essay writing, Précis writing"
  ],
  "EOIC": [
    "Unit-I: Professional Ethics","Definition and Scope of Engineering Ethics, Moral autonomy, Consensus and Controversy","Models of Professional roles, Theories about right action (Utility, Duty, Rights, Virtue)","Responsibility for safety and risk, Assessment of safety and risk, Case studies (e.g., Bhopal, Chernobyl), Codes of ethics", "Unit-II: Intellectual Property Rights (IPR)","Introduction to IPR, Need for protection of intellectual properties","Types of IP: Patents (criteria, procedure, rights)","Copyrights (scope, rights, limitations)","Trademarks (types, registration, infringement), Trade Secrets (protection, advantages)", "Unit-III: Ethical Issues in Technology and Global Context","Ethical issues in Computer Technology (Privacy, Cybercrime, Hacking, Data Security)","Ethics in research and experimentation, Multinational Corporations (MNCs) and environmental ethics","Global issues (weapons development, computer crime), Engineer as expert witness","Whistle-blowing"
  ]
};

function renderSyllabus(subject){
  const box = document.getElementById('syllabusBox');
  if(!subject){
    box.classList.remove('show');
    box.textContent = 'Select a subject to view its syllabus...';
    return;
  }
  const list = SYLLABI[subject] || null;
  if(!list){
    box.innerHTML = `<strong>${escapeHtml(subject)}</strong><p>No syllabus found.</p>`;
    box.classList.add('show');
    return;
  }
  const html = `<h3>${escapeHtml(subject)}</h3><ul>` +
    list.map(item => `<li>${escapeHtml(item)}</li>`).join('') +
    `</ul>`;
  box.innerHTML = html;
  box.classList.add('show');
}

function displaySyllabus(){
  const sel = document.getElementById('subjectSelect');
  const subject = sel.value.trim();
  renderSyllabus(subject);
}

/* search handling: looks for exact key or first matching subject */
function handleSearch(e){
  e.preventDefault();
  const q = document.getElementById('searchInput').value.trim();
  if(!q) return false;
  // case-insensitive match
  const key = Object.keys(SYLLABI).find(k => k.toLowerCase() === q.toLowerCase())
    || Object.keys(SYLLABI).find(k => k.toLowerCase().includes(q.toLowerCase()));
  if(key){
    // set select and show
    const sel = document.getElementById('subjectSelect');
    if(sel) sel.value = key;
    renderSyllabus(key);
  } else {
    const box = document.getElementById('syllabusBox');
    box.innerHTML = `<strong>No subject matched:</strong> "${escapeHtml(q)}"`;
    box.classList.add('show');
  }
  return false;
}

// initialize (if a selection already present)
document.addEventListener('DOMContentLoaded', () => {
  const sel = document.getElementById('subjectSelect');
  if(sel && sel.value) displaySyllabus();
});

function escapeHtml(s){ return String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }


  const teamMembers = [
        {
          name: "Gagan Rai",
          position: "Tecnical Head",
          bio: "Responsible for overseeing the technical aspects of project.",
          img: "Gagan_Rai.jpg",
          socials: [
            { icon: "fab fa-linkedin", url: "#" },
            { icon: "fab fa-twitter", url: "#" },
            { icon: "fas fa-envelope", url: "#" }
          ]
        },
        {
          name: "Gagan Pai",
          position: "Project Manager",
          bio: "Responsible for planning and collecting resource from university.",
          img: "Gagan_Pai.jpg",
          socials: [
            { icon: "fab fa-linkedin", url: "#" },
            { icon: "fab fa-twitter", url: "#" },
            { icon: "fas fa-envelope", url: "#" }
          ]
        },
        {
          name: "Gagan Poojari",
          position: "Teacnical Lead",
          bio: "Responsible for helping and  developing solutions for the website.",
          img: "Gagan.jpg",
          socials: [
            { icon: "fab fa-linkedin", url: "#" },
            { icon: "fab fa-twitter", url: "#" },
            { icon: "fas fa-envelope", url: "#" }
          ]
        },
        {
          name: "Dhanush Shetty",
          position: "Resource Manager",
          bio: "Responsible for formating and restructing the collected resource.",
          img: "Dhanush.jpg",
          socials: [
            { icon: "fab fa-linkedin", url: "#" },
            { icon: "fab fa-twitter", url: "#" },
            { icon: "fas fa-envelope", url: "#" }
          ]
        },
      ];

      let teamIndex = 0;
      const teamCarousel = document.querySelector('.team-carousel');
      if (teamCarousel) {
        const carouselInner = document.createElement('div');
        carouselInner.className = 'custom-carousel-inner';
        teamCarousel.innerHTML = '';
        teamCarousel.appendChild(carouselInner);

        function renderTeamMember(idx) {
          const member = teamMembers[idx];
          carouselInner.innerHTML = `
            <div class="team-card animate__animated animate__fadeIn">
              <div class="team-img">
                <img src="${member.img}" alt="${member.name}" class="img-fluid">
              </div>
              <div class="team-info">
                <h4>${member.name}</h4>
                <p class="position">${member.position}</p>
                <p class="bio">${member.bio}</p>
                <div class="social-links">
                  ${member.socials.map(s => `<a href="${s.url}"><i class="${s.icon}"></i></a>`).join('')}
                </div>
              </div>
            </div>
            <button class="carousel-arrow left" aria-label="Previous">&#10094;</button>
            <button class="carousel-arrow right" aria-label="Next">&#10095;</button>
          `;
          carouselInner.querySelector('.carousel-arrow.left').onclick = () => {
            teamIndex = (teamIndex - 1 + teamMembers.length) % teamMembers.length;
            renderTeamMember(teamIndex);
          };
          carouselInner.querySelector('.carousel-arrow.right').onclick = () => {
            teamIndex = (teamIndex + 1) % teamMembers.length;
            renderTeamMember(teamIndex);
          };
        }
        renderTeamMember(teamIndex);

        // Auto-slide every 4 seconds
        setInterval(() => {
          teamIndex = (teamIndex + 1) % teamMembers.length;
          renderTeamMember(teamIndex);
        }, 4000);
      }


