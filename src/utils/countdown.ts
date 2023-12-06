import { useState, useEffect } from "react";

export const countdown = (hours: number, minutes: number, seconds: number) => {
  const [time, setTime] = useState("00:00:00");

  useEffect(() => {
    const countdownDate = new Date(); // Insira a data final do contador aqui
    countdownDate.setHours(countdownDate.getHours() + hours);
    countdownDate.setMinutes(countdownDate.getMinutes() + minutes);
    countdownDate.setSeconds(countdownDate.getSeconds() + seconds);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      //   @ts-ignore
      const distance = countdownDate - now;

      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setTime(
        `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
      );

      if (distance < 0) {
        clearInterval(interval);
        setTime("00:00:00");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return time;
};
