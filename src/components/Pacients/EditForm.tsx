import { useState } from "react";

interface Patient {
  id: string;
  petName: string;
  ownerName: string;
  email: string;
  date: string;
  symptoms: string;
}

interface FormProps {
  patientToEdit: Patient | undefined;
  patients: Patient[];
  setPatients: React.Dispatch<React.SetStateAction<Patient[]>>;
  editModal: boolean;
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditForm = ({
  patientToEdit,
  patients,
  setPatients,
  editModal,
  setEditModal,
}: FormProps) => {
  const id = patientToEdit?.id;
  const [petName, setPetName] = useState(patientToEdit?.petName || "");
  const [ownerName, setOwnerName] = useState(patientToEdit?.ownerName || "");
  const [email, setEmail] = useState(patientToEdit?.email || "");
  const [date, setDate] = useState(patientToEdit?.date || "");
  const [symptoms, setSymptoms] = useState(patientToEdit?.symptoms || "");

  console.log(patientToEdit);

  const handleInputChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setState(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const changePatient = patients.filter((el) => el.id !== patientToEdit?.id);
    const objPatient: Patient = {
      id: id!,
      petName,
      ownerName,
      email,
      date,
      symptoms,
    };
    setPatients([...changePatient, objPatient]);
    setEditModal(!editModal);
  };

  return (
    <form
      action=""
      onSubmit={(event) => handleSubmit(event)}
      className="bg-white shadow-md rounded-lg py-10 px-5"
    >
      <div className="mb-5">
        <label
          className="block text-gray-700 font-bold uppercase"
          htmlFor="pet-name"
        >
          Pet Name
        </label>
        <input
          id="pet-name"
          type="text"
          placeholder="Pet Name"
          className="inputForm"
          value={petName}
          onChange={(event) => handleInputChange(event, setPetName)}
        />
      </div>
      <div className="mb-5">
        <label
          className="block text-gray-700 font-bold uppercase"
          htmlFor="owner-name"
        >
          Owner Name
        </label>
        <input
          id="owner-name"
          type="text"
          placeholder="Owner name"
          className="inputForm"
          value={ownerName}
          onChange={(event) => handleInputChange(event, setOwnerName)}
        />
      </div>
      <div className="mb-5">
        <label
          className="block text-gray-700 font-bold uppercase"
          htmlFor="email"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          className="inputForm"
          value={email}
          onChange={(event) => handleInputChange(event, setEmail)}
        />
      </div>
      <div className="mb-5">
        <label
          className="block text-gray-700 font-bold uppercase"
          htmlFor="discharge"
        >
          Medical discharge
        </label>
        <input
          id="medical-discharge"
          type="date"
          className="inputForm"
          value={date}
          onChange={(event) => handleInputChange(event, setDate)}
        />
      </div>
      <div className="mb-5">
        <label
          className="block text-gray-700 font-bold uppercase"
          htmlFor="discharge"
        >
          Medical discharge
        </label>
        <textarea
          name=""
          id="symptoms"
          className="inputForm placeholder-gray-300"
          placeholder="Describe the symptoms"
          value={symptoms}
          onChange={(event) => handleInputChange(event, setSymptoms)}
        />
      </div>
      <div className="flex justify-between">
        <input
          type="submit"
          className="bg-indigo-600 w-38 p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer rounded-md transition-colors"
          value="Update patient"
        />
        <div
          className="text-center p-3 bg-red-500 hover:bg-red-600 uppercase font-bold text-white w-36 cursor-pointer rounded-md transition-colors"
          onClick={() => setEditModal(!editModal)}
        >
          Cancel
        </div>
      </div>
    </form>
  );
};

export default EditForm;
