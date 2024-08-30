import { useState } from "preact/hooks";

export default function Newsletter() {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://api.cazcik.com/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("successfully subscribed");
        setEmail("");
      } else {
        setStatus("failed to subscribe");
      }
    } catch (error) {
      setStatus("an error occurred");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col">
      <div className="flex max-w-sm items-center gap-x-2">
        <div className="flex w-full">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            required
            type="email"
            id="email"
            name="email"
            value={email}
            aria-disabled={loading}
            placeholder="you@example.com"
            onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
            className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-black outline-none placeholder:text-neutral-500 aria-disabled:bg-neutral-100"
          />
        </div>
        <div>
          <button
            type="submit"
            aria-disabled={loading}
            className="w-full rounded-lg border border-neutral-200 bg-black px-3 py-2 font-medium text-white outline-none aria-disabled:bg-neutral-800"
          >
            {loading ? "subscribing" : "subscribe"}
          </button>
        </div>
      </div>
      {status ? (
        <div className="mt-2">
          <p>{status}</p>
        </div>
      ) : null}
    </form>
  );
}
