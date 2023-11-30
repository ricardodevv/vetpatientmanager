interface IPatient {
  id: string;
  petName: string;
  ownerName: string;
  email: string;
  date: string;
  symptoms: string;
}

interface Props {
  patient: IPatient;
  patients: IPatient[];
  setPatients: React.Dispatch<React.SetStateAction<IPatient[]>>;
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  setPatientToEdit: React.Dispatch<React.SetStateAction<IPatient | undefined>>;
}
const Patient = ({
  patient,
  patients,
  setPatients,

  setEditModal,
  setPatientToEdit,
}: Props) => {
  const { id, petName, ownerName, email, date, symptoms } = patient;

  const handleEdit = () => {
    const objToEdit: IPatient = {
      id,
      petName,
      ownerName,
      email,
      date,
      symptoms,
    };
    setPatientToEdit(objToEdit);
    setEditModal(true);
  };
  const handleDelete = () => {
    const changePatient = patients.filter((el) => el.id !== patient?.id);
    setPatients([...changePatient]);
  };
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Pet Name: {""}
        <span className="font-normal normal-case">{petName}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Owner Name: {""}
        <span className="font-normal normal-case">{ownerName}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Discharge Date: {""}
        <span className="font-normal normal-case">{date}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Symptoms: {""}
        <span className="font-normal normal-case">{symptoms}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={handleEdit}
        >
          Edit
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Patient;
