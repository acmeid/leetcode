var twoSum = (nums, target) => {
  var record = [];
  var t = [];
  for (let k = 0; k < nums.length; k++) {
    // console.log('k:::::::', k);
    
    var v = nums[k];
    var a = target - v;
    if (typeof record[a] !== 'undefined') {
      t = [record[a], k];
      break;
    } else {
      record[v] = k;
    }
  }

  return t;
}

var nums = [0,4,1,5,6,7,9,10,9,2]
var target = 8;
var b = twoSum(nums, target);

console.log(b);