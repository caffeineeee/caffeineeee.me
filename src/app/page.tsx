import Image from "next/image";

// import yoshinoya from "@/../public/yoshinoya.jpg";
import kawahPutih from "@/../public/kawah-putih-compressed.jpg";

export default function HomePage() {
  return (
    <div className="container grid items-center pb-8 pt-6 md:py-8">
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 pb-8 pt-6 text-center md:pb-12 md:pt-10 lg:py-28"
      >
        {/* <Image
          src={
            process.env.NODE_ENV === "development"
              ? yoshinoya
              : "https://s3.us-east-1.amazonaws.com/caffeineeee.me-bucket/yoshinoya.jpg"
          }
          alt="Profile picture of Cevin Samuel"
          className="rounded-full w-48 h-48 md:w-64 md:h-64"
        /> */}
        <Image
          src={
            process.env.NODE_ENV === "development"
              ? kawahPutih
              : "https://s3.us-east-1.amazonaws.com/caffeineeee.me-bucket/kawah-putih-compressed.jpg"
          }
          alt="Profile picture of Cevin Samuel"
          className="rounded-full w-48 h-48 md:w-64 md:h-64"
        />
        <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1] font-display">
          Cevin Samuel
        </h1>
        <div className="max-w-[46rem] text-base">
          I am a software engineer and a final-year Informatics undergraduate
          student.
        </div>
      </section>
    </div>
  );
}
