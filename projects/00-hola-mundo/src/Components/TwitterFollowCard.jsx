import { useState } from "react"

export function TwitterFollowCard({formatUserName,  userName ='unknow', children, initialFollowing}){
    //Prop, parametro que recibe la funcion, son inmutables
    
    /*
    const state = useState(false)   //Estado
    const isFollowing = state[0]    //Primera posicion, indica el valor
    const setIsFollowing = state[1] //Segunda posicion, funciona como interruptor
    */

    const [isFollowing,setIsFollowing] = useState(initialFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar'
                alt="El avatar" 
                src="https://value.pablors.es/files/walker-images/19.jpeg?29035740"/>
                <div className='tw-followCard-info'>
                    <strong>{children} </strong>
                    <span className='tw-followCard-infoUserAcount'>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                <span className="tw-followCard-text">{text}</span>
                <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}