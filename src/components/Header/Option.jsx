function Option({children, test}) {
    const onClickAction = () => {
        console.log({test});
    }

    return(
        <div className="header_option">
            <button 
                onClick={onClickAction}
            >
                {children}
            </button>
        </div>
    )
}

export default Option;