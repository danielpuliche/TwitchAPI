import React from 'react'
import {Link} from 'react-router-dom'

const Selector = ({link,msg}) => {
    return (
            <Link
                to={link}
            >
                <div 
                    className='
                        bg-lightPurpleTwitch 
                        p-2 
                        m-3 
                        rounded-md 
                        text-BlackTwitch 
                        text-center
                        text-lg
                        hover:bg-strongPurpleTwitch
                        hover:text-whiteTwitch
                    '
                >
                        {msg}
                </div>
            </Link>
        )
    }
    
export {Selector}