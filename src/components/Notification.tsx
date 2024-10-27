import React from 'react'
import "./Notification.css"

const Notification: React.FC = () => {
    return (
        <div className="notification py-1">
            <div className="container d-flex justify-content-between align-items-center">
                <div className='text-white'>
                    <article className='p-2'> <span>Currency:</span> USD</article>
                    <article className='p-2'> <span>Language:</span> ENG</article>
                </div>

                <div>
                    <a href="#" className='login text-decoration-none text-white text-center'>My Wishlist  |  Newsletter  |  Login </a>
                </div>
            </div>
        </div>


    )
}

export default Notification