const getVehicleTypes = [
    { id: 1, label: 'Bike', value: 'Bike' },
    { id: 2, label: 'Threewheel', value: 'Threewheel' },
    { id: 3, label: 'Car', value: 'Car' },
]

const getMyBookings = [
    {
        id: 4,
        date: '2024-02-26',
        intime: '09:20 AM',
        outtime: '',
        site: 'KMC',
        stt: 'pending',
        amount: '2000.00',
        vehicle_type: 'Bike',
        vehicle_icon: require('../images/bike.png'),
    },
    {
        id: 3,
        date: '2024-02-25',
        intime: '05:30 PM',
        outtime: '06.00 PM',
        site: 'KMC',
        stt: 'done',
        amount: '2000.00',
        vehicle_type: 'Car',
        vehicle_icon: require('../images/car.png'),
    },
    {
        id: 2,
        date: '2024-02-24',
        intime: '09:20 AM',
        outtime: '10:40 AM',
        site: 'KMC',
        stt: 'done',
        amount: '2000.00',
        vehicle_type: 'Threewheel',
        vehicle_icon: require('../images/tuktuk.png'),
    },
    {
        id: 1,
        date: '2024-02-23',
        intime: '02:00 PM',
        outtime: '04:00 PM',
        site: 'KMC',
        stt: 'done',
        amount: '2000.00',
        vehicle_type: 'Bike',
        vehicle_icon: require('../images/bike.png'),
    },
]

export { getVehicleTypes, getMyBookings }