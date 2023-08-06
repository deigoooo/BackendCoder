const obj = {}
for (let index = 0; index < 1000; index++) {
    const aleatoreo = parseInt(Math.random() * 20 + 1)
    if (!obj[aleatoreo]) obj[aleatoreo] = 1
    else obj[aleatoreo]++
}

console.log(obj)