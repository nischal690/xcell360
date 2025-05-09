'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface NestedItem {
  title: string;
  route: string;
}

interface DropdownItem {
  title: string;
  route?: string;
  hasItems?: boolean;
  nestedItems?: NestedItem[];
  notForStudent?: boolean;
  isPrimary?: boolean;
}

interface ProfileIndicatorProps {
  name: string;
  role: 'student' | 'parent' | string;
  isPrimary?: boolean;
  isParent?: boolean;
  image?: string;
}

const ProfileIndicator: React.FC<ProfileIndicatorProps> = ({
  name,
  role,
  isPrimary = false,
  isParent = false,
  image,
}) => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const placeholder = '/profile_placeholer1.png';

  const dropdownItems: DropdownItem[] = [
    { title: 'My Profile', route: 'https://xcellify.com/settings/profile' },
    { title: 'My Report', route: 'https://xcellify.com/settings/my-reports' },
    {
      title: 'My Benefits',
      route: '/rewards',
      hasItems: true,
      nestedItems: [
        {
          title: 'Xcellify Points',
          route: 'https://xcellify.com/reward-points',
        },
        { title: 'Xcellify Voucher', route: 'https://xcellify.com/voucher' },
        { title: 'Refer a Friend', route: 'https://xcellify.com/refer' },
      ],
    },
    {
      title: 'Manage my Xcellify Family',
      route: 'https://xcellify.com/home/profiles',
      notForStudent: true,
    },
    {
      title: 'Communication Preference',
      route: 'https://xcellify.com/settings/communication-preference',
    },
  ];

  const filteredItems = dropdownItems.filter((item) => {
    if (item.notForStudent && role === 'student') return false;
    if (item.isPrimary && !isPrimary) return false;
    return true;
  });

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const handleItemClick = (title: string, route?: string) => {
    switch (title) {
      case 'Close my Xcellify Account':
        alert('Handle account deletion logic here.');
        break;
      case 'Change Password':
        alert('Handle change password logic here.');
        break;
      case 'Manage my Xcellify Family':
        window.location.href = 'https://xcellify.com/home/profiles';
        break;
      default:
        if (route?.startsWith('http')) {
          window.location.href = route;
        } else if (route) {
          router.push(route);
        }
        break;
    }
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative flex items-center flex-col">
      <div
        className="flex items-center bg-white px-3 py-2 rounded-lg shadow-md cursor-pointer"
        onClick={toggleDropdown}
      >
        <Image
          src={
            image
              ? image.startsWith('data:image')
                ? image
                : `data:image/jpeg;base64,${image}`
              : placeholder
          }
          alt="Profile"
          width={32}
          height={32}
          className="rounded-full border-2 border-[#876FFD] object-cover"
        />
        <span className="ml-2 text-sm font-medium text-gray-800">{name}</span>
        <div className="ml-2">
          {isDropdownOpen ? (
            <ChevronUp className="text-gray-600 h-4 w-4" />
          ) : (
            <ChevronDown className="text-gray-600 h-4 w-4" />
          )}
        </div>
      </div>

      {isDropdownOpen && (
        <div className="absolute top-12 right-0 w-56 bg-white rounded-lg shadow-lg py-2 z-50">
          {filteredItems.map((item, index) => (
            <div key={index}>
              {!item.hasItems ? (
                <div
                  onClick={() => handleItemClick(item.title, item.route)}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  {item.title}
                </div>
              ) : (
                <div>
                  <div className="px-4 py-2 text-sm font-medium text-gray-700">
                    {item.title}
                  </div>
                  <div className="pl-6">
                    {item.nestedItems?.map((nested, nestedIndex) => (
                      <div
                        key={nestedIndex}
                        onClick={() => router.push(nested.route)}
                        className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 cursor-pointer"
                      >
                        {nested.title}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileIndicator;
