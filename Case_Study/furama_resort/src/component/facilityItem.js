import React from 'react';

const FacilityItem = ({ facility }) => {
    return (
        <div>
            <h3>{facility.name}</h3>
            <p>Diện tích sử dụng: {facility.area}</p>
            <p>Chi phí thuê: {facility.cost}</p>
            <p>Số lượng người tối đa: {facility.maxGuests}</p>
            <p>Kiểu thuê: {facility.rentType.join(', ')}</p>
            {facility.name === 'Villa' && (
                <>
                    <p>Tiêu chuẩn phòng: {facility.roomStandard}</p>
                    <p>Mô tả tiện nghi khác: {facility.otherFacilities}</p>
                    <p>Diện tích hồ bơi: {facility.poolArea}</p>
                    <p>Số tầng: {facility.floors}</p>
                </>
            )}
            {facility.name === 'House' && (
                <>
                    <p>Tiêu chuẩn phòng: {facility.roomStandard}</p>
                    <p>Mô tả tiện nghi khác: {facility.otherFacilities}</p>
                    <p>Số tầng: {facility.floors}</p>
                </>
            )}
            {facility.name === 'Apartment' && (
                <>
                    <p>Tiêu chuẩn phòng: {facility.roomStandard}</p>
                    <p>Mô tả tiện nghi khác: {facility.otherFacilities}</p>
                    <p>Số tầng: {facility.floors}</p>
                </>
            )}
        </div>
    );
};
export default FacilityItem;
