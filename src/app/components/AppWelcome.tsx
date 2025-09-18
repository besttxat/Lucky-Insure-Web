'use client';

export default function AppWelcome() {
    const title = "Welcome to cosci";
    const year = <p>2025</p>;
    const isShow = true;
    const handleClick = () => {
        alert("Hello TypeScript");
    }

    return (
        <div>
            <p>{title.toLocaleUpperCase()}</p>
            <button className="bg-blue-700 p-3 rounded-lg" onClick={handleClick}>press button</button>
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