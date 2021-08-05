const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) break
    console.log(`indice ${x} = ${nums[x]}`)
}

for (y in nums) {
    if(y == 5) {
        continue
    }
    console.log(`continue ${y} = ${nums[y]}`)
}
