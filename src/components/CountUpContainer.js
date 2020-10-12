/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Sep 27 2020 20:38:52 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";
import CountUp, { useCountUp } from "react-countup";
import styles from "./countUp.module.css";

function CountUpContainer() {
  const countUpProps = {
    duration: 30,
    end: 10000,
    startOnMount: false,
    prefix: "$",
  };

  const { countUp, start, pauseResume, reset, update } = useCountUp(
    countUpProps
  );

  return (
    <React.Fragment>
      {/* Basic */}
      <div className={styles.wrapper}>
        <CountUp
          start={500}
          end={1000}
          duration={10} // seconds
        />
      </div>
      <br />
      {/* Use case */}
      <div className={styles.wrapper}>
        <CountUp
          end={1000}
          duration={5} // seconds
          prefix="$"
          decimals={2}
          suffix=" USD"
        />
      </div>
      <br />
      {/* Advance */}
      <div className={styles.advanceWrapper}>
        <div>
          <h1>
            You have won
            <br />
            {countUp}
          </h1>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.btn} onClick={start}>
            Start
          </button>
          <button className={styles.btn} onClick={reset}>
            Reset
          </button>
          <button className={styles.btn} onClick={pauseResume}>
            Pause/Resume
          </button>
          <button className={styles.btn} onClick={() => update(1000)}>
            Down to 1000
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CountUpContainer;
