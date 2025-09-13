import { Roboto } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import styles from "@/styles/Home.module.css";
import Pagination from "@/components/Pagination";
import Loading from "@/components/Loading";
import ErrorState from "@/components/Error";
import { useLaunches } from "@/hooks/useLaunches";
import { PAGE_SIZE } from "@/constants";
import { formatDate } from "@/utils/formatDate";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400"] });

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const { docs, page, totalPages, loading, error } = useLaunches(
    currentPage,
    PAGE_SIZE
  );

  const renderCard = (launch, i) => {

    const status =
      launch.success === true
        ? "success"
        : launch.success === false
          ? "failure"
          : "upcoming";

    return (
      <article key={launch.id || i} className={styles.launch_card}>
        {launch?.links?.patch?.small && (
          <Image
            className={styles.img}
            src={launch.links.patch.small}
            alt="Rocket Patch"
            width={200}
            height={200}
            priority={i === 0 && currentPage === 1}
          />
        )}

        <h2 className={styles.title}>{launch.name}</h2>

        <div className={`${styles.card__content} ${styles.stack}`}>
          {launch.date_utc && (
            <p className={styles.meta}>
              <span className={styles.label}>Date:</span>{" "}
              {formatDate(launch.date_utc)}
            </p>
          )}

          {/* Status pill */}
          <span
            className={`${styles.status} ${styles[
              status === "success"
                ? "status--success"
                : status === "failure"
                  ? "status--failure"
                  : "status--upcoming"
              ]
              }`}
          >
            {status}
          </span>

          {launch.details && (
            <p className={`${styles.details} ${styles.clamp}`}>
              {launch.details}
            </p>
          )}

          {launch.failures && launch.failures[0] && !launch.success && (
            <p className={styles.meta}>
              <span className={styles.label}>Failure Reason:</span>{" "}
              {launch.failures[0].reason}
            </p>
          )}
        </div>
      </article>
    );
  };

  return (
    <>
      <Head>
        <title>SpaceX Launch Tracker</title>
        <meta name="description" content="space x monitor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={`${styles.header} ${roboto.className}`}>
        <h1 className={styles.header__title}>Space X Launch Tracker</h1>
      </header>

      <main className={`${styles.main} ${roboto.className}`}>
        {loading && <Loading />}
        {error && !loading && <ErrorState message="Failed to fetch launches." />}

        {!loading && !error && (
          <>
            <section role="card-container" className={styles.main__section}>
              {docs?.length > 0 && docs?.map(renderCard)}
            </section>
            <Pagination
              page={page}
              totalPages={totalPages}
              onChange={setCurrentPage}
            />
          </>
        )}
      </main>
    </>
  );
}