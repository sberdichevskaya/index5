let str = 'DDADSADASDAAADS';
let res = str[0];
let temp = '';
let k = 0;
let size = 0;

res.concat(str[0]);
//console.log(res);

for (let i = 0; i < str.length; i++)
{
  temp = str[i]
  //console.log(temp);

  size = res.length
  for (let j = 0; j < size; j++)
  {
    if (res[j] === temp)
    {
      k++;
      console.log(k);
    }
  }
    if (k === 0)
    {
      res = res.concat(temp);
    }
    k=0;
}

console.log(res);