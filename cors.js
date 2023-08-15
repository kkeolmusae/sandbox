import fetch from "node-fetch";
import cors from "cors";

async function fetchTest() {
  return await fetch("https://evanmoon.tistory.com/rss", {
    headers: { "Content-Type": "application/json", origin: "https://evan-moon.github.io" },
  });
}

(async () => {
  console.log(await fetchTest());
})();
