import { FC, createElement } from 'react';
import { CheckSquare, Home, Icon, MessageSquare, Settings, Users } from 'react-feather';

import { MenuButton } from './MenuSection.styles';

interface MenuType {
  name: string;
  icon: Icon;
  color: string;
}

const MenuButtons: MenuType[] = [
  { name: 'Home', color: 'primary', icon: Home },
  { name: 'Messages', color: 'secondary', icon: MessageSquare },
  { name: 'Tasks', color: 'background', icon: CheckSquare },
  { name: 'Members', color: 'text', icon: Users },
  { name: 'Settings', color: 'accent', icon: Settings },
  { name: 'Success', color: 'success', icon: Home },
  { name: 'warning', color: 'warning', icon: Home },
  { name: 'error', color: 'error', icon: Home }
];

interface MenuSectionProps {
  isOpen: boolean;
}

const MenuSection: FC<MenuSectionProps> = ({ isOpen }) => {
  return (
    <>
      {MenuButtons &&
        MenuButtons.map(({ name, color, icon }, index) => (
          <MenuButton key={index} color={color} isOpen={isOpen}>
            {isOpen ? (
              <>
                {createElement(icon)} {name}
              </>
            ) : (
              createElement(icon)
            )}
          </MenuButton>
        ))}
    </>
  );
};
export default MenuSection;
