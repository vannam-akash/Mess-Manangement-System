import styles from "./ExtrasBill.module.css";
import { useEffect, useRef } from "react";
import { useLoaderData } from "react-router-dom";
import ExtrasTable from "components/Tables/ExtrasTable/ExtrasTable";
import { checkStudAuthLoader } from "auth";
import { getExtras } from "api/student";
import UnenrolledFallback from "components/Divs/UnenrolledFallback/UnenrolledFallback";

const ExtrasBill = () => {
  const mainRef = useRef();
  const extras = useLoaderData();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainRef.current.scrollTop = 0;
  }, []);
  return (
    <>
      <section className="section section-shaped section-lg">
        <div className="shape shape-style-1 bg-gradient-primary">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <main ref={mainRef}>
          {!extras.length && <UnenrolledFallback />}
          {extras.length && (
            <section className="section section-shaped section-lg">
              <div className={styles.title}>Extras Bill</div>
              <div className={styles.studentList}>
                <ExtrasTable extras={extras} />
              </div>
            </section>
          )}
        </main>
      </section>
    </>
  );
};

export default ExtrasBill;

export async function extrasBillLoader() {
  checkStudAuthLoader();
  const { extrasTaken } = await getExtras();
  return extrasTaken;
}
