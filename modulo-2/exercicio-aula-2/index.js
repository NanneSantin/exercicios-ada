const calculateRatingAverage = (ratings) => {
    let sum = 0;
    let totalCustomers = 0;

    for (const rating of ratings) {
        const [score, quantity] = rating.trim().split(',');

        sum += Number(score[0]) * Number(quantity);
        totalCustomers += Number(quantity);
    }

    return sum / totalCustomers;
}

const ratings = ['1 estrela, 2', '2 estrelas, 15', '3 estrelas, 18', '4 estrela, 25', '5 estrelas, 40'];

console.log(calculateRatingAverage(ratings));