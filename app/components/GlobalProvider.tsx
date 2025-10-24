"use client";
import axiosInstance from "../axios";
import { API_KEY, LOGIN_URL, PROJECT_ID, PROJECTS_URL } from "../constants";
import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { ProjectDetails } from "../interfaces";
import { useParams } from "next/navigation";

type GlobalContextType = {
  projectDetails: ProjectDetails | undefined;
  appReady: boolean;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

type GlobalProviderProps = {
  children: ReactNode;
};

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const lang = useParams().lang as "en" | "es";
  const [appReady, setAppReady] = useState<boolean>(false);
  const [projectDetails, setProjectDetails] = useState<ProjectDetails>();

  async function login() {
    return axiosInstance
      .post(LOGIN_URL, {
        username: process.env.NEXT_PUBLIC_API_USERNAME,
        password: process.env.NEXT_PUBLIC_API_PASSWORD,
      })
      .then((res) => {
        const apiResponse = res.data.data[0];
        const jwt = apiResponse.token;
        localStorage.setItem(API_KEY, jwt);
      })
      .catch((err) => {
        console.error(
          `The following error has occurred while trying to connect to the API: `
        );
        console.error(err);
      });
  }

  async function getProjectDetails() {
    const token = localStorage.getItem(API_KEY);

    axiosInstance
      .get(`${PROJECTS_URL}/${PROJECT_ID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          lang: lang === "es" ? "ES" : "US",
        },
      })
      .then((res) => {
        const apiResponse = res.data.data[0];
        setProjectDetails(apiResponse);
      })
      .catch((err) => {
        console.error(
          `The following error has occurred while trying to get the details of the project: `
        );
        console.error(err);
      });
  }

  useEffect(() => {
    async function start() {
      if (localStorage.getItem(API_KEY)) {
        setAppReady(true);
        getProjectDetails();
        return;
      }

      await login();
      setAppReady(true);
      getProjectDetails();
    }

    start();
  }, []);

  return (
    <GlobalContext.Provider value={{ appReady, projectDetails }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = (): GlobalContextType => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("useGlobal must be used inside GlobalProvider");
  }

  return context;
};
