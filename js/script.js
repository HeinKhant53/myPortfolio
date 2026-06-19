const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("main section[id]");
const contactForm = document.getElementById("contactForm");
const statusMessage = document.getElementById("statusMessage");
const copyEmailBtn = document.getElementById("copyEmailBtn");
const languageToggle = document.getElementById("languageToggle");
const themeToggle = document.getElementById("themeToggle");

const translations = {
  en: {
    "title": "My Portfolio",
    "metaDescription": "Hein Khant Zaw is an aspiring System Engineer and Web Developer creating reliable, user-friendly, and responsive digital solutions.",
    ".nav-links a[href='#home']": "Home",
    ".nav-links a[href='#services']": "Services",
    ".nav-links a[href='#about']": "About",
    ".nav-links a[href='#skills']": "Skills",
    ".nav-links a[href='#projects']": "Projects",
    ".bi-sun-text": "White",
    ".bi-moon-text": "Black",
    ".nav-cta": "Let's Talk",
    ".eyebrow": "I am Hein Khant Zaw",
    "h1": "Aspiring System Engineer <span>& Web Developer</span>",
    ".hero-text": "I use programming and IT technologies to create reliable, user-friendly systems that solve real-world problems and improve people's lives.",
    ".hero-actions .btn": "Download CV",
    "#services .section-heading h2": "Services",
    "#services .section-heading p": "Developing reliable, scalable, and user-friendly systems.",
    "#services .card:nth-child(1) h3": "Web Application Development",
    "#services .card:nth-child(1) p": "Building user-friendly web applications using Java, HTML, CSS, JavaScript, and SQL.",
    "#services .card:nth-child(1) .feature-list span:nth-child(1)": "Frontend Development",
    "#services .card:nth-child(1) .feature-list span:nth-child(2)": "Backend Development",
    "#services .card:nth-child(2) h3": "System Development",
    "#services .card:nth-child(2) p": "Analyzing user needs and developing efficient systems to solve business challenges.",
    "#services .card:nth-child(2) .feature-list span:nth-child(1)": "Requirement Analysis",
    "#services .card:nth-child(2) .feature-list span:nth-child(2)": "Database Design",
    "#services .card:nth-child(3) h3": "Responsive Design",
    "#services .card:nth-child(3) p": "Creating websites that work smoothly across desktops, tablets, and mobile devices.",
    "#services .card:nth-child(3) .feature-list span:nth-child(1)": "Mobile-Friendly",
    "#services .card:nth-child(3) .feature-list span:nth-child(2)": "User-Centered UI",
    "#services .card:nth-child(4) h3": "Maintenance & Improvement",
    "#services .card:nth-child(4) p": "Enhancing existing systems through continuous updates and performance improvements.",
    "#services .card:nth-child(4) .feature-list span:nth-child(1)": "Bug Fixing",
    "#services .card:nth-child(4) .feature-list span:nth-child(2)": "Feature Enhancement",
    "#about .section-heading h2": "About Me",
    "#about .section-heading p": "I am an aspiring system engineer who believes in using technology to solve social challenges.",
    ".approach-list li:nth-child(1) span": "Understand users and their needs",
    ".approach-list li:nth-child(2) span": "Design effective solutions",
    ".approach-list li:nth-child(3) span": "Develop reliable systems",
    ".stats div:nth-child(1) span": "Years of Learning",
    ".stats div:nth-child(2) span": "Projects Completed",
    ".stats div:nth-child(3) span": "Team Projects",
    "#skills .section-heading h2": "Skills",
    "#skills .section-heading p": "Building practical solutions with clean code and modern technologies.",
    "#skills .card:nth-child(1) h3": "Programming Languages",
    "#skills .card:nth-child(1) .tags span:nth-child(1)": "Java",
    "#skills .card:nth-child(1) .tags span:nth-child(2)": "JavaScript",
    "#skills .card:nth-child(1) .tags span:nth-child(3)": "SQL",
    "#skills .card:nth-child(1) .tags span:nth-child(4)": "HTML/CSS",
    "#skills .card:nth-child(2) h3": "Development Skills",
    "#skills .card:nth-child(2) .tags span:nth-child(1)": "Web Development",
    "#skills .card:nth-child(2) .tags span:nth-child(2)": "System Analysis",
    "#skills .card:nth-child(2) .tags span:nth-child(3)": "Database Design",
    "#skills .card:nth-child(2) .tags span:nth-child(4)": "Responsive UI",
    "#skills .card:nth-child(3) h3": "Tools & Technologies",
    "#skills .card:nth-child(3) .tags span:nth-child(1)": "MySQL",
    "#skills .card:nth-child(3) .tags span:nth-child(2)": "Java Swing",
    "#skills .card:nth-child(3) .tags span:nth-child(3)": "GitHub",
    "#skills .card:nth-child(3) .tags span:nth-child(4)": "VS Code",
    "#skills .card:nth-child(4) h3": "Collaboration",
    "#skills .card:nth-child(4) .tags span:nth-child(1)": "Team Projects",
    "#skills .card:nth-child(4) .tags span:nth-child(2)": "Problem Solving",
    "#skills .card:nth-child(4) .tags span:nth-child(3)": "Communication",
    "#skills .card:nth-child(4) .tags span:nth-child(4)": "Documentation",
    "#projects .section-heading h2": "Projects",
    "#projects .section-heading p": "A showcase of my academic and personal development projects.",
    ".project-card:nth-child(1) h3": "Employee Management System",
    ".project-card:nth-child(1) p": "A desktop application built with Java, Swing, and MySQL for managing employee information.",
    ".project-card:nth-child(2) h3": "COVID-19 Testing and Medical Information Website",
    ".project-card:nth-child(2) p": "A team project developed during the pandemic to provide COVID-19 testing services and medical information through a user-friendly interface.",
    ".project-card:nth-child(3) h3": "Explore IT Careers and Shape Your Future Webaite",
    ".project-card:nth-child(3) p": "A project designed for international students, introducing IT careers and helping them plan their future paths.",
    ".project-card .btn": "View Project",
    "#contact .section-heading h2": "Let's Work Together",
    "#contact .section-heading p": "Feel free to contact me for opportunities and collaborations.",
    "#contact .panel:nth-child(1) h3": "Send a Message",
    ".two-column label:nth-child(1) span": "Name",
    ".two-column label:nth-child(2) span": "Niche",
    "#contact > .container > .contact-grid .panel:first-child > form > label:nth-of-type(1) span": "Email",
    "#contact > .container > .contact-grid .panel:first-child > form > label:nth-of-type(2) span": "Budget",
    "#contact > .container > .contact-grid .panel:first-child > form > label:nth-of-type(3) span": "About your project",
    "select option:nth-child(1)": "Select budget",
    ".submit-row .btn": "Submit",
    ".contact-card h3": "Quick Contact",
    ".contact-card p": "<strong>Email me directly:</strong> <span id=\"emailText\">heinkhantzaw5353@gmail.com</span>",
    ".email-actions a": "Send Email",
    "#copyEmailBtn": "Copy",
    ".footer h2": "Hein Khant Zaw",
    ".footer p": "Creating technology-driven solutions that improve people's lives.",
    ".footer small": "Copyright 2026 Hein Khant Zaw. All Rights Reserved."
  },
  ja: {
    "title": "私のポートフォリオ",
    "metaDescription": "ヘイン カン ゾウは、信頼性が高く使いやすいデジタルソリューションを作るシステムエンジニア志望兼Web開発者です。",
    ".nav-links a[href='#home']": "ホーム",
    ".nav-links a[href='#services']": "サービス",
    ".nav-links a[href='#about']": "自己紹介",
    ".nav-links a[href='#skills']": "スキル",
    ".nav-links a[href='#projects']": "プロジェクト",
    ".bi-sun-text": "白",
    ".bi-moon-text": "黒",
    ".nav-cta": "相談する",
    ".eyebrow": "私はヘイン カン ゾウです",
    "h1": "システムエンジニア志望 <span>& Web開発者</span>",
    ".hero-text": "プログラミングとIT技術を活用し、現実の課題を解決して人々の生活をより良くする、信頼性の高い使いやすいシステムを作ります。",
    ".hero-actions .btn": "履歴書をダウンロード",
    "#services .section-heading h2": "サービス",
    "#services .section-heading p": "信頼性が高く、拡張しやすく、使いやすいシステムを開発します。",
    "#services .card:nth-child(1) h3": "Webアプリケーション開発",
    "#services .card:nth-child(1) p": "Java、HTML、CSS、JavaScript、SQLを使って、使いやすいWebアプリケーションを構築します。",
    "#services .card:nth-child(1) .feature-list span:nth-child(1)": "フロントエンド開発",
    "#services .card:nth-child(1) .feature-list span:nth-child(2)": "バックエンド開発",
    "#services .card:nth-child(2) h3": "システム開発",
    "#services .card:nth-child(2) p": "ユーザーのニーズを分析し、ビジネス課題を解決する効率的なシステムを開発します。",
    "#services .card:nth-child(2) .feature-list span:nth-child(1)": "要件分析",
    "#services .card:nth-child(2) .feature-list span:nth-child(2)": "データベース設計",
    "#services .card:nth-child(3) h3": "レスポンシブデザイン",
    "#services .card:nth-child(3) p": "PC、タブレット、スマートフォンでスムーズに使えるWebサイトを制作します。",
    "#services .card:nth-child(3) .feature-list span:nth-child(1)": "モバイル対応",
    "#services .card:nth-child(3) .feature-list span:nth-child(2)": "ユーザー中心UI",
    "#services .card:nth-child(4) h3": "保守と改善",
    "#services .card:nth-child(4) p": "継続的な更新とパフォーマンス改善を通じて、既存システムをより良くします。",
    "#services .card:nth-child(4) .feature-list span:nth-child(1)": "バグ修正",
    "#services .card:nth-child(4) .feature-list span:nth-child(2)": "機能改善",
    "#about .section-heading h2": "自己紹介",
    "#about .section-heading p": "私は、テクノロジーを使って社会の課題を解決したいと考えているシステムエンジニア志望です。",
    ".approach-list li:nth-child(1) span": "ユーザーとニーズを理解する",
    ".approach-list li:nth-child(2) span": "効果的な解決策を設計する",
    ".approach-list li:nth-child(3) span": "信頼性の高いシステムを開発する",
    ".stats div:nth-child(1) span": "学習年数",
    ".stats div:nth-child(2) span": "完了プロジェクト",
    ".stats div:nth-child(3) span": "チームプロジェクト",
    "#skills .section-heading h2": "スキル",
    "#skills .section-heading p": "クリーンなコードとモダンな技術で実用的なソリューションを作ります。",
    "#skills .card:nth-child(1) h3": "プログラミング言語",
    "#skills .card:nth-child(1) .tags span:nth-child(1)": "Java",
    "#skills .card:nth-child(1) .tags span:nth-child(2)": "JavaScript",
    "#skills .card:nth-child(1) .tags span:nth-child(3)": "SQL",
    "#skills .card:nth-child(1) .tags span:nth-child(4)": "HTML/CSS",
    "#skills .card:nth-child(2) h3": "開発スキル",
    "#skills .card:nth-child(2) .tags span:nth-child(1)": "Web開発",
    "#skills .card:nth-child(2) .tags span:nth-child(2)": "システム分析",
    "#skills .card:nth-child(2) .tags span:nth-child(3)": "DB設計",
    "#skills .card:nth-child(2) .tags span:nth-child(4)": "レスポンシブUI",
    "#skills .card:nth-child(3) h3": "ツールと技術",
    "#skills .card:nth-child(3) .tags span:nth-child(1)": "MySQL",
    "#skills .card:nth-child(3) .tags span:nth-child(2)": "Java Swing",
    "#skills .card:nth-child(3) .tags span:nth-child(3)": "GitHub",
    "#skills .card:nth-child(3) .tags span:nth-child(4)": "VS Code",
    "#skills .card:nth-child(4) h3": "コラボレーション",
    "#skills .card:nth-child(4) .tags span:nth-child(1)": "チーム開発",
    "#skills .card:nth-child(4) .tags span:nth-child(2)": "問題解決",
    "#skills .card:nth-child(4) .tags span:nth-child(3)": "コミュニケーション",
    "#skills .card:nth-child(4) .tags span:nth-child(4)": "ドキュメント作成",
    "#projects .section-heading h2": "プロジェクト",
    "#projects .section-heading p": "学習と個人開発で制作したプロジェクトを紹介します。",
    ".project-card:nth-child(1) h3": "従業員管理システム",
    ".project-card:nth-child(1) p": "Java、Swing、MySQLで構築した従業員情報管理用のデスクトップアプリケーションです。",
    ".project-card:nth-child(2) h3": "COVID-19検査・医療情報サイト",
    ".project-card:nth-child(2) p": "パンデミック期間中に、COVID-19の検査サービスや医療情報を提供するため、チームで開発したWebサイトです。使いやすいUIと見やすいデザインを重視し、必要な情報へ迅速にアクセスできるよう設計しました。",
    ".project-card:nth-child(3) h3": "ITの仕事を知って、未来の自分を考えようサイト",
    ".project-card:nth-child(3) p": "日本への進学を希望する留学生向けに、IT業界の仕事を紹介し、将来のキャリアについて考えるきっかけを提供するプロジェクトです。",
    ".project-card .btn": "詳細を見る",
    "#contact .section-heading h2": "一緒に働きましょう",
    "#contact .section-heading p": "機会やコラボレーションについて、お気軽にご連絡ください。",
    "#contact .panel:nth-child(1) h3": "メッセージを送る",
    ".two-column label:nth-child(1) span": "名前",
    ".two-column label:nth-child(2) span": "分野",
    "#contact > .container > .contact-grid .panel:first-child > form > label:nth-of-type(1) span": "メール",
    "#contact > .container > .contact-grid .panel:first-child > form > label:nth-of-type(2) span": "予算",
    "#contact > .container > .contact-grid .panel:first-child > form > label:nth-of-type(3) span": "プロジェクト内容",
    "select option:nth-child(1)": "予算を選択",
    ".submit-row .btn": "送信",
    ".contact-card h3": "クイック連絡",
    ".contact-card p": "<strong>直接メール:</strong> <span id=\"emailText\">heinkhantzaw5353@gmail.com</span>",
    ".email-actions a": "メールを送る",
    "#copyEmailBtn": "コピー",
    ".footer h2": "ヘイン カン ゾウ",
    ".footer p": "人々の生活をより良くする、テクノ ロジーを活用したソリューションを作ります。",
    ".footer small": "Copyright 2026 ヘイン カン ゾウ. All Rights Reserved."
  }
};

let currentLanguage = localStorage.getItem("portfolioLanguage") || "en";
let currentTheme = localStorage.getItem("portfolioTheme") || "dark";

function applyTheme(theme) {
  document.body.classList.toggle("light-theme", theme === "light");

  if (themeToggle) {
    const icon = themeToggle.querySelector("i");
    const label = themeToggle.querySelector("span");

    if (icon) {
      icon.className = theme === "light" ? "bi bi-moon" : "bi bi-sun";
    }

   if (label) {
  const isEnglish = currentLanguage === "en";

  if (isEnglish) {
    label.textContent = theme === "light" ? "Black" : "White";
  } else {
    label.textContent = theme === "light" ? "黒" : "白";
  }
}
  

    themeToggle.setAttribute(
      "aria-label",
      theme === "light" ? "Change to black theme" : "Change to white theme"
    );
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("portfolioTheme", currentTheme);
    applyTheme(currentTheme);
  });
}

applyTheme(currentTheme);

function applyLanguage(language) {
  const dictionary = translations[language] || translations.en;

  document.documentElement.lang = language === "ja" ? "ja" : "en";
  document.title = dictionary.title;

  const description = document.querySelector("meta[name='description']");
  if (description) {
    description.setAttribute("content", dictionary.metaDescription);
  }

  Object.entries(dictionary).forEach(([selector, value]) => {
    if (selector === "title" || selector === "metaDescription") return;

    document.querySelectorAll(selector).forEach((element) => {
      if (value.includes("<")) {
        element.innerHTML = value;
      } else {
        element.textContent = value;
      }
    });
  });

  if (languageToggle) {
    languageToggle.textContent = language === "ja" ? "English" : "日本語";
    languageToggle.setAttribute(
      "aria-label",
      language === "ja" ? "Change language to English" : "Change language to Japanese"
    );
  }
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    currentLanguage = currentLanguage === "en" ? "ja" : "en";
    localStorage.setItem("portfolioLanguage", currentLanguage);
    applyLanguage(currentLanguage);
  });
}

applyLanguage(currentLanguage);

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

function updateActiveLink() {
  let currentId = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      currentId = section.id;
    }
  });

  navItems.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
  });
}

window.addEventListener("scroll", updateActiveLink);
updateActiveLink();

if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    statusMessage.textContent = currentLanguage === "ja" ? "送信中..." : "Sending...";

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(contactForm)
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      statusMessage.textContent = currentLanguage === "ja" ? "送信できました。" : "Message sent successfully.";
      contactForm.reset();
    } catch (error) {
      statusMessage.textContent = currentLanguage === "ja" ? "送信に失敗しました。直接メールしてください。" : "Submission failed. Please email directly.";
      console.error(error);
    }
  });
}

if (copyEmailBtn) {
  copyEmailBtn.addEventListener("click", async () => {
    const currentEmailText = document.getElementById("emailText");

    try {
      await navigator.clipboard.writeText(currentEmailText.textContent.trim());
      showToast(currentLanguage === "ja" ? "メールをコピーしました" : "Email copied");
    } catch (error) {
      showToast(currentLanguage === "ja" ? "コピーできませんでした" : "Copy failed");
      console.error(error);
    }
  });
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "copy-toast";
  toast.textContent = message;
  document.body.appendChild(toast);

  window.setTimeout(() => toast.classList.add("show"), 10);
  window.setTimeout(() => {
    toast.classList.remove("show");
    window.setTimeout(() => toast.remove(), 250);
  }, 1800);
}
