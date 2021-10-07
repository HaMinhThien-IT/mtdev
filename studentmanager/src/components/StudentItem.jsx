import React from 'react'
import PropTypes from 'prop-types';
const StudentItem = ({ student, handleDelete, handleStartUpdate }) => {
    return (
        <div>
            <li className="list-group-item" key={student.id}>
                <span className="me-3">{student.name}: {student.age}</span>
                <button type="button" className="btn btn-info me-1" onClick={() => handleStartUpdate(student.id)}>Sửa</button>
                <button type="button" className="btn btn-danger" onClick={() => handleDelete(student.id)}>Xoá</button>
            </li>
        </div>
    )
}
StudentItem.prototype = {
    student: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleStartUpdate: PropTypes.func.isRequired
}

export default StudentItem
