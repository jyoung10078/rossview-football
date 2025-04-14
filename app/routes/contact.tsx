import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Page" },
    { name: "description", content: "This will be a page to find contact information!" },
  ];
}

export default function About() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>This is the contact page.</p>
    </div>
  )
}
