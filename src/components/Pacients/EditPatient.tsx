import EditForm from "./EditForm";

interface IPatient {
  id: string;
  petName: string;
  ownerName: string;
  email: string;
  date: string;
  symptoms: string;
}

interface Props {
  patientToEdit: IPatient | undefined;
  patients: IPatient[];
  setPatients: React.Dispatch<React.SetStateAction<IPatient[]>>;
  editModal: boolean;
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const EditPatient = ({
  patientToEdit,
  patients,
  setPatients,
  editModal,
  setEditModal,
}: Props) => {
  return (
    <div className="absolute flex items-center justify-center top-0 right-0 bottom-0 bg-black/40 w-screen h-[100vh]">
      <div className="w-[30rem]">
        <EditForm
          patientToEdit={patientToEdit}
          patients={patients}
          setPatients={setPatients}
          editModal={editModal}
          setEditModal={setEditModal}
        />
      </div>
    </div>
  );
};

export default EditPatient;
