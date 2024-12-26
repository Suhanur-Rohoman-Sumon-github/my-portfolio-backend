import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendRespone";
import {

	StatusCodes,
} from 'http-status-codes';
import { ProjectServices } from "./univarsal.services";
const createProjects = catchAsync(async (req, res) => {
  

  const result = await ProjectServices.createProjectInDb(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Project is created successfully',
    data: result,
  });
});
const createExperience = catchAsync(async (req, res) => {
  

  const result = await ProjectServices.createProjectInDb(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Experience is created successfully',
    data: result,
  });
});
const createBlog = catchAsync(async (req, res) => {
  

  const result = await ProjectServices.createProjectInDb(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Blog is created successfully',
    data: result,
  });
});
const getAllProjectFromDb = catchAsync(async (req, res) => {
  

  const result = await ProjectServices.createProjectInDb(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Project is retrieve successfully',
    data: result,
  });
});
const getALLBlogs = catchAsync(async (req, res) => {
  

  const result = await ProjectServices.createProjectInDb(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Blog is retrieve successfully',
    data: result,
  });
});
const getSingleBLogs = catchAsync(async (req, res) => {
  

  const result = await ProjectServices.createProjectInDb(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Blog is retrieve successfully',
    data: result,
  });
});
const getSingleProjects = catchAsync(async (req, res) => {
  

  const result = await ProjectServices.createProjectInDb(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Blog is retrieve successfully',
    data: result,
  });
});
const getAllExperience = catchAsync(async (req, res) => {
  

  const result = await ProjectServices.createProjectInDb(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Experience is retrieve successfully',
    data: result,
  });
});

export const ProjectsControllers = {
    createProjects,
    getAllProjectFromDb,
    getALLBlogs,
    getAllExperience,
    createBlog,
    createExperience,
    getSingleBLogs,
    getSingleProjects

}