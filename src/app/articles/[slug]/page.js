import { getArticleBySlug, articles } from '../../../lib/data';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: 'Article Not Found' };
  
  return {
    title: `${article.title} | TechEthics`,
    description: article.description,
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <article className="py-5">
        <div className="container py-4 px-4 px-md-5 glass-panel rounded-4 mt-4 mb-5" style={{ maxWidth: '900px' }}>
          
          <header className="mb-5 text-center">
            <span className="badge bg-primary bg-opacity-10 text-primary mb-3 px-3 py-2 rounded-pill">
              {article.tag}
            </span>
            <h1 className="fw-bold mb-4 display-5">{article.title}</h1>
            <div className="d-flex justify-content-center align-items-center text-muted small mb-5">
              <div className="d-flex align-items-center me-4">
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold me-2" style={{ width: '32px', height: '32px' }}>
                  TE
                </div>
                <span>TechEthics Admin</span>
              </div>
              <div className="me-4"><i className="fa-regular fa-clock me-1"></i> {article.readingTime}</div>
              <div><i className="fa-regular fa-calendar me-1"></i> {article.publishDate}</div>
            </div>
            {article.imageUrl && (
              <img src={article.imageUrl} alt={article.title} className="img-fluid rounded shadow-sm w-100" style={{ maxHeight: '400px', objectFit: 'cover' }} />
            )}
          </header>

          <div className="article-content">
            {slug === 'industry-perspectives' && <IndustryPerspectivesContent />}
            {slug === 'self-development' && <SelfDevelopmentContent />}
            {slug === 'sharpening-the-axe' && <SharpeningTheAxeContent />}
          </div>
          
          <div className="mt-5 pt-4 border-top text-center">
            <Link href="/#articles" className="btn btn-outline-primary px-4 py-2">
              <i className="fa-solid fa-arrow-left me-2"></i> Back to Articles
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}

// -- Content Components --

function IndustryPerspectivesContent() {
  return (
    <>
      <div className="bg-light p-4 rounded mb-5 border">
        <h3 className="h5 fw-bold mb-3">Table of Contents</h3>
        <ul className="list-unstyled mb-0">
          <li className="mb-2"><a href="#digital-transformation" className="text-decoration-none"><i className="fa-solid fa-angle-right me-2 small text-muted"></i>1. Digital Transformation and AI</a></li>
          <li className="mb-2"><a href="#business-models" className="text-decoration-none"><i className="fa-solid fa-angle-right me-2 small text-muted"></i>2. Business Model Changes</a></li>
          <li className="mb-2"><a href="#sustainability" className="text-decoration-none"><i className="fa-solid fa-angle-right me-2 small text-muted"></i>3. Sustainability and Green Industry</a></li>
          <li className="mb-2"><a href="#labor-force" className="text-decoration-none"><i className="fa-solid fa-angle-right me-2 small text-muted"></i>4. Labor Force Changes and Upskilling</a></li>
          <li><a href="#industry-5" className="text-decoration-none"><i className="fa-solid fa-angle-right me-2 small text-muted"></i>5. Industry 5.0 and Human-Centered Innovation</a></li>
        </ul>
      </div>

      <h2 id="digital-transformation">1. Digital Transformation and AI</h2>
      <h3>Context and Background</h3>
      <p>Many industries are beginning to adopt artificial intelligence (AI), automation, and data analytics to improve operational efficiency and enhance customer experience. Digital technology fundamentally helps companies accelerate business processes, increase productivity, and create new innovations across various industrial sectors.</p>
      
      <div className="quote-card shadow-sm border-0">
        "True transformation occurs when AI does not just speed up old tasks, but creates new operational models that were previously impossible without the technology."
      </div>

      <h3>Augmentation vs. Business Transformation</h3>
      <p>In practice, there is a significant difference between merely using AI as an additional tool (augmenting) and using it to alter the core of the business (transforming).</p>

      <h3>Effective Implementation Strategies</h3>
      <ul>
          <li><strong>Comprehensive Integration:</strong> Combining data analytics and automation into the entire business ecosystem, not just in a single department.</li>
          <li><strong>Focus on Customer Experience:</strong> Using AI for service personalization, predicting consumer needs, and responding to issues more quickly.</li>
          <li><strong>Data-Driven Decision Making:</strong> Moving away from traditional business instincts and shifting to strategies driven by data-driven insights generated by AI algorithms.</li>
      </ul>

      <h2 id="business-models" className="mt-5">2. Business Model Changes</h2>
      <h3>Context and Background</h3>
      <p>The digital era has changed how consumers interact with brands. Companies can no longer focus solely on one-off product sales. Instead, they are beginning to implement digital services, subscription models, and making customer experience a core strategic pillar.</p>

      <h3>Shifting to the Subscription Economy</h3>
      <p>This modern business model shifts the paradigm from "ownership" to "access" or "usership." This shift is crucial because it helps companies build sustainable, long-term relationships with customers, rather than just focusing on short-term transactions.</p>

      <h3>Adaptive Strategies for Modern Business Models</h3>
      <ul>
          <li><strong>Building Continuous Value:</strong> Ensuring products or services receive regular updates and provide continuous added value so customers have a strong reason to keep subscribing.</li>
          <li><strong>Service Personalization:</strong> Tailoring offers, content, or features based on the preference history of each individual user.</li>
          <li><strong>Prioritizing Retention Over Acquisition:</strong> Allocating greater resources to nurture existing loyal communities and customers compared to aggressively pursuing new ones.</li>
      </ul>

      <h2 id="sustainability" className="mt-5">3. Sustainability and Green Industry</h2>
      <h3>The Business Case and Ethical Considerations</h3>
      <p>Historically, environmental conservation efforts in the industrial sector were often viewed as an additional cost burden. However, the industry’s perspective has changed significantly. An increasing number of companies now treat “sustainability” as a key objective in their strategies and operations to enhance growth and global competitiveness.</p>
      <ul>
          <li>Improve operational efficiency by reducing costs and waste.</li>
          <li>Engage with existing customers and reach new ones to enhance competitive advantage.</li>
          <li>Protect and strengthen the brand and reputation while building public trust.</li>
          <li>Ensure the long-term viability and success of the business.</li>
          <li>Address regulatory challenges and opportunities.</li>
      </ul>

      <h3>A Progressive Strategy Toward a Green Industry</h3>
      <p>Business ethics demand concrete action through responsible governance. Companies of all sizes, ages, and sectors are moving forward on the path to sustainability by improving performance and reducing their resource footprint. Companies that are serious about implementing these ethical values take the following strategic steps:</p>
      <ul>
          <li>Address sustainability in a coordinated, integrated, and formal manner, rather than in an ad hoc, disconnected, and informal way.</li>
          <li>Focus on improving competitiveness and revenue rather than solely on cost-cutting, risk reduction, and efficiency gains.</li>
          <li>Using innovation, scenario planning, and strategic analysis to go beyond compliance.</li>
          <li>Integrating sustainability across all business functions.</li>
          <li>Focusing more on the long term.</li>
          <li>Working collaboratively with external stakeholders.</li>
      </ul>

      <h3>Key Benefits</h3>
      <p>This commitment to environmental responsibility yields very tangible results. Sustainable manufacturing practices have proven to benefit the industry in the following ways:</p>
      <ul>
          <li>Lower resource and production costs.</li>
          <li>Lower regulatory compliance costs.</li>
          <li>Increased sales and brand awareness.</li>
          <li>Greater access to financing and capital.</li>
          <li>Easier employee recruitment and retention.</li>
      </ul>
      <p className="text-muted small"><strong>Reference:</strong> [EPA] U.S. Environmental Protection Agency. (n.d.). Sustainable Manufacturing.</p>

      <h2 id="labor-force" className="mt-5">4. Labor Force Changes and Upskilling</h2>
      <h3>Context and Background</h3>
      <p>Amid the rapid pace of automation and the integration of Artificial Intelligence (AI) across various sectors, industries are facing massive disruption in their workforce structures. From a business ethics perspective, corporate responsibility is no longer limited to product innovation or service efficiency, but also extends to the well-being of the people working within them. This phenomenon highlights the urgency of upskilling—the process of training existing employees in new, more relevant skills—as a solution to bridge the skills gap while preserving workers’ dignity.</p>
      
      <h3>The State of the Skills Gap in the Industry</h3>
      <p>The current cyber threat and technology landscape is evolving much faster than the conventional labor market’s ability to provide ready-to-work talent. Based on data and discussions from the RSA Conference (RSAC) covered by Axios, there appears to be a significant shift in focus among industry leaders. Cybersecurity leaders are reportedly placing less emphasis on recruiting new talent and are instead more concerned about whether their current teams possess the necessary skills to address a threat landscape that has been amplified by AI.</p>

      <h3>Upskilling as a Key Strategy and a Moral Responsibility</h3>
      <p>Faced with these changes, companies are at an ethical crossroads: should they lay off employees whose skills are becoming obsolete and replace them with new hires, or invest in their existing workforce? The industry now recognizes that upskilling is both economically sensible and ethically necessary.</p>
      <ul>
          <li><strong>Keeping Pace with Machine Capabilities:</strong> Workers are required to acquire new skills in managing, monitoring, and controlling AI-based tools.</li>
          <li><strong>Ethical Support:</strong> Industry ethics require companies not to leave their workers behind without adequate training support.</li>
          <li><strong>Loyalty and Retention:</strong> By providing ongoing training, companies build a foundation of trust with their employees, demonstrating that humans are not simply discarded when machines take over basic tasks.</li>
      </ul>

      <h3>Ethical Dilemmas and Long-Term Risks</h3>
      <p>Although upskilling is a positive step, this practice is not without strategic challenges that could lead to new ethical dilemmas in the realm of human resources. Industry data highlights a critical warning: the tendency for companies to deprioritize the recruitment of new workers in order to focus entirely on upskilling internal staff may actually exacerbate the overall labor shortage in the long term. If the industry stops opening its doors to entry-level workers, the labor ecosystem will lose the supply of the next generation of talent, which ultimately jeopardizes the industry’s own sustainability.</p>
      <p className="text-muted small"><strong>Reference:</strong> Axios. (2025). Technology - Cyber leaders focusing on AI upskilling over hiring workers, data shows.</p>

      <h2 id="industry-5" className="mt-5">5. Industry 5.0 and Human-Centered Innovation</h2>
      <h3>Context and Background</h3>
      <p>Technological advancements often raise ethical concerns that humans will eventually be replaced by machines. However, the Industry 5.0 paradigm serves as a moral and strategic correction to the blind automation of the previous era (Industry 4.0). According to a study in the journal Processes (MDPI), Industry 5.0 no longer prioritizes machine efficiency alone, but rather emphasizes human-centered innovation. In this model, technology is designed not to replace workers, but to complement, empower, and work in harmony with them.</p>
      
      <h3>A Paradigm Shift and Ethical Imperatives</h3>
      <p>The Fourth Industrial Revolution, which focuses on artificial intelligence, the Internet of Things (IoT), and advanced robotics, often views human workers as a “cost” that must be minimized in the name of efficiency. Ethically speaking, this approach poses an existential threat to the well-being of the workforce. Industry 5.0 shifts this perspective. The main drivers of this shift include:</p>
      <ul>
          <li><strong>Repositioning Human Value:</strong> Recognizing that machines excel at precision and repetitive tasks, but humans have an absolute advantage in creativity, complex problem-solving, and emotional intelligence.</li>
          <li><strong>The Demand for Personalization:</strong> Modern markets demand highly customized products (mass personalization), which can only be achieved through human creativity supported by advanced technology.</li>
          <li><strong>Worker Well-being:</strong> Shifting the perspective from “workers serving machines” to “technology serving workers” to ensure a safer and more inclusive work environment.</li>
      </ul>

      <h3>A Transition Strategy Toward Human-Centered Innovation</h3>
      <p>To implement Industry 5.0 ethics, companies must redesign their work architecture. Human-centered innovation implementation strategies include:</p>
      <ul>
          <li><strong>Human-Machine Collaboration (Cobots):</strong> Integrating Collaborative Robots (Cobots) specifically designed to work alongside humans in the same space, taking over dangerous or physically demanding tasks while humans focus on supervision and design.</li>
          <li><strong>Ethical Tech Design:</strong> Developing algorithmic systems and artificial intelligence that respect human rights, protect workers’ data privacy, and are free from harmful biases.</li>
          <li><strong>Participatory Approach:</strong> Directly involving workers in the design and implementation of new technologies on the factory floor, so that innovation does not feel imposed from the top down.</li>
      </ul>

      <h3>Key Benefits</h3>
      <p>Integrating ethical values through human-centered innovation in Industry 5.0 offers multidimensional benefits:</p>
      <ul>
          <li><strong>Greater Product Innovation:</strong> The synergy between human creativity and machine speed results in products with high added value.</li>
          <li><strong>Improved Safety and Ergonomics:</strong> The risk of physical injury and mental exhaustion (burnout) decreases dramatically as technology takes over inhuman workloads.</li>
          <li><strong>Industrial Resilience:</strong> Companies become more adaptive to crises or sudden market changes, as they rely on the flexibility of human thinking, not just rigid machines.</li>
          <li><strong>Advantage in Attracting Talent:</strong> Companies that humanize their workforce through technology will find it much easier to attract and retain the best talent in the market.</li>
      </ul>
      <p className="text-muted small"><strong>Reference:</strong> Processes (MDPI). (n.d.). Industry 5.0 and Human-Centered Innovation.</p>

      <h2 id="conclusion" className="mt-5">Conclusion</h2>
      <p>In summary, the transition from automation to augmentation marks a profound shift towards human-centric technological evolution. Balancing innovation with ethics—ranging from sustainable manufacturing to proactive workforce upskilling—ensures that as our industries evolve, they do so not at the expense of human dignity or the environment, but in harmonious synergy with both.</p>
    </>
  );
}

function SelfDevelopmentContent() {
  return (
    <>
      <div className="bg-light p-4 rounded mb-5 border">
        <h3 className="h5 fw-bold mb-3">Table of Contents</h3>
        <ul className="list-unstyled mb-0">
          <li className="mb-2"><a href="#intro" className="text-decoration-none"><i className="fa-solid fa-angle-right me-2 small text-muted"></i>Introduction</a></li>
          <li className="mb-2"><a href="#why-important" className="text-decoration-none"><i className="fa-solid fa-angle-right me-2 small text-muted"></i>Why Self Development is Important</a></li>
          <li className="mb-2"><a href="#ways-to-improve" className="text-decoration-none"><i className="fa-solid fa-angle-right me-2 small text-muted"></i>Ways to Improve Self Development</a></li>
          <li className="mb-2"><a href="#benefits" className="text-decoration-none"><i className="fa-solid fa-angle-right me-2 small text-muted"></i>Benefits of Self Development</a></li>
          <li><a href="#references" className="text-decoration-none"><i className="fa-solid fa-angle-right me-2 small text-muted"></i>References</a></li>
        </ul>
      </div>

      <h2 id="intro">Introduction</h2>
      <p>Self-development is the process of improving an individual’s skills, knowledge, mindset, and personal qualities. In today’s rapidly changing world, self-development has become very important for students, employees, and professionals. People need to continuously learn and adapt in order to face competition, technological advancement, and challenges in daily life.</p>
      
      <div className="quote-card shadow-sm border-0">
          "People need to continuously learn and adapt in order to face competition and technological advancements."
      </div>

      <h2 id="why-important" className="mt-5">Why Self Development is Important</h2>
      
      <h3>1. Improves Skills and Knowledge</h3>
      <p>Self-development helps individuals gain new skills and increase their knowledge. Learning new abilities can improve academic performance and work productivity.</p>

      <h3>2. Increases Self-Confidence</h3>
      <p>When people improve themselves, they become more confident in facing challenges and communicating with others.</p>

      <h3>3. Helps Career Growth</h3>
      <p>Companies often look for individuals who are willing to learn and grow. Self-development can increase opportunities for promotion and career success.</p>

      <h3>4. Enhances Adaptability</h3>
      <p>Technology and industries continue to change rapidly. Self-development helps individuals adapt to new environments and situations.</p>

      <h3>5. Builds Better Personality</h3>
      <p>Developing positive habits, discipline, and emotional intelligence can improve personal relationships and decision-making.</p>

      <h2 id="ways-to-improve" className="mt-5">Ways to Improve Self Development</h2>
      <ul>
          <li>Reading books and articles</li>
          <li>Joining courses or training programs</li>
          <li>Practicing communication skills</li>
          <li>Learning time management</li>
          <li>Setting personal goals</li>
          <li>Doing self-evaluation regularly</li>
          <li>Participating in organizations or teamwork activities</li>
      </ul>

      <h2 id="benefits" className="mt-5">Benefits of Self Development</h2>
      <ul>
          <li>Better productivity</li>
          <li>Stronger leadership skills</li>
          <li>Improved problem-solving ability</li>
          <li>Greater motivation</li>
          <li>Increased career opportunities</li>
          <li>Better mental and emotional growth</li>
      </ul>

      <h2 id="references" className="mt-5 border-top pt-4">References</h2>
      <ul className="text-muted small">
          <li>BetterUp. (n.d.). Personal development: Definition, skills, and plan. Retrieved May 20, 2026.</li>
          <li>SkillsYouNeed. (n.d.). Personal development. Retrieved May 20, 2026.</li>
      </ul>
    </>
  );
}

function SharpeningTheAxeContent() {
  return (
    <>
      <div className="quote-card shadow-sm border-0 mb-5">
          "Why brute-force coding is never the answer in the fast-paced tech industry."
      </div>

      <div className="bg-light p-4 rounded mb-5 border">
        <h3 className="h5 fw-bold mb-3">Table of Contents</h3>
        <ul className="list-unstyled mb-0">
          <li className="mb-2"><a href="#tale-of-two" className="text-decoration-none"><i className="fa-solid fa-angle-right me-2 small text-muted"></i>The Tale of Two Coders</a></li>
          <li className="mb-2"><a href="#what-it-means" className="text-decoration-none"><i className="fa-solid fa-angle-right me-2 small text-muted"></i>What Does "Sharpening the Axe" Mean in IT?</a></li>
          <li className="mb-2"><a href="#industry-perspective" className="text-decoration-none"><i className="fa-solid fa-angle-right me-2 small text-muted"></i>Industry Perspectives: Why Tech Companies Care</a></li>
          <li><a href="#conclusion" className="text-decoration-none"><i className="fa-solid fa-angle-right me-2 small text-muted"></i>Conclusion</a></li>
        </ul>
      </div>

      <h2 id="tale-of-two">1. The Tale of Two Coders</h2>
      <p>Imagine two software developers, Programmer A and Programmer B, given the exact same complex project to finish within a week.</p>
      <ul>
          <li><strong>Programmer A (The Blunt Axe):</strong> Starts typing code immediately. They work 14 hours a day, fueled by coffee, brute-forcing their way through errors. They use outdated libraries they are used to, write messy "spaghetti code," and manually test every feature. By day four, the codebase is so tangled that fixing one bug creates three new ones. They are exhausted, frustrated, and completely burned out.</li>
          <li><strong>Programmer B (The Sharp Axe):</strong> Spends the first day just reading documentation, planning the software architecture, and setting up automated testing. They take regular screen breaks and clock out at 5 PM. When faced with a stubborn bug, they take a walk rather than staring at the screen. By day five, the project is completed flawlessly. The code is clean, efficient, and bug-free.</li>
      </ul>
      <p>The Secret? Programmer B took the time to "sharpen the axe." In the world of programming, stepping back to plan, learn, and rest is often far more productive than typing blindly.</p>

      <h2 id="what-it-means" className="mt-5">2. What Does "Sharpening the Axe" Mean in IT?</h2>
      <p>In Software Engineering, your "axe" is your brain, your toolstack, and your skillset. If you don't maintain them, you become blunt and ineffective. Here is how developers sharpen their axes:</p>
      
      <h3>🧠 Upgrading the Mind (Mental & Physical Health)</h3>
      <ul>
          <li><strong>Preventing Burnout:</strong> Staring at a monitor for 12 hours drains cognitive function. Quality sleep, exercise, and hobbies keep the brain sharp.</li>
          <li><strong>The "Shower Epiphany":</strong> Taking a step back from a problem allows the subconscious mind to process it. The best solutions often come when you are not at your keyboard.</li>
      </ul>

      <h3>💻 Upgrading the Skillset (Continuous Learning)</h3>
      <ul>
          <li><strong>Learning the Fundamentals:</strong> Instead of just memorizing syntax, a sharp developer studies core concepts like Data Structures, Algorithms, and System Design to write faster and more efficient code.</li>
          <li><strong>Embracing New Technologies:</strong> Adapting to modern frameworks, utilizing AI coding assistants (like GitHub Copilot), and reading industry blogs to stay relevant.</li>
      </ul>

      <h3>⚙️ Upgrading the Tools (Working Smarter)</h3>
      <ul>
          <li><strong>Automation:</strong> Writing scripts to handle repetitive tasks instead of doing them manually.</li>
          <li><strong>Mastering the Environment:</strong> Learning IDE keyboard shortcuts, customizing the terminal, and utilizing proper version control (Git) to speed up workflow.</li>
      </ul>

      <h2 id="industry-perspective" className="mt-5">3. Industry Perspectives: Why Tech Companies Care</h2>
      <p>The tech industry is highly dynamic. What was considered cutting-edge three years ago might be considered legacy code today. Here is how the industry views the need for self-development:</p>
      <ul>
          <li><strong>Rapid Obsolescence:</strong> The tech industry doesn't look for someone who "knows everything." They look for lifelong learners who can adapt quickly to new languages and paradigms.</li>
          <li><strong>Efficiency Over Hours:</strong> Tech companies value developers who spend 2 hours automating a process rather than spending 10 hours doing it manually. It is about impact, not just hours logged.</li>
          <li><strong>The Agile Culture:</strong> Modern software development uses "Agile" and "Scrum" methodologies. The Retrospective meeting at the end of a sprint is the literal embodiment of sharpening the axe—teams pause to reflect on what went wrong and how to improve their process for the next cycle.</li>
      </ul>

      <div className="quote-card shadow-sm border-0">
          "Give me six hours to chop down a tree and I will spend the first four sharpening the axe." — Abraham Lincoln
      </div>

      <h2 id="conclusion" className="mt-5">Conclusion</h2>
      <p>Taking the time to "sharpen your axe" isn't a delay; it's an investment. It ensures that when you finally swing, your impact is powerful, precise, and efficient. A timeless quote that perfectly applies to Software Engineering!</p>
    </>
  );
}
