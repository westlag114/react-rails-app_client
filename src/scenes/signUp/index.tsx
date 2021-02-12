import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useCurrentAccount } from "../../hooks/useCurrentAccount";
import styles from "./style.module.scss";
import { SignUpParams, useSignUpPresenter } from "./useSignUpPresenter";

const SignUpPage = () => {
  const { register, handleSubmit } = useForm<SignUpParams>();
  const { signUp } = useSignUpPresenter();
  const { account } = useCurrentAccount();
  console.log(account);

  const onSubmit = (data: SignUpParams) => {
    signUp(data);
  };
  return (
    <div className={styles.page}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="account.email" ref={register} />
        <input name="account.password" ref={register} />
        <button>ログイン</button>
        <Link to="/">ホームへ</Link>
      </form>
    </div>
  );
};

export default SignUpPage;
