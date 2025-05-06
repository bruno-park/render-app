import React from "react";
import { getHelloMessage } from "../../../../lib/hello";

/**
 * @description 서버에서 페이지 콘텐츠를 서버에서 미리 렌더링하여 클라이언트에 전달하는 방식
 * @constructor
 */
const Page = async () => {
  const { message } = await getHelloMessage();
  // const res = await fetch("http://localhost:3000/api/hello");
  // const data = await res.json();

  return (
    <>
      <p>SSR Page</p>
      <p>Fetched message: {message}</p>
    </>
  );
};

export default Page;
