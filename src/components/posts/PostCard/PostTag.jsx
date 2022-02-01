import { For } from "solid-js";
export default function PostTag() {
  return (
    <section className="px-4">
      <ul className="flex flex-wrap items-center space-x-2">
        <For each={tags}>
          {(tag) => (
            <li>
              <a
                href="#"
                className="px-3 py-1 bg-blue-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-blue-200 text-blue-500 dark:text-white rounded-full text-xs "
              >
                {tag.name}
              </a>
            </li>
          )}
        </For>
      </ul>
    </section>
  );
}

const tags = [
  {
    name: "Solidjs",
  },
  {
    name: "Remix.run",
  },
  {
    name: "Graphql",
  },
];