/**
 * Syllora EdTech Platform - Interactive Engine
 * Tagline: "From Syllabus to Success"
 */

// --- DATA DEFINITIONS ---

const STREAM_DATA = {
  engineering: {
    name: "Engineering (B.Tech / B.E.)",
    subtext: "Semester 2 & 4 Core Modules",
    completion: 68,
    examCountdown: 28, // days
    subjects: ["Engg Mathematics II", "Data Structures (DSA)", "Digital Electronics", "Applied Physics"],
    tasks: [
      { id: "e1", text: "Complete Module 3: Double & Triple Integrals (Calculus)", subject: "Engg Mathematics II", duration: "2.5h", priority: "High", done: true },
      { id: "e2", text: "Implement AVL Tree Rotations & solve 4 LeetCode PYQs", subject: "Data Structures (DSA)", duration: "2.0h", priority: "High", done: true },
      { id: "e3", text: "Revise K-Maps & Combinational Logic Gates (SPPU 2024 PYQ)", subject: "Digital Electronics", duration: "1.5h", priority: "Medium", done: false },
      { id: "e4", text: "Practice Mumbai Univ 2023 Dec Paper: Maxwell's Equations", subject: "Applied Physics", duration: "1.0h", priority: "Review", done: false }
    ]
  },
  junior_college: {
    name: "Junior College (FYJC / SYJC Science)",
    subtext: "HSC State Board / CBSE 12th Prep",
    completion: 74,
    examCountdown: 35,
    subjects: ["Physics (Class 12)", "Chemistry Part 1", "Mathematics & Stats", "Computer Science"],
    tasks: [
      { id: "j1", text: "Rotational Dynamics: Moment of Inertia derivations & numericals", subject: "Physics (Class 12)", duration: "2.0h", priority: "High", done: true },
      { id: "j2", text: "Thermodynamics & Carnot Engine efficiency formulas review", subject: "Physics (Class 12)", duration: "1.5h", priority: "High", done: true },
      { id: "j3", text: "Chemical Kinetics: Integrated rate law derivation for 1st order", subject: "Chemistry Part 1", duration: "1.0h", priority: "Medium", done: false },
      { id: "j4", text: "Solve Maharashtra State Board 2024 March PYQ Section C", subject: "Mathematics & Stats", duration: "1.5h", priority: "Review", done: false }
    ]
  },
  commerce: {
    name: "Commerce (FYJC / B.Com / BBA)",
    subtext: "Accounts & Business Economics Specialization",
    completion: 62,
    examCountdown: 24,
    subjects: ["Financial Accounting", "Business Economics", "Corporate Law", "Cost Accounting"],
    tasks: [
      { id: "c1", text: "Partnership Accounts: Admission & Retirement goodwill adjustments", subject: "Financial Accounting", duration: "2.0h", priority: "High", done: true },
      { id: "c2", text: "Analyze Law of Diminishing Marginal Utility & Indifference Curves", subject: "Business Economics", duration: "1.5h", priority: "High", done: false },
      { id: "c3", text: "Solve 3-year university balance sheet reconciliation problems", subject: "Financial Accounting", duration: "2.0h", priority: "Medium", done: false },
      { id: "c4", text: "Memorize Companies Act 2013 Key Provisions for Board Meetings", subject: "Corporate Law", duration: "1.0h", priority: "Review", done: false }
    ]
  },
  science: {
    name: "Science (B.Sc / Pure Science)",
    subtext: "University Degree Science Syllabi",
    completion: 81,
    examCountdown: 19,
    subjects: ["Organic Chemistry II", "Calculus & Linear Algebra", "Quantum Mechanics", "Cell Biology"],
    tasks: [
      { id: "s1", text: "Reaction mechanisms: Electrophilic Aromatic Substitution (EAS)", subject: "Organic Chemistry II", duration: "2.0h", priority: "High", done: true },
      { id: "s2", text: "Matrix Diagonalization & Eigenvalues calculation drill", subject: "Calculus & Linear Algebra", duration: "1.5h", priority: "High", done: true },
      { id: "s3", text: "Solve 2024 PYQ on Wave-Particle Duality & De Broglie wavelength", subject: "Quantum Mechanics", duration: "1.5h", priority: "Review", done: true },
      { id: "s4", text: "Recombinant DNA technology steps & gel electrophoresis review", subject: "Cell Biology", duration: "1.0h", priority: "Medium", done: false }
    ]
  }
};

const PYQ_DATABASE = [
  {
    id: 1,
    title: "Engineering Mathematics II (Calculus & ODE)",
    university: "Mumbai University (MU)",
    stream: "engineering",
    year: "May 2024 / Dec 2023",
    code: "FEC201",
    questions: 32,
    downloads: "4.8k",
    verified: true,
    difficulty: "Medium-Hard",
    sampleQ: "Evaluate ∫∫ (x² + y²) dx dy over the region bounded by y = x² and y = 4."
  },
  {
    id: 2,
    title: "Data Structures & Algorithms (DSA)",
    university: "Pune University (SPPU)",
    stream: "engineering",
    year: "Dec 2024 End-Sem",
    code: "CS302",
    questions: 28,
    downloads: "6.2k",
    verified: true,
    difficulty: "Medium",
    sampleQ: "Construct an AVL Tree for given elements: [15, 20, 24, 10, 13, 7, 30, 36, 25]. Show all rotations."
  },
  {
    id: 3,
    title: "Physics - Class 12 / SYJC Board Exam",
    university: "Maharashtra State Board (HSC)",
    stream: "junior_college",
    year: "March 2024 Official",
    code: "HSC-PHY-54",
    questions: 34,
    downloads: "9.1k",
    verified: true,
    difficulty: "Standard",
    sampleQ: "Derive an expression for kinetic energy of a rotating body having moment of inertia I and angular velocity ω."
  },
  {
    id: 4,
    title: "Chemistry - Class 12 / SYJC Board Exam",
    university: "Maharashtra State Board (HSC)",
    stream: "junior_college",
    year: "March 2024 Official",
    code: "HSC-CHEM-55",
    questions: 31,
    downloads: "8.4k",
    verified: true,
    difficulty: "Standard",
    sampleQ: "Derive the integrated rate law expression for first-order reaction. State its half-life formula."
  },
  {
    id: 5,
    title: "Financial Accounting & Auditing",
    university: "Delhi University (DU)",
    stream: "commerce",
    year: "June 2024 B.Com",
    code: "BCOM-101",
    questions: 25,
    downloads: "3.7k",
    verified: true,
    difficulty: "Medium",
    sampleQ: "Explain the Accounting Standard (AS) 10 regarding Property, Plant and Equipment valuation."
  },
  {
    id: 6,
    title: "Business Economics & Market Structures",
    university: "Mumbai University (MU)",
    stream: "commerce",
    year: "April 2024 FYJC / B.Com",
    code: "ECO-202",
    questions: 26,
    downloads: "4.1k",
    verified: true,
    difficulty: "Easy-Medium",
    sampleQ: "Differentiate between Perfect Competition and Monopolistic Competition with suitable curves."
  },
  {
    id: 7,
    title: "Organic Chemistry: Reaction Mechanisms",
    university: "Anna University / B.Sc",
    stream: "science",
    year: "Nov 2024 Semester 3",
    code: "BSC-CH301",
    questions: 30,
    downloads: "2.9k",
    verified: true,
    difficulty: "Hard",
    sampleQ: "Explain the mechanism of Friedel-Crafts Acylation along with limitation and carbocation rearrangement."
  },
  {
    id: 8,
    title: "Digital Logic & Computer Organization",
    university: "VTU Belagavi",
    stream: "engineering",
    year: "Jan 2025 Regular",
    code: "21CS33",
    questions: 30,
    downloads: "5.3k",
    verified: true,
    difficulty: "Medium",
    sampleQ: "Design a 4-bit Synchronous Up-Counter using J-K Flip Flops with timing excitation diagram."
  }
];

const DOUBT_PRESETS = {
  "fourier": {
    q: "Explain Fourier Series & Dirichlet Conditions for University Exams",
    a: `### 📌 Core Concept
A **Fourier Series** decomposes any periodic function $f(x)$ with period $2L$ into an infinite sum of simple sine and cosine harmonics:

$$f(x) = \\frac{a_0}{2} + \\sum_{n=1}^{\\infty} \\left[ a_n \\cos\\left(\\frac{n\\pi x}{L}\\right) + b_n \\sin\\left(\\frac{n\\pi x}{L}\\right) \\right]$$

### 🔑 Euler's Formulas for Coefficients:
* $a_0 = \\frac{1}{L} \\int_{-L}^{L} f(x) dx$
* $a_n = \\frac{1}{L} \\int_{-L}^{L} f(x) \\cos\\left(\\frac{n\\pi x}{L}\\right) dx$
* $b_n = \\frac{1}{L} \\int_{-L}^{L} f(x) \\sin\\left(\\frac{n\\pi x}{L}\\right) dx$

### 🎯 Dirichlet Conditions (Must memorize for 5-Mark Questions):
1. $f(x)$ is single-valued and periodic.
2. $f(x)$ is bounded and has finite maxima and minima within one period.
3. $f(x)$ has only a finite number of finite discontinuities in one period.

💡 **Exam Tip**: If $f(x)$ is an **even function** ($f(-x) = f(x)$), then $b_n = 0$! Only compute $a_0$ and $a_n$ to save 15 minutes in your exam paper.`
  },
  "rotational": {
    q: "Derive expression for Rotational Kinetic Energy (FYJC/SYJC Physics)",
    a: `### 📌 Derivation: Rotational Kinetic Energy ($E_r$)
Consider a rigid body rotating with constant angular velocity $\\omega$ about a given axis.

Let the body consist of $n$ particles of masses $m_1, m_2, \\dots, m_n$ situated at perpendicular distances $r_1, r_2, \\dots, r_n$ from the axis.

### 📝 Step-by-Step Derivation:
1. Linear velocity of $i^{\\text{th}}$ particle:
   $$v_i = r_i \\omega$$
2. Kinetic energy of $i^{\\text{th}}$ particle:
   $$K_i = \\frac{1}{2} m_i v_i^2 = \\frac{1}{2} m_i (r_i \\omega)^2 = \\frac{1}{2} m_i r_i^2 \\omega^2$$
3. Total Kinetic Energy of the rotating body is the algebraic sum of kinetic energies of all individual particles:
   $$E_r = \\sum_{i=1}^n \\frac{1}{2} m_i r_i^2 \\omega^2 = \\frac{1}{2} \\left( \\sum_{i=1}^n m_i r_i^2 \\right) \\omega^2$$
4. Since Moment of Inertia $I = \\sum_{i=1}^n m_i r_i^2$:
   $$\\mathbf{E_r = \\frac{1}{2} I \\omega^2}$$

💡 **State Board Question Insight**: Frequently asked in 3-mark section! Be sure to state the analogy between linear mass ($m$) and rotational inertia ($I$), and linear velocity ($v$) and angular velocity ($\omega$).`
  },
  "leverage": {
    q: "Explain Operating Leverage vs Financial Leverage with formulas (Commerce)",
    a: `### 📌 Concept Overview
In Financial Management, **Leverage** reflects the employment of assets or funds for which the firm pays a fixed cost or fixed return.

### 1. Operating Leverage (DOL)
Reflects the presence of fixed operating costs in total operations.
$$\\text{Degree of Operating Leverage (DOL)} = \\frac{\\text{Contribution}}{\\text{EBIT}} = \\frac{\\text{Sales} - \\text{Variable Cost}}{\\text{Sales} - \\text{Variable Cost} - \\text{Fixed Cost}}$$

### 2. Financial Leverage (DFL)
Reflects the use of fixed financial charges like debt interest.
$$\\text{Degree of Financial Leverage (DFL)} = \\frac{\\text{EBIT}}{\\text{EBT}} = \\frac{\\text{Earnings Before Interest & Tax}}{\\text{EBIT} - \\text{Interest} - [\\text{Pref. Dividend} / (1-t)]}$$

### 3. Combined Leverage (DCL)
$$\\text{Combined Leverage} = \\text{DOL} \\times \\text{DFL} = \\frac{\\text{Contribution}}{\\text{EBT}}$$

💡 **Exam Tip**: High Operating Leverage + High Financial Leverage creates extreme risk. Always draw the Income Statement breakdown ladder (Sales → Contribution → EBIT → EBT → EAT) for maximum marks!`
  },
  "pcr": {
    q: "Explain PCR (Polymerase Chain Reaction) steps & importance (Science/Bio)",
    a: `### 📌 What is PCR?
Invented by Kary Mullis in 1983, PCR is an *in vitro* molecular technique used to amplify a single copy or few copies of a specific DNA segment into millions of copies.

### 🧬 Three Core Cyclic Steps (94°C → 55°C → 72°C):
1. **Denaturation (~94°C - 96°C)**:
   - High temperature breaks hydrogen bonds between complementary base pairs, separating double-stranded DNA (dsDNA) into two single strands.
2. **Annealing (~50°C - 65°C)**:
   - Synthetic oligonucleotide primers bind (anneal) to their complementary sequences on 3' end of template single strands.
3. **Extension / Polymerization (~72°C)**:
   - Thermostable **Taq DNA Polymerase** (isolated from *Thermus aquaticus*) synthesizes new DNA strands by adding free dNTPs in 5' to 3' direction.

### 📊 Amplification Formula:
Number of DNA molecules after $n$ cycles = $2^n$ (After 30 cycles $\\approx 10^9$ copies).

💡 **University Question Tip**: Always mention why regular DNA polymerase is NOT used (it denatures at 95°C) and highlight *Thermus aquaticus*!`
  }
};

// --- APP STATE ---
let currentStreamKey = "engineering";
let currentPlanData = JSON.parse(JSON.stringify(STREAM_DATA.engineering));
let isAnnualBilling = true;

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initPlanner();
  initDoubtSolver();
  initPYQLibrary();
  initPricing();
  initCounters();
  initModals();
  initMobileMenu();
  initSyllabusDropzone();
  initSmoothScroll();
});

// --- THEME MANAGEMENT ---
function initTheme() {
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const storedTheme = localStorage.getItem("syllora-theme") || "dark";
  
  if (storedTheme === "light") {
    document.documentElement.classList.add("light-mode");
    updateThemeIcon(true);
    updateLogoForTheme(true);
  } else {
    document.documentElement.classList.remove("light-mode");
    updateThemeIcon(false);
    updateLogoForTheme(false);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const isLight = document.documentElement.classList.toggle("light-mode");
      localStorage.setItem("syllora-theme", isLight ? "light" : "dark");
      updateThemeIcon(isLight);
      updateLogoForTheme(isLight);
      showToast(`Switched to ${isLight ? "Light Mode" : "Dark Navy Mode"}`, "info");
    });
  }
}

function updateThemeIcon(isLight) {
  const icon = document.getElementById("theme-toggle-icon");
  if (!icon) return;
  if (isLight) {
    // Show Moon icon
    icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />`;
  } else {
    // Show Sun icon
    icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />`;
  }
}

function updateLogoForTheme(isLight) {
  const navLogos = document.querySelectorAll(".brand-logo-img");
  navLogos.forEach(logo => {
    if (isLight) {
      logo.src = "assets/syllora-navbar-logo.png";
    } else {
      logo.src = "assets/syllora-navbar-logo-dark.png";
    }
  });
}

// --- INTERACTIVE AI STUDY PLANNER ---
function initPlanner() {
  const streamSelect = document.getElementById("stream-selector");
  if (streamSelect) {
    streamSelect.addEventListener("change", (e) => {
      switchStream(e.target.value);
    });
  }

  // Quick stream pills if present
  document.querySelectorAll(".stream-pill-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".stream-pill-btn").forEach(b => b.classList.remove("active", "border-cyan-400", "bg-cyan-500/20", "text-cyan-400"));
      btn.classList.add("active", "border-cyan-400", "bg-cyan-500/20", "text-cyan-400");
      const streamKey = btn.dataset.stream;
      if (streamSelect) streamSelect.value = streamKey;
      switchStream(streamKey);
    });
  });

  // Task generation button
  const addTaskBtn = document.getElementById("add-custom-task-btn");
  if (addTaskBtn) {
    addTaskBtn.addEventListener("click", openAddTaskPrompt);
  }

  // Handle custom task modal submission
  const customTaskForm = document.getElementById("add-task-form");
  if (customTaskForm) {
    customTaskForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("new-task-name-input");
      const subjectSelect = document.getElementById("new-task-subject-select");
      const prioritySelect = document.getElementById("new-task-priority-select");
      const durationSelect = document.getElementById("new-task-duration-select");
      
      const taskText = input ? input.value.trim() : "";
      if (taskText) {
        const newTask = {
          id: "cust-" + Date.now(),
          text: taskText,
          subject: subjectSelect ? subjectSelect.value : (currentPlanData.subjects[0] || "General"),
          duration: durationSelect ? durationSelect.value : "1.5h",
          priority: prioritySelect ? prioritySelect.value : "High",
          done: false
        };
        currentPlanData.tasks.unshift(newTask);
        renderPlanner();
        if (input) input.value = "";
        const modal = document.getElementById("add-task-modal");
        if (modal) modal.classList.add("hidden");
        showToast("✨ Custom study task added to your AI schedule!", "success");
      }
    });
  }

  renderPlanner();
}

function switchStream(streamKey) {
  if (!STREAM_DATA[streamKey]) return;
  currentStreamKey = streamKey;
  currentPlanData = JSON.parse(JSON.stringify(STREAM_DATA[streamKey]));
  renderPlanner();
  showToast(`Loaded syllabus plan for ${currentPlanData.name}`, "info");
}

function renderPlanner() {
  const container = document.getElementById("planner-task-list");
  const streamBadge = document.getElementById("planner-stream-badge");
  const countdownEl = document.getElementById("planner-countdown");
  const progressText = document.getElementById("planner-progress-pct");
  const progressBar = document.getElementById("planner-progress-bar");
  const completedCountEl = document.getElementById("planner-completed-count");
  const totalCountEl = document.getElementById("planner-total-count");

  if (streamBadge) streamBadge.textContent = currentPlanData.name;
  if (countdownEl) countdownEl.textContent = `${currentPlanData.examCountdown} Days Left`;

  if (!container) return;
  container.innerHTML = "";

  let doneCount = currentPlanData.tasks.filter(t => t.done).length;
  let totalCount = currentPlanData.tasks.length;
  let pct = totalCount > 0 ? Math.round((doneCount / totalCount) * 100) : 0;

  if (progressText) progressText.textContent = `${pct}%`;
  if (progressBar) progressBar.style.width = `${pct}%`;
  if (completedCountEl) completedCountEl.textContent = doneCount;
  if (totalCountEl) totalCountEl.textContent = totalCount;

  currentPlanData.tasks.forEach((task, index) => {
    const taskEl = document.createElement("div");
    taskEl.className = `p-3.5 rounded-xl border transition-all duration-200 flex items-start justify-between gap-3 ${
      task.done 
        ? "bg-emerald-500/10 border-emerald-500/30 opacity-75" 
        : "bg-slate-800/40 border-slate-700/60 hover:border-cyan-500/40"
    }`;

    const priorityBadgeClass = 
      task.priority === "High" ? "bg-rose-500/20 text-rose-300 border-rose-500/30" :
      task.priority === "Medium" ? "bg-amber-500/20 text-amber-300 border-amber-500/30" :
      "bg-cyan-500/20 text-cyan-300 border-cyan-500/30";

    taskEl.innerHTML = `
      <div class="flex items-start gap-3 flex-1">
        <input 
          type="checkbox" 
          id="task-${task.id}" 
          class="custom-task-checkbox mt-1 w-4 h-4 rounded text-cyan-500 focus:ring-cyan-400 bg-slate-900 border-slate-600 cursor-pointer"
          ${task.done ? "checked" : ""}
          data-task-id="${task.id}"
        />
        <div class="flex-1">
          <label for="task-${task.id}" class="text-sm font-medium cursor-pointer ${task.done ? 'line-through text-slate-400' : 'text-slate-100'}">
            ${task.text}
          </label>
          <div class="flex flex-wrap items-center gap-2 mt-1.5 text-xs text-slate-400">
            <span class="inline-flex items-center px-2 py-0.5 rounded-full border ${priorityBadgeClass} font-semibold text-[10px]">
              ${task.priority} Priority
            </span>
            <span class="text-cyan-400/90 font-medium">${task.subject}</span>
            <span>• ${task.duration}</span>
          </div>
        </div>
      </div>
      <button 
        class="text-slate-500 hover:text-rose-400 p-1 transition-colors delete-task-btn" 
        data-task-id="${task.id}" 
        title="Remove Task"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
      </button>
    `;

    container.appendChild(taskEl);
  });

  // Attach event listeners for checkboxes
  container.querySelectorAll(".custom-task-checkbox").forEach(cb => {
    cb.addEventListener("change", (e) => {
      const taskId = e.target.dataset.taskId;
      const targetTask = currentPlanData.tasks.find(t => t.id === taskId);
      if (targetTask) {
        targetTask.done = e.target.checked;
        renderPlanner();
        if (targetTask.done) {
          showToast(`🎯 Great progress! "${targetTask.subject}" task completed.`, "success");
        }
      }
    });
  });

  // Attach delete buttons
  container.querySelectorAll(".delete-task-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const taskId = btn.dataset.taskId;
      currentPlanData.tasks = currentPlanData.tasks.filter(t => t.id !== taskId);
      renderPlanner();
      showToast("Task removed from study queue", "info");
    });
  });
}

function openAddTaskPrompt() {
  const customModal = document.getElementById("add-task-modal");
  const subjectSelect = document.getElementById("new-task-subject-select");
  
  if (customModal) {
    if (subjectSelect) {
      subjectSelect.innerHTML = "";
      currentPlanData.subjects.forEach(sub => {
        const opt = document.createElement("option");
        opt.value = sub;
        opt.textContent = sub;
        subjectSelect.appendChild(opt);
      });
    }
    customModal.classList.remove("hidden");
  } else {
    const taskName = prompt("Enter study task description:");
    if (taskName && taskName.trim()) {
      const newTask = {
        id: "cust-" + Date.now(),
        text: taskName.trim(),
        subject: currentPlanData.subjects[0] || "General Revision",
        duration: "1.5h",
        priority: "High",
        done: false
      };
      currentPlanData.tasks.unshift(newTask);
      renderPlanner();
      showToast("✨ Custom study task added to your AI schedule!", "success");
    }
  }
}

// --- INSTANT AI DOUBT SOLVER ---
function initDoubtSolver() {
  const doubtInput = document.getElementById("doubt-input");
  const solveBtn = document.getElementById("solve-doubt-btn");
  const answerContainer = document.getElementById("doubt-answer-card");
  const presetPills = document.querySelectorAll(".doubt-preset-pill");
  const copyBtn = document.getElementById("copy-answer-btn");

  presetPills.forEach(pill => {
    pill.addEventListener("click", () => {
      const key = pill.dataset.doubtKey;
      if (DOUBT_PRESETS[key]) {
        if (doubtInput) doubtInput.value = DOUBT_PRESETS[key].q;
        executeDoubtSolve(DOUBT_PRESETS[key].a, DOUBT_PRESETS[key].q);
      }
    });
  });

  if (solveBtn) {
    solveBtn.addEventListener("click", () => {
      const query = doubtInput ? doubtInput.value.trim() : "";
      if (!query) {
        showToast("Please enter a concept, equation, or syllabus question!", "warning");
        return;
      }
      
      // Check if matches preset or generate dynamic university-calibrated answer
      let matchedKey = Object.keys(DOUBT_PRESETS).find(k => 
        query.toLowerCase().includes(k) || DOUBT_PRESETS[k].q.toLowerCase().includes(query.toLowerCase())
      );

      let answerMarkdown = matchedKey 
        ? DOUBT_PRESETS[matchedKey].a 
        : generateGenericAiAnswer(query);

      executeDoubtSolve(answerMarkdown, query);
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const answerContent = document.getElementById("doubt-answer-content");
      if (answerContent) {
        navigator.clipboard.writeText(answerContent.innerText).then(() => {
          showToast("Copied step-by-step solution to clipboard!", "success");
          copyBtn.textContent = "Copied!";
          setTimeout(() => { copyBtn.textContent = "Copy Answer"; }, 2000);
        });
      }
    });
  }
}

function executeDoubtSolve(markdownAnswer, queryTitle) {
  const answerContainer = document.getElementById("doubt-answer-card");
  const answerContent = document.getElementById("doubt-answer-content");
  const thinkingBanner = document.getElementById("doubt-thinking-state");
  const queryDisplay = document.getElementById("doubt-active-query-title");

  if (!answerContainer) return;
  answerContainer.classList.remove("hidden");
  if (queryDisplay) queryDisplay.textContent = queryTitle;

  // Show thinking state first
  if (thinkingBanner) {
    thinkingBanner.classList.remove("hidden");
    thinkingBanner.innerHTML = `
      <div class="flex items-center gap-3 text-cyan-400 text-sm font-medium py-3">
        <svg class="animate-spin h-5 w-5 text-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>Syllora AI is analyzing syllabus context, verifying marking scheme & formulating step-by-step answer...</span>
      </div>
    `;
  }

  if (answerContent) {
    answerContent.innerHTML = "";
  }

  // Realistic stream/render after 600ms
  setTimeout(() => {
    if (thinkingBanner) thinkingBanner.classList.add("hidden");
    if (answerContent) {
      // Parse markdown bold, headings, formulas
      let formattedHtml = markdownAnswer
        .replace(/^### (.*$)/gim, '<h4 class="text-base font-bold text-cyan-300 mt-4 mb-2 flex items-center gap-2">$1</h4>')
        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
        .replace(/\*(.*?)\*/g, '<em class="text-slate-300">$1</em>')
        .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 bg-slate-900 text-cyan-300 rounded font-mono text-xs">$1</code>')
        .replace(/\$\$([\s\S]*?)\$\$/g, '<div class="my-3 p-3 bg-slate-950/80 rounded-lg border border-cyan-500/20 text-center font-mono text-cyan-200 overflow-x-auto text-sm">$1</div>')
        .replace(/\$([^\$]+)\$/g, '<span class="font-mono text-cyan-300 bg-slate-900/60 px-1 py-0.5 rounded text-xs">$1</span>')
        .replace(/\n\n/g, '<p class="my-2 text-slate-300 text-sm leading-relaxed">')
        .replace(/\n/g, '<br/>');

      answerContent.innerHTML = formattedHtml;
      showToast("💡 Verified AI Solution Ready!", "success");
    }
  }, 650);
}

function generateGenericAiAnswer(query) {
  return `### 📌 University Syllabus Breakdown
Analysis for question: **"${query}"**

### 🔑 Step 1: Definition & Mathematical / Theoretical Foundation
Under modern university and junior college curricula, this topic is categorized under core conceptual evaluation (Weightage: 4 to 8 Marks).

* **Fundamental Law**: The principle states that all related state parameters maintain equilibrium according to standard governing equations.
* **Governing Relation**:
$$\\sum \\Phi_{\\text{syllabus}} = \\int_0^T \\lambda(t) \\cdot \\nabla \\Psi \\, dt$$

### 📝 Step 2: Step-by-Step Derivation & Key Application
1. State the initial boundary conditions clearly at $t = 0$.
2. Apply the constitutive equations with proper units (SI system).
3. Substitute standard constants and resolve intermediate algebraic terms.
4. Draw the labeled schematic diagram to secure diagrammatic evaluation marks.

### 💡 University Exam Strategy & Marking Tip
* Always state the assumptions before writing the final proof.
* Examiners reserve 1 full mark for specifying the final SI unit and physical significance!`;
}

// --- PYQ LIBRARY HUB ---
function initPYQLibrary() {
  const container = document.getElementById("pyq-cards-grid");
  const searchInput = document.getElementById("pyq-search-input");
  const filterBtns = document.querySelectorAll(".pyq-filter-btn");

  let activeStream = "all";
  let searchTerm = "";

  function renderFilteredPYQ() {
    if (!container) return;
    container.innerHTML = "";

    const filtered = PYQ_DATABASE.filter(item => {
      const matchStream = activeStream === "all" || item.stream === activeStream;
      const matchSearch = 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.code.toLowerCase().includes(searchTerm.toLowerCase());
      return matchStream && matchSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full text-center py-12 glass-panel rounded-2xl border-dashed">
          <svg class="w-12 h-12 mx-auto text-slate-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <p class="text-slate-300 font-medium">No PYQ papers matched your search.</p>
          <p class="text-xs text-slate-500 mt-1">Try searching "Calculus", "Physics", "SPPU", "HSC", or "Accounting"</p>
        </div>
      `;
      return;
    }

    filtered.forEach(paper => {
      const card = document.createElement("div");
      card.className = "glass-card-interactive rounded-2xl p-5 border flex flex-col justify-between";

      const streamBadge = 
        paper.stream === "engineering" ? "Engineering (B.Tech)" :
        paper.stream === "junior_college" ? "FYJC / SYJC Board" :
        paper.stream === "commerce" ? "Commerce (B.Com)" : "Science (B.Sc)";

      card.innerHTML = `
        <div>
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              ${paper.university}
            </span>
            <span class="text-xs text-emerald-400 font-medium flex items-center gap-1">
              <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
              Solved & Verified
            </span>
          </div>

          <h3 class="text-base font-bold text-slate-100 group-hover:text-cyan-400 transition-colors mb-1.5">
            ${paper.title}
          </h3>

          <p class="text-xs text-slate-400 mb-4 flex items-center gap-3">
            <span>📅 ${paper.year}</span>
            <span>• Course Code: ${paper.code}</span>
          </p>

          <div class="bg-slate-900/60 p-3 rounded-xl border border-slate-800 mb-4 text-xs">
            <div class="text-slate-400 font-medium mb-1">Sample Exam Question:</div>
            <p class="text-slate-200 italic line-clamp-2">"${paper.sampleQ}"</p>
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-800/80 mb-4">
            <span>📝 ${paper.questions} Solved Questions</span>
            <span>⚡ ${paper.downloads} Downloads</span>
          </div>

          <div class="grid grid-cols-2 gap-2">
            <button 
              class="preview-pyq-btn w-full py-2 px-3 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-cyan-500/40 transition-all text-center flex items-center justify-center gap-1.5"
              data-pyq-id="${paper.id}"
            >
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
              Quick Preview
            </button>
            <button 
              class="download-pyq-btn w-full py-2 px-3 rounded-lg text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white transition-all text-center flex items-center justify-center gap-1.5 shadow-sm"
              data-pyq-id="${paper.id}"
            >
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              Download PDF
            </button>
          </div>
        </div>
      `;

      container.appendChild(card);
    });

    // Attach preview event listeners
    container.querySelectorAll(".preview-pyq-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = parseInt(btn.dataset.pyqId);
        const paper = PYQ_DATABASE.find(p => p.id === id);
        if (paper) openPYQModal(paper);
      });
    });

    // Attach download listeners
    container.querySelectorAll(".download-pyq-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = parseInt(btn.dataset.pyqId);
        const paper = PYQ_DATABASE.find(p => p.id === id);
        if (paper) {
          showToast(`📥 Downloading "${paper.title}" with verified solution set...`, "success");
        }
      });
    });
  }

  // Filter tabs
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("bg-cyan-500", "text-white", "shadow-lg");
        b.classList.add("bg-slate-800/60", "text-slate-300");
      });
      btn.classList.add("bg-cyan-500", "text-white", "shadow-lg");
      btn.classList.remove("bg-slate-800/60", "text-slate-300");
      activeStream = btn.dataset.stream;
      renderFilteredPYQ();
    });
  });

  // Search input
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchTerm = e.target.value;
      renderFilteredPYQ();
    });
  }

  renderFilteredPYQ();
}

function openPYQModal(paper) {
  const modal = document.getElementById("pyq-preview-modal");
  const modalTitle = document.getElementById("pyq-modal-title");
  const modalMeta = document.getElementById("pyq-modal-meta");
  const modalQuestion = document.getElementById("pyq-modal-sample-question");

  if (!modal) return;
  if (modalTitle) modalTitle.textContent = paper.title;
  if (modalMeta) modalMeta.textContent = `${paper.university} • ${paper.year} • Course Code: ${paper.code}`;
  if (modalQuestion) modalQuestion.textContent = `"${paper.sampleQ}"`;

  modal.classList.remove("hidden");
}

// --- PRICING TOGGLE ---
function initPricing() {
  const toggleBtn = document.getElementById("billing-toggle");
  const toggleDot = document.getElementById("billing-toggle-dot");
  const proPriceEl = document.getElementById("pro-price-display");
  const proPeriodEl = document.getElementById("pro-price-period");
  const annualSavingsBadge = document.getElementById("annual-savings-badge");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      isAnnualBilling = !isAnnualBilling;
      
      if (toggleDot) {
        if (isAnnualBilling) {
          toggleDot.classList.add("translate-x-6");
          toggleDot.classList.remove("translate-x-0");
        } else {
          toggleDot.classList.remove("translate-x-6");
          toggleDot.classList.add("translate-x-0");
        }
      }

      if (proPriceEl && proPeriodEl) {
        if (isAnnualBilling) {
          proPriceEl.textContent = "₹99";
          proPeriodEl.textContent = "/ month (Billed ₹1,199 / yr)";
          if (annualSavingsBadge) annualSavingsBadge.classList.remove("opacity-50");
        } else {
          proPriceEl.textContent = "₹149";
          proPeriodEl.textContent = "/ month";
          if (annualSavingsBadge) annualSavingsBadge.classList.add("opacity-50");
        }
      }

      showToast(`Showing ${isAnnualBilling ? "Annual Pass (Best Value)" : "Monthly Flexible"} Pricing`, "info");
    });
  }
}

// --- STAT COUNTER ANIMATIONS ---
function initCounters() {
  const counters = document.querySelectorAll(".counter-value");
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
          const target = parseInt(counter.dataset.target);
          const suffix = counter.dataset.suffix || "";
          const prefix = counter.dataset.prefix || "";
          const duration = 1800; // ms
          const step = 20;
          const increment = target / (duration / step);
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            counter.textContent = `${prefix}${Math.floor(current).toLocaleString()}${suffix}`;
          }, step);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById("stats-section");
  if (statsSection) {
    observer.observe(statsSection);
  }
}

// --- MODALS ENGINE ---
function initModals() {
  // Demo Video Modal
  const demoVideoBtns = document.querySelectorAll(".open-demo-video-btn");
  const demoVideoModal = document.getElementById("demo-video-modal");

  demoVideoBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (demoVideoModal) demoVideoModal.classList.remove("hidden");
    });
  });

  // Auth / Try Free Planner Modal
  const authBtns = document.querySelectorAll(".open-auth-modal-btn");
  const authModal = document.getElementById("auth-modal");
  const authTitle = document.getElementById("auth-modal-title");

  authBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.authMode || "signup";
      if (authTitle) {
        authTitle.textContent = mode === "login" ? "Welcome Back to Syllora" : "Start Your Free AI Study Plan";
      }
      if (authModal) authModal.classList.remove("hidden");
    });
  });

  // Close modals
  document.querySelectorAll(".close-modal-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".modal-wrapper").forEach(m => m.classList.add("hidden"));
    });
  });

  // Close when clicking modal backdrop
  document.querySelectorAll(".modal-wrapper").forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.add("hidden");
      }
    });
  });

  // Handle Auth Form Submission
  const authForm = document.getElementById("syllora-auth-form");
  if (authForm) {
    authForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("auth-email-input")?.value;
      const stream = document.getElementById("auth-stream-select")?.value || "Engineering";
      if (authModal) authModal.classList.add("hidden");
      showToast(`🎉 Welcome to Syllora! AI study workspace initialized for ${stream}.`, "success");
    });
  }
}

// --- SYLLABUS DROPZONE SIMULATION ---
function initSyllabusDropzone() {
  const dropzone = document.getElementById("syllabus-dropzone");
  const fileInput = document.getElementById("syllabus-file-input");
  const dropzoneStatus = document.getElementById("dropzone-status-text");

  if (!dropzone) return;

  dropzone.addEventListener("click", () => {
    if (fileInput) fileInput.click();
  });

  ["dragenter", "dragover"].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.add("border-cyan-400", "bg-cyan-500/10");
    });
  });

  ["dragleave", "drop"].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.remove("border-cyan-400", "bg-cyan-500/10");
    });
  });

  dropzone.addEventListener("drop", (e) => {
    const files = e.dataTransfer.files;
    if (files.length > 0) handleSyllabusFile(files[0].name);
  });

  if (fileInput) {
    fileInput.addEventListener("change", (e) => {
      if (e.target.files.length > 0) handleSyllabusFile(e.target.files[0].name);
    });
  }

  function handleSyllabusFile(fileName) {
    if (dropzoneStatus) {
      dropzoneStatus.innerHTML = `
        <span class="text-cyan-400 font-semibold flex items-center gap-2 justify-center">
          <svg class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
          AI Scanning "${fileName}"...
        </span>
      `;
    }

    setTimeout(() => {
      if (dropzoneStatus) {
        dropzoneStatus.innerHTML = `
          <span class="text-emerald-400 font-semibold flex items-center gap-1.5 justify-center">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            Syllabus mapped! 4 Subjects • 24 Modules Extracted
          </span>
        `;
      }
      showToast(`✨ Successfully imported "${fileName}". Personalized study timetable generated!`, "success");
    }, 1200);
  }
}

// --- MOBILE MENU DRAWER ---
function initMobileMenu() {
  const openBtn = document.getElementById("mobile-menu-btn");
  const closeBtn = document.getElementById("close-mobile-menu-btn");
  const drawer = document.getElementById("mobile-menu-drawer");
  const overlay = document.getElementById("mobile-menu-overlay");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  function openDrawer() {
    if (drawer && overlay) {
      drawer.classList.remove("translate-x-full");
      overlay.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    }
  }

  function closeDrawer() {
    if (drawer && overlay) {
      drawer.classList.add("translate-x-full");
      overlay.classList.add("hidden");
      document.body.style.overflow = "";
    }
  }

  if (openBtn) openBtn.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (overlay) overlay.addEventListener("click", closeDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });
}

// --- SMOOTH SCROLL ---
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#" || !targetId) return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
}

// --- TOAST NOTIFICATION UTILITY ---
function showToast(message, type = "info") {
  let container = document.getElementById("syllora-toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "syllora-toast-container";
    container.className = "fixed bottom-5 right-5 z-[9999] flex flex-col gap-2 max-w-sm pointer-events-none";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  const bgStyles = 
    type === "success" ? "bg-slate-900/95 border-emerald-500/40 text-emerald-300 shadow-emerald-950/50" :
    type === "warning" ? "bg-slate-900/95 border-amber-500/40 text-amber-300 shadow-amber-950/50" :
    "bg-slate-900/95 border-cyan-500/40 text-cyan-200 shadow-cyan-950/50";

  toast.className = `p-3.5 rounded-xl border backdrop-blur-md shadow-xl text-xs font-medium flex items-center gap-2.5 transition-all duration-300 pointer-events-auto transform translate-y-3 opacity-0 ${bgStyles}`;
  
  const icon = 
    type === "success" ? `<svg class="w-4 h-4 text-emerald-400 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>` :
    type === "warning" ? `<svg class="w-4 h-4 text-amber-400 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>` :
    `<svg class="w-4 h-4 text-cyan-400 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>`;

  toast.innerHTML = `
    ${icon}
    <span class="flex-1">${message}</span>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.remove("translate-y-3", "opacity-0");
  });

  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-2");
    setTimeout(() => { toast.remove(); }, 300);
  }, 3500);
}
