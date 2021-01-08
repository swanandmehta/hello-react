import './robot-list.style.css';

import { Robot } from '../robot/robot.component'

export const RobotList = ({robots}) => {    
    return (
        <div className="robot-list">
            {robots.map(robot => <Robot key={robot.id} robot={robot} />)}
        </div>
    )
}