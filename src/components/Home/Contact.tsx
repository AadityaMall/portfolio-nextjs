import Link from "next/link";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
const Contact = () => {
  return (
    <>
      <div className="w-full md:w-[80%] mt-[100px] flex flex-col justify-center items-center border-2 border-brandColor rounded-xl">
        <h1 className="text-white text-center mt-3">
          Contact <strong className="text-brandColor">Me</strong>
        </h1>
        <div className="mt-[20px] w-full m-4 grid md:grid-cols-2 grid-cols-1 gap-4">
          <div className="flex justify-center items-center">
            <Image
              src="/images/aadityaBitmoji.png"
              alt="Bitmoji"
              className="img-fluid max-h-48 z-100"
              width={150}
              height={10}
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <Link
              href={"https://wa.me/919326430750"}
              className="w-full max-w-[300px] p-2 flex justify-center items-center no-underline m-2 normal-case text-black font-bold bg-[#25d366]"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="mx-[10px]" />
              Whatsapp
            </Link>
            <Link
              href={"mailto:aadityarmall@gmail.com"}
              className="w-full max-w-[300px] p-2 flex justify-center items-center no-underline m-2 normal-case bg-[#DB4437] text-black font-bold"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mx-[10px]" />
              Mail
            </Link>
            <Link
              href={"tel:+919326430750"}
              className="w-full max-w-[300px] p-2 flex justify-center items-center no-underline m-2 normal-case bg-brandColor text-black font-bold"
            >
              <FontAwesomeIcon icon={faPhone} className="mx-[10px]" />
              9326430750
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
