const schedule = [{startTime: 400, endTime: 550}, { startTime: 540, endTime: 600}, {startTime: 550, endTime: 615}, {startTime: 645, endTime: 715}]
// >>> [{startTime: 615, endTime: 645}, {startTime: 715, endTime: 720}]

function findFreeTime(times) {
    const freeTime = []
    const timeSlot = {
        startTime: 0,
        endTime: 0
    }
    times.forEach(function(element, index, array) {
        indxLen = array.length -1
        if (index < indxLen && element.startTime >= 540 && element.endTime <= array[index+1].startTime) {
            const newSlot = Object.create(timeSlot)
            newSlot.startTime = element.endTime
            newSlot.endTime = array[index+1].startTime
            freeTime.push(newSlot)
        }
        else if (index == indxLen && element.endTime <= 720) {
            const newSlot = Object.create(timeSlot)
            newSlot.startTime = element.endTime
            newSlot.endTime = 720
            freeTime.push(newSlot)
        }
    });
    return freeTime
}
console.log(findFreeTime(schedule))