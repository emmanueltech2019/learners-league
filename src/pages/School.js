import React from 'react'
import '../bootstrap.min.css'
import '../App.css'
import AvailableSchoolCards from '../components/AvailableSchoolCards'

export default class School extends React.Component{
    render(){
        return (
			<div>
				<h1 className="av">Avilable courses</h1>
				<AvailableSchoolCards image="../images/profile.png/100px180px 4661" />
			</div>
		);
    }
}