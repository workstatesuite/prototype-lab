import { RouterProvider, createRouter } from "@tanstack/react-router"

import { TooltipProvider } from "@/components/ui/tooltip"
import { routeTree } from "@/routeTree.gen"

const router = createRouter({ routeTree })

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

export default function App() {
  return (
    <TooltipProvider>
      <RouterProvider router={router} />
    </TooltipProvider>
  )
}
