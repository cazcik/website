import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="flex flex-col space-y-7">
      <div>
        <h1 className="mb-2 text-xl font-medium text-black dark:text-white">
          blog
        </h1>
        <p className="text-neutral-500">
          on occasion i enjoy writing about stuff i'm passionate about such as
          security, open source, application security, business, and startups.
        </p>
      </div>
      <div>
        <h2 className="mb-3 text-xl font-medium text-black dark:text-white">
          recent
        </h2>
        <div className="flex flex-col space-y-1">
          {/* <div className="flex">
            <Link
              href="/blog/hello-world"
              className="group flex items-center gap-x-2"
            >
              <p className="text-neutral-500">01/06/2025</p>
              <p className="text-black group-hover:underline dark:text-white">
                hello world
              </p>
            </Link>
          </div> */}
          <p className="italic text-neutral-500">
            no posts yet, check back soon.
          </p>
        </div>
      </div>
    </div>
  );
}
