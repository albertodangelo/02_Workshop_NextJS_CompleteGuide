import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const ClientsProjectPag = () => {
  const router = useRouter();
  console.log(router.query.id);

  return (
    <div>
      <h1>Clients Project Page Overview</h1>
      <p>{router.query.id}</p>
    </div>
  );
};

export default ClientsProjectPag;
