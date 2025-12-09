import { useState, useEffect } from "react";


function DogGallery() {

  const [dog, setDog] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

 
  const fetchDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => {

        if (!res.ok) {
          throw new Error("Failed to fetch dog image");
        }
        // If response is ok, parse the JSON body.
        return res.json();
      })
      .then((data) => {

        setDog({
          image: data.message
        });
      })
      .catch((err) => {
   
        setError("Could not load a dog image. Please try again.");

        setDog(null);
      })
        .finally(() => {
            // Whether the request succeeded or failed, we are done loading.
            setLoading(false);
        });



  };


  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <div className="page">
      <h1>Random Doggies</h1>
    

      <button className="add-button" onClick={fetchDog}>
        Get Another Dog
      </button>



      {!dog && <p>No dog loaded yet.</p>}

      {dog && !loading && (
        <>
          <img
            src={dog.image}
            alt="A random dog"
            style={{ maxWidth: "300px", borderRadius: "12px", marginTop: "16px" }}
          />
        </>
      )}
    </div>
  );
}

export default DogGallery;
