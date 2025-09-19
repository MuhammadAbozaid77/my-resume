export default function Logo() {
  return (
    <h1>
      <a
        href=""
        className="logo flex justify-center items-center flex-col reveal-up"
      >
        <img src="/src/assets/logo2.png" alt="ZIDAN" width={40} height={40} />
        <span className="text-[14px] font-semibold text-yellow-500">ZIDAN</span>
        {/* <span className="text-[14px] font-semibold text-yellow-500">ZIDAN</span> */}
      </a>
    </h1>
  );
}
