import { Link } from "react-router-dom"
import Home from '../Home'
import '../Error/_error.scss'

const Error = () =>{
	return (
		<div className="error">
			<h1>Erreur 404</h1>
			<p>La page demandée n'existe pas</p>
			<Link to='/' element={<Home />}>Retour à la page d'accueil</Link>
		</div>
	)
}
export default Error