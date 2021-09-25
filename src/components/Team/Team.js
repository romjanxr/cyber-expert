import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Expert from '../Expert/Expert';
import './Team.css'

const Team = () => {
    const [experts, setExperts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./experts.JSON')
            .then(res => res.json())
            .then(data => setExperts(data));
    }, [])

    const handleAddToList = expert => {
        const newCount = [...cart, expert];
        setCart(newCount);
    }

    return (
        <div className="row container-width mx-auto mt-5">
            <div className="col-md-9">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        experts.map(expert => <Expert
                            key={expert.id}
                            expert={expert}
                            handleAddToList={handleAddToList}></Expert>)
                    }
                </div>
            </div>
            <div className="col-md-3">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Team;