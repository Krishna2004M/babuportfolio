/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="sm:px-20 sm:pb-20 px-5 pb-5 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className=" text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light text-sm sm:text-md md:text-base  ">
            My journey in education is powered by an array of dynamic tools and timeless values,
            with languages like Hindi and English casting the core of my enchantments. 
            I wield student-centered approaches, differentiated instruction, and creative pedagogy with precision,
            crafting seamless bridges that connect young minds to a universe of knowledge and growth.
            The ancient arts of empathetic teaching empower me to create vibrant, 
            inclusive, and transformative learning experiences, 
            while my leadership in cultural programs ensures that every moment in the classroom is not only educational but captivating.
            Join me as I continue to explore new methods, inspire new dreams, and shape the future through the magic of learning.
            <br />
            <span className="font-semibold block">
              My work and achievements tell me about more. 📖✨
            </span>
            <br />
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-4xl">
          Educator
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1+
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={
            "col-span-full xs:col-span-6 lg:col-span-4 text-accent cursor-pointer"
          }
        >
          <Link
            href="https://drive.google.com/file/d/12MHSBjBiGtWHKhgAPfJjd4Yvv4N3BxQS/view"
            target="_blank"
          >
            <div className="font-semibold w-full text-left text-3xl space-y-4">
              <p className="font-semibold">Cambridge International School — TGT Intern</p>
              <ul className="font-light text-sm sm:text-md md:text-base list-disc list-inside text-white">
                <li>
                Taught English and Hindi to students of Grades VI-VIII, delivering engaging, student-centered lessons.
                  <b className="font-extrabold"> English</b> and
                  <b className="font-extrabold">Hindi</b>
                </li>
                <li>
                Completed an Action Research Project on improving speaking confidence among 
                7th graders using Listening and Speaking strategies.
                </li>
                <li>
                Implemented effective classroom management techniques to foster a positive learning environment. 
                </li>
              </ul>
              <p className="float-end font-semibold text-xs">
              July 2024 – November 2024
              </p>
            </div>
          </Link>
        </ItemLayout>

        <ItemLayout
          className={
            "col-span-full xs:col-span-6 lg:col-span-4 text-accent cursor-pointer"
          }
        >
          <Link
            href="https://drive.google.com/file/d/1w34H0aUXMc136gVbCna7Sh-tntEL2jwm/view"
            target="_blank"
          >
            <div className="font-semibold w-full text-left text-3xl space-y-4">
              <p className="font-semibold">
              Jalandhar Public School — Bilingual Teacher Intern
              </p>
              <ul className="font-light text-sm sm:text-md md:text-base list-disc list-inside text-white">
                <li>
                Conducted lessons integrating real-world connections to academic content for holistic student development.
                </li>
                <li>
                Organized talent shows and drawing competitions to promote student creativity and self-expression.
                <b className="font-extrabold"> talent </b> and
                  <b className="font-extrabold">drawing competitions</b>
                </li>
                <li>
                Gained expertise in addressing individual student differences and maintaining campus discipline.
                </li>
              </ul>
              <p className="float-end font-semibold text-xs">
                May 2024
              </p>
            </div>
          </Link>
        </ItemLayout>

        <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=amitamrutiya&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Babu M"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=amitamrutiya&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Babu M"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=appwrite,ai,babel,bootstrap,css,docker,dart,discord,express,figma,firebase,flutter,git,github,githubactions,graphql,go,html,htmx,js,jquery,kubernetes,linux,mongodb,netlify,nextjs,nodejs,postman,prisma,react,redis,redux,replit,sass,tailwind,threejs,ts,vercel,vite,vscode`}
            alt="Babu M"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=amitamrutiya&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="Babu M"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/amitamrutiya/Nextjs-contentlayer-blog"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=amitamrutiya&repo=MeetnChat&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="Babu M"
              loading="lazy"
            />
          </Link>
        </ItemLayout>

      </div>
    </section>
  );
};

export default AboutDetails;
