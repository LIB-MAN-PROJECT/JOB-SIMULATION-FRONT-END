const VerificationBadge = ({ status }) => {
  let text = "";
  let color = "";

  switch (status) {
    case "verified":
      text = "Verified Recruiter";
      color = "bg-green-100 text-green-700";
      break;
    case "pending":
      text = "Pending Verification";
      color = "bg-yellow-100 text-yellow-700";
      break;
    case "unverified":
    default:
      text = "Unverified Recruiter";
      color = "bg-red-100 text-red-700";
      break;
  }

  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${color}`}
    >
      {text}
    </span>
  );
};

export default VerificationBadge;