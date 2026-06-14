import "@/styles.css";
import { createFileRoute } from "@tanstack/react-router";
import { StaminaScalingPage } from "@/features/stamina-scaling/components/StaminaScalingPage";

export const Route = createFileRoute("/stamina-scaling-tweaks")({
  validateSearch: (search: Record<string, unknown>) => ({
    s: typeof search.s === "string" ? search.s : undefined,
  }),
  component: StaminaScalingRoute,
});

function StaminaScalingRoute() {
  const { s: search } = Route.useSearch();
  return <StaminaScalingPage initialEncoded={search} />;
}
