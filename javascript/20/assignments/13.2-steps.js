const steps = (n) => {
    let str = '';
    while (n > 0) {
        str+="#";
        console.log(str);
        n--;
    }
}

// steps(4);

//with spaces
const steps1 = (n) => {
    let str = ' '.repeat(n).split('');
    while (n > 0) {
        let index =str.length-n;
        str[index]='#';
        console.log(str.join(''));
        n--;
    }
}

 steps1(4);

