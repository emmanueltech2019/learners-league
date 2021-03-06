import React from 'react';
import Home from './pages/Home';
import Landing from './pages/Landing';
import School from './pages/School';
import Skills from './pages/Skills';
import Jobs from './pages/Jobs';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import TopStudents from './pages/TopStudents';
import TopTutors from './pages/TopTutors';
import TrendingCourses from './pages/TrendingCourses';
import Competition from './pages/Competition';
import Programming from './components/school/Programming'
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Navbar from './components/Navbar';
import Navigationbar from './components/Navigationbar';
import './App.css';
// import Navmodal from './components/Navmodal'
import GoTopButton from './components/Fixeditems'

class App extends React.Component {
state={
	show:false
}
	showModal=()=>{
	this.setState({
		...this.state,
		show: !this.state.show
	})
	}

	render(){
  return (
		<div className="App">
			{/* <Landing /> */}
			<Router>
				<Navigationbar title="Learner's League" />

				<Switch>
					{/* <Route exact path={['/',]} component={Landing} /> */}
					<Route exact path={['/', '/Home', '/title']} component={Home} />
					<Route path="/school" component={School} />
					<Route path="/school/Programming" component={Programming} />
					<Route path="/skills" component={Skills} />
					<Route path="/Jobs" component={Jobs} />
					<Route path="/Blog" component={Blog} />
					<Route path="/contact" component={Contact} />
					<Route path="/TopStudents" component={TopStudents} />
					<Route path="/TopTutors" component={TopTutors} />
					<Route path="/TrendingCourses" component={TrendingCourses} />
					<Route path="/Competition" component={Competition} />
				</Switch>
				<GoTopButton style={{float:'left'}}/>
				<Footer title="Learners League" />
			</Router>

			{/* <input 
			type="button"
			value="show modal"
			onClick={this.showModal}
			
			/> */}
			{/* <Navmodal 
			onClose={this.showModal}
			show={this.state.show}
			Content="this is my modal"
			>this cominfuhf</Navmodal> */}
		</div>
  );
	}
}


export default App;
