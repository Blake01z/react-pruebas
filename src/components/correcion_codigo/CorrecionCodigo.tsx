

interface User {
    id: number;
    name: string;
    email: string;
}

const CorrecionCodigo = () => {

    const fetchUserData = async (userId: number): Promise<User> => {
        try {
            const response = await fetch(`/api/users/${userId}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const userData = await response.json();
            return userData;
        } catch (error) {
            console.error('Failed to fetch user data:', error);
            throw error;
        }
    };
    
    const logUserName = (user: User) => {
        console.log(user.name);
    };
    
    fetchUserData(123).then(logUserName).catch(error => console.error('Error fetching user:', error));    

    return (
        <div>
            Correcion de Codigo
        </div>
    )
}

export default CorrecionCodigo
