export const max = 255;

export const randomTarget = () => {
  let m = 1;
  while(m === 1) {
    m = parseInt((Math.random() * 1000), 10) % max;
  }
  return m;
};

export const result = (bits) => {
  let result = 0;
  bits.forEach(function (bit) {
    result += Math.pow(2, bit.value) * bit.status;
  });
  return result;
};

export const bitsForTarget = (bits, target) => {
  const targetBits = target.toString(2).split('').reverse().join('');
  const a = [];

  for(let i = 0; i < 8; i++) {
    const b = Boolean(parseInt(targetBits[i], 10));
    a.push({value: bits[i].value, status:b});
  }
  return a;
};

export const solved = (newState) => {
  if(result(newState.bits) === newState.target) {
    newState.target = randomTarget();
    newState.won = true;
  } else {
    newState.won = false;
  }
  return newState;
};
