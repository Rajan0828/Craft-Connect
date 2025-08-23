import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from './models/Project.js';

dotenv.config();

const projects = [
  {
    title: 'Logo & Brand Identity Design',
    category: 'Design and Creative',
    location: 'Lisbon, Portugal',
    description:
      'We’re seeking a highly creative freelance graphic designer to develop a complete brand identity for our e-commerce startup. This role goes beyond designing a logo – it involves creating a cohesive visual language that represents our mission, values, and target audience. Deliverables will include a professional logo, a carefully selected typography system, an adaptable color palette, and ready-to-use social media templates for consistent online branding. The ideal candidate will bring fresh ideas, strong communication skills, and the ability to translate abstract concepts into compelling visuals. Experience with startup branding, e-commerce design, and digital-first graphics will be a strong advantage.',
    salary: '$500 - $750',
    company: {
      name: 'Creative Collective',
      description:
        'Creative Collective is an international boutique agency specializing in branding and digital marketing for startups. We have worked with over 200 early-stage companies, helping them establish strong visual identities and launch successful digital campaigns. Our multidisciplinary team blends creativity with business insight, delivering branding solutions that resonate with target audiences and adapt to fast-changing markets.',
      contactEmail: 'hello@creativecollective.com',
      contactPhone: '555-555-5555',
    },
  },
  {
    title: 'Full-Stack Web Developer',
    category: 'Tech and Development',
    location: 'Remote',
    description:
      'We are looking for a motivated and experienced MERN (MongoDB, Express.js, React, Node.js) developer to design and build a modern job portal platform. The project will require implementing user authentication (including role-based access), dynamic job postings, and personalized dashboards for both employers and applicants. In addition, the platform should include analytics features for tracking applications, reporting hiring metrics, and providing insights into user activity. Strong knowledge of database design, API integration, and responsive front-end development is required. Familiarity with cloud deployment (AWS, Heroku, or similar) and security best practices will be highly valued. This role is ideal for someone who thrives in remote, fast-paced environments and can deliver clean, maintainable code within deadlines.',
    salary: '$1,000 - $1,500',
    company: {
      name: 'TechHire',
      description:
        'TechHire is a fast-growing startup connecting freelancers with global opportunities. Our platform leverages advanced technology to match top talent with innovative businesses. With a presence in over 20 countries, we empower professionals and companies to create transparent, scalable, and meaningful work relationships, redefining the future of remote hiring.',
      contactEmail: 'hr@techhire.com',
      contactPhone: '555-111-2222',
    },
  },
  {
    title: 'Digital Marketing Specialist',
    category: 'Marketing',
    location: 'New York, USA',
    description:
      'We are seeking a results-driven digital marketing specialist to lead our online advertising campaigns across multiple platforms, including Facebook, Instagram, LinkedIn, and Google Ads. The role involves creating compelling ad creatives, running A/B tests, analyzing performance metrics, and adjusting campaigns to maximize ROI. You will also be responsible for managing budgets, tracking KPIs, and collaborating with our content and design teams to ensure brand consistency. Candidates should be familiar with SEO, email marketing, and social media growth strategies. Experience in scaling campaigns for fast-growing companies and a proven record of driving measurable results are highly desirable.',
    salary: '$750 - $1,000',
    company: {
      name: 'BrightPath Media',
      description:
        'BrightPath Media is a creative agency helping brands scale their digital presence. Since 2012, we have partnered with global clients across industries to deliver innovative marketing campaigns that drive measurable growth. Our expertise spans paid media, SEO, social strategy, and data-driven marketing. Our team of storytellers, analysts, and strategists ensures clients achieve brand consistency and competitive advantage in dynamic markets.',
      contactEmail: 'jobs@brightpath.com',
      contactPhone: '555-333-4444',
    },
  },
  {
    title: 'UI/UX Designer',
    category: 'Design and Creative',
    location: 'Remote',
    description:
      'We’re hiring a passionate UI/UX designer to conceptualize and design intuitive, mobile-first web application interfaces for a fintech product. The designer will work closely with developers and product managers to translate user needs into wireframes, prototypes, and pixel-perfect designs. Responsibilities include user research, creating design systems, ensuring accessibility compliance, and crafting responsive layouts for cross-device compatibility. Expertise with design tools such as Figma or Sketch is mandatory. Prior experience in fintech or SaaS environments will be considered a plus. If you thrive on building seamless digital experiences that combine aesthetics with usability, we’d love to hear from you.',
    salary: '$500 - $750',
    company: {
      name: 'FinTech Labs',
      description:
        'FinTech Labs builds innovative solutions for digital banking and payments. We aim to democratize access to financial services through secure, scalable, and intuitive digital products. Partnering with banks, startups, and government agencies, we serve millions of users globally. Our design and engineering teams ensure compliance and usability, delivering industry-leading fintech experiences.',
      contactEmail: 'design@fintechlabs.com',
      contactPhone: '555-666-7777',
    },
  },
  {
    title: 'Data Analyst',
    category: 'Other Services',
    location: 'Toronto, Canada',
    description:
      'We are looking for a skilled data analyst to help our team make sense of complex business datasets and provide actionable insights. The role involves cleaning, processing, and analyzing sales and marketing data, as well as building dashboards for visualization using tools like Tableau or Power BI. You will collaborate with cross-functional teams to identify trends, forecast business performance, and support strategic decision-making. Strong proficiency in SQL and Python (pandas, NumPy, matplotlib) is required. Experience with statistical modeling, data storytelling, and report automation will set you apart. The right candidate is detail-oriented, curious, and passionate about using data to drive measurable business growth.',
    salary: '$1,000 - $1,500',
    company: {
      name: 'Insight Corp',
      description:
        'Insight Corp provides advanced analytics services for retail and finance industries. For over a decade, we have helped clients transform raw data into actionable insights, building predictive models and dashboards to inform strategic decisions. Our consultants work closely with stakeholders to solve complex problems and optimize business performance, empowering organizations to grow with confidence.',
      contactEmail: 'careers@insightcorp.com',
      contactPhone: '555-888-9999',
    },
  },
  {
    title: 'Content Writer',
    category: 'Writing and Translation',
    location: 'Remote',
    description:
      'We are seeking a talented freelance writer to produce engaging, SEO-optimized blog posts focused on technology, career development, and industry trends. The role requires researching topics, creating structured outlines, and delivering well-written, plagiarism-free articles tailored to both search engines and human readers. You will be expected to work with editors to refine drafts and follow brand tone and voice guidelines. Familiarity with keyword research tools and content management systems (WordPress, Ghost, etc.) is preferred. This position is ideal for writers who can balance creativity with analytical content performance goals while meeting strict deadlines.',
    salary: '$250 - $500',
    company: {
      name: 'GrowFlow',
      description:
        'GrowFlow is a content marketing firm specializing in startups and online education. We create tailored content strategies that help businesses grow and reach global audiences. From blogs to newsletters, our team ensures every piece is optimized for SEO, engaging readers while delivering measurable results. We emphasize quality, creativity, and analytics-driven content for sustained growth.',
      contactEmail: 'editor@growflow.com',
      contactPhone: '555-222-3333',
    },
  },
  {
    title: 'Mobile App Developer',
    category: 'Tech and Development',
    location: 'Berlin, Germany',
    description:
      'We are looking for an experienced React Native developer to build a next-generation fitness tracking app. The app will integrate with Bluetooth-enabled devices such as smartwatches and heart rate monitors to track user activity in real time. Core responsibilities include developing user-friendly interfaces, implementing secure APIs for data syncing, and ensuring smooth performance across iOS and Android platforms. You will collaborate with designers, backend engineers, and fitness experts to deliver a polished product that supports social sharing, personalized workout recommendations, and analytics dashboards. Familiarity with React Native libraries, RESTful APIs, Firebase, and CI/CD pipelines will be essential for success.',
    salary: '$1,500 - $2,000',
    company: {
      name: 'FitTech',
      description:
        'FitTech develops cutting-edge mobile solutions for health and wellness industries. Our products integrate advanced technologies to provide real-time insights and personalized fitness recommendations. We collaborate with health professionals and engineers to create seamless, user-friendly experiences that inspire healthier lifestyles across global markets.',
      contactEmail: 'devs@fittech.com',
      contactPhone: '555-444-6666',
    },
  },
  {
    title: 'Virtual Assistant',
    category: 'Business and Admin',
    location: 'Remote',
    description:
      'We are seeking a highly organized and proactive virtual assistant to support an executive team with daily administrative tasks. Responsibilities include managing calendars, scheduling meetings, handling email correspondence, and conducting online research. You will also be asked to prepare reports, organize digital files, and communicate with clients on behalf of executives. The ideal candidate is detail-oriented, tech-savvy, and able to multitask effectively while maintaining confidentiality. Prior experience in executive assistance, customer service, or administrative outsourcing will be considered a plus. Strong communication skills, reliability, and professionalism are a must for this role.',
    salary: '$250 - $500',
    company: {
      name: 'BizAssist',
      description:
        'BizAssist provides administrative outsourcing services to entrepreneurs worldwide. We streamline operations by offering virtual assistance, document management, scheduling, and communication support. Our team empowers businesses to focus on growth while we handle time-consuming tasks with efficiency and confidentiality.',
      contactEmail: 'support@bizassist.com',
      contactPhone: '555-777-8888',
    },
  },
  {
    title: 'Cybersecurity Specialist',
    category: 'Tech and Development',
    location: 'Singapore',
    description:
      'We are hiring a skilled cybersecurity specialist to strengthen our security infrastructure and protect critical digital assets. The role involves conducting penetration testing, identifying system vulnerabilities, and implementing advanced security measures such as multi-factor authentication and intrusion detection systems. You will also be responsible for monitoring security events, preparing risk assessment reports, and ensuring compliance with international cybersecurity standards (ISO, NIST, GDPR). Candidates should have experience with tools such as Metasploit, Wireshark, and SIEM platforms. Strong problem-solving skills, attention to detail, and the ability to stay ahead of evolving cyber threats are essential for this position.',
    salary: '$2,000 - $3,000',
    company: {
      name: 'SecureNet',
      description:
        'SecureNet provides enterprise-level cybersecurity services to banks and e-commerce firms. We offer advanced threat detection, risk assessments, and compliance management for high-stakes industries. Our experts continuously monitor and analyze emerging threats to protect digital assets, ensuring businesses can operate securely and maintain trust with their clients globally.',
      contactEmail: 'security@securenet.com',
      contactPhone: '555-999-0000',
    },
  },
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    try {
      console.log('✅ Connected to MongoDB, seeding...');
      await Project.deleteMany();
      await Project.insertMany(projects);
      console.log('Seeding complete!');
    } catch (err) {
      console.error('Seeding failed:', err);
    } finally {
      process.exit();
    }
  })
  .catch((err) => console.error('MongoDB connection error:', err));
