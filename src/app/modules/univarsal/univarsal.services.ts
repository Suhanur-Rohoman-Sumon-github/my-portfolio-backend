import { TProjects } from "./univarsal.interface";
import { blogModel, ExperienceModel, projectModel } from "./univarsal.model";


const createProjectInDb = async (payload: TProjects) => {
  const newUser = payload;
  
  const result = await projectModel.create(newUser);

  return result;
};
const createBlogInDb = async (payload: TProjects) => {
  const newUser = payload;
  
  const result = await blogModel.create(newUser);

  return result;
};
const createExperienceInDb = async (payload: TProjects) => {
  const newUser = payload;
  
  const result = await ExperienceModel.create(newUser);

  return result;
};

const getAllProjectFromDb = async () => {
  
  
  const result = await projectModel.find();

  return result;
};

const getAllBlogsFromDb = async () => {
  
  
  const result = await blogModel.find();

  return result;
};

const getAllExperienceFromDb = async () => {
  
  
  const result = await ExperienceModel.find();

  return result;
};
const getSingleBlogsFromDb = async (blogId:string) => {
  
  
  const result = await ExperienceModel.findOne({id:blogId});

  return result;
};
const getSingleProjectsFromDb = async (projectId:string) => {
  
  
  const result = await ExperienceModel.findOne({id:projectId});

  return result;
};



export const ProjectServices = {
    createProjectInDb,
    getAllProjectFromDb,
    createBlogInDb,
    createExperienceInDb,
    getAllExperienceFromDb,
    getAllBlogsFromDb,
    getSingleBlogsFromDb,
    getSingleProjectsFromDb
}