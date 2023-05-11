let score = [
    {
        name: "Ha",
        gender: 'female',
        point: 8
    },
    {
        name: "Huy",
        gender: 'male',
        point: 9
    },
    {
        name: "Hung",
        gender: 'male',
        point: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        point: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        point: 10
    },
    {
        name: "Long",
        gender: 'male',
        point: 5
    },
    {
        name: "Luan",
        gender: 'male',
        point: 10
    },
    {
        name: "Linh",
        gender: 'female',
        point: 8
    }
];
let sumMale = 0
let sumFemale = 0
let countMale = 0
let countFemale = 0

for (let i = 0; i < score.length - 1; i++) {
    if (score[i].gender === 'male'){
        countMale++
        sumMale += score[i].point
    }else {
        countFemale++
        sumFemale += score[i].point
    }

}
console.log("tổng điểm trung bình của các bạn nam là : ",(sumMale/countMale))
console.log("tổng điểm trung bình của các bạn nam là : ",(sumFemale/countFemale))
