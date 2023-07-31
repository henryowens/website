import { FC } from "react";

const ErrorPage: FC<{ message: string }> = ({ message }) => (
  <main>
    <p>{message}</p>
  </main>
);

export default ErrorPage;
