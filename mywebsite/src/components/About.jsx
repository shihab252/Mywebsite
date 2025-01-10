import React from 'react';
import MernStack from '../assets/mernstack.png';

const About = () => {
    const skills = [
        { name: 'HTML', percentage: 90 },
        { name: 'CSS', percentage: 85 },
        { name: 'JavaScript', percentage: 80 },
        { name: 'React', percentage: 85 },
        { name: 'Tailwind CSS', percentage: 75 },
        { name: 'Bootstrap', percentage: 70 },
        { name: 'Node JS', percentage: 80 },
        { name: 'MongoDB', percentage: 75 },
        { name: 'MySQL', percentage: 70 },
        { name: 'Spring Boot', percentage: 20 },
        { name: 'Express JS', percentage: 75 },
        { name: 'Next JS', percentage: 60 },
    ];

    const experiences = [
        { title: 'Full-Stack Developer', duration: '2020 - Present', description: 'Developed full-stack applications using the MERN stack, including food ordering and job portal projects.' },
        { title: 'Bug Bounty Hunter', duration: '2019 - Present', description: 'Uncovered and secured vulnerabilities on Bugcrowd, contributing to a safer online ecosystem.' },
    ];

    return (
        <div className="relative" id="about">
            <div className="bg-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">About Me</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Hi, I'm Shihab Khan
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            I'm a Full-Stack Developer who also pursues bug bounty hunting on Bugcrowd.
                        </p>
                    </div>
                    <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Skills Section */}
                        <div className="border border-red-200 rounded-lg md:p-7 py-7 shadow-lg shadow-red-300">
                            <h3 className="text-2xl font-semibold text-red-600 mb-6">Skills & Expertise</h3>
                            <div className="grid grid-cols-2 gap-6">
                                {skills.map((skill, index) => (
                                    <div key={index} className="w-full">
                                        <div className="border border-red-300 flex items-center justify-between px-4 py-2 rounded-lg shadow-md shadow-red-300 mb-2">
                                            <span className="font-semibold text-gray-700">{skill.name}</span>
                                            <span className="font-semibold text-gray-700">{skill.percentage}%</span>
                                        </div>
                                        <div className="w-full bg-gray-300 rounded-full h-3">
                                            <div
                                                className="bg-red-500 h-3 rounded-full"
                                                style={{ width: `${skill.percentage}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Experience Section */}
                        <div className="border border-red-200 rounded-lg md:p-7 py-7 shadow-lg shadow-red-300">
                            <h3 className="text-2xl font-semibold text-red-600 mb-6">Experience</h3>
                            <div className="space-y-6">
                                {experiences.map((exp, index) => (
                                    <div key={index} className="border border-gray-300 rounded-lg p-4 shadow-sm">
                                        <h4 className="text-lg font-semibold text-gray-900">{exp.title}</h4>
                                        <p className="text-sm text-gray-500">{exp.duration}</p>
                                        <p className="mt-2 text-gray-600">{exp.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mt-12">
                        <h3 className="text-2xl font-semibold text-gray-900">More About Me</h3>
                        <p className="mt-4 text-lg text-gray-600">
                            Beyond coding, I am a problem-solver and security enthusiast, constantly driven to uncover and secure vulnerabilities in
                            the digital landscape. This passion extends to my work as a bug bounty hunter on Bugcrowd, where I apply my full-stack
                            development expertise to identify and mitigate potential threats, contributing to a safer online ecosystem.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
