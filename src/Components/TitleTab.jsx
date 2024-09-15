import './Styles/TitleTab.css'

const TitleTab = ({ title, onClick, isActive }) => {
    return (
        <>
            <button className={`btnTitleTab ${isActive ? 'activeTab' : 'noActiveTab'}`} onClick={onClick}>
                    <h1 className='titleBlockTab ceraProMedium'>
                        {title}
                    </h1>
                    <button className='btnBlockTab'><img src=''></img></button>
                    <p className='textBlockTab ceraPro'>
                        Равным образом, высококачественный прототип будущего проекта способствует повышению качества анализа существующих паттернов
                    </p>
            </button>
        </>
    )
}

export default TitleTab