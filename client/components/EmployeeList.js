import React, { Component } from 'react'
import {createContainer} from 'meteor/react-meteor-data'
import {Employees} from '../../imports/collections/employees'

import EmployeeDetail from './EmployeeDetail'

const PER_PAGE = 20

class EmployeeList extends Component {
    constructor(props) {
        super(props)
        this.state={
            loadCount: 1
        }
    }

    renderList() {
        const { employees } = this.props

        return employees.map(item => {
            return (
                <EmployeeDetail
                    key={item._id}
                    item={item}
                />
            )
        })

    }
    
    render() {
        return (
            <div>
                <div className="employee-list">
                {this.renderList()}
                </div>

                <div className="btn-load">
                    <button 
                        className="btn btn-primary btn-load btn-lg"
                        onClick={() => {
                            this.setState({loadCount: this.state.loadCount + 1})
                            // updates the subscription
                            Meteor.subscribe('employees', (PER_PAGE * this.state.loadCount))
                        }}
                    >Load more...</button>
                </div>
            </div>
        )
    }
}

export default createContainer(() => {
    // set up subscription
    Meteor.subscribe('employees', PER_PAGE)
    //return object available to component as props

    return {
        employees: Employees.find({}).fetch()
    }

}, EmployeeList)