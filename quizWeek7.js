/*Write a function to find the most frequent item of an array.
Input: var arr1=['b', 'a', 'a', 'a', 'b', 'c', 'a', 'd', 'a', 'e', 'f', 'd', 'e'];
Expected Output : a ( 5 times ) */

var arr1=['b', 'a', 'a', 'a', 'b', 'c', 'a', 'd', 'a', 'e', 'f', 'd', 'e']
function mostFrequent(arr1){
    let currentCount = 0;
    let maxCount = 1;
    let element = arr1[0];

    for (let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr1.length; j++){

            if(arr1[i] === arr1[j]) currentCount++
        }
        if(currentCount > maxCount){
            maxCount = currentCount;
            element = arr1[i]
        }
        currentCount = 0
    }
   

    return element + ' ( ' + maxCount +' times )';
}


console.log(mostFrequent(arr1));


function removeDuplicates(arr1){

    let uniqueElements = [];
    arr1.forEach((c) => {
        if (!uniqueElements.includes(c)) {
            uniqueElements.push(c);
        }
    }); 
    return uniqueElements;      
}

console.log(removeDuplicates(arr1));


function union(arr1, arr2){

}




let library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
 
function compare(a, b) {
    if (a.title[0]< b.title[0]) {
      return -1;
    }
    if (  a.title[0]> b.title[0]) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }

  console.log(library.sort(compare));




  function search(AuthorName) {
    for( let i = 0; i < library.length; i++){
        if(library[i].author === AuthorName){
            console.log(library[i]);
        }
    }
  }

  console.log(search('Bill Gates'));


  function filterByID(arr, item) {
    
    for(let i =0; i < arr.length; i++){
        if (arr[i] === item) {
            return true
          } 
          
          return false;
    }
    
  }
  
  //let arrByID = arr.filter(filterByID)
  



 function remove_array_element(arr, element){
    let index = -1;

    for(let i =0; i < arr.length; i++){
        if (arr[i] === element) {
            index = i;
          } 
    }
    if (index > -1) { arr.splice(index, 1) }

    return arr;
  }



 //console.log(filterItems([2, 5, 9, 6], 5));
  console.log(remove_array_element([2, 5, 9, 6], 5));