function countAnimals(animals,count){

 animals = animals.split(',');
  let rezultArray = [];

  for(let i = 0; i< count.length; i++){
    let countOfAnimal = 0;

    for(let j = 0; j< animals.length; j++){
      if(animals[j].match(new RegExp(count[i],'g'))) countOfAnimal++;
    }

    rezultArray.push(countOfAnimal)
  }
  
  return rezultArray;
}