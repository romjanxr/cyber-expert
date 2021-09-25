import React from 'react';

const CartElement = props => {
    const { img, name } = props.expert;
    return (
        <div className="card my-3 element-bg">
            <div className="row g-0">
                <div className="col-md-3">
                    <img src={img} className="img-fluid rounded-start img-left" alt="..." />
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartElement;