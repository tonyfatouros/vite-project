function App() {
  const a = "qaz";

  return (
    <>
      <div className="text-3xl font-bold grid h-screen w-screen place-items-center text-blue-600/30 bg-sky-300">
        Hello
        <p className="text-blue-600/100">The quick brown fox...</p>
        <p className="text-blue-600/75">The quick brown fox...</p>
        <p className="text-blue-600/50">The quick brown fox...</p>
        <p className="text-blue-600/25">The quick brown fox...</p>
        <p className="text-blue-600/0">The quick brown fox...</p>
      </div>
    </>
  );
}

export default App;
