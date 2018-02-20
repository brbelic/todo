import React from 'react';

class TaskCounter extends React.Component {

    render() {
        const itemCount = this.props.count;
        let message = 'Trenutno nema unesenih taskova';

        if (itemCount === 1) {
            message = '1 Task';
        } else if (itemCount > 0 && itemCount < 5) {
            message = itemCount + ' taska';
        } else if (itemCount >= 5) {
            message = itemCount + ' taskova';
        }

        return (
            <div className="tasksNumber col-sm-6 col-sm-offset-3">
                <p>
                    { message }
                </p>
            </div>
        );
    }
}

export default TaskCounter;
