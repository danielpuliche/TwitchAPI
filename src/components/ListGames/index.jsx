import React from 'react'

const ListGames = (props) => {
    return (
        <div
            className='
                mx-3
                p-3
                bg-strongPurpleTwitch
                rounded-lg
                grid
                grid-cols-3
                md:grid-cols-4
                grid-flow-row
                gap-4
            '    
        >
            {props.children}
        </div>
    )
}
    
export {ListGames}