const useSell = async (watchData) => {
  const apiUrl = process.env.HOST + "/api/watches";
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(watchData),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Failed to submit watch data");
    }
  } catch (error) {
    throw error;
  }
};
export default useSell;
