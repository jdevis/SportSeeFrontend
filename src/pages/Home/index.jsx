import { Link } from "react-router-dom"
import Dashboard from "../Dashboard"
import '../Home/_home.scss'

const Home = () =>{
	return (
		<div className="home">
			<h1>Bienvenue chez SportSee</h1>
			<p>Afin de visualiser un tableau de bord, merci de choisir un utilisateur :</p>
			<Link to='/user/12' element={<Dashboard />}>Utilisateur 12</Link>
			<Link to='/user/18' element={<Dashboard />}>Utilisateur 18</Link>
		</div>
	)
}
export default Home