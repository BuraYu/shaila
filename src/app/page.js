import MaxWidthWrapper from "./components/MaxWidthWrapper";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1>
          Your marketplace for{" "}
          <span className="text-blue-700">high-quality</span> packaging
        </h1>
      </div>
    </MaxWidthWrapper>
  );
}
