import { Link } from "react-router-dom";

export function Overview() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Sandboxes />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="mx-auto my-24 flex flex-col justify-center gap-8 px-3 md:px-0">
      <h1 className="max-w-[40rem] text-center text-5xl font-light">
        Try out emerging AI models and technologies
      </h1>
      <p className="text-center font-light">Brought to you by Stability.AI</p>
    </div>
  );
}

function Sandboxes() {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-2 md:px-32 lg:grid-cols-3 xl:grid-cols-4">
      <SandboxButton
        title="Text to Image"
        description="Generate images from text"
        href="/sandbox/text-to-image"
        color="#b84317"
      />
    </div>
  );
}

function SandboxButton({
  title,
  description,
  image,
  href,
  color
}: {
  title: string;
  description: string;
  image?: string;
  href: string;
  color: string;
}) {
  return (
    <Link className="flex flex-col gap-2" to={href}>
      <h1 className="text-2xl font-thin">{title}</h1>
      <div
        className="aspect-square w-full overflow-hidden rounded-xl"
        style={{
          backgroundColor: color
        }}
      >
        {image && (
          <img src={image} alt={title} className="h-full w-full object-cover" />
        )}
      </div>
      <p className="font-thin">{description}</p>
    </Link>
  );
}

function Footer() {
  return (
    <div className="bg-brand-amber-1 mt-auto flex h-16 w-full items-center justify-between px-5">
      <div className="flex gap-6">
        <a href="/tos" className="text-sm font-semibold hover:text-indigo-500">
          Terms of Service
        </a>
        <a
          href="/privacy"
          className="text-sm font-semibold hover:text-indigo-500"
        >
          Privacy Policy
        </a>
        <a href="/faq" className="text-sm font-semibold hover:text-indigo-500">
          FAQs
        </a>
        <a
          href="https://stability.ai"
          className="text-sm font-semibold hover:text-indigo-500"
        >
          Stability.AI
        </a>
      </div>
      <div className="flex gap-6">
        <a
          href="https://discord.gg/5fgDen6CPU"
          className="text-sm font-semibold hover:text-indigo-500"
        >
          Discord
        </a>
      </div>
    </div>
  );
}
