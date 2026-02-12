
export const ENVIRONMENTS = {
  UAT: {
    baseURL: 'https://qa.myapp.com',
  },
  DEV: {
    baseURL: 'https://uat.myapp.com',
  }
};

export const currentEnv = process.env.TEST_ENV || 'UAT';