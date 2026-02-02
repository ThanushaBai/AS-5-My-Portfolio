import Image from "next/image";
import { Poppins } from "next/font/google";
import { Zalando_Sans_Expanded } from "next/font/google";
import { Pixelify_Sans } from "next/font/google";

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});


const zalando = Zalando_Sans_Expanded({
  subsets: ["latin"],
  fallback: ["Arial", "sans-serif"],
  weight: "400",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function Home() {
  return (
    <main className="w-full">
    
      {/* HOME */}
      <section
  id="home"
  className="min-h-screen flex flex-col items-center justify-center text-center px-6"
>
  <h1 className={`text-4xl font-bold ${poppins.className}`}>
    Hi, I’m <span className="text-orange-500">Thanusha Bai V</span>
  </h1>

  <p className={`mt-4 text-gray-300 ${zalando.className}`}>
    Cloud & DevOps | Software Testing | QA Automation
  </p>

  <Image
    src="/profile.jpeg"
    alt="Thanusha Bai"
    width={160}
    height={160}
    className="rounded-full mt-6 border-2 border-orange-500"
  />

  <div className="mt-6 flex gap-6 text-sm">
    <a
      href="https://www.linkedin.com/in/thanusha-bai-v-06304a307/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-orange-500 hover:underline"
    >
      LinkedIn
    </a>

    <a
      href="https://github.com/thanushabai"
      target="_blank"
      rel="noopener noreferrer"
      className="text-orange-500 hover:underline"
    >
      GitHub
    </a>
  </div>
</section>


      {/* ABOUT */}
      <section
        id="about"
        className="min-h-screen flex flex-col items-center justify-center px-6"
      >
        <h2 className={`text-3xl font-bold mb-4 ${poppins.className}`}>About Me</h2>
        <p className={`max-w-3xl text-center text-gray-300  ${zalando.className}`}>
          Hi! I’m Thanusha, currently working as a Program Analyst Intern at CepiaLabs.</p>
          <p className={`max-w-3xl text-center text-gray-300 mt-2 tracking-wide ${zalando.className}`}>
            I’m passionate about cloud computing, DevOps, and software testing, and I enjoy building efficient, scalable, and user-friendly applications while ensuring top-notch quality.
        </p>
  <a
    href="/Thanusha_Bai_V_CV.pdf"
    download
    className="mt-6 inline-block bg-orange-500 text-black px-6 py-3 rounded hover:opacity-90 transition"
  >
    Download CV
  </a>
  <div className="mt-10 max-w-3xl text-gray-300 space-y-8">

  {/* EDUCATION */}
  <div>
    <h3 className={`text-xl font-semibold text-orange-500 mb-2 ${poppins.className}`}>
      Education
    </h3>
    <ul className="space-y-2">
      <li>
        <span className="font-semibold">Master of Computer Application</span> – Manipal University Jaipur  
        <br />
        <span className="text-sm text-gray-400">(Sep 2025 – Present)</span>
      </li>
      <li>
        <span className="font-semibold">Bachelor of Computer Application</span> – SJES College Of Management Studies  
        <br />
        <span className="text-sm text-gray-400">(Aug 2022 – June 2025)</span>
      </li>
      <li>
        <span className="font-semibold">CGPA:</span> 8.61
      </li>
    </ul>
  </div>

  {/* WORK EXPERIENCE */}
  <div>
    <h3 className={`text-xl font-semibold text-orange-500 mb-2 ${poppins.className}`}>
      Work Experience
    </h3>
    <ul className="space-y-2">
      <li>
        <span className="font-semibold">Program Analyst Intern</span>, CepiaLabs  
        <br />
        <span className="text-sm text-gray-400">Present</span>
      </li>
      <li>
        <span className="font-semibold">Software Testing Intern</span>, Internship Studio  
        <br />
        <span className="text-sm text-gray-400">(Jan 2025 – April 2025)</span>
      </li>
    </ul>
  </div>

</div>

</section>

      
     {/* SKILLS */}
<section
  id="skills"
  className="min-h-screen scroll-mt-24 flex flex-col items-center justify-center px-6"
>
  <h2 className={`text-3xl font-bold mb-8 ${poppins.className}`}>Skills</h2>

  <div className="max-w-3xl text-gray-300 space-y-4">
    <p>
      <span className="font-semibold text-orange-500">Technical:</span><br />
      Python, MERN (hands-on), MongoDB, Git/GitHub, Jira, Postman, AWS, Cypress, JMeter, xUnit
    </p>

    <p>
      <span className="font-semibold text-orange-500">Software Testing:</span><br />
      Manual Testing & Automation QA
    </p>

    <p>
      <span className="font-semibold text-orange-500">Soft Skills:</span>
    </p>

    <ul className="list-disc list-inside space-y-1">
      <li>Leadership</li>
      <li>Critical Thinking</li>
      <li>Problem Solving</li>
      <li>Effective Communication</li>
      <li>Initiative & Proactiveness</li>
    </ul>
  </div>
</section>


      {/* PROJECTS */}
<section
  id="projects"
  className="min-h-screen scroll-mt-24 flex flex-col items-center justify-center px-6"
>
  <h2 className={`text-3xl font-bold mb-8 ${poppins.className}`}>Projects</h2>

  <div className="max-w-3xl space-y-8 text-gray-300">

    <div>
      <h3 className="text-xl font-semibold text-orange-500">
        CRETIO – B2B SaaS Project Management & Funnel Builder
      </h3>
      <p className="mt-1 text-sm">
        <span className="font-semibold">Tech Stack:</span> Next.js, TypeScript, Node.js, MongoDB, Tailwind CSS
      </p>

      <ul className="list-disc list-inside mt-3 space-y-1">
        <li>Developed SaaS application with CRM, lead management, Kanban board, dashboards, and funnel builder</li>
        <li>Implemented multi-tenant role-based access with agency & sub-account support</li>
        <li>Designed responsive, accessible dashboards with light/dark mode</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-orange-500">
        QA Automation Workflow Project
      </h3>
      <p className="mt-1 text-sm">
        <span className="font-semibold">Tech Stack:</span> Cypress, Apache JMeter, Jest, GitHub Actions
      </p>

      <ul className="list-disc list-inside mt-3 space-y-1">
        <li>Built end-to-end QA automation framework for UI, unit, and performance testing</li>
        <li>Automated UI test cases using Cypress and load testing with Apache JMeter</li>
        <li>Integrated GitHub Actions CI for automated test execution</li>
      </ul>
    </div>

  </div>
</section>


      {/* ACTIVITIES */}
<section
  id="activities"
  className="min-h-screen scroll-mt-24 flex flex-col items-center justify-center px-6"
>
  <h2 className={`text-3xl font-bold mb-8 ${poppins.className}`}>Certifications & Leadership</h2>

  <div className="max-w-3xl text-gray-300 space-y-6">

    <p>
      <span className="font-semibold text-orange-500">Certifications:</span><br />
      AWS Cloud Practitioner Essentials, AWS Technical Essentials, Lamp Stack + PHP,
      Agile with Atlassian Jira
    </p>

    <p>
      <span className="font-semibold text-orange-500">Leadership & Participation:</span><br />
      Top position as Team Captain – Tech Ops Quiz (Team Binary Beast).  
      Participated in national tech events including Open Source India,
      Bengaluru Tech Summit, and Electronics For You Expo.
    </p>

    <p>
      <span className="font-semibold text-orange-500">Languages:</span><br />
      English, Kannada, Hindi, Marathi, Telugu
    </p>

  </div>
</section>


      {/* CONTACT */}
      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center px-6"
      >
        <h2 className={`text-3xl font-bold mb-4 ${poppins.className}`}>Contact</h2>
        <p>Email: thanushabai12@gmail.com</p>

        <p>Phone: +91 7795914171</p>

        <p>LinkedIn: linkedin.com/in/thanusha-bai-v-06304a307/</p>

        <p>Instagram: @t.1204._</p>

        <p>Facebook: thanushabaiv</p>

      </section>

    </main>
  );
}
