export const getStatusColor = (status: string) => {
  switch (status) {
    case "Delivered":
      return "bg-green-100 text-green-800";
    case "In-Transit":
      return "bg-blue-100 text-blue-800";
    case "Dispatched":
      return "bg-purple-100 text-purple-800";
    case "Picked":
      return "bg-orange-100 text-orange-800";
    case "Approved":
      return "bg-yellow-100 text-yellow-800";
    case "Requested":
      return "bg-gray-100 text-gray-800";
    case "Rescheduled":
      return "bg-indigo-100 text-indigo-800";
    case "Returned":
      return "bg-red-100 text-red-800";
    case "Cancelled":
      return "bg-red-100 text-red-800";
    case "Blocked":
      return "bg-red-100 text-red-800";
    case "Flagged":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export const getUserIsActiveStatusColor = (status: string) => {
  switch (status) {
    case "ACTIVE":
      return "bg-green-100 text-green-800";
    case "INACTIVE":
      return "bg-yellow-100 text-yellow-800";
    case "BLOCKED":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};
