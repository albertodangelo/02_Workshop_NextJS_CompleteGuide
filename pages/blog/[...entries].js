import React from "react";
import { useRouter } from "next/router";

const BlogEntries = () => {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>
      <h1>Blog Entries</h1>
    </div>
  );
};

export default BlogEntries;
