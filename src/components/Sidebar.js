
import { faFile, faUser } from '@fortawesome/free-solid-svg-icons';
import { faReddit } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const menuItems = [
  {
    label: 'About me',
    logo: faUser,
    link: '/about'
  },
  {
    label: 'Resume',
    logo: faFile,
    link: ''
  },
  {
    label: 'Reddit Client',
    logo: faReddit,
    link: '/reddit'
  }
];

const list = menuItems.map((item, index) => {
  return (
    <Link to={item.link} className="flex cursor-pointer items-center h-12 p-2 hover:bg-gray-500 rounded-md" key={index}>
      <span className="mr-8">
        <FontAwesomeIcon icon={item.logo} fixedWidth size="1x" />
      </span> 
      {item.label}
    </Link>
  )
});

export default function Sidebar() {
  return (
    <div style={{width: '220px'}} className="block bg-gray-700 text-white">
      <div className="p-4 border-b border-white border-opacity-40">
        <span className="text-2xl font-thin">Josh Showalter</span>
      </div>
      <div className="p-2">
        {list}
      </div>
    </div>
  );
}