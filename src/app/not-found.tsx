import Link from 'next/link'

export default function CustomNotFound() {
  return (
    <div className="flex min-h-dvh flex-col">
      <div className="m-auto w-full p-6">
        <div className="mx-auto max-w-sm rounded-sm border border-neutral-200 bg-neutral-50 p-10 dark:border-neutral-800 dark:bg-neutral-950">
          <div>
            <h1 className="text-lg font-medium text-black dark:text-white">404</h1>
            <p className="text-lg text-neutral-500">page not found</p>
          </div>
          <div className="mt-4">
            <Link
              href="/"
              className="text-lg text-neutral-800 hover:text-black hover:underline dark:text-neutral-200 dark:hover:text-white"
            >
              &larr; back to home
            </Link>
          </div>
        </div>
      </div>
      <footer className="px-5 py-3 text-center text-[11px] text-neutral-500">&copy; 2025 CAZCIK</footer>
    </div>
  )
}
