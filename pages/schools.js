import { useEffect, useState } from "react";

export default function Schools() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/getSchools");
        const data = await response.json();
        setSchools(data);
      } catch (error) {
        console.error("Error fetching schools:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Schools</h1>
      <ul>
        {schools.map((school) => (
          <li key={school.id}>
            {school.name} - {school.location}
          </li>
        ))}
      </ul>
    </div>
  );
}
