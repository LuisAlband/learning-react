import './App.css'
import { TwitterFollowCard } from './Components/TwitterFollowCard.jsx'

const users = [
    {
        userName:'luisalband1',
        name: 'Luixort1',
        initialFollowing: true
    },
    {
        userName:'luisalband2',
        name: 'Luixort2',
        initialFollowing: false
    }
]

export function App (){
    const format = (userName) => `@${userName}`
    const infos = { formatUserName: format, initialFollowing: true, userName: 'luisalband4'}
    
    return(
        <section className="App">
            
            {
                users.map(({ userName, name, initialFollowing }) =>
                    (
                        <TwitterFollowCard 
                            key={userName}
                            formatUserName = {format} 
                            initialFollowing={initialFollowing}
                            userName={userName}
                        >{name} </TwitterFollowCard>
                    )
                )
            }

            {/*Pasamos las props de forma manual*/}
            <TwitterFollowCard formatUserName = {format} 
            initialFollowing={false}
            userName="luisalband3" 
            >Luixort3 </TwitterFollowCard>
            {/*Pasamos las props mediante las propiedades de un objeto
            mediante un rest operator {...objeto}*/}
            <TwitterFollowCard {...infos}>
            Luixort4 </TwitterFollowCard>
             
        </section>
        
    )
    
}