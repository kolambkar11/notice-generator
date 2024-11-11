import Dashboardblock from "./dashboardBlock";
const dashboardComponents = [
  { name: "Facebook", initials: "RC", members: 8, bgColor: "bg-blue-500" },
  { name: "Instagram", initials: "RC", members: 8, bgColor: "bg-purple-500" },
  { name: "Twitter", initials: "RC", members: 8, bgColor: "bg-black" },
  { name: "YouTube", initials: "RC", members: 8, bgColor: "bg-red-600" },
];

export default function Socialmediastatus() {
  return (
    <>
      <ul
        role="list"
        className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
      >
        {dashboardComponents.map((dc) => (
          <>
            <Dashboardblock key={dc.name} data={dc} />
          </>
        ))}
      </ul>
    </>
  );
}
