import { type Skill } from ".";

export default function Skill({ icon, title, description }: Skill) {
  return (
    <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-900 hover:shadow-purple-900">
      {icon ?? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
      )}

      <h2 className="mt-4 text-xl font-bold text-white">{title}</h2>

      <p className="mt-1 text-sm text-gray-300">
        {description}
      </p>
    </div>
  )
}
