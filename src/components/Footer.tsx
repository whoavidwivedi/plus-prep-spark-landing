import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Heart, Github, Twitter, Linkedin, Mail } from "lucide-react";
const Footer = () => {
  const links = {
    product: [{
      name: "Features",
      href: "#features"
    }, {
      name: "Syllabus",
      href: "#syllabus"
    }, {
      name: "Pricing",
      href: "#pricing"
    }, {
      name: "Reviews",
      href: "#reviews"
    }],
    company: [{
      name: "About Us",
      href: "#"
    }, {
      name: "Careers",
      href: "#"
    }, {
      name: "Blog",
      href: "#"
    }, {
      name: "Contact",
      href: "#"
    }],
    support: [{
      name: "Help Center",
      href: "#"
    }, {
      name: "Community",
      href: "#"
    }, {
      name: "Status",
      href: "#"
    }, {
      name: "Privacy Policy",
      href: "#"
    }]
  };
  const socialLinks = [{
    icon: <Github className="h-5 w-5" />,
    href: "#",
    label: "GitHub"
  }, {
    icon: <Twitter className="h-5 w-5" />,
    href: "#",
    label: "Twitter"
  }, {
    icon: <Linkedin className="h-5 w-5" />,
    href: "#",
    label: "LinkedIn"
  }, {
    icon: <Mail className="h-5 w-5" />,
    href: "#",
    label: "Email"
  }];
  return <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold gradient-text">TakeUForward</span>
              <span className="text-sm bg-primary text-primary-foreground px-2 py-1 rounded-full">PLUS</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Your one-stop platform for comprehensive interview preparation. 
              Join thousands of successful candidates who landed their dream jobs.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => <Button key={index} variant="ghost" size="icon" asChild>
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </Button>)}
              <ThemeToggle />
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {links.product.map((link, index) => <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {links.company.map((link, index) => <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {links.support.map((link, index) => <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            Made with <Heart className="h-4 w-4 inline mx-1 text-red-500" /> by TakeUForward Team
          </p>
          <p className="text-muted-foreground text-sm">© 2025 TakeUForward. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;