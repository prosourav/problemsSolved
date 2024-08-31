const getFibo = (parm) => {
  const fibo = [0, 1]; // Start with the first two Fibonacci numbers
  let i = 2;
  while (parm > i) {
    const data = fibo[i - 2] + fibo[i - 1]
    fibo.push(data);
    i++;
  };
  return fibo;
};

console.log(getFibo(10));