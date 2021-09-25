import React from 'react';
import './Expert.css'

const Expert = (props) => {
    const { name, age, designation, address, salary, img } = props.expert;
    return (
        <div className="col">
            <div className="card h-100 card-bg">
                <img src={img} className="card-img-top rounded-circle img-width mx-auto mt-3" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p><strong>Age:</strong> {age}</p>
                    <p><strong>Designation:</strong> {designation}</p>
                    <p><strong>Address:</strong> {address}</p>
                    <p><strong>Salary:</strong> ${salary}</p>
                </div>
                <div className="mb-4">
                    <button
                        className="btn btn-primary"
                        onClick={() => props.handleAddToList(props.expert)}><i class="fas fa-cart-plus"></i> Add to List</button>
                </div>
            </div>
        </div>
    );
};

export default Expert;