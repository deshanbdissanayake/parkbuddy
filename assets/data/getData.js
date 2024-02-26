const getVehicleTypes = [
    { id: 1, label: 'Bike', value: 'Bike' },
    { id: 2, label: 'Threewheel', value: 'Threewheel' },
    { id: 3, label: 'Car', value: 'Car' },
]

// bookings are added to the asyncstorage in order to manipulate them
const getMyBookings = [
    {
        date: '2024-02-26',
        intime: '09:20 AM',
        outtime: '',
        site: 'KMC',
        stt: 'pending',
        amount: 'calculating',
        vehicle_type: 'Bike',
    },
    {
        date: '2024-02-25',
        intime: '05:30 PM',
        outtime: '06.00 PM',
        site: 'Public Car Park Public car park',
        stt: 'done',
        amount: '2000.00',
        vehicle_type: 'Car',
    },
    {
        date: '2024-02-24',
        intime: '09:20 AM',
        outtime: '10:40 AM',
        site: 'KMC',
        stt: 'done',
        amount: '2000.00',
        vehicle_type: 'Threewheel',
    },
    {
        date: '2024-02-23',
        intime: '02:00 PM',
        outtime: '04:00 PM',
        site: 'KMC',
        stt: 'done',
        amount: '2000.00',
        vehicle_type: 'Bike',
    },
]

const getSites = [
    { 
        latlng: { latitude: 7.2916112, longitude: 80.634399 }, 
        site_id: 1,
        title: 'KMC', 
        description: 'Kandy Municipal Public Car Park, Kandy' 
    },
    { 
        latlng: { latitude: 7.2906494, longitude: 80.6262825 }, 
        site_id: 2,
        title: 'Puplic Car Park', 
        description: 'Public Car Park, Heerassagala' 
    },
    { 
        latlng: { latitude: 7.3048845, longitude: 80.6324518 }, 
        site_id: 3,
        title: 'Vidyartha Car Park', 
        description: 'Vidyartha Car Park, Mahayiyawa' 
    },
    { 
        latlng: { latitude: 7.2896421, longitude: 80.630686 }, 
        site_id: 5,
        title: 'Goodshed', 
        description: 'Goodshed, Kandy' 
    },
]

export { getVehicleTypes, getMyBookings, getSites }