import React, { useState } from 'react';

const EquipmentRelease = () => {
    const [equipmentName, setEquipmentName] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [responsiblePerson, setResponsiblePerson] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Collect the data and send it to an API or handle it as needed
        console.log({ equipmentName, category, quantity, responsiblePerson });
    };

    return (
        <div>
            <h2>Equipment Release Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Equipment Name:</label>
                    <input type="text" value={equipmentName} onChange={(e) => setEquipmentName(e.target.value)} required />
                </div>
                <div>
                    <label>Category:</label>
                    <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
                </div>
                <div>
                    <label>Quantity:</label>
                    <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="1" required />
                </div>
                <div>
                    <label>Responsible Person:</label>
                    <input type="text" value={responsiblePerson} onChange={(e) => setResponsiblePerson(e.target.value)} required />
                </div>
                <button type="submit">Release Equipment</button>
            </form>
        </div>
    );
};

export default EquipmentRelease;