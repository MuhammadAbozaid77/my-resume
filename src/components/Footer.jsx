import { sitemap, socials } from "./../data/staticData";
import { ButtonPrimary } from "./Button";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="section ">
      <div className="container ">
        <div className="lg:grid lg:grid-cols-2 ">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              Let&apos;s work together today!
            </h2>
            <ButtonPrimary
              href={"mailto:muhammadabozaid77@gmail.com"}
              label={"Start Project"}
              icon="chevron_right"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20 ">
            <div>
              <p className="mb-2 reveal-up"> SiteMap </p>
              <ul>
                {sitemap?.map((el) => {
                  return (
                    <li key={el?.href}>
                      <a
                        href={el?.href}
                        className="block text-sm text-zinc-400 py-1 transitions-colors hover:text-zinc-200 reveal-up"
                      >
                        {el?.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <p className="mb-2 reveal-up"> Socials </p>
              <ul>
                {socials?.map((el) => {
                  return (
                    <li key={el?.href}>
                      <a
                        target="_blank"
                        href={el?.href}
                        className="block text-sm text-zinc-400 py-1 transitions-colors hover:text-zinc-200 reveal-up"
                      >
                        {el?.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center p-5  border-t my-[50px] border-zinc-700">
          <p className="text-zinc-500 text-sm">
            &copy; 2024 <span className="text-zinc-200">ZIDAN</span>
          </p>
          <Logo />
        </div>
      </div>
    </footer>
  );
}
