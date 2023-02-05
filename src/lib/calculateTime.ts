
const getHours = (time: string) => {
    return Number(time.split(":")[0]);
}

const getMinutes = (time: string) => {
    return Number(time.split(":")[1]);
}

export const addTime = (startTime: string, baseTime: string, breakTime: string) => {
    const hoursOfStartTime: number = getHours(startTime);
    const minutesOfStartTime: number = getMinutes(startTime);

    const hoursOfBaseTime: number = getHours(baseTime);
    const minutesOfBaseTime: number = getMinutes(baseTime);

    const hoursOfBreakTime: number = getHours(breakTime);
    const minutesOfBreakTime: number = getMinutes(breakTime);


    const sumOfminutes = minutesOfStartTime + minutesOfBaseTime + minutesOfBreakTime
    const overHours = Math.floor(sumOfminutes / 60);

    const minutesOfScheduledTime = sumOfminutes % 60;
    const hoursOfScheduledTime = (hoursOfStartTime + hoursOfBaseTime + hoursOfBreakTime + overHours) % 24

    console.log(minutesOfScheduledTime)

    const schedulesTimeString: string = String(hoursOfScheduledTime).padStart(2, '0') + ":"
        + String(minutesOfScheduledTime).padStart(2, '0');

    return schedulesTimeString;
}
