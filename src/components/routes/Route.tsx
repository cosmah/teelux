import React from 'react';
import { AlertCircle, BookOpen, Gift, Layout, Settings, Sparkles } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const components = [
  {
    title: "Features",
    icon: <Sparkles className="w-4 h-4" />,
    href: "/features",
    description: "Explore our amazing features and capabilities",
    items: [
      {
        title: "Alert Dialog",
        description: "A modal dialog that interrupts the user with important content.",
        icon: <AlertCircle className="w-4 h-4" />
      },
      {
        title: "Documentation",
        description: "Comprehensive guides and API documentation.",
        icon: <BookOpen className="w-4 h-4" />
      },
    ]
  },
  {
    title: "Products",
    icon: <Gift className="w-4 h-4" />,
    href: "/products",
    description: "Check out our product lineup",
    items: [
      {
        title: "Dashboard",
        description: "Beautiful analytics and monitoring interface.",
        icon: <Layout className="w-4 h-4" />
      },
      {
        title: "Settings",
        description: "Configure your workspace preferences.",
        icon: <Settings className="w-4 h-4" />
      },
    ]
  }
];

interface ListItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ title, description, icon }) => (
  <div className="p-3 hover:bg-slate-50 rounded-lg transition-colors">
    <div className="flex items-center space-x-2">
      {icon}
      <h3 className="font-medium">{title}</h3>
    </div>
    <p className="text-sm text-gray-500 mt-1 ml-6">
      {description}
    </p>
  </div>
);

const NavigationBar = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4">
      <NavigationMenu className="relative">
        <NavigationMenuList className="flex space-x-4 bg-white p-2 rounded-lg shadow-sm">
          {components.map((component) => (
            <NavigationMenuItem key={component.href}>
              <NavigationMenuTrigger className="flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-md hover:bg-slate-50 transition-colors">
                {component.icon}
                <span>{component.title}</span>
              </NavigationMenuTrigger>
              
              <NavigationMenuContent className="absolute top-full mt-2 w-[500px] rounded-xl border bg-white shadow-lg">
                <div className="p-4">
                  <div className="flex items-center space-x-2 mb-4 pb-2 border-b">
                    {component.icon}
                    <h2 className="font-semibold">{component.title}</h2>
                  </div>
                  
                  <p className="text-sm text-gray-500 mb-4">
                    {component.description}
                  </p>
                  
                  <div className="grid gap-2">
                    {component.items.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        description={item.description}
                        icon={item.icon}
                      />
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavigationBar;