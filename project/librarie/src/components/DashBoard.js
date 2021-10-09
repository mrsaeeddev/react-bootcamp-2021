import React from 'react';

function DashBoard() {
    const [dashboardText, setDashboardText] = React.useState("DashBoard");

    return (<div>
        {dashboardText}
        <button onClick={() => setDashboardText('Dashboard')}>Click</button>
    </div>)
}

export default DashBoard;