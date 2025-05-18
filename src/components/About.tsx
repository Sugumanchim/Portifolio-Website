import React from 'react';
import { BookOpen, Coffee, Code, Globe } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
               Hi! I'm a passionate Computer Science Engineering student with a strong interest in innovative technologies like <span className="font-semibold text-blue-600 dark:text-blue-400"> Artificial Intelligence, Machine Learning, and Full-Stack Development</span> . I love building smart solutions that bridge the gap between hardware and software — one of my key projects is a real-time health monitoring and alert system using Arduino and IoT.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
             I’m currently exploring the world of intelligent systems and web technologies, constantly learning and applying new skills to build impactful, real-world applications. I'm actively seeking internship opportunities where I can contribute, grow, and gain hands-on experience in cutting-edge domains like AI, ML, and full-stack Java development.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Whether it's writing efficient code, designing intelligent systems, or creating seamless web experiences — I'm always ready to take on a challenge and learn something new.
            </p>
            <div className="pt-4">
            <a
  href="https://drive.google.com/file/d/166HdBDf08ym5cIscB7qh59CM9xJHDGAO/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-300"
>
  <BookOpen size={20} className="mr-2" />
  View Resume
</a>

            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                <Code size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Building robust web applications with modern frameworks and best practices
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-teal-600 dark:text-teal-400 mb-4">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Responsive Design
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Creating beautiful UI that works seamlessly across all devices
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-orange-600 dark:text-orange-400 mb-4">
                <Coffee size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Problem Solving
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Finding elegant solutions to complex technical challenges
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-purple-600 dark:text-purple-400 mb-4">
                <BookOpen size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Continuous Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Always exploring new technologies and improving my skills
              </p>
            </div>
            
             
          </div>
        </div>
      </div>
  
    </section>
  );
};