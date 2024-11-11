import Graphs from "./Graphs";

const clients = [
  {
    id: 1,
    name: "Total Complaints",
    lastInvoice: {
      date: "December 13, 2022",
      dateTime: "2022-12-13",
      amount: "$2,000.00",
      status: "Overdue",
    },
  },
  {
    id: 2,
    name: "Approved vs Rejected",
    lastInvoice: {
      date: "January 22, 2023",
      dateTime: "2023-01-22",
      amount: "$14,000.00",
      status: "Paid",
    },
  },
];

export default function Graphtotalcomplaints() {
  return (
    <ul
      role="list"
      className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2 xl:gap-x-8"
    >
      {clients.map((client) => (
        <Graphs key={client.id} data={client} />
      ))}
    </ul>
  );
}
