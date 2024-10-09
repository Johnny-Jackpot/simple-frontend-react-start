import React, {useEffect, useState} from "react";

interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
  };
}

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const fetchUserData = async () => {
    try {
      const response = await fetch("https://randomuser.me/api");
      if (!response.ok) {
        throw new Error("Network error");
      }

      const data = await response.json();
      setUser(data.results[0]);
    } catch (e) {
      setError("Failed to fetch user data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchUserData();
    }, 2000);

    return () => {
      clearInterval(intervalId);
    }
  }, [])

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h2>User profile:</h2>
      {user && (
        <>
          <img src={user.picture.large} alt="user image" />
          <p>Name: {user.name.first} {user.name.last}</p>
          <p>Email: {user.email}</p>
        </>
      )}
    </>
  );
};

export default UserProfile;
