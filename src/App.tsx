import Form from "./components/Pacients/Form";
import Header from "./components/Header";
import PatientsList from "./components/Pacients/PatientsList";
import { useEffect, useState } from "react";
import EditPatient from "./components/Pacients/EditPatient";

interface IPatient {
  id: string;
  petName: string;
  ownerName: string;
  email: string;
  date: string;
  symptoms: string;
}

function App() {
  const [patients, setPatients] = useState<IPatient[]>([]);
  const [editModal, setEditModal] = useState(false);
  const [patientToEdit, setPatientToEdit] = useState<IPatient>();

  useEffect(() => {
    editModal
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
  }, [editModal]);

  useEffect(() => {
    const getLocalStorage = () => {
      const patients = JSON.parse(localStorage.getItem("patients")!) ?? [];
      setPatients(patients);
    };
    getLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  return (
    <div className="m-4">
      <Header />
      <div className="flex mt-10">
        <Form patients={patients} setPatients={setPatients} />
        <PatientsList
          patients={patients}
          setPatients={setPatients}
          editModal={editModal}
          setEditModal={setEditModal}
          setPatientToEdit={setPatientToEdit}
        />
      </div>
      {editModal ? (
        <EditPatient
          patientToEdit={patientToEdit}
          patients={patients}
          setPatients={setPatients}
          editModal={editModal}
          setEditModal={setEditModal}
        />
      ) : null}
    </div>
  );
}

export default App;
