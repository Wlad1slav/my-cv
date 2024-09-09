import {TbBrandNodejs, TbBrandReactNative} from "react-icons/tb";
import {
    BiLogoCss3,
    BiLogoDocker,
    BiLogoGit,
    BiLogoGithub,
    BiLogoJavascript,
    BiLogoLinkedin,
    BiLogoMongodb,
    BiLogoReact,
    BiLogoRedux,
    BiLogoTailwindCss,
    BiLogoTelegram,
    BiLogoTypescript,
    BiLogoFirebase
} from "react-icons/bi";
import {SiAuth0, SiCpanel, SiMongoose, SiNetlify, SiNextdotjs, SiPostman, SiPytest, SiShadcnui} from "react-icons/si";
import {FaDatabase} from "react-icons/fa";
import {AiOutlineDeploymentUnit, AiFillApi, AiFillBug, AiOutlineComment, } from "react-icons/ai";
import {PiBracketsCurlyDuotone, PiCoffeeFill, PiCompassToolFill} from "react-icons/pi";
import {GiRainbowStar} from "react-icons/gi";
import {MdAlternateEmail} from "react-icons/md";
import {IoLanguage, IoLogoSass} from "react-icons/io5";
import {RiSeoFill} from "react-icons/ri";

export const personal = {
    name: 'Vladyslav Fokin',
    photo: "/assets/images/vladyslav_fokin_full_size_minimize.webp",
    desc: 'Fullstack Developer | Passionate about building scalable and user-friendly applications.'
};

export const urls = {
    telegram: 'https://t.me/vladyslav_fokin',
    github: 'https://github.com/Wlad1slav',
    linkedin: 'https://www.linkedin.com/in/vladyslav-fokin-b35950298/',
}

export const portfolio = {
    frontend: {
        heading: 'Front-end',
        skills: [
            {label: 'React.js', icon: TbBrandReactNative},
            {label: 'Next.js', icon: SiNextdotjs},
            {label: 'SEO', icon: RiSeoFill},
            {label: 'TypeScript', icon: BiLogoTypescript},
            {label: 'JavaScript', icon: BiLogoJavascript},
            {label: 'CSS', icon: BiLogoCss3},
            {label: 'SCSS', icon: IoLogoSass},
            {label: 'Tailwind', icon: BiLogoTailwindCss},
            {label: 'shadcn/ui', icon: SiShadcnui},
            {label: 'Redux', icon: BiLogoRedux},
            {label: 'Jest', icon: AiFillBug},
        ]
    },

    backend: {
        heading: 'Back-end',
        skills: [
            {label: 'Node.js', icon: TbBrandNodejs},
            {label: 'Next.js', icon: SiNextdotjs},
            {label: 'Express.js', icon: PiBracketsCurlyDuotone},
            {label: 'MongoDB', icon: BiLogoMongodb},
            {label: 'Mongoose.js', icon: SiMongoose},
            {label: 'MySQL', icon: FaDatabase},
            {label: 'Firebase', icon: BiLogoFirebase},
        ]
    },

    tools: {
        heading: 'Tools',
        skills: [
            {label: 'Git', icon: BiLogoGit},
            {label: 'Github', icon: BiLogoGithub},
            {label: 'Github Actions', icon: AiOutlineDeploymentUnit},
            {label: 'Docker', icon: BiLogoDocker},
            {label: 'Netlify', icon: SiNetlify},
            {label: 'cPanel', icon: SiCpanel},
            {label: 'Postman', icon: AiFillApi},
        ]
    },

    important: {
        heading: 'Actually important',
        skills: [
            {label: 'Coffee enthusiast', icon: PiCoffeeFill},
            {label: 'Enjoy complex strategy games', icon: PiCompassToolFill},
            {label: 'Value inclusive environments', icon: GiRainbowStar},
            {label: 'Appreciate post-ironic humor', icon: AiOutlineComment},
            {label: 'Bilingual (Ukrainian, Russian) + English & Czech', icon: IoLanguage }
        ]
    }
};

export const contacts = [
    {
        label: '@vladyslav_fokin',
        url: urls.telegram,
        icon: BiLogoTelegram,
        // color: '#249AD7'
    },
    {
        label: 'Wlad1slav',
        url: urls.github,
        icon: BiLogoGithub,
        // color: 'white'
    },
    {
        label: 'Vladyslav Fokin',
        url: urls.linkedin,
        icon: BiLogoLinkedin,
        // color: '#0077B5'
    },
    {
        label: 'vlad.fokin2004.vf@gmail.com',
        url: 'mailto:vlad.fokin2004.vf@gmail.com',
        icon: MdAlternateEmail,
        // color: '#FF4737'
    },
];