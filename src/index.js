module.exports = function toReadable (number) {
    let firstNums = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
                    'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
                    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let secondNums = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let strNum = number.toString();

    if(number === 0) return 'zero';

    if(number > 0 && number < 20) {
        return firstNums[number];
    } else if(strNum.length === 2) {
        return `${secondNums[strNum[0]]} ${firstNums[strNum[1]]}`.trim();
    } else if(strNum.length === 3) {
        if(strNum[1] == 0 && strNum[2] == 0) {
            return `${firstNums[strNum[0]]} hundred`;
        } else if(strNum[1] <= 1) {
            return `${firstNums[strNum[0]]} hundred ${firstNums[Number(strNum[1] + strNum[2])]}`;
        } else if(strNum[1] > 1) {
            return `${firstNums[strNum[0]]} hundred ${secondNums[strNum[1]]} ${firstNums[strNum[2]]}`.trim();
        }   
    }
}
