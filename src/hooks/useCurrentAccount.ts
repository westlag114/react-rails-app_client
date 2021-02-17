import { atom, useRecoilState } from "recoil";
import { Account } from "../data/Account";

const accountState = atom<Account | undefined>({
  key: "account",
  default: undefined,
});

export function useCurrentAccount() {
  const [account, setAccount] = useRecoilState(accountState);

  // ここでfetchAccountしてくるべき;

  return { account, setAccount };
}
