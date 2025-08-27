import { footerData } from "@/_data/footer";
import { Logo } from "@/components/shared/logo";

export default function Footer() {
  const { brand, socialLinks, programs, about } = footerData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" bg-white dark:bg-transparent ">
      <div className=" mx-auto max-w-5xl w-full relative px-6 py-12 mt-36 pt-8 ">
        <div className="flex mt-6 mb-80 flex-col md:flex-row md:flex-wrap lg:flex-row lg:justify-between gap-10 lg:gap-24">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Logo/>
            </div>
            <p className="text-sm text-muted-foreground hover:text-primary block leading-relaxed max-w-sm">{brand.bio}</p>
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="w-9 h-9 text-muted-foreground hover:bg-[#a3f443] dark:hover:bg-[#a3f443] rounded-lg flex items-center justify-center transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Wrapped the last two sections in a new flex div */}
          <div className="flex flex-col md:flex-row gap-10 lg:gap-24">
            {/* MadeByDamola Section */}
            <div className="space-y-4">
              <h3 className=" font-semibold">{programs.group}</h3>
              <ul className="space-y-3">
                {programs.items.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-neutral-400 hover:text-[#a3f443] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coming Soon Section */}
            <div className="space-y-4">
              <h3 className="font-semibold">{about.group}</h3>
              <ul className="space-y-3">
                {about.items.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-sm hover:text-[#a3f443] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>


        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row mt-10 md:mt32 border-t border-neutral-800 pt-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-neutral-800 dark:text-neutral-200">
            <p className="text-sm ">
              {" "}
              {brand.buitBy}
            </p>
          </div>
          <p className="text-sm">
            &copy; {currentYear}{" "}
            <a
              href="https://github.com/damolaoladipo"
              className=" hover:text-[#a3f443] transition-colors"
            >
              {brand.ownedBy}
            </a>
            {brand.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}