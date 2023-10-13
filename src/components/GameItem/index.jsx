import React from 'react'
import logoTwitch from '../../assets/logoTwitch.png'

const GameItem = ({gameName}) => {
    return (
        <div
            className='
                bg-BlackTwitch
                flex
                my-6
                shadow-lg
                rounded-lg
                relative
            '
        >
            <img 
                src={logoTwitch} 
                alt={gameName}
                className='
                    w-20
                    h-20
                    m-3
                '
            />
            <p
                className='
                    m-1
                    text-sm
                    font-normal
                    absolute
                    right-1
                    bottom-0
                '   
            >
                {gameName}
            </p>
        </div>
    )
}
    
export {GameItem}