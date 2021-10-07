import React, { useState } from 'react'
import Input from '../components/Input'
import StudentItem from '../components/StudentItem'

const StudentManagement = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [student, setStudent] = useState([])
    const [currentStudent, setCurrentStudent] = useState(null)
    const hanldeChange = setFunc => value => setFunc(value)
    const handlAdd = () => {
        if (name !== '' && age !== '') {
            setStudent(prevStudent => [...prevStudent, {
                id: new Date().toISOString(),
                name,
                age,
            }])
            setName('')
            setAge('')
        }
    }
    const handleDelete = (id) => {
        const index = student.findIndex(student => student.id === id)
        const _student = [...student]
        _student.splice(index, 1)
        setStudent(_student)
    }
    const handleStartUpdate = (id) => {
        const Student = student.find(student => student.id === id)
        setCurrentStudent(Student)
        setName(Student.name)
        setAge(Student.age)
    }
    const handleUpdate = () => {
        if (name !== '' && age !== '') {
            const _student = student.map(student => {
                if (student.id === currentStudent.id) {
                    return {
                        name,
                        age,
                        id: student.id
                    }
                }
                return student
            })
            setStudent(_student)
            handleBack();
        }
    }
    const handleBack = () => {
        setName('')
        setAge('')
        setCurrentStudent(null)
    }

    return (

        <div className="px-3">
            <h1>Quản lí sinh viên</h1>
            <form className="mb-3 " >
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Tên :</label>
                    <Input type="text" placeholder="Nhập tên" id="name" className="form-control" value={name} onChange={hanldeChange(setName)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Tuổi :</label>
                    <Input type="number" placeholder="Nhập tuổi" id="age" className="form-control" value={age} onChange={hanldeChange(setAge)} />
                </div>
                <div>
                    {currentStudent && (
                        <>
                            <button className="btn btn-primary me-1" type="button " onClick={handleUpdate}>Sửa</button>
                            <button className="btn btn-dark" type="button" onClick={handleBack}>Trở về</button>
                        </>
                    )}
                    {
                        !currentStudent && (
                            <button className="btn btn-primary" type="button" onClick={handlAdd}>Thêm</button>
                        )
                    }
                </div>
            </form>
            <ul className="list-group">
                {student.map(student => (
                    <StudentItem key={student.id} student={student}
                        handleDelete={handleDelete}
                        handleStartUpdate={handleStartUpdate}
                    />
                ))}

            </ul>
        </div>
    )
}

export default StudentManagement
