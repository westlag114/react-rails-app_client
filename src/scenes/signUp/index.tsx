import React from "react";
import { useForm } from "react-hook-form";
import styles from "./style.module.scss";
import { SignUpParams } from "./useSignUpPresenter";

const SignUpPage = () => {
  const { register, handleSubmit } = useForm<SignUpParams>();

  const onSubmit = (data: SignUpParams) => {
    console.log(data);
  };
  return (
    <div className={styles.page}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="account.email" ref={register} />
        <input name="account.password" ref={register} />
        <button>ログイン</button>
      </form>
    </div>
  );
};

export default SignUpPage;
