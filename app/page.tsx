import GitHubCalendar from "react-github-calendar";

export default function App() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center space-y-10">
        <p className="text-black">fajarrhn</p>
        <GitHubCalendar username="fajarrhnn" colorScheme="light" />
      </div>
    </>
  );
}
