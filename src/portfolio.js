/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000, // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true, // Set to false to use static SVG
};

const greeting = {
  username: "khanhnguyendev",
  title: "Hi all, I'm Khanh Nguyen",
  subTitle: emoji(
    "Experienced Java Developer with over 3 years of proven expertise specializing in back-end development, poised to transition into 🚀 DevOps..."
  ),
  resumeLink:
    "https://khanhnguyencv.s3.ap-northeast-1.amazonaws.com/%5BCV-JAVA%5D+NGO+KHANH+NGUYEN.pdf", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/khanhnguyendev",
  linkedin: "https://www.linkedin.com/in/khanhnguyendev/",
  gmail: "career.khanhnguyen@gmail.com",
  gitlab: "https://gitlab.com/khanhnguyendev",
  facebook: "https://www.facebook.com/khanhnguyendev",
  medium: "https://medium.com/@khanhnguyen.vlu",
  // stackoverflow: "https://stackoverflow.com/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ A Java developer with 3+ years of experience in developing and maintaining web applications"
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Google Cloud"
    ),
    emoji(
      "⚡ Experience in building software with Microservices architecture using Spring Framework, Spring Boot, Spring Cloud, ..."
    ),
    emoji(
      "⚡ Experience with relational databases such as MySQL, PostgreSQL, Oracle and MongoDB"
    ),
    emoji(
      "⚡ Experience with CI/CD tools such as Jenkins, Kubernetes, Gitlab/Github CI, AWS CodePipeline, AWS CodeBuild, AWS CodeDeploy, ..."
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Van Lang University",
      logo: require("./assets/images/VLU_logo.jpeg"),
      subHeader: "Bachelor of Thermal Engineering Faculty",
      duration: "2015 - 2020",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      // ],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "DevOps", //Insert stack or technology you have experience in
      progressPercentage: "50%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "70%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Mid-Level Java Developer",
      company: "GIANTY Vietnam Co., Ltd",
      companylogo: require("./assets/images/GIANTY_logo.jpeg"),
      date: "12/2022 – Present",
      desc: "GIANTY says yes to challenges, and strives to establish a reputation in the tech industry for our gaming applications and other products. We also provide development tools and systems to speed up your product development.",
      descBullets: [
        "Participate in developing the company's products in language Java language based on Spring, gRPC, graphQL and Play framework",
        "Monitor, integrate and develop systems, applications and APIs",
        "Implement push notifications system using Google Firebase",
        "Optimizing Docker builds with cache management for BE&FE",
        "Build a complete declarative CI/CD pipeline on on-premises server infrastructure using Jenkins, Docker and Monitoring with Glance",
        "Build a complete declarative CI/CD pipeline on AWS using CodeCommit, CodePipeline, ECR, S3, Cloudwatch, Sercet Manager, System Manager, App Runner and notifications with AWS Chatbot",
      ],
    },
    {
      role: "Java Developer",
      company: "FUJINET SYSTEMS JSC",
      companylogo: require("./assets/images/FJS_logo.jpeg"),
      date: "08/2020 - 12-2022",
      desc: "CHUBU Electric Power & Hitachi System",
      descBullets: [
        "Worked in a 15-person team of devs and business specialists",
        "Requirements analysis, feature design, database, programming in product development projects on java platforms",
        "Participate in bug fixing and customer support",
        "Participate in research and presentation of new technologies",
        "Write technical specification documents",
      ],
    },
    {
      role: "Internship - Java developer",
      company: "REDSUN Inc.",
      companylogo: require("./assets/images/REDSUN_logo.png"),
      date: "2019 – 06/2020",
      desc: "Warehouse Management System (Nam Thinh M&E Corp)",
      descBullets: [
        "Developed a module to manage material for Nam Thinh M&E Corp.",
        "Development of major components or modules and contribute to the design and maintenance of the products",
        "Build and deploy application on Google Cloud Plaform (Compute Engine)",
        "Technologies used: Spring Boot, AngularJS, Boostrap, Hibernate and svn.",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME BIG PROJECTS YOU HAVE WORKED ON",
  projects: [
    {
      image: "",
      projectName: "",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "",
          url: "",
        },
        //  you can add extra buttons here.
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: "",
      imageAlt: "",
      footerLink: [
        {
          name: "Certification",
          url: "",
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: "",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/"],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or want to hire me? My Inbox is open for all.",
  number: "+84-834493989",
  email_address: "career.khanhnguyen@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
};
