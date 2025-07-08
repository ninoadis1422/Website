      document
        .getElementById("careerForm")
        .addEventListener("submit", function (event) {
          event.preventDefault();

          const name = document.getElementById("name").value;
          const interest = document.getElementById("interest").value.toLowerCase();
          const skills = document.getElementById("skills").value.toLowerCase();
          const personality = document.getElementById("personality").value.toLowerCase();
          const careervalue = document.getElementById("careervalue").value.toLowerCase();
          const resultDiv = document.getElementById("result");

          // Fungsi cocokkan keyword dalam kalimat (tidak perlu exact match)
          function skillMatch(...keywords) {
            return keywords.some((keyword) => skills.includes(keyword));
          }

          function personalityMatch(...keywords) {
            return keywords.some((keyword) => personality.includes(keyword));
          }


          // Aturan sederhana sistem pakar
          let recommendation = "";
          if (
            interest.includes("pengembang") &&  // Front-End developer
            skillMatch( 
              "html",
              "javascript",
              "css",
              "desain", "design",
              "bootstrap",
              "DOM",
              "GitHub",
              "Debugging", "bug",
              "DevTools",
              "React",
              "Angular",
              "tailwind",
              "Vue.js",
              "REST API") &&
            personalityMatch(
              "komunikasi", "communication",
              "kolaborasi", "collaboration",
              "berpikir kritis","critical thinking",
              "problem solving","pemecahan masalah",
              "adaptif","adaptive",
              "kreatif","creative",
              "kerja tim","team work",
              "time management", "manajemen waktu",
              "empati","empathy",
              "detail oriented", "berorientasi pada detail",
              "inisiatif","initiative",
              "konsisten","consistent",
              "tekun","persistent",
              "manajemen proyek","project management")
            ) {
            recommendation =
              "Halo " + name + "!<br><br>" +
              "Keren banget, kamu punya pondasi kuat buat jadi <strong>Front-End Developer</strong>! 💻✨<br><br>" +
              "👉 Kamu bisa membangun antarmuka web yang menarik dan ramah pengguna dengan kemampuan seperti:<br>" +
              "- HTML, CSS, JavaScript<br>" +
              "- Framework modern seperti React atau Vue<br>" +
              "- Penggunaan tools desain seperti Figma<br><br>" +
              "🔥 Jangan lupa, dunia front-end terus berkembang! Terus belajar, eksplorasi tren baru, dan latih kreativitasmu dalam menciptakan pengalaman pengguna yang luar biasa. Kamu siap jadi pionir di dunia digital!"+
              "<br><br>Semoga "+ careervalue + " menjadi Kenyataan ya!!";
            } 

            else if (
            interest.includes("pengembang") &&  // Back-End developer
            skillMatch(
              "database",
              "php",
              "python",
              "java",
              "node.js",
              "cms",
              "API",
              "arsitektur",
              "mysql",
              "postgresql",
              "mongodb",
              "laravel",
              "django",
              "express.js",
              "git",
              "github",
              "postman",
              "swagger",
              "nginx",
              "apache") &&
            personalityMatch(
              "teamwork", "kerja tim",
              "komunikasi", "Communication",
              "problem solving", "pemecahan masalah",
              "fleksibilitas", "Fleksibel",
              "adaptabilitas", "beradaptasi",
              "manajemen waktu", "time management",
              "manajemen stres", "Stress Management",
              "analytical thinking", "berpikir analitis")
            ) {
            recommendation =
              "Halo " + name + "! 👋<br><br>" +
              "Kamu menunjukkan potensi kuat di bidang<strong> backend development</strong>! ⚙️<br><br>" +
              "👉 Karier yang cocok buat kamu:<br>" +
              "- Backend Developer<br>" +
              "- API Engineer<br>" +
              "- Database Administrator<br>" +
              "- DevOps Engineer<br><br>" +
              "🛠️ Keahlian yang mendukung:<br>" +
              "- Bahasa pemrograman seperti PHP, Python, Java, atau Node.js<br>" +
              "- Pengelolaan database (MySQL, PostgreSQL, MongoDB)<br>" +
              "- Penggunaan framework backend (Laravel, Django, Express.js)<br>" +
              "- Integrasi API dan pengelolaan server (Postman, Swagger, NGINX)<br><br>" +
              "💡 Ingat! Backend adalah fondasi dari setiap aplikasi digital. Kemampuanmu dalam membangun sistem yang kuat dan efisien akan membawa dampak besar bagi pengguna.<br>" +
              "Teruslah belajar, eksplorasi teknologi baru, dan jadilah tulang punggung tim pengembang. Kamu luar biasa! 🚀"+
              "<br><br>Semoga "+ careervalue + " menjadi Kenyataan ya!!";
            } 
          
            else if (
            interest.includes("pengembang") &&  // Full Stack developer
            skillMatch(
              "html",
              "css",
              "javascript",
              "react",
              "node.js",
              "express.js",
              "mongodb",
              "mysql",
              "git",
              "restful apis",
              "web architecture",
              "version control",
              "deployment",
              "node package manager",
              "python",
              "ruby on rails",
              "sql",
              "flask",
              "http",
              "json")&&
            personalityMatch(
              "problem-solving",
              "communication",
              "teamwork",
              "adaptability",
              "time management",
              "critical thinking",
              "attention to detail",
              "project management",
              "collaboration",
              "analytical thinking")
            ) {
            recommendation =
              "Halo " + name + "! 👋<br><br>" +
              "Kamu menunjukkan potensi hebat sebagai seorang <strong>Full Stack Developer</strong>! 🌐💻<br><br>" +
              "👉 Karier yang cocok buat kamu:<br>" +
              "- Full Stack Developer<br>" +
              "- Software Engineer<br>" +
              "- Technical Consultant<br>" +
              "- Web Application Architect<br><br>" +
              "🛠️ Keahlian yang mendukung:<br>" +
              "- Front-end: HTML, CSS, JavaScript, React<br>" +
              "- Back-end: Node.js, Express, Python, SQL/MongoDB<br>" +
              "- Manajemen versi (Git), Deployment, RESTful API<br><br>" +
              "💡 Menjadi full stack berarti kamu menguasai dunia depan dan belakang aplikasi. Kamu bisa membangun produk dari nol dan menyatukan berbagai komponen teknologi menjadi solusi nyata.<br>" +
              "Teruslah mengasah kemampuanmu, kolaborasi dengan tim, dan eksplorasi teknologi baru. Masa depan digital butuh talenta seperti kamu! 🚀"+
              "<br><br>Semoga "+ careervalue + " menjadi Kenyataan ya!!";
            } 

            else if (
            interest.includes("pengembang") &&  // Mobile App Developer
            skillMatch(
              "java",
              "kotlin",
              "swift",
              "objective-c",
              "react native",
              "angular",
              "ui/ux design",
              "api integration",
              "mobile security",
              "database management",
              "cross-platform development")&&
            personalityMatch(
              "problem-solving",
              "communication",
              "teamwork",
              "time management",
              "creativity",
              "adaptability",
              "project management")
            ) {
            recommendation =
              "Halo " +
              name +
              "! 👋<br><br>" +
              "Kamu menunjukkan potensi besar untuk menjadi seorang <strong>Mobile App Developer</strong>! 📱💻<br><br>" +
              "👉 Karier yang cocok buat kamu:<br>" +
              "- Mobile App Developer (Android/iOS)<br>" +
              "- Cross-Platform Developer<br>" +
              "- UI/UX Designer untuk Mobile App<br>" +
              "- Mobile App Security Specialist<br><br>" +
              "🛠️ Keahlian yang mendukung:<br>" +
              "- Pemrograman (Java, Kotlin, Swift, Objective-C)<br>" +
              "- Pengembangan aplikasi mobile menggunakan React Native atau Angular<br>" +
              "- Desain UI/UX untuk aplikasi mobile<br>" +
              "- Integrasi API dan keamanan aplikasi mobile<br><br>" +
              "💡 Ingat, dunia pengembangan aplikasi mobile terus berkembang pesat! Terus eksplorasi, belajar, dan jadilah bagian dari perubahan teknologi digital yang luar biasa! 🚀" +
              "<br><br>Semoga " +
              careervalue +
              " menjadi kenyataan ya!!";
            } 

            else if (
            interest.includes("data") && // Data Analyst
            skillMatch(
              "excel",
              "sql",
              "python",
              "r",
              "data visualization",
              "tableau",
              "power bi",
              "statistics",
              "data mining",
              "data cleaning",
              "business intelligence",
              "machine learning",
              "data wrangling",
              "regression",
              "dashboard",
              "hadoop",
              "spark")&&
            personalityMatch(
              "communication","problem solving","critical thinking",
              "attention to detail","teamwork","analytical thinking",
              "time management","adaptability","presentation skills",
              "business acumen")
            ) {
            recommendation =
              "Halo " + name + "! 👋<br><br>" +
              "Kamu menunjukkan potensi kuat sebagai seorang <strong>Data Analyst</strong>! 📊<br><br>" +
              "👉 Karier yang cocok buat kamu:<br>" +
              "- Data Analyst<br>" +
              "- Business Intelligence Analyst<br>" +
              "- Data Scientist Pemula<br>" +
              "- Reporting Specialist<br><br>" +
              "🛠️ Keahlian teknis yang dibutuhkan:<br>" +
              "- Penguasaan Excel, SQL, dan tools seperti Tableau atau Power BI<br>" +
              "- Analisis statistik menggunakan Python atau R<br>" +
              "- Pembersihan, eksplorasi, dan visualisasi data<br>" +
              "- Pemahaman konsep machine learning dasar<br><br>" +
              "💡 Data adalah aset berharga. Kemampuanmu dalam menggali insight dari data bisa membantu perusahaan mengambil keputusan yang lebih cerdas.<br>" +
              "Teruslah belajar teknik baru, kuasai berbagai tools, dan jadilah jembatan antara data dan strategi bisnis! 🚀<br><br>" +
              "<br><br>Semoga " +
              careervalue +
              " menjadi kenyataan ya!!";
            } 
            
            else if (
            interest.includes("data") &&  //Data Science
            skillMatch(
              "python",
              "r",
              "sql",
              "data wrangling",
              "data cleaning",
              "machine learning",
              "deep learning", 
              "data visualization",
              "statistics",
              "probability",
              "big data",
              "hadoop",
              "spark",
              "tensorflow",
              "nlp",
              "time series",
              "data mining",
              "cloud computing",
              "aws",
              "azure",
              "google cloud",
              "data pipelines")&&
            personalityMatch(  
              "critical thinking",
              "problem solving",
              "communication",
              "collaboration",
              "teamwork",
              "adaptability",
              "curiosity",
              "attention to detail",
              "story telling",
              "business acumen",
              "analytical thinking",
              "learning agility")
            ) {
            recommendation =
               "Halo [nama] 👋<br><br>" +
              "Kamu menunjukkan potensi luar biasa di bidang <strong>Data Science</strong>! 📊🧠<br><br>" +
              "👉 Karier yang cocok buat kamu:<br>" +
              "- Data Scientist<br>" +
              "- Machine Learning Engineer<br>" +
              "- AI Specialist<br>" +
              "- Research Scientist<br><br>" +
              "🛠️ Keahlian yang mendukung:<br>" +
              "- Pemrograman dengan Python, R, SQL<br>" +
              "- Statistik dan probabilitas untuk analisis data<br>" +
              "- Machine Learning & Deep Learning (scikit-learn, TensorFlow, Keras)<br>" +
              "- Visualisasi data dengan Matplotlib, Seaborn, Power BI, dsb.<br>" +
              "- Pengolahan data besar (Big Data), Cloud (AWS, GCP, Azure)<br><br>" +
              "💡 Seorang Data Scientist mampu mengubah data menjadi wawasan berharga yang mendorong keputusan bisnis.<br>" +
              "Kembangkan terus rasa ingin tahu, kemampuan berpikir analitis, dan ketajaman bisnis kamu.<br>" +
              "Dunia butuh orang sepertimu yang bisa menjembatani data dan solusi nyata! 🚀"+
              "<br><br>Semoga " +
              careervalue +
              " menjadi kenyataan ya!!";
            } 

            else if (
            interest.includes("data") &&  //Machine Learning Engineer
            skillMatch(
              "python",
              "r",
              "java",
              "c++",
              "sql",
              "machine learning",
              "deep learning",
              "neural networks",
              "scikit-learn",
              "tensorflow",
              "pytorch",
              "data preprocessing",
              "data wrangling",
              "model training",
              "model evaluation",
              "model deployment",
              "cloud computing",
              "aws",
              "azure",
              "gcp",
              "docker",
              "kubernetes",
              "big data",
              "hadoop",
              "spark",
              "data pipelines",
              "api development")&&
            personalityMatch(
              "problem solving",
              "critical thinking",
              "communication",
              "collaboration",
              "adaptability",
              "teamwork",
              "curiosity",
              "attention to detail",
              "self learning",
              "project management")
            ) {
            recommendation =
              "Halo " + name + "! 👋<br><br>" +
              "Kamu menunjukkan potensi besar untuk menjadi seorang <strong>Machine Learning Engineer</strong>! 🤖📊<br><br>" +
              "👉 Karier yang cocok buat kamu:<br>" +
              "- Machine Learning Engineer<br>" +
              "- AI Developer<br>" +
              "- Deep Learning Engineer<br>" +
              "- MLOps Engineer<br><br>" +
              "🛠️ Keahlian teknis yang mendukung:<br>" +
              "- Bahasa pemrograman seperti Python, R, atau Java<br>" +
              "- Framework machine learning seperti TensorFlow, PyTorch, Scikit-learn<br>" +
              "- Pengolahan data, pelatihan dan evaluasi model<br>" +
              "- Pemahaman cloud computing (AWS, GCP, Azure) & deployment dengan Docker/Kubernetes<br><br>" +
              "🧠 Soft skill penting:<br>" +
              "- Problem solving & berpikir kritis<br>" +
              "- Komunikasi yang efektif dan kolaborasi tim<br>" +
              "- Rasa ingin tahu dan adaptabilitas terhadap teknologi baru<br><br>" +
              "💡 Dunia Machine Learning berkembang sangat cepat. Kemampuanmu untuk menggabungkan data, algoritma, dan intuisi akan membuka banyak peluang luar biasa.<br>" +
              "Teruslah belajar dan eksplorasi—masa depan AI sedang menantimu! 🚀"+
              "<br><br>Semoga " +
              careervalue +
              " menjadi kenyataan ya!!";
            } 

            else if (
            interest.includes("keamanan") &&  //Cyber Security
            skillMatch(
            "network security",
            "penetration testing",
            "ethical hacking",
            "cryptography",
            "incident response",
            "firewall configuration",
            "malware analysis",
            "vulnerability assessment",
            "risk management",
            "siem tools",
            "linux",
            "bash scripting",
            "python",
            "security auditing",
            "cloud security",
            "identity and access management",
            "forensics")&&
            personalityMatch(
            "problem solving",
            "critical thinking",
            "attention to detail",
            "communication",
            "integrity",
            "teamwork",
            "adaptability",
            "stress management",
            "curiosity",
            "resilience")
            ) {
            recommendation =
            "Halo " + name + "! 🛡️<br><br>" +
            "Kamu menunjukkan potensi luar biasa di bidang <strong>Cyber Security</strong>! 🔐💻<br><br>" +
            "👉 Karier yang cocok buat kamu:<br>" +
            "- Cyber Security Analyst<br>" +
            "- Penetration Tester (Ethical Hacker)<br>" +
            "- Security Engineer<br>" +
            "- Incident Response Specialist<br>" +
            "- Cloud Security Specialist<br><br>" +
            "🛠️ Keahlian teknis yang mendukung:<br>" +
            "- Network Security, Ethical Hacking, dan Cryptography<br>" +
            "- Tools seperti SIEM, Firewall, dan Malware Analysis<br>" +
            "- Bahasa pemrograman seperti Python, Bash<br>" +
            "- Pengetahuan tentang keamanan cloud dan manajemen identitas<br><br>" +
            "💡 Cyber security bukan hanya soal teknis, tapi juga kepercayaan, integritas, dan ketelitian tinggi.<br>" +
            "Dunia digital makin kompleks, dan kamu adalah garda terdepannya dalam menjaga keamanan informasi! 🔒<br>" +
            "Teruslah belajar, ikuti perkembangan ancaman siber, dan jadilah pelindung masa depan digital! 🚀<br><br>" +
            "Semoga " + careervalue + " menjadi kenyataan ya!!";
            } 

            else if (
            interest.includes("keamanan") &&  //UI/UX Designer
            skillMatch(
            "Desain Visual",
            "Tipografi",
            "Teori Warna",
            "Tata Letak",
            "Perangkat Desain",
            "Figma",
            "Sketch",
            "Adobe XD",
            "Photoshop",
            "Prototyping",
            "Riset Pengguna",
            "Wawancara",
            "Survei",
            "Analisis Data",
            "Pengujian Kegunaan",
            "User Testing",
            "Arsitektur Informasi",
            "Sitemap",
            "User Flow",
            "Pembuatan Prototipe",
            "Pengembangan Aplikasi",
            "HTML",
            "CSS",
            "JavaScript",
            "UX Writing",
            "Microcopy",
            "Analitik Pengguna",
            "Google Analytics")&&
            personalityMatch(
            "Empati",
            "Komunikasi",
            "Berpikir Kritis",
            "Kolaborasi",
            "Manajemen Waktu",
            "Adaptabilitas",
            "Kreativitas",
            "Kepemimpinan",
            "Pemecahan Masalah",
            "Perhatian terhadap Detail",
            "Berpikir Analitis",
            "Kecerdasan Emosional",
            "Keterampilan Presentasi",
            "Negosiasi",
            "Manajemen Proyek",
            "Berpikir Strategis",
            "Keterampilan Interpersonal",
            "tekun")
            ) {
            recommendation =
            "Halo " + name + "! 🌟<br><br>" +
            "Kamu berada di jalur yang tepat untuk menjadi <strong>UI/UX Designer</strong>! 🎨💡<br><br>" +
            "✨ Ingat, setiap klik dan gesekan yang kamu rancang membentuk pengalaman jutaan pengguna. Jadilah suara mereka dengan:<br>" +
            "- Selalu mendengarkan kebutuhan pengguna🗣️<br>" +
            "- Berani bereksperimen dan mengeksplorasi ide baru🚀<br>" +
            "- Menyempurnakan detail demi kemudahan dan keindahan visual🔍<br><br>" +
            "🌱 Teruslah belajar tren desain terbaru, ikuti workshop, dan bangun portofolio yang mencerminkan gaya unikmu. Semakin kamu berlatih, semakin besar impak yang bisa kamu ciptakan!<br><br>" +
            "🤝 Jangan lupa bangun jaringan dengan komunitas desain—kolaborasi membuka pintu kesempatan dan inspirasi tanpa batas.<br><br>" +
            "🔔 Ingat: desain yang baik bukan hanya soal looks, tapi juga soal feel. Jadilah perancang pengalaman yang tak terlupakan!<br><br>" +
            "Semangat terus, dan wujudkan visimu di dunia digital! 🌐💪" +
            "Semoga " + careervalue + " menjadi kenyataan ya!!";
            } 

            else if (
            interest.includes("keamanan") &&  //Technical Support / Help Desk
            skillMatch(
            "ticketing systems",
            "cyber security",
            "software",
            "hardware",
            "Troubleshooting",
            "programming",
            "IT diagnostics",
            "Remote access")&&
            personalityMatch(
            "Patience",
            "Focus",
            "Empathy",
            "Active Listening",
            "Conflict Resolution",
            "Teamwork",
            "Problem Solving",
            "Critical Thinking",
            "Deductive Reasoning",
            "Decision Making",
            "Research",
            "Attention to Detail",
            "Stress Management",
            "Motivation",
            "Positivity",
            "Respect")
            ) {
            recommendation =
            "Halo " + name + "! 🎧💻<br><br>" +
            "Kamu punya bakat untuk menjadi pahlawan di balik layar sebagai <strong>Technical Support / Help Desk</strong>! 🛠️✨<br><br>" +
            "🔍 Ingat, setiap masalah yang kamu pecahkan membuat pengalaman pengguna lebih mulus. Terus asah kemampuanmu untuk:<br>" +
            "- Menjawab dengan sabar dan komunikatif 🗣️<br>" +
            "- Mendeteksi dan menyelesaikan kendala dengan cepat ⚡<br>" +
            "- Menggunakan alat remote dan ticketing system secara mahir 🖥️<br><br>" +
            "🤝 Bangun hubungan baik dengan pengguna—kepercayaan mereka adalah kunci suksesmu!<br><br>" +
            "📚 Terus belajar teknologi baru, ikuti pelatihan, dan sertifikasi untuk menambah keahlian. Semakin kamu berkembang, semakin besar dampak positif yang dapat kamu berikan!<br><br>" +
            "🚀 Dunia TI selalu butuh problem solver seperti kamu. Tetap semangat, dan jadilah pilar utama layanan pelanggan!" +
            "Semoga " + careervalue + " menjadi kenyataan ya!!";
            } 

            else if (
            interest.includes("keamanan") &&  //Business Analyst
            skillMatch("Structured Query Language (SQL)", 
            "General Querying",
            "Statistical Languages", 
            "Statistical Software", 
            "Data Cleaning",
            "Descriptive Analytics", 
            "Predictive Analytics",
            "Prescriptive Analytics", 
            "Reporting",   
            "Stakeholder Interviewing")&&
            personalityMatch(
            "Analytical Thinking",
            "Communication",
            "Problem Solving",
            "Critical Thinking",
            "Adaptability")
            ) {
            recommendation =
            "Halo " + name + "! 📈🕵️‍♂️<br><br>" +
            "Kamu memiliki bakat alami sebagai <strong>Business Analyst</strong>! 💡✨<br><br>" +
            "🔍 Ingat, setiap insight yang kamu gali dari data dan proses bisnis dapat menggerakkan strategi perusahaan ke arah yang lebih baik. Terus asah kemampuanmu untuk:<br>" +
            "- Mengumpulkan dan membersihkan data dengan teliti 🧹<br>" +
            "- Menganalisis tren dan pola menggunakan SQL, R, atau Python 📊<br>" +
            "- Membuat visualisasi yang memukau dan mudah dipahami 🎨<br>" +
            "- Berkomunikasi efektif dengan stakeholder untuk memahami kebutuhan mereka 🗣️<br><br>" +
            "🤝 Bangun kolaborasi kuat dengan tim lintas fungsi—kunci sukses setiap proyek!<br><br>" +
            "📚 Jangan berhenti belajar: ikuti pelatihan terbaru, dapatkan sertifikasi analytics, dan kembangkan wawasan bisnis kamu. Semakin luas pengetahuanmu, semakin besar dampak positif yang dapat kamu berikan! 🌟<br><br>" +
            "🚀 Dunia bisnis selalu butuh problem solver visioner seperti kamu. Tetap semangat dan jadilah penggerak perubahan!"+
            "Semoga " + careervalue + " menjadi kenyataan ya!!";
            } 

            else if (
            interest.includes("keamanan") &&  //It project manager 
            skillMatch(
            "Lifecycle Management",
            "Resource Management",
            "Stakeholder Management",
            "Project Documentation",
            "Budgeting ",
            "Cost Control",
            "Scheduling",
            "Time Management",
            "Risk Management",
            "Waterfall Methodologies",
            "Project Management Tools",
            "IT Infrastructure",
            "Cloud Computing",
            "Quality Assurance", 
            "Testing",
            "Configuration Management",
            "Vendor Management",
            "Performance Metrics",
            "Requirements Analysis")&&
            personalityMatch(
            "Creative Mindset",
            "Complex Decision",
            "Critical Thinking",
            "Leadership",
            "Active Listening",
            "Empathy",
            "Organization",
            "Ethics",
            "Negotiation",
            "Accountability",
            "Goal Setting",
            "Adaptability",
            "Time Management",
            "Reliability")
            ) {
            recommendation =
            "Halo " + name + "! 📊🚀<br><br>" +
            "Kamu memiliki kombinasi luar biasa antara kepemimpinan, manajemen, dan wawasan teknologi — ciri khas dari seorang <strong>IT Project Manager</strong> andal! 🧠💼<br><br>" +
            "👉 Peran yang cocok buat kamu:<br>" +
            "- IT Project Manager<br>" +
            "- Program Manager<br>" +
            "- Scrum Master<br>" +
            "- Technical Project Lead<br>" +
            "- Digital Transformation Specialist<br><br>" +
            "🛠️ Keterampilan penting yang sudah kamu kuasai:<br>" +
            "- Pengelolaan proyek dengan metodologi Agile dan Waterfall<br>" +
            "- Manajemen anggaran, waktu, dan sumber daya<br>" +
            "- Kolaborasi lintas fungsi dan komunikasi dengan stakeholder<br>" +
            "- Penggunaan tools seperti Jira, Trello, Asana, hingga MS Project<br>" +
            "- Pemahaman kuat tentang infrastruktur IT dan cloud services<br><br>" +
            "💡 Dalam dunia yang serba digital, peranmu sebagai pengarah strategi dan eksekutor proyek adalah kunci sukses organisasi!<br>" +
            "Terus tingkatkan kepemimpinan dan kemampuan analitismu, karena masa depan proyek digital ada di tanganmu! ✨<br><br>" +
            "Yakinlah, " + careervalue + " bukan sekadar mimpi, tapi tujuan yang sedang kamu wujudkan! 🌟";
            } 

            else {
            recommendation =
            "Halo " + name + "! 🌟<br><br>" +
            "Kami belum menemukan kecocokan spesifik di jalur "+
            interest +
            " dari input kamu. Tetapi jangan khawatir, ini bukan akhir dari perjalananmu! 🚀<br><br>" +
            "💡 Dunia teknologi itu sangat luas dan terus berkembang. Kamu mungkin memiliki potensi besar di bidang yang belum kita identifikasi, atau mungkin jalur karier lainnya yang tidak terduga. Beberapa bidang yang bisa kamu coba jelajahi adalah:<br>" +
            "- UI/UX Design<br>" +
            "- Quality Assurance (QA) Engineer<br>" +
            "- Cybersecurity Specialist<br>" +
            "- Cloud Architect<br>" +
            "- Product Manager<br>" +
            "- Front-end Developer<br>" +
            "- Back-end Developer<br>" +
            "- Full Stack-end Developer<br>" +
            "✨ Setiap orang memiliki keahlian dan perjalanan uniknya. Jangan pernah menyerah, teruslah eksplorasi dan belajar hal baru. Mungkin saja, bidang yang tepat untukmu hanya menunggu untuk ditemukan. Teruslah berusaha keras, tetap percaya pada kemampuan diri, dan masa depan yang cerah akan datang! 💪💡" +
            "<br><br>Semoga " + careervalue + " menjadi kenyataan ya!";
            }
            
          // Tampilkan hasil ke HTML
          document.getElementById("result").innerHTML = recommendation;

        });