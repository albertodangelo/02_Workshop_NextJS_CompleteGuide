import Link from "next/link";
import React from "react";
import router, { useRouter } from "next/router";

const ClientPage = () => {
  const router = useRouter();

  const clients = [
    { id: "tom", name: "Jones" },
    { id: "scarlett", name: "Johansson" },
  ];

  const forwordhandler = () => {
    router.push("/clients/client/a");
  };

  return (
    <div>
      <h1>Clients Main Page</h1>
      <ul>
        {clients.map((item) => {
          return (
            <li key={item.id}>
              <Link href={`/clients/${item.id}`}>{item.name}</Link>
              <button onClick={forwordhandler}>
                Weiterleiten Programmatisch (ohne href)
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ClientPage;
