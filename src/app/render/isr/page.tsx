import React from "react";
import { getHelloMessage } from "../../../../lib/hello";

/**
 * @description 10초 단위로 페이지를 다시 빌드하여 클라이언트에게 제공하는 기능
 * @constructor
 */

export const revalidate = 10; // ISR (10초 간격으로 다시 빌드)

const Page = async () => {
  const now = new Date().toISOString();
  // const { data } = await fetch("http://localhost:3000/api/hello", {
  //   next: { revalidate: 10 },
  // }).then((res) => res.json());
  const { message } = await getHelloMessage();

  return (
    <div>
      <p>ISR Page</p>
      <p>Fetched message: {message}</p>
      <p>{now}</p>
    </div>
  );
};

export default Page;
