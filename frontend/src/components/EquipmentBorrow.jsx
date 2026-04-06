import React, { useState } from 'react';

const EquipmentBorrow = () => {
    const [equipmentName, setEquipmentName] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [responsiblePerson, setResponsiblePerson] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here the submit logic will go, e.g., save data to the server
        console.log({ equipmentName, category, quantity, responsiblePerson });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Equipment Name:
                    <input type="text" value={equipmentName} onChange={(e) => setEquipmentName(e.target.value)} required />
                </label>
            </div>
            <div>
                <label>
                    Category:
                    <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
                </label>
            </div>
            <div>
                <label>
                    Quantity:
                    <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="1" required />
                </label>
            </div>
            <div>
                <label>
                    Responsible Person:
                    <input type="text" value={responsiblePerson} onChange={(e) => setResponsiblePerson(e.target.value)} required />
                </label>
            </div>
            <button type="submit">Record Borrowing</button>
        </form>
    );
};

export default EquipmentBorrow;