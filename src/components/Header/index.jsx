import React from 'react'

const Header = ({title}) => {
    return (
        <div 
            className='
                bg-strongPurpleTwitch
                p-6
                flex
                relative
                justify-center
            '
        >
            <h1
                className='
                    font-sans
                    font-bold
                    text-2xl
                    static
                '
            >
                {title}
            </h1>
        </div>
    )
}
    
export {Header}