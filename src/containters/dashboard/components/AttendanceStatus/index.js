import React from 'react';
import { Pie } from '@ant-design/charts';
import { 
    Container,
    Header,
    PieWrapper
 } from './style';

const AttendanceStatus = () => {
    let data = [
        {
          type: 'Absent',
          value: 90,
        },
        {
          type: 'Present',
          value: 90,
        },
      ];

    let config = {
        data: data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.9,
        label: {
          type: 'inner',
          offset: '-30%',
          content: function content(_ref) {
            let percent = _ref.percent;
            return ''.concat((percent * 100).toFixed(0), '%');
          },
          style: {
            fontSize: 14,
            textAlign: 'center',
          },
        },
        interactions: [{ type: 'element-active' }],
    };

    return (
        <Container>
            <Header>Attendance Status</Header>
            <PieWrapper>
                <Pie {...config} style={{ height: '9rem', width: '30%'}}/>
            </PieWrapper>
        </Container>
    );
};

export default AttendanceStatus;