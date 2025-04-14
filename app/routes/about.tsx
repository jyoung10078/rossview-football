import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Page" },
    { name: "description", content: "This will be an informational page!" },
  ];
}

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
    </div>
  )
}
