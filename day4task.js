// // QUESTION-1:
 // a.PRINT ODD NUMBERS IN Array
// Anonymous Function:
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
(function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
})(array);

// Function Call:
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let abc = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
};
abc(array);

// IIFE:
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
(function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
})(array);


// // b.Convert all the strings to title caps in a string array
// Anonymous Function:
var str = "my name is surya";
(function (inputStr) {
  var strArray = inputStr.toLowerCase().split(" ");
  for (var i = 0; i < strArray.length; i++) {
    strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1);
  }
  console.log(strArray.join(" "));
})(str);

// Function Call:
var str = "my name is surya";
let def = function (inputStr) {
  var strArray = inputStr.toLowerCase().split(' ');
  for (var i = 0; i < strArray.length; i++) {
    strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1);
  }
  return strArray.join(' ');
};
console.log(def(str));

// IIFE:
var str = "my name is surya";
(function (inputStr) {
  var strArray = inputStr.toLowerCase().split(' ');
  for (var i = 0; i < strArray.length; i++) {
    strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1);
  }
  console.log(strArray.join(' '));
})(str);


// // c.Sum of all numbers in an array
// Anonymous:
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = (function (arr) {
  var s = 0;
  for (let i = 0; i < arr.length; i++) {
    s += arr[i];
  }
  return s;
})(a);

// Function Call:
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = 0;
let ghi = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};
console.log(ghi(a));

// IIFE:
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = (function (arr) {
  var s = 0;
  for (let i = 0; i < arr.length; i++) {
    s += arr[i];
  }
  return s;
})(a);
console.log(sum);

// d.Return all the prime numbers in an array
//  AnonymousFunction:
let n3 = 34;
(function (n) {
  for (let i = 2; i <= n; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }
    if (flag == 0) {
      console.log(i);
    }
  }
})(n3);

// Function Call:
let n1 = 34;
let l = function (n) {
  for (let i = 2; i <= n; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }
    if (flag == 0) {
      console.log(i);
    }
  }
};
l(n1);

// IIFE:
let n6 = 34;
(function (n) {
  for (let i = 2; i <= n; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }
    if (flag == 0) {
      console.log(i);
    }
  }
})(n6);


// // e.Return all the palindromes in an array

// Anonymous Function:
(function (arr, n) {
  for (let i = 0; i < n; i++) {
    let ans = isPalindrome(arr[i]);
    if (ans == false)
      return false;
  }
  return true;
}) ;
// (arr,n);

// IIFE:
(function (arr, n) {
  for (let i = 0; i < n; i++) {
    let ans = isPalindrome(arr[i]);
    if (ans == false)
      return false;
  }
  return true;
}) ;
// ([1, 2, 3], 3);

// // f.Return median of two sorted arrays of the same size.
// Anonymous:
(function(nums1, nums2) {
   let s1= nums1.length
   let s2= nums2.length
   let index = s1+s2
   if(s1==0){
       if(s2%2==1){
           return nums2[Math.floor(index/2)]
       }else{
           return  (nums2[Math.floor(index/2)-1] + nums2[Math.floor(index/2)])/2
       }
   }
   for(let i=0 ; i<index/2+1;i++){
           nums1.push(nums2[i])
       }
   nums1.sort((a,b)=>a-b)
   console.log(nums1)
   if(index%2==1){
       return nums1[Math.floor(index/2)]
   }else{
       return (nums1[Math.floor(index/2)-1] + nums1[Math.floor(index/2)])/2
   }
   
});

IIFE:
(function(nums1, nums2) {
   let s1= nums1.length
   let s2= nums2.length
   let index = s1+s2
   if(s1==0){
       if(s2%2==1){
           return nums2[Math.floor(index/2)]
       }else{
           return  (nums2[Math.floor(index/2)-1] + nums2[Math.floor(index/2)])/2
       }
   }
   for(let i=0 ; i<index/2+1;i++){
           nums1.push(nums2[i])
       }
   nums1.sort((a,b)=>a-b)
   console.log(nums1)
   if(index%2==1){
       return nums1[Math.floor(index/2)]
   }else{
       return (nums1[Math.floor(index/2)-1] + nums1[Math.floor(index/2)])/2
   }
   
});


// // g.Remove duplicates from an array

// Anonymous Function:
var array = [1, 1, 2, 3, 4, 5];
(function (arr) {
  let dup = [...new Set(arr)];
  console.log(dup);
})(array);

// IIFE:
var array = [1, 1, 2, 3, 4, 5];
(function (arr) {
  let dup = [...new Set(arr)];
  console.log(dup);
})(array);

// h.Rotate an array by k times
//  Anonymous Function:
var Array = [1, 2, 3, 4, 5];
var N = Array.length;
var K = 2;
(function (a, n, k) {
  k = k % n;

  for (let i = 0; i < n; i++) {
    if (i < k) {
      console.log(a[n + i - k] + " ");
    } else {
      console.log(a[i - k] + " ");
    }
  }
})(Array, N, K);

// IIFE:
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
(function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
}) (array);
