export interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

export const HOME_FAQ: FAQItem[] = [
    {
        id: 1,
        question: "What is SkillForge AI?",
        answer: "SkillForge AI is an AI-powered learning platform designed to help developers learn modern technologies through structured courses, hands-on projects, and personalized guidance.",
    },
    {
        id: 2,
        question: "Are the courses beginner friendly?",
        answer: "Absolutely. Whether you're just starting your programming journey or already have experience, SkillForge provides learning paths tailored to every skill level.",
    },
    {
        id: 3,
        question: "Will I receive certificates after completing courses?",
        answer: "Yes. After successfully completing eligible courses, you'll receive a digital certificate that you can showcase on LinkedIn or your portfolio.",
    },
    {
        id: 4,
        question: "Can I learn using AI assistance?",
        answer: "Yes. Our AI mentor helps explain concepts, answer questions, generate learning roadmaps, and provide coding guidance throughout your learning journey.",
    },
    {
        id: 5,
        question: "Do I need to pay before getting started?",
        answer: "No. You can explore free learning resources and selected courses before upgrading to unlock premium content and advanced AI features.",
    },
    {
        id: 6,
        question: "How often are new courses added?",
        answer: "New courses, projects, and learning resources are added regularly to keep up with the latest technologies and industry trends.",
    },
];
