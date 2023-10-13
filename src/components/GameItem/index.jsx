import React from 'react'

const GameItem = ({gameName, imgURL, index}) => {

    const isIndex = (index+1)? true: false

    return (
        <div
        className={`bg-BlackTwitch flex flex-col my-4 shadow-lg rounded-lg relative hover:shadow-lg transform transition-transform duration-300 hover:scale-105 
            ${
                index === 0?
                "row-span-2 col-span-2"
                :""
            }`
        }
        >
            {
                isIndex && 
                    <p
                        className='
                            m-1
                            font-normal
                            absolute
                            bg-BlackTwitch
                            p-2
                            rounded-2xl
                            text-2xl
                        '
                    >
                        {'#'+(index+1)}
                    </p>
            }
            <img 
                src={imgURL.replace(`{width}x{height}`,`188x250`)} 
                alt={gameName}
                className='
                    m-3
                '
            />
            <p
                className='
                    m-1
                    text-sm
                    font-normal
                    absolute
                    end-0
                    bottom-0
                    bg-BlackTwitch
                    p-2
                    rounded-2xl
                '   
            >
                {gameName}
            </p>
        </div>
    )
}
    
export {GameItem}