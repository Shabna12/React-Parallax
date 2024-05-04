import { Parallax } from 'react-parallax';
import Nasatop from '../Imgs/nasa1.webp'



const Top = () => (
    <Parallax className='firstimg' bgImage={Nasatop} strength={800}>
        <div className='container'>
            <h2 className='img-txt'>Exploring NASA !!</h2>
        </div>
    </Parallax>
);


export default Top