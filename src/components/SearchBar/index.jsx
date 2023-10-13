import React from 'react'

const SearchBar = ({
    setSearchValue,
    searchValue
}) => {
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
                value={searchValue}
                onChange={
                    (event) => {
                        setSearchValue(event.target.value)
                    }
                }     
            />
        </div>
    )
}
    
export {SearchBar} 