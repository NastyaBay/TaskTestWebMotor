
import './Styles/BlockContentTab.css'

const BlockContentTab = ({ content, number }) => {
    return (
        <>
            <div className='blockContentTab '>
                <div className='scrollBar ceraPro textScrollBarBlock'>
                    <h1 className='h1-contentTab ceraProMedium'>Контент таба {number}</h1>
                    {content}
                </div>
                <button className='btnBlockContent ceraPro'>Кнопка действия</button>
            </div>
        </>
    )
}

export default BlockContentTab