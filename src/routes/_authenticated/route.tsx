import { createFileRoute, Outlet, useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export const Route = createFileRoute("/_authenticated")({
  ssr: false,
  component: AuthenticatedLayout,
});

function AuthenticatedLayout() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const href = useRouterState({ select: (s) => s.location.href });

  useEffect(() => {
    if (!loading && !user) {
      navigate({ to: "/auth", search: { redirect: href }, replace: true });
    }
  }, [loading, user, navigate, href]);

  if (loading || !user) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="size-6 animate-spin text-primary" aria-hidden="true" />
      </div>
    );
  }

  return <Outlet />;
}
