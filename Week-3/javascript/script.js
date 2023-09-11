//odd,even
function divideArray(nums) {
    let oddNums=[]
    let evenNums=[]
    for(let i in nums) {
        if(nums[i] % 2 == 0) {
            evenNums.push(nums[i])
        }  else if(nums[i] != 0){
            oddNums.push(nums[i])
        } else {
            console.log("None")
        }
    }
    evenNums.sort(function(a, b){return a - b});
   oddNums.sort(function(a, b){return a - b});
   
return {oddNums,evenNums}; 
}

let output = divideArray([1,23,4,5,6])
console.log(output)