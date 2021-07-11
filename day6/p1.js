console.log("Array programs");
console.log("PROGRAM 1");
function is_array(x) {
  
    return (Array.isArray(x));
}
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

console.log("PROGRAM 2");
function array_clone(list) {
 var arr=list.slice(0);
  return arr;
}
array_clone([1, 2, 4, 0]);
array_clone([1, 2, [4, 0]]);

console.log("PROGRAM 3");
function firstElement(list,n=1) {
  if (list == null) 
    return void 0;
  if (n == null) 
    return list[0];
  if (n < 0)
    return [];
  return list.slice(0, n);
}
console.log(firstElement([7,9,0,-2]));
console.log(firstElement([],3));
console.log(firstElement([7,9,0,-2],3));
console.log(firstElement([7, 9, 0, -2],6));
console.log(firstElement([7, 9, 0, -2],-3));



console.log("PROGRAM 4");
function join_elements(list) {
  console.log('"'+list.join(',')+'"');
  console.log('"'+list.join('+')+'"');
}
join_elements(["Red","Green","White","Black"]);

console.log("PROGRAM 5");
function freq(list) {
  maxf=0;
  c=0;
  n=list.length;
  for(i=0;i<n;i++)
  {
    for(j=1;j<n;j++)
    {
      if(list[j] == list[i])
      {
        c++;
      }
      if(maxf<c)
      {
        maxf = c;
        item = list[i];
      }
    }
    c=0;
  }
  console.log(item+'('+maxf+' times)');
}
freq([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);

