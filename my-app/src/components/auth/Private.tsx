import { Login } from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
    isLoginIn: boolean,
    component: React.ComponentType<ProfileProps>
}


export const Private = ({isLoginIn, component: Component}: PrivateProps) => {

    
    if(isLoginIn) return <Component name='Huan'/>
    else return <Login/>
    
}