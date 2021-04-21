import Navbar from '../../Components/Nav/Nav_First';
import Mid from './Mid_sec';
import Details from './details';
import HowTo from './HowTo';
import './First.css';

const Home = () => {
    return ( 
       <div>
            <Navbar />

            <Mid />
            
            <Details />
            
            <HowTo /> 
            
      </div> 
     );
}
 
export default Home;