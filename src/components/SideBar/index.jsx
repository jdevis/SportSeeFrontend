import './_sideBar.scss';
import Yoga from '../../assets/img/yoga.png';
import Swim from '../../assets/img/swim.png';
import Dumbbell from '../../assets/img/dumbbell.png';
import Bike from '../../assets/img/bike.png';
const SideBar = () => {
  return (
    <nav>
      <ul>
        <li><img src={Yoga} alt='icon yoga' /></li>
        <li><img src={Swim} alt='icon swim' /></li>
        <li><img src={Bike} alt='icon bike' /></li>
        <li><img src={Dumbbell} alt='icon dumbbell' /></li>
      </ul>
      <p>Copyright, SportSee 2020</p>
    </nav>
  )
}
export default SideBar