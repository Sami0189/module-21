const today = new Date();
 console.log(today);

 const date = new Date('2062-10-09');
 console.log(date);
 console.log(date.getMonth());
 console.log(date.getDay());

 const specificDate = new Date(2091,0,26);
 console.log(specificDate);

//if i want to change month then
specificDate.setMonth(10);
console.log(specificDate);
console.log(specificDate.toLocaleString('en-GB'));



 const specificDate1 = new Date(2091,2,26);
 console.log(specificDate1);
