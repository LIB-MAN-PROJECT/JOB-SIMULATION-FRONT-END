


// import CertificatesTable from "./compoments/CertificateTable";
import CertificatesTable from "./CertificatesTable";
import RecruiterNavbar from "./components/RecruiterNavbar";

const CertificatesIssued = () => {
  return (
    <div className="p-6">
        <RecruiterNavbar/>
      <CertificatesTable />
    </div>
  );
};

export default CertificatesIssued;
