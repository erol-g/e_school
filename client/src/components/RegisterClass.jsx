import { useState, useEffect } from "react";

const RegisterClass = () => {
  const [className, setClassName] = useState("");
  const [existingClasses, setExistingClasses] = useState([]);

  //   useEffect(() => {
  //     // Fetch existing classes from the backend when the component mounts
  //     fetchExistingClasses();
  //   }, []);

  //   const fetchExistingClasses =async()=>{
  //     try{
  //         const response = await fetch("http://localhost:3000/classes")
  //         const data= await response.json()
  //         setExistingClasses(data);

  //     }catch(error){
  //         console.error("Error fetching existing classes:", error);

  //     }

  //   }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if(existingClasses.includes(className)){
    //     console.error("Class already exists");
    // }else{

    // }
    fetch("http://localhost:3000/register-class", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        className: className,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Class created:", data);
      })
      .catch((error) => {
        console.error("Error creating class:", error);
      });
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
