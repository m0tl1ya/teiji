import { addTime } from './calculateTime';


describe('time calculation', () => {

    test('regular pattern.', () => {
        const startTime = "09:00";
        const baseTIme = "08:00";
        const breakTime = "01:00";
        expect(addTime(startTime, baseTIme, breakTime)).toStrictEqual("18:00");
    });

    test('longer-break pattern.', () => {
        const startTime = "08:45";
        const baseTIme = "08:00";
        const breakTime = "01:30";
        expect(addTime(startTime, baseTIme, breakTime)).toStrictEqual("18:15");
    });

    test('day-crossing pattern.', () => {
        const startTime = "22:00";
        const baseTIme = "08:00";
        const breakTime = "01:00";
        expect(addTime(startTime, baseTIme, breakTime)).toStrictEqual("07:00");
    });
});


