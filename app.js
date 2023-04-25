// 13. Roman to Integer

var romanToInt = function(s) {
  const map = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};

  let result = 0
  s.split("").forEach((num, i) =>{
    if(map[num] < map[s[i + 1]]){
      result -= map[num]
      result = result - map[num]
    } else {
      result += map[num]
    }

  });
};
// romanToInt("XXX");

// 14. Longest Common Prefix

/*
  horizontal methord and //!vertical methord
  vertical methord have better time complexity 
*/


var longestCommonPrefix = function(strs) {

    let prefix = "";
    if(strs.length === 0 ) return prefix
    for(let i=0; i<strs[0].length; i++){
      let charcaters = strs[0][i];  //f
      for(let j = 0 ; j< strs.length; j++){
        if(strs[j][i] !== charcaters) return prefix
      }
      prefix += charcaters;
    }

    return prefix
};

strs = ["flower","flow","flight"]
longestCommonPrefix(strs);

// Input: strs = ["flower","flow","flight"]
// Output: "fl"