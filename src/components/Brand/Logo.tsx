import logoImage from "@/assets/tambakflow-logo.png";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-10 w-10" }) => (
  <img 
    src={logoImage} 
    alt="Tambakflow Logo" 
    className={`${className} rounded-lg`}
  />
);