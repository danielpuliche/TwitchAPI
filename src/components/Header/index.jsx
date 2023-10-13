import React from 'react'
import logoTwitch from '../../assets/logoTwitch.png'
import {Link} from 'react-router-dom'

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
            <Link to={'/'}>
                <img 
                    src={logoTwitch} 
                    alt="Logo"
                    className='
                        h-4/5
                        m-3
                        p-2
                        flex
                        justify-center
                        items-center
                        hover:shadow
                        hover:shadow-whiteTwitch
                        cursor-pointer
                        font-bold
                        absolute
                        left-0
                        top-0
                        shadow-lg
                        bg-BlackTwitch
                        rounded-full
                    '
                />
            </Link>
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

