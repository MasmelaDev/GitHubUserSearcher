import React from "react";

function useGetData() {
  const [user, setUser] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const fetchData = async (user) => {
    setLoading(true)
    try {
      const response = await fetch(`https://api.github.com/users/${user}`)
      if (response.status === 404) {
        setError(`User "${user} not Found"`)
      }else{
          const data = await response.json()
          setUser(data);
          setError(null)
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [user, loading, error, fetchData];
}

export { useGetData };
