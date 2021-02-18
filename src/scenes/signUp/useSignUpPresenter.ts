import axios from "axios";
import { useCurrentAccount } from "../../hooks/useCurrentAccount";
import { Account } from "../../data/Account";
import { HttpClient } from "../../utilities/axiosInstance";

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
  const { setAccount } = useCurrentAccount();
  const signUp = async (data: SignUpParams) => {
    try {
      const res = await HttpClient.request<SignUpPayload>({
        method: "POST",
        url:
          "https://1134932e-a443-49eb-8dd6-764a9db8d7bc.mock.pstmn.io/sign_up",
        data: data,
      });
      localStorage.setItem("GULLIVER_WORKS_AUTH_TOKEN", res.data.token);
      setAccount(res.data.account);
    } catch (e) {
      console.error(e);
    }
  };

  return { signUp };
}
