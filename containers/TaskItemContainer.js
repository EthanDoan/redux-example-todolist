/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
TaskItemContainer
*/
import { connect } from 'react-redux';
import { toggleTask } from '../actions';
import TaskItemComponent from '../components/TaskItemComponent';

const mapStateToProps = state => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickToggle: (taskId) => {
            dispatch(toggleTask(taskId));
        }
    }
}

const TaskItemContainer = connect(mapStateToProps, mapDispatchToProps)(TaskItemComponent);
export default TaskItemContainer;
