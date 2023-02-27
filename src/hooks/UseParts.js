import { useEffect, useState } from 'react';

const UseParts = () => {
    let [parts, setParts] = useState([])

    useEffect(() => {
        let url = 'https://manufacturing-server-ten.vercel.app/purchase'
        fetch(url)
            .then((res) => res.json())
            .then((data) => setParts(data))
    }, [])

    return [parts, setParts]
};

export default UseParts;