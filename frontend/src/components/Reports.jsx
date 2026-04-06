import React, { useState, useEffect } from 'react';

const Reports = () => {
    const [statistics, setStatistics] = useState({
        daily: {},
        weekly: {},
        monthly: {},
        yearly: {}
    });

    useEffect(() => {
        // Fetch the statistics from the API
        fetchStatistics();
    }, []);

    const fetchStatistics = async () => {
        // Replace this with the actual API call to fetch statistics
        const response = await fetch('/api/statistics');
        const data = await response.json();
        setStatistics(data);
    };

    return (
        <div>
            <h1>Equipment Reports</h1>
            <h2>Daily Statistics</h2>
            <p>Intake: {statistics.daily.intake}</p>
            <p>Release: {statistics.daily.release}</p>
            <p>Borrowed: {statistics.daily.borrowed}</p>
            <h2>Weekly Statistics</h2>
            <p>Intake: {statistics.weekly.intake}</p>
            <p>Release: {statistics.weekly.release}</p>
            <p>Borrowed: {statistics.weekly.borrowed}</p>
            <h2>Monthly Statistics</h2>
            <p>Intake: {statistics.monthly.intake}</p>
            <p>Release: {statistics.monthly.release}</p>
            <p>Borrowed: {statistics.monthly.borrowed}</p>
            <h2>Yearly Statistics</h2>
            <p>Intake: {statistics.yearly.intake}</p>
            <p>Release: {statistics.yearly.release}</p>
            <p>Borrowed: {statistics.yearly.borrowed}</p>
        </div>
    );
};

export default Reports;