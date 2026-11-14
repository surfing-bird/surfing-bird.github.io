import { SiteChrome } from "@/components";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <SiteChrome>
        <Outlet />
      </SiteChrome>
    </>
  ),
});
