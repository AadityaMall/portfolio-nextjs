import ProjectCard from "@/components/Project/ProjectCard";
import { Suspense } from "react";
import Loader from "../loading";
const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="mt-[100px]">
        <div className="flex flex-row justify-center items-start grid md:grid-cols-3 grid-cols-1 gap-4">
          <div>
            <ProjectCard
              title={"SoleStore Ecommerce"}
              subtitle={"MERN Stack Website"}
              image={"/images/solestore.png"}
              iconChips={[
                "/svgs/mongo.svg",
                "/svgs/react.svg",
                "/svgs/javascript.svg",
                "/svgs/nodejs.svg",
                "/svgs/bootstrap.svg",
                "/svgs/tailwindcss.svg",
                "/svgs/express.svg",
                "/svgs/razorpay.svg",
              ]}
              previewLink={"https://sole-store.vercel.app/"}
              githubLink={"https://github.com/AadityaMall/SoleStore-Ecommerce"}
              description={`A Complete <span class="text-brandColor">MERN Stack ecommerce website</span> which has various pages and functionalities, example Cart, Wishlist, Checkout, Dashboard for Admin etc `}
            />
          </div>
          <div>
            <ProjectCard
              title={"CertiMail - Automated Certificate Sender"}
              subtitle={"Full Stack Application"}
              image={"/images/certimail.png"}
              iconChips={[
                "/svgs/react.svg",
                "/svgs/javascript.svg",
                "/svgs/nodejs.svg",
                "/svgs/bootstrap.svg",
                "/svgs/tailwindcss.svg",
              ]}
              previewLink={"https://certi-mail.vercel.app/"}
              githubLink={"https://github.com/AadityaMall/Certi-Mail"}
              description={`CertiMail is a streamlined and efficient <span class="text-brandColor">full stack web application</span> designed to automate certificate generation, distribution, and mass emailing. CertiMail simplifies workflows by enabling users to send personalized certificates and mass emails in just a few clicks. `}
            />
          </div>
          <div>
            <ProjectCard
              title={"Personal Portfolio"}
              subtitle={"React Website"}
              image={"/images/portfolio.png"}
              iconChips={[
                "/svgs/nextjs.svg",
                "/svgs/javascript.svg",
                "/svgs/bootstrap.svg",
                "/svgs/tailwindcss.svg",
              ]}
              previewLink={"https://aadityamall.tech/"}
              githubLink={"https://github.com/AadityaMall/portfolio-nextjs"}
              description='A personal portfolio website built on <span class = "text-brandColor"> NextJS Framework</span>  and Tailwind CSS'
            />
          </div>
          <div>
            <ProjectCard
              title={"Advanced Calculator"}
              subtitle={"Python - Tkinter"}
              image={"/images/calculator.png"}
              iconChips={["/svgs/python.svg"]}
              githubLink={"https://github.com/AadityaMall/ScientificCalculator"}
              description={`Calculator that performs some basic and advanced functions. This calculator is created with the help of language python.This calculator when started pops up on a screen where we can calculate basic commands like add, subtract, multiply, divide and percentage. There are three other modes added to this calculator, namely - Scientific Salculator , Audio Calculator and Voice Operated Calculator.`}
              bulletPoints={[
                "Scientific Calculator mode enables functions like permutations, Combinations, power, cuberoot, factorial etc.",
                "Audio calculator reads out whatever calculation we enter as well as its answer.",
                "Voice operated Calculator enables user to use his/her own voice to give commands to calculator which then provides the answer.",
              ]}
            />
          </div>
          <div>
            <ProjectCard
              title={"Contact Book System"}
              subtitle={"CPP File Management System"}
              image={"/images/CppProject.png"}
              iconChips={["/svgs/cpp.svg"]}
              githubLink={"https://github.com/AadityaMall/PhoneBook-System"}
              description={`This is a demonstration as well as a layout of famous just dial app and its interface where a user can access contacts database of different genre.User can search as well as browse all the contacts from the database.Only admins can add or delete contacts from database.To access the admin abilities, valid user email and password is required.`}
              bulletPoints={[
                'This project is built on concepts of <span class="text-brandColor">OOPS (Object Oriented Programming)</span>',
                'Leveraged <span class="text-brandColor"> File Management System </span> and .txt files to store and use data according to needs',
              ]}
            />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default page;
