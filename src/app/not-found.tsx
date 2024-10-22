export default function NotFound() {
  return (
    <div className="flex flex-col space-y-7">
      <div>
        <h1 className="mb-2 text-xl font-semibold text-black dark:text-white">
          404
        </h1>
        <p className="text-neutral-500">
          oops, looks like that page isn't here.
        </p>
      </div>
    </div>
  );
}
