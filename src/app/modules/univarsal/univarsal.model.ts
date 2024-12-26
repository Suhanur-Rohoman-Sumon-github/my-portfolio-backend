import mongoose from "mongoose";
import { TBlogs, TExperience, TProjects } from "./univarsal.interface";

const ProjectsSchema = new mongoose.Schema<TProjects>({
  heading: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
  para: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  technology: {
    type: [String],
    required: true,
  },
  para1: {
    type: String,
    required: true,
  },
  liveSideLink: {
    type: String,
    required: true,
  },
  githubBackendLink: {
    type: String,
    required: true,
  },
  gitHubFrontendLink: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export const projectModel = mongoose.model<TProjects>('Projects', ProjectsSchema);


const BlogSchema = new mongoose.Schema<TBlogs>(
  {
    title: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true, 
  }
);

export const blogModel = mongoose.model<TBlogs>('Blogs', BlogSchema);



const experienceSchema = new mongoose.Schema<TExperience>(
  {
    img: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    company: { type: String, required: true },
    duration: { type: String, required: true },
  },
  {
    timestamps: true, 
  }
);


export const ExperienceModel = mongoose.model<TExperience>('Experience', experienceSchema);