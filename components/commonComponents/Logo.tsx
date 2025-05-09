import Image from 'next/image';

interface LogoProps {
  showSubtext?: boolean;
  showByline?: boolean;
  titleColorClass?: string;
  bylineColorClass?: string;
  subtextColorClass?: string;
}

const Logo: React.FC<LogoProps> = ({
  showSubtext = true,
  showByline = true,
  titleColorClass = 'bg-gradient-to-r from-[#876FFD] to-[#19074A] text-transparent bg-clip-text',
  bylineColorClass = 'text-gray-600',
  subtextColorClass = 'text-gray-500',
}) => {
  return (
    <div className="flex items-start gap-2">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#876FFD] to-[#19074A] rounded-full blur-sm opacity-10 animate-pulse" />
        <div className="relative">
          <Image
            src="/logos/Xcellify-Logo Motif-Favicon.png"
            alt="Xcel 360° Logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className={`text-xl font-bold ${titleColorClass}`}>
            Xcel 360°
          </span>
          {showByline && (
            <span
              className={`text-xs font-medium whitespace-nowrap ${bylineColorClass}`}
            >
              By Xcellify
            </span>
          )}
        </div>
        {showSubtext && (
          <span className={`text-xs font-normal -mt-1 ${subtextColorClass}`}>
            Career Assessment
          </span>
        )}
      </div>
    </div>
  );
};

export default Logo;
