"use client";

import { useEffect, useState } from "react";

/**
 * @description use client를 사용하고, useEffect에서 사용한다면 csr 로 처리됨
 * @description CSR? -> 브라우저가 JS를 통해 직접 렌더링하는 것을 뜻함
 * @description 개발자 도구 -> 문서 확인시 fetch된 데이터가 없는 상태로 응답이 오는 것을 확인
 * @constructor
 */
const Page = () => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <>
      <p>CSR Page</p>
      {message ? <p>Fetched message: {message}</p> : <p>Loading</p>}
    </>
  );
};

export default Page;
