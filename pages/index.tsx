import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.bgWrap}>
        <Image
          alt="Banner"
          src="/banner.png"
          layout="fill"
          objectFit="cover"
          quality={100}
          className={"blur-md brightness-[.60]"}
        />
      </div>
      <div className={"pt-96 text-center"}>
        <p className={"m-0"}>OnlyCriminals</p>
        <div className="h-24 relative">
          <button>
            <Image src="/discordbutton.svg" layout="fill" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
