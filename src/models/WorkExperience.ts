export default interface WorkExperience {
    company: string;
    title: string;
    dateFromTo: string;
    description: string;
    activities?: string[];
    skills: string[]; // TODO : add enum for skills, corresponding to 3D logos
}