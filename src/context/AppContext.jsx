import React, { createContext, useState, useContext } from "react";

// Create context
const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export function AppProvider({ children }) {
  const [githubUsername, setGithubUsername] = useState("");
  const [aboutMe, setAboutMe] = useState(""); // About Me state
  const [socialLinks, setSocialLinks] = useState({
    github: "",
    linkedin: "",
    twitter: "",
  });
  const [technologies, setTechnologies] = useState([]); // Technologies state

  return (
    <AppContext.Provider
      value={{
        githubUsername,
        setGithubUsername,
        aboutMe,
        setAboutMe,
        socialLinks,
        setSocialLinks,
        technologies,
        setTechnologies, // Add setTechnologies to the context
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext };
