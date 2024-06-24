

interface Address {
    city: string;
    street: string;
    zipcode: string;
}

interface User {
    name: string;
    email: string;
    address: Address;
}

interface UserProfileProps {
    user: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
    const { name, email, address } = user;
    const { city, street, zipcode } = address;

    return (
        <div>
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{city}</p>
            <p>{street}</p>
            <p>{zipcode}</p>
        </div>
    );
};

export default UserProfile;
