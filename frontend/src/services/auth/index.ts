import { apiConfig } from "../apiConfig";

import {
  ILogin,
  ILoginResponse,
  INewPassword,
  INewPasswordConfirm,
  IRefreshToken,
  ISignup,
} from "../../../frontend/src/@types/auth";

export const signUp = async (body: ISignup) => {
  return new Promise((resolve, reject) => {
    apiConfig
      .post("/auth/signup", body)
      .then((response) => {
        // console.log("signup: ", response);
        resolve(response);
      })
      .catch((e) => {
        reject(e?.response?.data ?? e);
      })
      .finally(() => {});
  });
};

export const getSignUpCode = async (username: string) => {
  return new Promise((resolve, reject) => {
    apiConfig
      .post(`/auth/${username}/signup/code`)
      .then((response) => {
        // console.log("getSignUpCode: ", response);
        resolve(response);
      })
      .catch((e) => {
        reject(e?.response?.data ?? e);
      })
      .finally(() => {});
  });
};

export const signUpConfirmation = async (username: string, code: string) => {
  return new Promise((resolve, reject) => {
    apiConfig
      .post(`/auth/${username}/signup/confirm`, { code })
      .then((response) => {
        // console.log("signUpConfirmation: ", response);
        resolve(response);
      })
      .catch((e) => {
        reject(e?.response?.data ?? e);
      })
      .finally(() => {});
  });
};

export const resendSignupCode = async (username: string) => {
  return new Promise((resolve, reject) => {
    apiConfig
      .get(`/auth/${username}/signup/next-resend`)
      .then((response) => {
        // console.log("signup: ", response);
        resolve(response);
      })
      .catch((e) => {
        reject(e?.response?.data ?? e);
      })
      .finally(() => {});
  });
};

export const getUserId = async (username: string) => {
  return new Promise((resolve, reject) => {
    apiConfig
      .get(`/auth/${username}/id`, {})
      .then((response) => {
        // console.log("signup: ", response);
        resolve(response);
      })
      .catch((e) => {
        reject(e?.response ?? e);
      })
      .finally(() => {});
  });
};

export const login = async (
  username: string,
  password: string
  // ): Promise<ILoginResponse> => {
) => {
  return new Promise((resolve, reject) => {
    apiConfig
      .post(`/auth/${username}/login`, {
        password,
        role: "Buyer",
      })
      .then((response) => {
        resolve(response);
      })
      .catch((e) => {
        reject(e?.response?.data ?? e);
      })
      .finally(() => {});
  });
};

export const logout = async (username: string) => {
  return new Promise((resolve, reject) => {
    apiConfig
      .post(`/auth/${username}/logout`)
      .then((response) => {
        // console.log("logout: ", response);
        resolve(response);
      })
      .catch((e) => {
        reject(e?.response?.data ?? e);
      })
      .finally(() => {});
  });
};

export const refreshToken = async (username: string, body: IRefreshToken) => {
  return new Promise((resolve, reject) => {
    apiConfig
      .post(`/auth/${username}/refresh`, body)
      .then((response) => {
        // console.log("refreshToken: ", response);
        resolve(response);
      })
      .catch((e) => {
        reject(e?.response?.data ?? e);
      })
      .finally(() => {});
  });
};

export const deleteUser = async (username: string) => {
  return new Promise((resolve, reject) => {
    apiConfig
      .delete(`/auth/${username}`)
      .then((response) => {
        // console.log("deleteUser: ", response);
        resolve(response);
      })
      .catch((e) => {
        reject(e?.response?.data ?? e);
      })
      .finally(() => {});
  });
};

export const changePassword = async (username: string, body: INewPassword) => {
  return new Promise((resolve, reject) => {
    apiConfig
      .put(`/auth/${username}/password`, body)
      .then((response) => {
        // console.log("changePassword: ", response);
        resolve(response);
      })
      .catch((e) => {
        reject(e?.response?.data ?? e);
      })
      .finally(() => {});
  });
};

export const forgotPassword = async (username: string) => {
  return new Promise((resolve, reject) => {
    apiConfig
      .post(`/auth/${username}/password/forgot`)
      .then((response) => {
        // console.log(`forgotPasswordresponse: `, response);
        resolve(response);
      })
      .catch((e) => {
        reject(e?.response?.data ?? e);
      })
      .finally(() => {});
  });
};

export const confirmNewPassword = async (
  username: string,
  body: INewPasswordConfirm
) => {
  return new Promise((resolve, reject) => {
    apiConfig
      .post(`/auth/${username}/password/forgot/confirm`, body)
      .then((response) => {
        resolve(response);
      })
      .catch((e) => {
        reject(e?.response?.data ?? e);
      })
      .finally(() => {});
  });
};

export const resendForgotCode = async (username: string) => {
  return new Promise((resolve, reject) => {
    apiConfig
      .get(`/auth/${username}/password/forgot/next-resend`)
      .then((response) => {
        resolve(response);
      })
      .catch((e) => {
        reject(e?.response?.data ?? e);
      })
      .finally(() => {});
  });
};
