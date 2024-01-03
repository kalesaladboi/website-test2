export default function Login() {
    return <div>
        <section className="cyberpunk both" style={{maxWidth: 600, margin: 'auto'}}>
            <form style={{maxWidth: 500, maxHeight:800, margin: 'auto'}}>
                <h4 className="cyberpunk glitched" placeholder="Enter username or Username" >Username</h4>
                <input className="cyberpunk" type="text" />
                <h4 className="cyberpunk glitched" placeholder="Enter Password" >Password</h4>
                <input className="cyberpunk" type="password" />
                <button className="cyberpunk blue" variant="primary" type="submit">Submit_</button>
            </form>
        </section>
    </div>
}