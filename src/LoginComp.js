export function LoggedinComd({setLoggedIn, visible, setUsername}){
        return(
            <div>
                <h1>Login</h1>
                <button 
                    onClick={()=> {
                    let text = document.querySelector('#username').value
                    setUsername(text);
                    setLoggedIn(true);
                }>Log in</button>;
                
            </div>
        )
    }
}
