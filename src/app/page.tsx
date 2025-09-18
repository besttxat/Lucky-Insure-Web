import AppWelcome from "./components/AppWelcome";

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <hr/>
      <AppWelcome headTitle="Big SWU" isShow={true}/>
    </div>
  );
}
