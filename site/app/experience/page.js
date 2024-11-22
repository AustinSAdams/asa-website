"use client"
import "./experience.css";

export default function Page(){

    const experienceList = [
        { 
            employer: "QMS2GO", 
            position: "Software Engineer", 
            href: "https://qms2go.com/", 
            description: "As a Software Engineer at QMS2GO, I was responsible for maintaining and updating the company’s website using WordPress, ensuring it remained functional and user-friendly. I utilized Next.js, a React framework, to develop and implement features for their AI model powered by OpenAI, leveraging programming languages such as JavaScript, TypeScript, and Python. My work included designing and integrating APIs to enhance the AI model's functionality and improve user experience. Additionally, I worked with the company’s Firebase database, tinkering with its structure to support feature development and data management. Tools like Postman were integral to my workflow, allowing me to test API endpoints and ensure seamless integration and reliable performance.", 
            traits: ["React", "WordPress", "JavaScript", "CSS", "HTML", "TypeScript", "Python", "NextJS", "NodeJS", "Firebase", "API integrations", "Postman"],
        },
        { employer: "Office Depot", position: "Key Holder", href: "https://www.officedepot.com/", 
            description: "As a Key Holder at Office Depot, I was responsible for achieving daily sales quotas, managing the team to ensure efficient workflows, and addressing customer complaints or issues in a managerial capacity. I also headed the store's IT services, which involved performing PC speed-ups, data transfers, new computer setups, and other related technical support tasks. Additionally, I actively contributed on the sales floor, assisting customers with purchases, and spent significant time in the print department, providing specialized services. My role required strong leadership, technical expertise, and excellent customer service skills to maintain a productive and customer-focused environment.", 
            traits: ["Leadership", "IT Services", "Sales Management", "Customer Service", "Team Management", "Technical Support", "PC Optimization", "Data Transfer", "Print services"],
        },
    ];

    const handleEmployerClick = (url) => {
        window.open(url, "_blank");
    };

    return (
        <div className="experience-container">
            {experienceList.map((job, index) => (
                <div className="experience-card" key={index}>
                    <span className="experience-card-header"> 
                        <button 
                            className="employer-name"
                            onClick={() => {handleEmployerClick(job.href)}}
                        >
                            {job.employer}
                        </button>
                        <p className="position-title">{job.position}</p>
                    </span>
                    <hr/>
                    <p className="position-description">{job.description}</p>
                    <hr/>
                    <span>
                        {job.traits.length > 0 && (
                            <div className="experience-card-footer">
                                {job.traits.map((trait, traitIndex) => (
                                    <p
                                        className="job-trait"
                                        key={traitIndex}
                                    >
                                        {trait}
                                    </p>
                                ))}
                            </div>
                        )}
                    </span>
                </div>
            ))}
        </div>
    );
};