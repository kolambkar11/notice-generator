import Dashboardblock from "./dashboardBlock";

const complainStatus = [
  {
    name: "Total Complaint",
    initials: "TC",
    members: 16,
    bgColor: "bg-yellow-600",
  },
  { name: "Approved", initials: "AP", members: 12, bgColor: "bg-green-600" },
  { name: "Rejected", initials: "RJ", members: 16, bgColor: "bg-red-500" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Complaintstatus() {
  return (
    <>
      <ul
        role="list"
        className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
      >
        {complainStatus.map((dc) => (
          <Dashboardblock key={dc.name} data={dc} />
        ))}
      </ul>
    </>
  );
}
