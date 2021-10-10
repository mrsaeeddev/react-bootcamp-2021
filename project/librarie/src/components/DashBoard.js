import React from 'react';
import Card from './Card';
import NavBar from './NavBar';

function DashBoard() {
    let initialValue = "DashBoard"
    const [dashboardText, setDashboardText] = React.useState(initialValue);

    return (
        <div>
            <NavBar />
            {dashboardText}
            <button onClick={() => setDashboardText('Saeed')}>Click</button>
            <Card name={dashboardText} />
        </div>
    )
}

export default DashBoard;