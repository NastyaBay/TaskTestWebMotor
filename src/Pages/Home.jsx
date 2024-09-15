import { useState } from 'react'
import BlockContentTab from '../Components/BlockContentTab'
import ConTab from '../Components/ConTab'
import TitleTab from '../Components/TitleTab'
import './Home.css'
import ConTab2 from '../Components/ConTab2'

const Home = () => {
    const [activeTab, setActiveTab] = useState([<ConTab />, 1]);

    const handleTabClick = (tabTitle) => {
        setActiveTab(tabTitle);
    };

    return (
        <>
            <div className='bodyHome'>
                <div className='leftBlock'>
                    <TitleTab title='Заголовок таба 1' onClick={() => handleTabClick([<ConTab />, 1])} isActive={activeTab[1] === 1} />
                    <TitleTab title='Заголовок таба 2' onClick={() => handleTabClick([<ConTab2 />, 2])} isActive={activeTab[1] === 2}/>
                    <TitleTab title='Заголовок таба 3' onClick={() => handleTabClick([,3])} isActive={activeTab[1] === 3}/>
                </div>
                
                <BlockContentTab content={activeTab[0]} number={activeTab[1]} />
            </div>
        </>
    );
}

export default Home