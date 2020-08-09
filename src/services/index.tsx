import { getUserdata, logout, submitLogin } from './db-auth';
import { updateAuthUserdata, upsertAuthSkills, upsertAuthAbout, getAuthSkills, getAuthAbout } from './db-userdata';
import { getDefaultAbout, getDefaultSkills, getDefaultProjects, getDefaultProjectByID, getDefaultMainInfo } from './db-defaults';
import { uploadImage, deleteFile, upsertProject, deleteProject, getAuthProjects } from './db-projects';
import { sendEmail, getEmail, deleteEmail, updateEmail } from './db-contacts';

export {
    getUserdata,
    logout,
    submitLogin,
    upsertProject,
    updateAuthUserdata,
    upsertAuthSkills,
    upsertAuthAbout,
    getAuthSkills,
    getAuthAbout,
    getAuthProjects,
    getDefaultAbout,
    getDefaultSkills,
    getDefaultProjects,
    getDefaultProjectByID,
    getDefaultMainInfo,
    deleteProject,
    uploadImage,
    sendEmail,
    getEmail,
    deleteEmail,
    updateEmail,
    deleteFile
}