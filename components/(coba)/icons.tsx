import { LucideProps, Home, Menu, AlertCircle } from "lucide-react";

export const Icons = {
  logo: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      {/* You can place your custom logo SVG here or use an icon */}
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12" y2="16" />
    </svg>
  ),
  home: Home,
  menu: Menu,
  alert: AlertCircle,
};
