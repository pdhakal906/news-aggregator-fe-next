import { Paper, Text, useMantineTheme } from "@mantine/core";

export default function ExperienceTimeline() {
  return (
    <Paper
      id="about"
      className="max-w-5xl mx-auto shadow-lg"
      p="xl"
      radius="md"
      // 👇 use Mantine CSS variables — these update automatically in dark mode
      style={{
        backgroundColor: "var(--mantine-color-body)",
        color: "var(--mantine-color-text)",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr,1fr] min-h-screen">
        {/* Left Column */}
        <div className="p-12 md:p-16 border-r-4 border-black">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-block border-2 border-black px-4 py-2 mb-8">
              <span className="text-sm font-bold tracking-widest">
                Fullstack Developer
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Hello, I'm
              <br />
              Pratik Dhakal
            </h1>

            <Text className="leading-relaxed text-justify max-w-md" c="dimmed">
              I enjoy building software and have cultivated my skills through
              hands-on experience and self-learning, including teaching myself
              to code.
            </Text>
          </div>

          <hr className="border-t-2 border-black mb-12" />

          {/* Experience Section */}
          <div>
            <h2 className="text-4xl font-bold mb-12">Experience</h2>
            {/* Cloco - Fullstack Developer */}

            <div className="mb-12 flex gap-8">
              <div className="flex-shrink-0 self-center  w-16">
                <div className="text-xs font-bold tracking-wider  -rotate-90 origin-top-left whitespace-nowrap mt-16">
                  2025 - PRESENT
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Fullstack Developer</h3>
                <p className="text-neutral-500 italic mb-4">Cloco Inc, Nepal</p>
              </div>
            </div>

            {/* Inspiring Lab - Fullstack Developer */}
            <div className="mb-12 flex gap-8">
              <div className="flex-shrink-0 self-center w-16">
                <div className="text-xs font-bold tracking-wider -rotate-90 origin-top-left whitespace-nowrap mt-16">
                  2023 - 2025
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Fullstack Developer</h3>
                <p className="text-neutral-500 italic mb-4">
                  Inspiring Lab, Nepal
                </p>
                <ul className="list-disc pl-5 text-neutral-600 leading-relaxed space-y-2">
                  <li>
                    Built RESTful APIs using Django, Django REST Framework and
                    FastAPI.
                  </li>
                  <li>Developed interactive UIs with React.js and Next.js.</li>
                  <li>
                    Built scalable web crawlers using Scrapy and Selenium.
                  </li>
                  <li>
                    Performed data analysis and visualizations with Pandas,
                    Matplotlib and Streamlit.
                  </li>
                  <li>
                    Mentored interns on data collection, analysis and
                    presentation.
                  </li>
                </ul>
              </div>
            </div>

            {/* Appen - Independent Contractor */}
            <div className="mb-12 flex gap-8">
              <div className="flex-shrink-0 self-center w-16">
                <div className="text-xs font-bold tracking-wider -rotate-90 origin-top-left whitespace-nowrap mt-16">
                  2019 - 2024
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">
                  Independent Contractor
                </h3>
                <p className="text-neutral-500 italic mb-4">Appen, Australia</p>
                <ul className="list-disc pl-5 text-neutral-600 leading-relaxed space-y-2">
                  <li>
                    Transcribed audio clips to train natural language processing
                    models.
                  </li>
                  <li>Performed quality assurance on labeled data.</li>
                </ul>
              </div>
            </div>

            {/* Cloudfactory - Cloudworker */}
            <div className="mb-12 flex gap-8">
              <div className="flex-shrink-0 self-center w-16">
                <div className="text-xs font-bold tracking-wider -rotate-90 origin-top-left whitespace-nowrap mt-16">
                  2019 - 2023
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Cloudworker</h3>
                <p className="text-neutral-500 italic mb-4">
                  Cloudfactory, Nepal
                </p>
                <ul className="list-disc pl-5 text-neutral-600 leading-relaxed space-y-2">
                  <li>
                    Annotated and tagged images to train computer vision models.
                  </li>
                  <li>Carried out quality assurance tasks.</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex-shrink-0 self-center w-16">
                <div className="text-xs font-bold tracking-wider -rotate-90 origin-top-left whitespace-nowrap mt-16">
                  2017 - 2019
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">
                  Jr. Marketing Officer
                </h3>
                <p className="text-neutral-500 italic mb-4">
                  Guru Saving & Credit Co-operative, Nepal
                </p>
                <ul className="list-disc pl-5 text-neutral-600 leading-relaxed space-y-2">
                  <li>
                    Communicated company mission and values; supported customer
                    acquisition.
                  </li>
                  <li>
                    Managed loan repayment follow-ups and designed printable
                    forms and ID cards using Adobe tools.
                  </li>
                </ul>
              </div>
            </div>

            {/* End Experience Section */}
          </div>
        </div>

        {/* Right Column */}
        <div className="p-12 md:p-16">
          {/* Contact Section */}
          <div className="mb-12">
            <div className="inline-block border-2 border-black px-4 py-2 mb-6">
              <span className="text-sm font-bold tracking-widest">CONTACT</span>
            </div>

            <div className="space-y-2 text-neutral-700">
              <p>pdhakal906@gmail.com</p>
              <p>Kathmandu, Nepal</p>
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-12">
            <div className="inline-block border-2 border-black px-4 py-2 mb-6">
              <span className="text-sm font-bold tracking-widest">
                EDUCATION
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <p className="font-bold mb-1">2025</p>
                <p className="text-neutral-700">Bachelor of Business Studies</p>
                <p className="text-neutral-700">Tribhuvan University</p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-12">
            <div className="inline-block border-2 border-black px-4 py-2 mb-6">
              <span className="text-sm font-bold tracking-widest">SKILLS</span>
            </div>

            <div className="space-y-2 text-neutral-700">
              <p>Python</p>
              <p>Javascript</p>
              <p>Web Scraping</p>
              <p>Web Developement</p>
            </div>
          </div>

          {/* Languages Section */}
          <div>
            <div className="inline-block border-2 border-black px-4 py-2 mb-6">
              <span className="text-sm font-bold tracking-widest">
                LANGUAGES
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <p className="font-bold text-neutral-700">Nepali</p>
                <p className="text-neutral-700">Native proficiency</p>
              </div>
              <div>
                <p className="font-bold text-neutral-700">English</p>
                <p className="text-neutral-700">Working proficiency </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
}
