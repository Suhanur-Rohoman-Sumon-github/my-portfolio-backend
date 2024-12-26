import { TProjects } from "./univarsal.interface";
import { projectModel } from "./univarsal.model";


const createProjectInDb = async (payload: TProjects) => {
  const newUser = payload;
  
  const result = await projectModel.create(newUser);

  return result;
};

const getAllProjectFromDb = async () => {
  
  
  const result = await projectModel.find();

  return result;
};

export const ProjectServices = {
    createProjectInDb,
    getAllProjectFromDb
}