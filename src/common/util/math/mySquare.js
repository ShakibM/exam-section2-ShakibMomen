module.exports = {
    toCube(inpNumber) {
        if (typeof inpNmber === "number") {
            return Math.pow(inpNumber, 3);
        } else if (typeof inpNumber === "string") {
            return Math.pow(parseInt(inpNumber), 3);
        }
    }
}