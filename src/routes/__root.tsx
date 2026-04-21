import { Link, createRootRoute, HeadContent, Scripts, Outlet } from "@tanstack/react-router";
import { Analytics } from "@vercel/analytics/react";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-4">
      <div className="max-w-md text-center">
        <div className="font-serif text-3xl text-foreground">
          Sit<span className="text-primary">&</span>Joy
        </div>
        <h1 className="mt-8 font-serif text-7xl text-primary">404</h1>
        <h2 className="mt-4 font-serif text-2xl text-foreground">Esta taza está vacía</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          La página que buscas no existe. Vuelve al inicio y déjanos invitarte a un café.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:opacity-90"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Sit&Joy" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <>
      <HeadContent />
      <Scripts />
      <Outlet />
      <Analytics />
    </>
  );
}
