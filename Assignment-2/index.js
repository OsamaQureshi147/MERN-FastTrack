// Functions used in assignments

const addString = (s1,s2) => {
    return s1+s2;
  };

const splitString = (s1) => {
    return s1.split(';');
  };

const countOccurrences = (arr, val) => {
    let count = 0;
    // console.log(arr.length);
    for (let i=0 ; i<arr.length ; i++){
        if (arr[i] == val){
            
            count++;
        }
    }
    return count;
};

//              ///////

// extra functions to handle html
const concatBtn = () => {
    let s1 = document.getElementById("input1").value;
    let s2 = document.getElementById("input2").value;
    document.getElementById('concatString').value = addString(s1,s2);
};

const splitBtn = () => {
    let s1 = document.getElementById("input3").value;
    document.getElementById('splitString').value = splitString(s1);
};

const occurString = () => {
    let s1 = document.getElementById("input4").value;
    let s2 = document.getElementById("input5").value;
    s1 = s1.replace("[", "");
    s1 = s1.replace("]", "");
    s1 = s1.trim();
    s1 = s1.split(',');
    console.log(s1);
    document.getElementById('valueOccur').value = countOccurrences(s1,s2);
};