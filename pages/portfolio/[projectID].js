import { useRouter } from "next/router";
import React from "react";

const PortfolioDetailPage = () => {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1>Portfolio Detail page: {router.query.projectID}</h1>
    </div>
  );
};

export default PortfolioDetailPage;
