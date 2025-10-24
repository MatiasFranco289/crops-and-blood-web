"use client";

import axiosInstance from "@/app/axios";
import { useGlobal } from "@/app/components/GlobalProvider";
import MarkdownSection from "@/app/components/MarkdownSection";
import Separator from "@/app/components/Separator";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { API_KEY, BLOGS_URL, PROJECT_ID, PROJECTS_URL } from "@/app/constants";
import { Blog } from "@/app/interfaces";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Devlog() {
  const params = useParams();
  const { appReady } = useGlobal();
  const [isError, setError] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [loadingBlogs, setLoadingBlogs] = useState<boolean>(false);
  const [blogs, setBlogs] = useState<Array<Blog>>([]);
  const offset = useRef<number>(0);
  const totalBlogs = useRef<number>(0);
  const limit = 5;
  const lang = useParams().lang as "en" | "es";
  const texts = {
    noBlogs: {
      es: "Todavia no hay blogs :(",
      en: "Still no blogs yet :(",
    },
    loadMore: {
      es: "Cargar más",
      en: "Load more",
    },
    error: {
      es: "Demasiadas peticiones desde tu IP, espera un momento... O quizá la API se murió. En cualquier caso, esperá un poco.",
      en: "Too many requests from your IP, chill for a moment... Or maybe the API just died. Either way, give it a sec.",
    },
  };

  useEffect(() => {
    if (!appReady) return;
    getBlogs();
  }, [appReady]);

  async function getBlogs() {
    const token = localStorage.getItem(API_KEY);

    axiosInstance
      .get(`${PROJECTS_URL}/${PROJECT_ID}${BLOGS_URL}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          lang: params.lang === "es" ? "ES" : "US",
          offset: offset.current,
          limit: limit,
        },
      })
      .then((res) => {
        const apiResponse = res.data.data;
        totalBlogs.current = res.data.pagination.total;
        setBlogs([...blogs, ...apiResponse]);
      })
      .catch((err) => {
        console.error(
          `The following error has occurred while trying to get the blogs: `
        );
        console.error(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function loadMoreBlogs() {
    if (loadingBlogs) return;

    offset.current += limit;
    getBlogs();
  }

  function renderizeBlogs() {
    if (isLoading) {
      return (
        <div className="w-full min-h-screen flex justify-center items-center">
          <div className="animate-pulse">
            <AiOutlineLoading3Quarters className="text-6xl animate-spin" />
          </div>
        </div>
      );
    }

    if (blogs.length > 0) {
      return (
        <>
          <div className="w-11/12 sm:w-4/6 mb-12">
            {blogs.map((blog, index) => {
              return (
                <div
                  key={`blog_${index}`}
                  className={`${
                    index !== blogs.length - 1 ? "mb-24" : ""
                  } mt-24`}
                >
                  <Separator gap="h-12" position="end" width="w-2/6" />
                  <div className="p-4 rounded-xl hover:bg-white/10 duration-200">
                    <div className="mb-3">
                      <h3 className="text-xl font-semibold">{blog.title}</h3>
                      <p className="text-sm">{blog.created_at.split("T")[0]}</p>
                    </div>

                    <MarkdownSection content={blog.body} />
                  </div>
                </div>
              );
            })}
          </div>

          {blogs.length < totalBlogs.current && (
            <div className="flex justify-center my-6">
              <button
                onClick={loadMoreBlogs}
                className={`p-3 text-lg ${
                  loadingBlogs
                    ? "animate-pulse cursor-default"
                    : "cursor-pointer"
                }`}
              >
                {texts.loadMore[lang]}
              </button>
            </div>
          )}
        </>
      );
    }

    if (isError) {
      return (
        <div className="flex flex-col justify-center items-center w-full min-h-screen font-roboto">
          <div className="w-2/6 flex flex-col items-center justify-center">
            <Image
              src={"/amogus.gif"}
              alt="amogus.gif"
              height={200}
              width={200}
            />
            <h4 className="text-2xl font-semibold text-center">
              {texts.error[lang]}
            </h4>
          </div>
        </div>
      );
    }

    return (
      <div className="flex flex-col justify-center items-center w-full min-h-screen font-roboto">
        <div className="w-2/6 flex flex-col items-center justify-center">
          <Image
            src={"/amogus.gif"}
            alt="amogus.gif"
            height={200}
            width={200}
          />
          <h4 className="text-2xl font-semibold text-center">
            {texts.noBlogs[lang]}
          </h4>
        </div>
      </div>
    );
  }

  return (
    <div className="font-roboto bg-[#12050d] w-full min-h-screen flex flex-col items-center">
      {renderizeBlogs()}
    </div>
  );
}
