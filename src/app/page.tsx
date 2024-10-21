import Link from "next/link";

export default function IndexPage() {
  return (
    <div className="flex flex-col space-y-7">
      <div>
        <h1 className="mb-2 text-xl font-semibold text-black">zac wojcik</h1>
        <p className="text-neutral-600">
          i'm an application security engineer helping developers write secure
          code, design secure systems, and build for resiliency. in my free time
          i work on open source, play hockey, and enjoy the outdoors with my
          family.
        </p>
      </div>
      <div>
        <h2 className="mb-3 text-xl font-medium text-black">projects</h2>
        <div className="flex flex-col space-y-3">
          <div>
            <p>solus</p>
            <p className="text-neutral-600">
              open source security platform for all.
            </p>
          </div>
          <div>
            <p>simul</p>
            <p className="text-neutral-600">
              open source security platform for security teams.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="mb-3 text-xl font-medium text-black">work</h2>
        <div className="flex flex-col space-y-3">
          <div>
            <p className="text-neutral-600">2024 ﹣ now</p>
            <p>security engineer ii, application security, health insurance.</p>
          </div>
          <div>
            <p className="text-neutral-600">2022 ﹣ 2024</p>
            <p>application security engineer, life sciences.</p>
          </div>
          <div>
            <p className="text-neutral-600">2021 ﹣ 2022</p>
            <p>security engineer, security service provider.</p>
          </div>
          <div>
            <p className="text-neutral-600">2018 ﹣ 2021</p>
            <p>security analyst, it service provider.</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="mb-3 text-xl font-medium text-black">links</h2>
        <div className="flex flex-col space-y-3">
          <div className="flex">
            <Link
              className="group"
              target="_blank"
              rel="noopener norefferrer"
              href="https://github.com/cazcik"
            >
              <p className="text-neutral-600">github</p>
              <p className="underline-offset-1 group-hover:underline">
                github.com/cazcik
              </p>
            </Link>
          </div>
          <div className="flex">
            <Link
              className="group"
              target="_blank"
              rel="noopener norefferrer"
              href="https://x.com/cazcik"
            >
              <p className="text-neutral-600">x</p>
              <p className="underline-offset-1 group-hover:underline">
                x.com/cazcik
              </p>
            </Link>
          </div>
          <div className="flex">
            <Link
              className="group"
              target="_blank"
              rel="noopener norefferrer"
              href="https://www.threads.net/@cazcik"
            >
              <p className="text-neutral-600">threads</p>
              <p className="underline-offset-1 group-hover:underline">
                threads.net/@cazcik
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
