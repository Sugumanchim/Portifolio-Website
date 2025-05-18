import React from 'react';
import { skills } from '../data/skills';
import * as LucideIcons from 'lucide-react';

export const Skills: React.FC = () => {
  const getIconComponent = (iconName: string) => {
    const IconComponent = (LucideIcons as Record<string, React.FC<{ size?: number }>>)[
      iconName.charAt(0).toUpperCase() + iconName.slice(1)
    ] || LucideIcons.Code;
    
    return <IconComponent size={24} />;
  };

  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const toolsSkills = skills.filter(skill => skill.category === 'tools');
  const otherSkills = skills.filter(skill => skill.category === 'other');

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
              Frontend Development
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {frontendSkills.map((skill) => (
                <div 
                  key={skill.name} 
                  className="flex flex-col items-center text-center space-y-2"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    {getIconComponent(skill.icon)}
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-6">
              Backend Development
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {backendSkills.map((skill) => (
                <div 
                  key={skill.name} 
                  className="flex flex-col items-center text-center space-y-2"
                >
                  <div className="w-12 h-12 rounded-lg bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400">
                    {getIconComponent(skill.icon)}
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400 mb-6">
              Tools & DevOps
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {toolsSkills.map((skill) => (
                <div 
                  key={skill.name} 
                  className="flex flex-col items-center text-center space-y-2"
                >
                  <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400">
                    {getIconComponent(skill.icon)}
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-6">
              Other Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {otherSkills.map((skill) => (
                <div 
                  key={skill.name} 
                  className="flex flex-col items-center text-center space-y-2"
                >
                  <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    {getIconComponent(skill.icon)}
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};