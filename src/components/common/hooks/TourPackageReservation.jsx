import { Descriptions, Button } from 'antd';

const TourPackageBookingReservationView = () => {
    const bookingInfo = {
        reservationNumber: '12345',
        tourPackage: 'Luxury Paris Tour',
        departureDate: '2022-07-01',
        returnDate: '2022-07-08',
        totalGuests: 2,
        totalRooms: 1,
        totalPrice: 4000,
        status: 'Confirmed',
        paymentStatus: 'Paid',
        contactInfo: {
            name: 'John Doe',
            email: 'johndoe@example.com',
            phone: '+1 123-456-7890',
            address: '123 Main St, Anytown, USA'
        }
    };

    return (
        <div>
            <h1>Booking Reservation</h1>
            <Descriptions bordered>
                <Descriptions.Item label="Reservation Number">{bookingInfo.reservationNumber}</Descriptions.Item>
                <Descriptions.Item label="Tour Package">{bookingInfo.tourPackage}</Descriptions.Item>
                <Descriptions.Item label="Departure Date">{bookingInfo.departureDate}</Descriptions.Item>
                <Descriptions.Item label="Return Date">{bookingInfo.returnDate}</Descriptions.Item>
                <Descriptions.Item label="Total Guests">{bookingInfo.totalGuests}</Descriptions.Item>
                <Descriptions.Item label="Total Rooms">{bookingInfo.totalRooms}</Descriptions.Item>
                <Descriptions.Item label="Total Price">${bookingInfo.totalPrice}</Descriptions.Item>
                <Descriptions.Item label="Status">{bookingInfo.status}</Descriptions.Item>
                <Descriptions.Item label="Payment Status">{bookingInfo.paymentStatus}</Descriptions.Item>
                <Descriptions.Item label="Contact Info">
                    <Descriptions bordered>
                        <Descriptions.Item label="Name">{bookingInfo.contactInfo.name}</Descriptions.Item>
                        <Descriptions.Item label="Email">{bookingInfo.contactInfo.email}</Descriptions.Item>
                        <Descriptions.Item label="Phone">{bookingInfo.contactInfo.phone}</Descriptions.Item>
                        <Descriptions.Item label="Address">{bookingInfo.contactInfo.address}</Descriptions.Item>
                    </Descriptions>
                </Descriptions.Item>
            </Descriptions>
            <Button type="primary">Cancel Reservation</Button>
        </div>
    );
};

export default TourPackageBookingReservationView;
