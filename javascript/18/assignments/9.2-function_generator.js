const generateRandom = () => Math.floor(Math.random() * 20) + 1;

const tryRandomUntilFount = (n, callbackFunction) => {
    let counter = 0;
    while (callbackFunction() !== n)
        counter++;

    console.log(`After ${counter} attempts ,we got ${n}`);


}

tryRandomUntilFount(5,generateRandom);