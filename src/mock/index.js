// @flow

const rightEmail = "frontend@example.com";
const rightPassword = "1q2w3e4r5t6y";
const refresh_token = "refresh_token";
const access_token = "access_token";
const checkNamePassword = (email, password) => email === rightEmail && password === rightPassword;

export const mockResponse = ({email, password}: MockArgs) :Promise<MockResponse> | string => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (checkNamePassword(email, password)) {
        resolve({
          access_token,
          refresh_token
        })
      } else {
        reject("app.login.error");
      }
    }, 1500);
  })
}