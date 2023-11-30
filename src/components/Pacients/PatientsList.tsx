import Layout from "./Layout";
import Patient from "./Patient";

interface IPatient {
  id: string;
  petName: string;
  ownerName: string;
  email: string;
  date: string;
  symptoms: string;
}

interface Props {
  patients: IPatient[];
  setPatients: React.Dispatch<React.SetStateAction<IPatient[]>>;
  editModal: boolean;
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  setPatientToEdit: React.Dispatch<React.SetStateAction<IPatient | undefined>>;
}

const PatientsList = ({
  patients,
  setPatients,
  setEditModal,
  setPatientToEdit,
}: Props) => {
  return (
    <Layout
      title="Pacients List"
      subtitle="Manage your "
      colorSubtitle="Pacients and Appoitments"
    >
      <div className="flex-1 flex justify-center">
        {patients.length < 1 ? (
          <div className="flex flex-col justify-center">
            <h2 className="font-black text-3xl text-center">No pacients</h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Start adding pacients {""}
              <span className="text-indigo-600 font-bold ">
                and they'll appear here
              </span>
            </p>
          </div>
        ) : (
          <div className="flex-1 h-[75vh] overflow-y-auto">
            {patients.map((patient, index) => (
              <Patient
                key={index}
                patient={patient}
                patients={patients}
                setPatients={setPatients}
                setEditModal={setEditModal}
                setPatientToEdit={setPatientToEdit}
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default PatientsList;
