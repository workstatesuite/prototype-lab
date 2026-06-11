import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { TerminalSquareIcon, BotIcon, BookOpenIcon, Settings2Icon, LifeBuoyIcon, SendIcon, FrameIcon, PieChartIcon, MapIcon } from "lucide-react"

const data = {
  user: {
    name: "Workrate",
    email: "team@workrate.eu",
    avatar: "/logo.svg",
  },
  navMain: [
    {
      title: "Overview",
      url: "#",
      icon: (
        <TerminalSquareIcon
        />
      ),
      isActive: true,
      items: [
        {
          title: "Dashboard",
          url: "#",
        },
        {
          title: "Activity",
          url: "#",
        },
        {
          title: "Insights",
          url: "#",
        },
      ],
    },
    {
      title: "Operations",
      url: "#",
      icon: (
        <BotIcon
        />
      ),
      items: [
        {
          title: "Planning",
          url: "#",
        },
        {
          title: "Execution",
          url: "#",
        },
        {
          title: "Performance",
          url: "#",
        },
      ],
    },
    {
      title: "Resources",
      url: "#",
      icon: (
        <BookOpenIcon
        />
      ),
      items: [
        {
          title: "Documents",
          url: "#",
        },
        {
          title: "Guides",
          url: "#",
        },
        {
          title: "Templates",
          url: "#",
        },
        {
          title: "Updates",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: (
        <Settings2Icon
        />
      ),
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: (
        <LifeBuoyIcon
        />
      ),
    },
    {
      title: "Feedback",
      url: "#",
      icon: (
        <SendIcon
        />
      ),
    },
  ],
  projects: [
    {
      name: "Control Room",
      url: "#",
      icon: (
        <FrameIcon
        />
      ),
    },
    {
      name: "Client Delivery",
      url: "#",
      icon: (
        <PieChartIcon
        />
      ),
    },
    {
      name: "Field Teams",
      url: "#",
      icon: (
        <MapIcon
        />
      ),
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="h-[calc(var(--header-height)+1px)] items-center justify-center border-b border-sidebar-border px-4 py-0">
        <a href="https://workrate.eu/" className="flex h-full items-center">
          <img src="/logo.svg" alt="Workrate" className="h-4 w-[180px]" />
        </a>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
