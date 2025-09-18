export default function AppWelcome() {
    const title = "Welcome to cosci";
    const year = <p>2025</p>;
    const isShow = true;


    return (
        <div>
            <p>{title.toLocaleUpperCase()}</p>
            {year}
            {
                isShow && <p>Date: 10/10/1998</p>
            }
            {
                isShow ? <p>Hello Next.js</p> : <p>Hello JavaScript</p>
            }
        </div>
    );
}