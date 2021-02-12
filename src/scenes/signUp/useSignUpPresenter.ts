import axios from "axios";

export type SignUpParams = {
  account: {
    email: string;
    password: string;
  };
};

export type SignUpPayload = {
  account: Account;
  token: string;
};

export function useSignUpPresenter() {
  const signUp = async (data: SignUpParams) => {
    try {
      const res = await axios.request<SignUpPayload>({
        method: "GET",
        url: "/auth/v1/sign_up",
        data: data,
      });
      localStorage.setItem("GULLIVER_WORKS_AUTH_TOKEN", res.data.token);
    } catch (e) {
      console.error(e);
    }
  };

  return { signUp };
}
