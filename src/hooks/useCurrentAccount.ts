import { useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import { Account } from "../data/Account";
import { HttpClient } from "../utilities/axiosInstance";

const accountState = atom<Account | undefined>({
  key: "account",
  default: undefined,
});

export function useCurrentAccount() {
  const [account, setAccount] = useRecoilState(accountState);

  useEffect(() => {
    const token = localStorage.getItem("GULLIVER_WORKS_AUTH_TOKEN");
    if (!token) return;
    const id = token;

    const fetchAccount = async () => {
      try {
        const res = await HttpClient.request<Account>({
          method: "GET",
          url: `https://910f8d82-868e-4ac2-981d-af7621255ff8.mock.pstmn.io/accounts/${id}`,
        });
        setAccount(res.data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchAccount();
  }, []);

  return { account, setAccount };
}
