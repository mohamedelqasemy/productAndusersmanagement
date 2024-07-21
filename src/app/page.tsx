import TopBar from "@/layouts/top-bar";

export default function Home() {
  return (
    <main>
      <TopBar></TopBar>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: 'rgba(var(--background-start-rgb), 0.8)' }}>
        <div>
            Index Page
        </div>
        <div>
            <h1>Welcome to Speak Up!</h1>
            <p>This is a platform for users to connect, share, and learn about various topics.</p>
        </div>  
      </div>
    </main>
  );
}
