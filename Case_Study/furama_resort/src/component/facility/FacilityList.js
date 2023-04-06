export const facility = [
    {
        id: 1,
        name: 'Amia Room',
        area: 10000,
        cost: 100000,
        maxPeople: 4,
        standardRoom: 'Vip',
        descriptionOtherCovenience: 'Karaoke',
        poolArea: 6,
        numberOfFloors: 5,
        facilityFree: "???",
        rentType: {
            id: 1,
            name: 'Villa'
        },
        facilityType: {
            id: 1,
            name: 'Diamond'
        },
        status: false
    }
]
export const facilityType = [
    {
        id: 1,
        name: 'Diamond'
    },
    {
        id: 2,
        name: 'Platinium'
    },
    {
        id: 3,
        name: 'Gold'
    },
    {
        id: 4,
        name: 'Silver'
    }
];

export const rentType = [
    {
        id: 1,
        name: 'Villa'
    },
    {
        id: 2,
        name: 'House'
    },
    {
        id: 3,
        name: 'Phòng'
    }

]
export default {
    facility, facilityType, rentType
}