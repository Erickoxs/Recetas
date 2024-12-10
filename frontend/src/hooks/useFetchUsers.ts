import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchUsers = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/api/users').then(response => setUsers(response.data)).finally(() => setLoading(false));
    }, []);
    return { users, loading };
};

export default useFetchUsers;
