function Home() {
  return (
    <div className="relative h-screen overflow-hidden">
        <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJKvzET87bGcZbYgN4nC4JoabNMxaShb1Mw&s')",
      }}
    ></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
        <h1 className="text-5xl text-white mb-4">Welcome</h1>
        <p className="text-xl text-white">Your content here</p>
      </div>
    </div>
  );
}

export default Home;
