

async function getSum(arr) {
    if (arr instanceof Array){
        let sum=0
        for (let i = 0; i < arr.length; i++) {
            sum+=arr[i];
        }
        return sum;
    }
    throw new Error("lỗi r e ơi")

}

let arr = [2,3,4,56,67,1]


async function f() {
    try{
        let result = await getSum(arr);
        console.log(result);
    }
    catch(error) {
        console.log(error);
    }
}
f();


