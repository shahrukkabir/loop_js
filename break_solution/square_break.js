for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (Number.isInteger(Math.sqrt(i))) {
        console.log(`Encountered the first square number (${i}). Exiting the loop.`);
        break;
    }
}
