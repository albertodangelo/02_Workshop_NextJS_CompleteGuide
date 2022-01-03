import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Die Startseite</h1>
      <ul>
        <li>
          <Link href="/clients">Kunden</Link>
        </li>
      </ul>
    </>
  );
}
