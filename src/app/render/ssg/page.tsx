import React from "react";
import { getHelloMessage } from "../../../../lib/hello";

// render/ssg/[id] 파라미터가 오는 경우에 함수가 호출
// export async function generateStaticParams() {
//   const res = await fetch("http://localhost:3000/api/hello");
//   const data = await res.json();
//
//   return [
//     {
//       params: {
//         message: data.message || "No message",
//       },
//     },
//   ];
// }

/**
 * @description 빌드 시점에 html을 미리 만들어 두어 클라이언트에게 빌드되어진 html을 제공하는 기능
 * @constructor
 */

export const revalidate = false; // SSG (한 번 빌드되고 끝)

const Page = async () => {
  const now = new Date().toISOString();
  const { message } = await getHelloMessage();
  // const { data } = await fetch("http://localhost:3000/api/hello", {
  //   cache: "force-cache",
  // }).then((res) => res.json());

  return (
    <div>
      <p>SSG Page</p>
      <p>Fetched message: {message}</p>
      <p>{now}</p>
    </div>
  );
};

export default Page;
