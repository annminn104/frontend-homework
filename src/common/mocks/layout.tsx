import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import HomeIcon from '@mui/icons-material/Home';
import StorageIcon from '@mui/icons-material/Storage';

export const SIDEBAR_WIDTH = '270px';
export const HEADER_HEIGHT = '64px';

interface ISideBarMenu {
  key: React.Key;
  subHeading: string;
  items: ISideBarMenuItem[];
}

interface ISideBarMenuItem {
  key: React.Key;
  label: string;
  link?: string;
  icon?: React.ReactNode;
  collapse?: Pick<ISideBarMenuItem, 'key' | 'label' | 'link' | 'icon'>[];
}

export const SIDEBAR_MENU: ISideBarMenu[] = [
  {
    key: 'menu-1',
    subHeading: 'Recent',
    items: [
      {
        key: 'menu-1.0',
        label: 'Home',
        link: '/',
        icon: <HomeIcon />
      },
      {
        key: 'menu-1.1',
        label: 'Invoices',
        icon: <StorageIcon />,
        collapse: [
          {
            key: 'menu-1.1.0',
            label: 'List Invoices',
            link: '/invoice',
            icon: <CreateNewFolderIcon />
          },
          {
            key: 'menu-1.1.1',
            label: 'Create Invoice',
            link: '/invoice/create',
            icon: <StorageIcon />
          }
        ]
      }
    ]
  }
];
