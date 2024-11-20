import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserData } from '../api/api';
import { UserContext } from '../context/UserContext';

const UserDashboard = () => {
    const { username } = useParams();
    const { userData, setUserData } = useContext(UserContext);

    useEffect(() => {
        const loadData = async () => {
            const data = await fetchUserData(username);
            setUserData(data?.attributes || {});
        };
        loadData();
    }, [username, setUserData]);

    if (!userData) return <p>Loading...</p>;

    const { logo, content, config } = userData;

    return (
        <div style={{ backgroundColor: config?.backgroundColor || '#ffffff', padding: '20px' }}>
            {logo?.url && <img src={logo.url} alt="Company Logo" style={{ maxWidth: '200px' }} />}
            <p>{content}</p>
        </div>
    );
};

export default UserDashboard;
