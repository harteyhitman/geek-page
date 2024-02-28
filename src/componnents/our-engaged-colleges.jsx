import { firstRole } from '../data/data';
import { secondRole } from '../data/data';


const OurEngagedColleges = () => {



    return (
        <div className='engagements-container'>
            <div className='engagement1'>
                {firstRole.map((engage, index) => (
                    <div key={index} className="firts_role">
                        <img src={engage.img} alt="" />
                    </div>
                ))}
            </div>
            <div className="engagement2">
                {secondRole.map((second, index) => (
                    <div key={index} className="second_role">
                        <img src={second.img} alt="" />
                    </div>
                ))}
            </div>
        </div>

    );
}

export default OurEngagedColleges;
