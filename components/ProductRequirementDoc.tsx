
import React from 'react';

interface PRDProps {
  onClose: () => void;
}

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-8">
      <h2 className="text-3xl font-bold font-sans text-blue-500 dark:text-blue-400 border-b-2 border-blue-500/30 pb-2 mb-4">{title}</h2>
      {children}
    </div>
);

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start space-x-3 mb-2">
      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      <span className="text-gray-700 dark:text-gray-300">{children}</span>
    </li>
);

const ProductRequirementDoc: React.FC<PRDProps> = ({ onClose }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 md:p-10 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in">
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-extrabold font-sans text-gray-900 dark:text-white">Product Requirement Document</h1>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
        </div>

        <Section title="1. Vision & Goal">
            <p className="text-lg text-gray-600 dark:text-gray-400">
                To create an engaging, educational, and visually stunning web application, "Noble Explorers," that allows users of all ages to intuitively explore the rich history of Nobel Prize winners. The goal is to make learning about these incredible achievements fun, accessible, and inspiring.
            </p>
        </Section>

        <Section title="2. Target Audience">
            <ul className="space-y-2">
                <ListItem><b className="font-sans">Children (10+):</b> Spark curiosity through interactive visuals and "fun facts".</ListItem>
                <ListItem><b className="font-sans">Students & Educators:</b> A reliable and engaging resource for school projects and classroom learning.</ListItem>
                <ListItem><b className="font-sans">Curious Adults:</b> Anyone with an interest in science, literature, history, and humanity's greatest accomplishments.</ListItem>
            </ul>
        </Section>

        <Section title="3. Key Features (MVP)">
             <ul>
                <ListItem><b className="font-sans">Comprehensive Database:</b> Display a curated list of Nobel laureates.</ListItem>
                <ListItem><b className="font-sans">Dynamic Filtering:</b> Allow users to filter winners by category (e.g., Physics, Peace) and a selectable year range.</ListItem>
                <ListItem><b className="font-sans">Engaging Winner Cards:</b> Each laureate or prize is presented on a visually appealing card showing their name, year, category, and the motivation for the prize.</ListItem>
                <ListItem><b className="font-sans">Data Visualization:</b> An interactive bar chart showing the distribution of laureates across different categories based on the user's filter criteria.</ListItem>
            </ul>
        </Section>
        
        <Section title="4. UX & UI Proposition">
            <p className="text-gray-600 dark:text-gray-400 mb-4">The user experience will be clean, modern, and highly intuitive, encouraging exploration and discovery.</p>
             <ul>
                <ListItem><b className="font-sans">Aesthetic:</b> A polished design with a pleasing color palette, smooth animations, and clear typography. Dark mode support for comfortable viewing.</ListItem>
                <ListItem><b className="font-sans">Interactivity:</b> Smooth transitions and hover effects to provide a responsive feel. Interactive charts that give immediate feedback.</ListItem>
                <ListItem><b className="font-sans">Accessibility:</b> Ensure sufficient color contrast and logical layout for all users.</ListItem>
                <ListItem><b className="font-sans">Responsive Design:</b> A fully responsive layout that works seamlessly on desktops, tablets, and mobile devices.</ListItem>
            </ul>
        </section>

        <Section title="5. Product Development Roadmap">
            <div className="space-y-4">
                <div>
                    <h3 className="text-xl font-semibold font-sans text-gray-800 dark:text-gray-200">Phase 1: Foundation (Current MVP)</h3>
                    <p className="text-gray-600 dark:text-gray-400 ml-2 border-l-2 border-blue-500 pl-4">Core features are implemented: database display, category/year filtering, winner cards, and a basic data visualization chart.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold font-sans text-gray-800 dark:text-gray-200">Phase 2: Enhancements</h3>
                     <p className="text-gray-600 dark:text-gray-400 ml-2 border-l-2 border-gray-500 pl-4">
                        Introduce a text-based search functionality. Add more advanced visualizations like a world map of laureates' birthplaces or a timeline view.
                     </p>
                </div>
                 <div>
                    <h3 className="text-xl font-semibold font-sans text-gray-800 dark:text-gray-200">Phase 3: Engagement & Expansion</h3>
                     <p className="text-gray-600 dark:text-gray-400 ml-2 border-l-2 border-gray-500 pl-4">
                        Develop interactive quizzes and games for younger audiences. Allow users to create and share collections of their favorite laureates. Integrate with live data from the official Nobel Prize API.
                    </p>
                </div>
            </div>
        </Section>
    </div>
  );
};

export default ProductRequirementDoc;