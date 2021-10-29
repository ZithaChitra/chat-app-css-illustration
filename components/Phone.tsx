import React from 'react'
import Image from 'next/image'

import styles from '../styles/components/Phone.module.css'
import avatar from '../public/images/avatar.jpg'

function Phone() {
    return (
        <div className={`${styles.phone}`}>
            <div className={`${styles.phone__header} flex flex-ai-c`}>

                <div className={`${styles['phone__header-back']}`}>
                    <span id='span1'></span>
                    <span id='span2'></span>
                </div>
                <div className={`${styles['phone__header-avatar']}`}>
                    <Image src={avatar} alt='avatar' layout='fill'/>
                </div>

                <div className={`${styles['phone__header-text']}`}>
                    <h2>Samuel Green</h2>
                    <h4>Available to Walk</h4>
                </div>

                <div className={`${styles['phone__header-spacer']}`} />
                
                <div className={`${styles['phone__header-options']}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className={`${styles.phone__text}`}>
                <p>
                That sounds great. I’d be happy with that.
                </p>

                <p>
                Could you send over some pictures of your dog, please?
                </p>

                <p>
                Here are a few pictures. She’s a happy girl!
                </p>

                <p>
                Can you make it?
                </p>

                <p>
                She looks so happy! The time we discussed works. How long shall I take her out for?
                </p>

                <p>
                30 minute walk
                $29
                </p>

                <p>
                1 hour walk
                $49
                </p>

                <input type="text" placeholder='Type a message…'/>
            </div>
        </div>
    )
}

export default Phone
