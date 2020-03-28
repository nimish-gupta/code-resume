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
            <span class="dot"></span> : "Data driven and an insightful engineer who likes to demonstrate ownership and leadership.",
            <span class="dot"></span> : "Experienced software engineer driven by <u>full-stack projects</u> and creating solutions for business needs.",
        },
        Highlights: {
            <span class="dot"></span> : "4+ years of experience in all phases of <u>Software Development</u> life cycle",
            <span class="dot"></span> : "Helped in building <u>a career accelerator for top engineering talent</u> to break into international tech career.",
            <span class="dot"></span> : "Created software that can operate and perform operations on 100+ sites at same time.",
            <span class="dot"></span> : "Moved all the paper work to an online portal for multiple UPTU colleges.",
        }
    }
});`,

	// 					experience: `const Experience = () => ({
	//     'Software Engineer Lead (Pesto Tech - March 2018 to April 2020)': {
	//         <span class="dot"></span> : "4+ years of experience in all phases of <u>Software Development</u> life cycle",
	//         <span class="dot"></span> : "Helped in building <u>a career accelerator for top engineering talent</u> to break into international tech career.",
	//         <span class="dot"></span> : "Created software that can operate and perform operations on 100+ sites at same time.",
	//         <span class="dot"></span> : "Experienced software engineer driven by <u>full-stack projects</u> and creating solutions for business needs.",
	//     },
	//     'Software Engineer (Pesto Tech - April 2017 to March 2018)': {
	//         <span class="dot"></span> : "Successfully launched ios/android apps which have more than ",
	//         <span class="dot"></span> : "Build a software which helped client in making more than $50k in revenue.",
	//         <span class="dot"></span> : "Created software that can operate and perform operations on 100+ sites at same time.",
	//         <span class="dot"></span> : "Setup fastlane for the delivery of app to test-flight and app store..",
	//     },
	//     'Backend Engineer (Smarter.codes - June 2016 - April 2017)': {
	//         <span class="dot"></span> : "Used Python for scrapping similar keywords from google, quora and bing against a word.",
	//         <span class="dot"></span> : "Crawl we",
	//         <span class="dot"></span> : "Used elastic search for storing the results of the keywords.",
	//     },
	//     'Team Lead (KIET)': {
	//         company: 'Rising Hues Technology LLP.',
	//         designation: 'Web Developer',
	//         period: 'July 2014 to September 2015'
	//     }
	// });`,

	skills: `const Skills = () => ({
    Language: ["Javascript", "Python", "PHP"],
    Libraries & Frameworks: [
        "Reasonml", "Node",
        "React", "ReasonReact",
        "React native", "express",
        "Typescript", "Serverless",
    ],
    Databases: ["PostgreSQL", "MongoDB"],
    "Cloud Applications": ["Heroku", "AWS", "ZIET", "Netlify"],
    Tools: [
        "Cypress", "CircleCi", "Git","Puppeteer", "Segment"
    ],
    Platform: ["Web", "IOS", "Android"],
    "Services": [
        "Stripe", "Razorpay", "Transferwise",
        "Salesforce", "Retool", "Airtable", "Metabase"
    ]

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
    mailto: '<a target='_blank' href='mailto:nimishgupta18396@gmail.com'><u>nimishgupta18396@gmail.com</u></a> ',
    mobile: '(+91)7417843488',
    form: 'Click <a target='_blank' href='https://airtable.com/shrVnaGfw86A3Qs8W'><u>here</u></a> to reach out to me.'
    'contact-card': Click <a target='_blank' href='https://chart.googleapis.com/chart?cht=qr&chs=150x150&chl=MECARD:N:Gupta,Nimish;New Delhi - India;TEL:7417843488;EMAIL:nimishgupta18396@gmail.com;URL:https://nimish-gupta.dev;NOTE:Pragmatic Programmer;;'> <u>here</u></a> to scan my contact card.
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
