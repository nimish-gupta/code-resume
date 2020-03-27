import React from 'react';
import Twitter from 'Assets/svg/twitter.svg';
import Linkedin from 'Assets/svg/linkedin.svg';
import Github from 'Assets/svg/github.svg';
import Goodreads from 'Assets/svg/goodreads.svg';
import ResumeImg from 'Assets/svg/resume.svg';
import Facebook from 'Assets/svg/facebook.svg';

export const defaultTheme = 'dark'; // light

export const Title = 'Nimish Gupta ~ Programming Deliberately';

export const Resume = {
	introduction: `const Introduction = () => ({ 
    Namaste: { 
        Name: 'Nimish Gupta', 
        Designation: 'Software Engineer',
        Summary: {
            <span class="dot"></span> : "Pragmatic Programmer trying to learn <u>Programming Deliberately</u>.",
            <span class="dot"></span> : "Believe in the power of programming to improve and transform the lives of the people.",
            <span class="dot"></span> : "Self driven and likes to demonstrate ownership and leadership.",
            <span class="dot"></span> : "Data driven and an insightful engineer who is passionate about growing teams and business.",
        },
        Highlights: {
            <span class="dot"></span> : "4+ years of experience in all phases of <u>Software Development</u> life cycle",
            <span class="dot"></span> : "Helped in building <u>a career accelerator for top engineering talent</u> to break into international tech career.",
            <span class="dot"></span> : "Created software that can operate and perform operations on 100+ sites at same time.",
            <span class="dot"></span> : "Experienced software engineer driven by <u>full-stack projects</u> and creating solutions for business needs.",
        }
    }
});`,

	experience: `const Experience = () => ({
    Media.net: {
        company: 'Directi(Media.net)',
        designation: 'Senior Web Developer',
        period: 'Feb 2017 to Present'
    },
    Onlinemocks: {
        company: 'Onlinemocks Pvt. Ltd.',
        designation: 'UI Developer',
        period: 'May 2016 to January 2017'
    },
    Collegedunia: {
        company: 'Collegedunia Web Pvt. Ltd.',
        designation: 'UI Developer',
        period: 'October 2015 to April 2016'
    },
    Rising Hues: {
        company: 'Rising Hues Technology LLP.',
        designation: 'Web Developer',
        period: 'July 2014 to September 2015'
    }
});`,

	skills: `const Skills = () => ({
    Language: ["Javascript", "Python", "PHP"],
    Libraries & Frameworks: [
        "Reasonml", "Node",
        "React", "ReasonReact",
        "Typescript", "Serverless",
        "React native", "express"
    ],
    Databases: ["PostgreSQL", "MongoDB"],
    Platform: ["Web", "IOS", "Android"],
    "Cloud Applications": ["Heroku", "AWS", "ZIET", "Netlify"],
    Tools: [
        "Cypress", "CircleCi", "Git",
        "Puppeteer", "Drip", "Segment"
    ],

});`,
	'open-source': `const Open-source = () => ({
    React-Native: {
        task: "To reduce the bundle size of the framework".
        project-link: <a target='_blank' href='https://github.com/facebook/react-native'><u>"https://github.com/facebook/react-native"</u></a>,
        contribution: "Click <a target='_blank' href='https://github.com/facebook/react-native/pulls?utf8=%E2%9C%93&q=+is%3Apr+author%3Animish-gupta+'><u>here</u></a> to view my contribution."
    },
    Sketch-sh: {
        task: "To add the refresh link and pagination for posts."
        project-link: "<a target='_blank' href='https://github.com/Sketch-sh/sketch-sh'><u>https://github.com/Sketch-sh/sketch-sh</u></a>",
        contribution: "Click <a target='_blank' href='https://github.com/Sketch-sh/sketch-sh/pulls?utf8=%E2%9C%93&q=is%3Apr+author%3Animish-gupta+'><u>here</u></a> to view my contribution."
    },
    Apollo-Graphql: {
        task: "To correct the documentation for Hapi server configuration."
        project-link: "<a target='_blank' href='https://github.com/apollographql/apollo-server'><u>https://github.com/apollographql/apollo-server</u></a>",
        contribution: "Click <a target='_blank' href='https://github.com/apollographql/apollo-server/pulls?utf8=%E2%9C%93&q=is%3Apr+author%3Animish-gupta+'><u>here</u></a> to view my contribution."
    },
    Expedition: {
        task: "To create account's screen and quest filter."
        project-link: "<a target='_blank' href='https://github.com/ExpeditionRPG/expedition'><u>https://github.com/ExpeditionRPG/expedition</u></a>",
        contribution: "Click <a target='_blank' href='https://github.com/ExpeditionRPG/expedition/pulls?utf8=%E2%9C%93&q=is%3Apr+author%3Animish-gupta+'><u>here</u></a> to view my contribution."
    }
});`,

	contact: `const Contact = () => ({       
    email: '<a target='_blank' href='mailto:nimishgupta18396@gmail.com'><u>nimishgupta18396@gmail.com</u></a> ',
    mobile: '(+91)7417843488'
});`,
};

export const SocialLinks = {
	Resume: [
		'https://github.com/nimish-gupta/code-resume/raw/master/data/resume.pdf',
		() => <ResumeImg />,
	],
	Linkedin: ['https://www.linkedin.com/in/nimish-gupta/', () => <Linkedin />],
	Twitter: ['https://twitter.com/nimishrocks2', () => <Twitter />],
	Github: ['https://github.com/nimish-gupta', () => <Github />],
	Facebook: ['https://www.facebook.com/Nimishrocks', () => <Facebook />],
	Goodreads: [
		'https://www.goodreads.com/user/show/64363737-nimish-gupta',
		() => <Goodreads />,
	],
};
