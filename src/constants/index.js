import { anywr, shopify, starbucks, tesla, oodrive, spectrum } from "../assets/images";
import {
    springboot,
    java,
    docker,
    kubernetes,
    jenkins,
    angular,
    aws,
    gitlab,
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: springboot,
        name: "Springboot",
        type: "Backend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Backend",
    },
    {
        imageUrl: kubernetes,
        name: "Kubernetes",
        type: "Backend",
    },
    {
        imageUrl: jenkins,
        name: "Jenkins",
        type: "Backend",
    },
    {
        imageUrl: angular,
        name: "Angular",
        type: "Frontend",
    },
    {
        imageUrl: aws,
        name: "Aws",
        type: "Backend",
    },
    {
        imageUrl: gitlab,
        name: "Gitlab",
        type: "Backend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Fullstack Developer",
        company_name: "Spectrum Group",
        icon: spectrum,
        iconBg: "#accbe1",
        date: "Jan 2018 - Sep 2019",
        points: [
            "Develop and Maintain Full-Stack Applications using Java Spring Boot for the backend and Reactjs for the frontend.",
            "Design and Implement RESTful APIs with Spring Boot for frontend-backend communication.",
            "Build Responsive, Interactive Frontends using React and modern JavaScript/TypeScript and ensure cross-browser compatibility..",
            "Write Clean, Maintainable Code adhering to best practices and coding standards for both Java and JavaScript.",
            "Conduct Code Reviews to ensure quality and consistency across the stack.",
            "Collaborate with UX/UI Designers to implement user-friendly and accessible interfaces.",
            "Optimize Performance by tuning backend endpoints and improving frontend responsiveness.",
            "Troubleshoot and Debug Issues across the entire stack, including production issues.",
            " Write Unit, Integration, and End-to-End Tests to ensure robust functionality and reliability.",
            "Actively Participate in Agile Ceremonies such as sprint planning, stand-ups, and retrospectives to align with team goals and progress."
        ],
    },
    {
        title: "Web Developer",
        company_name: "Oodrive",
        icon: oodrive,
        iconBg: "#b7e4c7",
        date: "Oct 2019 - Feb 2022",
        points: [
            "Developing and maintain web applications using Java, Spring Boot and other related technologies.",
            "Design and Implement Backend APIs and microservices for scalability and performance.",
            "Write Clean, Efficient, and Reusable Code that adheres to coding standards.",
            "Conduct Code Reviews to ensure code quality and provide feedback to peers",
            "Collaborate with Cross-Functional Teams to understand requirements and plan solutions.",
            "Participate Actively in Agile Ceremonies like sprint planning, daily stand-ups, and retrospectives.",
            "Create Unit and Integration Tests to ensure reliability and reduce bugs.",
            "Troubleshoot and Debug Issues in development and production environments and provide hotfixes for production",
            "Optimize Application Performance by identifying and resolving bottlenecks.",
            "Mentor Junior Developers and share knowledge to build team skills."
        ],
    },
    {
        title: "Technical Lead",
        company_name: "Anywr",
        icon: anywr,
        iconBg: "#a2d2ff",
        date: "Mar 2022 - Present",
        points: [
            "Architect and Design Solutions leveraging Spring Boot, Spring Security, and Apache Camel to ensure scalable, secure, and maintainable applications.",
            "Implement and Oversee Security Protocols using Spring Security and Keycloak for authentication and authorization.",
            "Guide the Development of Data Processing Jobs using Spring Batch for efficient data handling and processing.",
            "Optimize Search Functionality by configuring and tuning Elasticsearch and Kibana for effective data indexing and visualization.",
            "Write and Review High-Quality Code across Java, Spring, and Apache Camel components, maintaining best practices and coding standards.",
            "Troubleshoot and Resolve Complex Issues across the stack, from security configurations to search indexing and message routing.",
            "Establish Coding Standards and Best Practices to ensure high-quality, consistent code.",
            "Design and Implement Backend APIs and microservices for scalability and performance.",            
            "Mentor and Guide Team Members to improve technical skills and practices.",
            "Collaborate with cross-functional teams including devops team, product managers, and other developers to create high-quality product, clarify requirements and align on priorities.",
            "Implement and Maintain CI/CD Jenkins Pipelines for reliable and efficient deployments.",
            "Implementing software craftmanship best practices: design patterns, clean code, TDD, pair programming ...",
            "Ensuring application performance, security, and scalability.",
            "Set up necessary tools to monitor application's performance, and Sonarqube for code quality.",
            "Identify and Mitigate Technical Risks proactively, such as security or scalability issues."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/hamdifreelance',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/hamdi-ali',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.'
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.'    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.'    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.'    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.'    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/hamdifreelance/ai_summarizer',
    }
];