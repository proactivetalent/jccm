export type TestimonialItem = Readonly<{
  id: string;
  location: string;
  href: string;
  quote: string;
  author: string;
}>;

export const testimonials: readonly TestimonialItem[] = [
  {
    id: "middleton-brooklyn",
    location: "221 Middleton St, Brooklyn",
    href: "/projects/middleton-brooklyn",
    quote:
      "JCCM took a project that was left for dead and brought it to life. Their ability to handle both the city and the construction site saved us time, money, and immense frustration. They are true partners",
    author: "Project Owner Name",
  },
  {
    id: "crumbl-cookies",
    location: "Crumbl Cookies",
    href: "/projects/crumbl-cookies",
    quote:
      "JCCM handled our Crumbl Cookies franchise build-out from start to finish, navigating NYC's complex requirements while maintaining our strict brand standards. They delivered on time, within budget, and the space was absolutely perfect for opening day. Their team's communication and attention to detail made the entire process smooth and stress-free.",
    author: "Project Owner Name",
  },
  {
    id: "west-85-street",
    location: "77 W 85 St, New York",
    href: "/projects/west-85-street",
    quote:
      "We hired JCCM for a complete gut renovation of our Upper West Side co-op. Their team was respectful of our building's rules, kept us informed at every stage, and delivered a finished home that exceeded our expectations. We couldn't be happier with the craftsmanship and professionalism.",
    author: "Project Owner Name",
  },
  {
    id: "park-slope-brownstone",
    location: "Park Slope Brownstone, Brooklyn",
    href: "/projects/park-slope-brownstone",
    quote:
      "From permits to punch list, JCCM managed every detail of our brownstone restoration with clarity and care. Their proactive communication kept our family informed and our project on track through every unexpected turn.",
    author: "Project Owner Name",
  },
  {
    id: "manhattan-commercial",
    location: "Manhattan Commercial Fit-Out",
    href: "/projects/manhattan-commercial",
    quote:
      "Our commercial build-out demanded precision, speed, and strict code compliance. JCCM delivered on all three while coordinating seamlessly with our design team and building management.",
    author: "Project Owner Name",
  },
  
] as const;
