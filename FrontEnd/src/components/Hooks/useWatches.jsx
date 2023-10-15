const useWatches = async () => {
  const apiUrl = "https://watchstio.onrender.com/api/watches";
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const result = await response.json();
      console.log("Fetching watches successful");
      return result; // Return the data
    } else {
      console.error("Fetching watches failed");
    }
  } catch (error) {
    console.error("An error occurred while fetching watches:", error);
  }
};
export default useWatches;
