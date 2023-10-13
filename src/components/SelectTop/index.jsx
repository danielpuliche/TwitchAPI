import React from 'react'

const SelectTop = ({
    topValue,
    setSelectedTop,
    setLoading
}) => {

    return (
        <button
                className='
                    bg-strongPurpleTwitch
                    p-4
                    mx-2
                    flex-1
                    rounded-2xl
                    disabled:bg-lightPurpleTwitch
                    disabled:text-BlackTwitch
                    hover:bg-lightPurpleTwitch
                    hover:text-BlackTwitch
                    border-strongPurpleTwitch
                    border-2
                '
                onClick={
                    (e) => {
                        setSelectedTop(topValue)
                        setLoading(true)
                    }
                }
            >
                Top {topValue}
            </button>
        )
    }
    
export {SelectTop} 