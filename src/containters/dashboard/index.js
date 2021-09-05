import React from 'react';
import TopBar from './components/TopBar';
import SideNav from './components/SideNav';
import JobMetrics from './components/JobMetrics';
import TrainingStatus from './components/TrainingStatus';
import AttendanceStatus from './components/AttendanceStatus';
import WeeklyGoals from './components/WeeklyGoals';
import Notes from './components/Notes';

import {
    Container,
    MidContent,
} from './style';

const Dashboard = () => {
    return (
        <Container>
            <SideNav />
            <MidContent>
                <TopBar />
                <JobMetrics />
                <TrainingStatus />
                <AttendanceStatus />
                <WeeklyGoals />
            </MidContent>
            <Notes />
        </Container>
    );
};

export default Dashboard;