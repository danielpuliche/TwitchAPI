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
            '
        >
            <input 
                placeholder='Minecraft...'
                id='SearchBar'
                className='
                    rounded-2xl 
                    m-3 md:m-4 lg:m-6
                    h-6 md:h-8 lg:h-10 
                    w-full 
                    text-sm md:text-md lg:text-2xl 
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