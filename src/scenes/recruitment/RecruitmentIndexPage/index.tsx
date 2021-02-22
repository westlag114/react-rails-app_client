import React from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { useCurrentAccount } from "../../../hooks/useCurrentAccount";

const RecruitmentIndexPage = () => {
  const { account } = useCurrentAccount();
  console.log(account);
  return (
    <div className={styles.text}>
      求人一覧ページ
      <Link to="/sign_up">サインアップ</Link>
    </div>
  );
};

export default RecruitmentIndexPage;
