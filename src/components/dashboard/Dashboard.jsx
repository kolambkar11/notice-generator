import Complaintstatus from "./Complaintstatus";
import Graphtotalcomplaints from "./Graphtotalcomplaints";
import Socialmediastatus from "./Socialmediastatus";

export default function Dashboard() {
  return (
    <div className="lg:pl-72">
      <main className="py-10">
        <div className="px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-medium text-gray-500">Dashboard</h2>
          <Complaintstatus />
          <Socialmediastatus />
          <Graphtotalcomplaints />
        </div>
      </main>
    </div>
  );
}
