import React from 'react'

const ListGames = (props) => {
    return (
        <div
            className='
                mx-1 md:mx-3 lg:mx-5
                p-2 md:p-3 lg:p-5
                bg-strongPurpleTwitch
                rounded-lg
                grid
                grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                grid-flow-row
                gap-2 md:gap-3 lg:gap-5
            '    
        >
            {props.children}
        </div>
    )
}
    
export {ListGames}