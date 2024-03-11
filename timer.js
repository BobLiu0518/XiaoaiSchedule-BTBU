async function scheduleTimer({ providerRes, parserRes } = {}) {
    return {
        totalWeek: 16,
        startSemester: Date.now().toString(),
        startWithSunday: false,
        showWeekend: false,
        forenoon: 5,
        afternoon: 5,
        night: 3,
        sections: [
            {
                section: 1,
                startTime: '08:00',
                endTime: '08:45',
            },
            {
                section: 2,
                startTime: '08:50',
                endTime: '09:35',
            },
            {
                section: 3,
                startTime: '09:50',
                endTime: '10:35',
            },
            {
                section: 4,
                startTime: '10:40',
                endTime: '11:25',
            },
            {
                section: 5,
                startTime: '11:30',
                endTime: '12:15',
            },
            {
                section: 6,
                startTime: '13:40',
                endTime: '14:25',
            },
            {
                section: 7,
                startTime: '14:30',
                endTime: '15:15',
            },
            {
                section: 8,
                startTime: '15:30',
                endTime: '16:15',
            },
            {
                section: 9,
                startTime: '16:20',
                endTime: '17:05',
            },
            {
                section: 10,
                startTime: '17:10',
                endTime: '17:55',
            },
            {
                section: 11,
                startTime: '18:45',
                endTime: '19:30',
            },
            {
                section: 12,
                startTime: '19:35',
                endTime: '20:20',
            },
            {
                section: 13,
                startTime: '20:25',
                endTime: '21:10',
            },
        ],
    };
}
