import React from 'react';
import CohortDetails from './CohortDetails';

const cohorts = [
    {
        name: 'Cohort Alpha',
        startDate: '2025-01-15',
        endDate: '2025-06-30',
        status: 'ongoing'
    },
    {
        name: 'Cohort Beta',
        startDate: '2024-07-01',
        endDate: '2024-12-15',
        status: 'completed'
    },
    {
        name: 'Cohort Gamma',
        startDate: '2025-09-01',
        endDate: '2026-02-28',
        status: 'upcoming'
    }
];

function App() {
    return (
        <div>
            {cohorts.map((cohort, index) => (
                <CohortDetails key={index} cohort={cohort} />
            ))}
        </div>
    );
}

export default App;
