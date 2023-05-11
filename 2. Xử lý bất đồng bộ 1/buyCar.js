let money = 1000
const buyCarr = (car) => {
    return new Promise(((resolve, reject) =>{
        setTimeout(()=>{
            if (money >= 1000){
                resolve("can buy car"+car)
            }else {
                reject("do not enough money")
            }
        },100)
    }))
}
money = 12;
const promise = buyCarr("xe bo").then(value => {
    console.log(value)
},error=>{
    console.log(error)
    }
)
