import React from 'react';

const ProjectCard = ({ title, description, image, video, category, technologies, link }) => {
    return (
        <div className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/20">
            {/* Media Container */}
            <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black/50">
                {video ? (
                    <video
                        src={video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="h-full w-full object-cover"
                    />
                ) : image ? (
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                ) : (
                    // Fallback placeholder
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-violet-900/20 to-fuchsia-900/20">
                        <svg className="h-12 w-12 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                )}
            </div>

            {/* Header: Folder Icon & Category */}
            <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-400 group-hover:text-purple-400 transition-colors">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                </div>
                <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium uppercase tracking-wider text-gray-300 group-hover:border-purple-500/30 group-hover:bg-purple-500/10 group-hover:text-purple-300 transition-all">
                    {category}
                </span>
            </div>

            {/* Content */}
            <div className="mb-6 flex-grow">
                <h3 className="mb-2 text-xl font-bold text-white group-hover:text-purple-300 transition-colors">{title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{description}</p>
            </div>

            {/* Footer: Divider & Tech Stack */}
            <div className="border-t border-white/10 pt-4 mt-auto">
                <div className="flex items-center justify-between">
                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                            <span key={index} className="rounded-md border border-white/5 bg-white/5 px-2 py-1 text-[10px] font-medium text-gray-400 transition-colors group-hover:border-white/10 group-hover:text-gray-300">
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* External Link */}
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-purple-500/50 hover:bg-purple-500/20 hover:text-white"
                        aria-label={`View ${title}`}
                    >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

const ProjectCardsGrid = () => {
    const projects = [
        {
            title: "SmartScape",
            description: "Urban infrastructure planning assistant. Showcased at IBM AI summit 2025. Leveraging AI for smarter cities.",
            video: "/SmartScape.mp4",
            category: "AI AGENT",
            technologies: ["Flask", "GCP", "Vertex AI"],
            link: "https://smartscape.in/"
        },
        {
            title: "Hotel Management System",
            description: "A Hotel Management System where we can book hotel as per our choice and admin can confirm the booking and so on.",
            video: "/Hotel.mp4",
            category: "SAAS",
            technologies: ["HTML", "CSS", "PHP", "MySQL"],
            link: "https://github.com/Zpuppetz/hotel-management"
        },
        {
            title: "E-Commerce Website",
            description: "A dual-sided marketplace facilitating peer-to-peer trading with a focus on scalability and security. Manage complex state for user sessions, inventory CRUD operations, and cart synchronization.",
            image: "/E-commerce.png",
            category: "SAAS",
            technologies: ["RESTful", "Node.js", "Express.js", "MongoDB"],
            link: "https://github.com/Zpuppetz/E-commerce-keshav"
        }
    ];

    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </div>
    );
};

export default ProjectCardsGrid;
