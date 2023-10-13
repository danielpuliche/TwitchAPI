import React from 'react'

const SearchBar = ({
    setSearchValue
}) => {
    const [valueBar,setValueBar] = React.useState('')

    return (
        <div 
            className='
                relative 
                flex 
                content-center 
                align-middle 
                m-4
            '
        >
            <input 
                placeholder='Minecraft...'
                id='SearchBar'
                className='
                    rounded-2xl 
                    m-6 
                    h-10 
                    w-full 
                    text-2xl 
                    text-center 
                    font-normal 
                    shadow-inner 
                    border-strongPurpleTwitch
                    border
                    placeholder:
                    placeholder:italic
                    text-black
                '
                value={valueBar}
                onChange={
                    (event) => {
                        setValueBar(event.target.value)
                    }
                }
                onKeyUp={
                    (e) => {
                        e.code === "Enter" || e.code === "NumpadEnter"?
                            setSearchValue(valueBar)
                        :
                            <></>
                    }
                }      
            />
            <span 
                className='
                    flex
                    justify-center
                    items-center
                    hover:bg-strongPurpleTwitch
                    h-10
                    w-10
                    text-lg
                    cursor-pointer
                    font-bold
                    absolute
                    right-0
                    top-6
                    border
                    border-strongPurpleTwitch
                    shadow-lg
                    bg-lightPurpleTwitch
                    rounded-full
                '
                onClick={
                    () =>{
                        setSearchValue(valueBar)}
                    }
            >
                🔎
            </span>
        </div>
    )
}
    
export {SearchBar} 