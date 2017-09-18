import React from 'react'

const EmployeeDetail = ({item}) => {
    const {name, phone, email, avatar} = item

    return (
        <div className="card-details thumbnail" >
            <div className="caption">
            <h4>{name}</h4>
            <img src={avatar} />
            <ul className="list-group">
                <li className="list-group-item">Phone: <a href={phone}>{phone}</a></li>
                <li className="list-group-item">Email: <a href={email}>{email}</a></li>
            </ul>
            </div>
        </div>
    )
}

export default EmployeeDetail