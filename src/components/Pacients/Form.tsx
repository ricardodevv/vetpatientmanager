import { useState } from "react";
import Layout from "./Layout";
import { v4 as uuid } from "uuid";

interface Patient {
  id: string;
  petName: string;
  ownerName: string;
  email: string;
  date: string;
  symptoms: string;
}

interface FormProps {
  patients: Patient[];
  setPatients: React.Dispatch<React.SetStateAction<Patient[]>>;
}

const Form = ({ patients, setPatients }: FormProps) => {
  const [petName, setPetName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [symptoms, setSymptoms] = useState("");

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
    const objPatients: Patient = {
      id: uuid().slice(0, 8),
      petName,
      ownerName,
      email,
      date,
      symptoms,
    };
    setPatients([...patients, objPatients]);
    setPetName("");
    setOwnerName("");
    setEmail("");
    setDate("");
    setSymptoms("");
    console.log("submit", patients);
  };

  return (
    <Layout
      title="Pacients Monitoring"
      subtitle="Add pacients and "
      colorSubtitle="manage them"
    >
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
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer rounded-md transition-colors"
          value="Add pacient"
        />
      </form>
    </Layout>
  );
};

export default Form;
