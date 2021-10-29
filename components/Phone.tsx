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
                    <Image src={avatar} alt='avatar' layout='fill' />
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

                <div className={`grid grid-left`}>
                    <p className={`${styles['phone__text-p']} ${styles['phone__text-p-left']}`}>
                        That sounds great. I’d be <br /> happy with that.
                    </p>

                    <div className={`${styles['phone__text-spacer']}`} />
                </div>


                <div className={`grid grid-left`}>
                    <p className={`${styles['phone__text-p']} ${styles['phone__text-p-left']}`}>
                        Could you send over some <br /> pictures of your dog, please?
                    </p>
                    <div className={`${styles['phone__text-spacer']}`} />
                </div>


                <div className={`grid grid-right`}>
                    <div className={`${styles['phone__text-spacer']}`} />
                    <p className={`${styles['phone__text-p']} ${styles['phone__text-p-right']}`}>
                        Here are a few pictures. She’s <br /> a happy girl!
                    </p>
                </div>


                <div className={`grid grid-right`}>
                    <div className={`${styles['phone__text-spacer']}`} />
                    <p className={`${styles['phone__text-p']} ${styles['phone__text-p-right']}`}>
                        Can you make it?
                    </p>
                </div>


                <div className={`grid grid-left`}>
                    <p className={`${styles['phone__text-p']} ${styles['phone__text-p-left']}`}>
                        She looks so happy! The time <br /> we discussed works. How <br /> long shall I take her out for?
                    </p>
                    <div className={`${styles['phone__text-spacer']}`} />
                </div>


                <div className={`grid grid-left`}>
                    <div className={`${styles['phone__text-walk']} flex flex-ai-c flex-jc-sb`}>
                        <span>
                            <span className={`${styles.circle}`}></span>
                            <span>30 minute walk</span>
                        </span>
                        <span>$29</span>
                    </div>
                    <div className={`${styles['phone__text-spacer']}`} />
                </div>


                <div className={`grid grid-left`}>
                    <div className={`${styles['phone__text-walk']} flex flex-ai-c flex-jc-sb`}>
                        <span className='flex flex-ai-c'>
                            <span className={`${styles.circle}`}></span>
                            <span>1 hour walk</span>
                        </span>
                        <span>$49</span>
                    </div>
                    <div className={`${styles['phone__text-spacer']}`} />
                </div>

                <input type="text" placeholder='Type a message…' />
            </div>
        </div>
    )
}

export default Phone
