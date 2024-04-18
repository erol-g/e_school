import { useState } from "react";
import { toast } from "react-toastify";
const RegisterClass = () => {
  const [className, setClassName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/all-classes");
      const data = await response.json();
      const classNames = data.map((item) => item.className);

      if (classNames.includes(className)) {
        toast.error("Class already exists");
      } else {
        await fetch("http://localhost:3000/register-class", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            className: className,
          }),
        });
        toast.success("Class created successfully");
      }
    } catch (error) {
      toast.error("Failed to create class");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Enter A Class Name </h3>
        <input
          type="text"
          placeholder="Class Name"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default RegisterClass;
