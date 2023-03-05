const a = (name, ...marks) => {
    let sum = 0;

    for (let i in marks) {
        sum += marks[i];

    }
    console.log(name, sum)
    console.log(marks)
}
a('lavanya', 90, 98, 87)