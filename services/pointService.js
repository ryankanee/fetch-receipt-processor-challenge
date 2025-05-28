function calcPoints(receipt) {
    let totalPoints = 0;

    const namePoints = calcNamePoints(receipt.retailer);
    const pricePoints = calcPricePoints(receipt.total);
    const numItemPoints = calcNumItemPoints(receipt.items.length);
    const datePoints = calcDatePoints(receipt.purchaseDate);
    const timePoints = calcTimePoints(receipt.purchaseTime);
    const descriptionPoints = calcPointsFromDescription(receipt.items);

    totalPoints += namePoints + pricePoints + numItemPoints + datePoints + timePoints + descriptionPoints;

    return totalPoints;
}

function calcNamePoints(name) {
    let count = 0;
    for (let i = 0; i < name.length; i++) {
        if (
            (name[i] >= 'a' && name[i] <= 'z') ||
            (name[i] >= 'A' && name[i] <= 'Z') ||
            (name[i] >= '0' && name[i] <= '9')
        ) {
            count++;
        }
    }
    return count;
}

function calcPricePoints(total) {
    if (total.slice(-2) === '00') return 75;
    if (Number(total.slice(-2)) % 25 === 0) return 25;
    return 0;
}

function calcNumItemPoints(numItems) {
    return Math.floor(Number(numItems)/ 2) * 5;
}

function calcDatePoints(date) {
    return Number(date.slice(-2)) % 2 !== 0 ? 6 : 0;
}

function calcTimePoints(time) {
    const hour = Number(time.slice(0, 2));
    return hour >= 14 && hour <= 16 ? 10 : 0;
}

function calcPointsFromDescription(items) {
    let points = 0;

    for (const item of items) {
        const description = item.shortDescription?.trim() || '';
        const price = parseFloat(item.price);

        if (!description || isNaN(price)) continue; // skip bad data

        if (description.length % 3 === 0) {
            const rawPoints = price * 0.2;
            const roundedPoints = Math.ceil(rawPoints);
            points += roundedPoints;

        }
    }

    return points;
}


module.exports = {
    calcPoints
};
