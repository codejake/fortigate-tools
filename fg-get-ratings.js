#!/usr/bin/env node

"use strict";

import { checkFortiguardRating } from "./lib/fortiguard.js";

async function main() {
  try {
    const urlToCheck = process.argv[2];

    if (!urlToCheck) {
      console.error("Please provide a URL as the first argument.");
      process.exit(1);
    }

    const result = await checkFortiguardRating(urlToCheck);
    console.log("Fortiguard Rating:", result);

    // await performOtherTask();
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
