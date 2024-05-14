const envvars = process.env;
console.log(envvars,"ooooppp")

export const environmentVariables = {
  apiUrl: envvars.REACT_APP_BASE_URL,
};