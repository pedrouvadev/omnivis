/**
 * OMNIVIS Design System - Ícones Específicos
 * Inspirados em conceitos de solidariedade, logística e força coletiva
 * Grade 24x24px, stroke 2px
 */

import { createIcon, IconProps } from './Icon';

// === Ícones de Navegação ===
export const HomeIcon = createIcon('HomeIcon', 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z');
export const DashboardIcon = createIcon('DashboardIcon', 'M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z');
export const SettingsIcon = createIcon('SettingsIcon', 'M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z');
export const MenuIcon = createIcon('MenuIcon', 'M3 12h18M3 6h18M3 18h18');

// === Ícones de Voluntários ===
export const UserIcon = createIcon('UserIcon', 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2');
export const UsersIcon = createIcon('UsersIcon', 'M17 21v-2a4 4 0 0 0-3-3.87M9 21v-2a4 4 0 0 0-3-3.87M1 21v-2a4 4 0 0 0 3-3.87M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M8 3.13a4 4 0 0 0 0 7.75');
export const UserPlusIcon = createIcon('UserPlusIcon', 'M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 11v-1a4 4 0 0 0-3-3.87M23 21v-1a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z');
export const HeartIcon = createIcon('HeartIcon', 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z');

// === Ícones de Logística ===
export const TruckIcon = createIcon('TruckIcon', 'M10 17h4V5H2v12h3m10-7 3-3m-3 3 3 3m-3-3v12');
export const PackageIcon = createIcon('PackageIcon', 'M16.5 9.4L7.55 4.24M10 17.5l-6.5-3.75m13 3.75l-6.5-3.75M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z');
export const MapPinIcon = createIcon('MapPinIcon', 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z');
export const NavigationIcon = createIcon('NavigationIcon', 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5');

// === Ícones de Packs/Equipes ===
export const UsersGroupIcon = createIcon('UsersGroupIcon', 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z');
export const ShieldIcon = createIcon('ShieldIcon', 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z');
export const BadgeIcon = createIcon('BadgeIcon', 'M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.78 4 4 0 0 1 0-6.74zM12 2v20M2 12h20');

// === Ícones de Abrigos ===
export const HomeShieldIcon = createIcon('HomeShieldIcon', 'M12 3l-9 4v12h5v-7h8v7h5V7l-9-4z');
export const BuildingIcon = createIcon('BuildingIcon', 'M3 21h18M5 21V7l8-4 8 4v14M8 21v-2a2 2 0 0 1 4-0v2M8 10h2v4H8zM14 10h2v4h-2z');
export const TentIcon = createIcon('TentIcon', 'M12 2l-10 8v12h20V10L12 2z M12 2v18');

// === Ícones de Doações ===
export const GiftIcon = createIcon('GiftIcon', 'M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z');
export const HandHeartIcon = createIcon('HandHeartIcon', 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z M18 9l-5 5-4-4');
export const BoxIcon = createIcon('BoxIcon', 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z');

// === Ícones de Status ===
export const CheckCircleIcon = createIcon('CheckCircleIcon', 'M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3');
export const AlertCircleIcon = createIcon('AlertCircleIcon', 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M12 8v4M12 16h.01');
export const XCircleIcon = createIcon('XCircleIcon', 'M18 6L6 18M6 6l12 12');
export const InfoIcon = createIcon('InfoIcon', 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 16v-4M12 8h.01');

// === Ícones de Ação ===
export const SearchIcon = createIcon('SearchIcon', 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z');
export const FilterIcon = createIcon('FilterIcon', 'M22 3H2l8 9.46V19l4 2v-8.54L22 3z');
export const PlusIcon = createIcon('PlusIcon', 'M12 5v14M5 12h14');
export const MinusIcon = createIcon('MinusIcon', 'M5 12h14');
export const EditIcon = createIcon('EditIcon', 'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7');
export const TrashIcon = createIcon('TrashIcon', 'M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6');

// === Ícones de Comunicação ===
export const BellIcon = createIcon('BellIcon', 'M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0');
export const MailIcon = createIcon('MailIcon', 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6');
export const PhoneIcon = createIcon('PhoneIcon', 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z');

// === Ícones de Análise ===
export const BarChartIcon = createIcon('BarChartIcon', 'M12 20V10M18 20V4M6 20v-4');
export const PieChartIcon = createIcon('PieChartIcon', 'M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z');
export const TrendingUpIcon = createIcon('TrendingUpIcon', 'M23 6l-9.5 9.5-5-5L1 18');
export const ActivityIcon = createIcon('ActivityIcon', 'M22 12h-4l-3 9L9 3l-3 9H2');

// === Ícones de OMNIVIS (Marca) ===
export const OmniIcon = createIcon('OmniIcon', 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'); // Rede conectada
export const VisIcon = createIcon('VisIcon', 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'); // Força/Estrela
export const NetworkIcon = createIcon('NetworkIcon', 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z M12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4z');

// === Ícones de UI ===
export const ChevronLeftIcon = createIcon('ChevronLeftIcon', 'M15 18l-6-6 6-6');
export const ChevronRightIcon = createIcon('ChevronRightIcon', 'M9 18l6-6-6-6');
export const ChevronUpIcon = createIcon('ChevronUpIcon', 'M18 15l-6-6-6 6');
export const ChevronDownIcon = createIcon('ChevronDownIcon', 'M6 9l6 6 6-6');
export const ArrowRightIcon = createIcon('ArrowRightIcon', 'M5 12h14M12 5l7 7-7 7');
export const ExternalLinkIcon = createIcon('ExternalLinkIcon', 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3');

// === Ícones de Estado ===
export const ClockIcon = createIcon('ClockIcon', 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 6v6l4 2');
export const CalendarIcon = createIcon('CalendarIcon', 'M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z');

// === Ícones de Segurança ===
export const LockIcon = createIcon('LockIcon', 'M12 17v2M12 11a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm6-5V7a6 6 0 0 0-12 0v5H4v10h16V7h-2zm-6 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z');
export const UnlockIcon = createIcon('UnlockIcon', 'M7 11V7a5 5 0 0 1 9.9-1M15 11V7a5 5 0 0 0-9.9-1M12 17v2M12 11a2 2 0 1 0 0 4 2 2 0 0 0 0-4z');

// Exportar todos como objeto para uso fácil
export const Icons = {
  // Navegação
  Home: HomeIcon,
  Dashboard: DashboardIcon,
  Settings: SettingsIcon,
  Menu: MenuIcon,
  
  // Voluntários
  User: UserIcon,
  Users: UsersIcon,
  UserPlus: UserPlusIcon,
  Heart: HeartIcon,
  
  // Logística
  Truck: TruckIcon,
  Package: PackageIcon,
  MapPin: MapPinIcon,
  Navigation: NavigationIcon,
  
  // Packs/Equipes
  UsersGroup: UsersGroupIcon,
  Shield: ShieldIcon,
  Badge: BadgeIcon,
  
  // Abrigos
  HomeShield: HomeShieldIcon,
  Building: BuildingIcon,
  Tent: TentIcon,
  
  // Doações
  Gift: GiftIcon,
  HandHeart: HandHeartIcon,
  Box: BoxIcon,
  
  // Status
  CheckCircle: CheckCircleIcon,
  AlertCircle: AlertCircleIcon,
  XCircle: XCircleIcon,
  Info: InfoIcon,
  
  // Ação
  Search: SearchIcon,
  Filter: FilterIcon,
  Plus: PlusIcon,
  Minus: MinusIcon,
  Edit: EditIcon,
  Trash: TrashIcon,
  
  // Comunicação
  Bell: BellIcon,
  Mail: MailIcon,
  Phone: PhoneIcon,
  
  // Análise
  BarChart: BarChartIcon,
  PieChart: PieChartIcon,
  TrendingUp: TrendingUpIcon,
  Activity: ActivityIcon,
  
  // Marca
  Omni: OmniIcon,
  Vis: VisIcon,
  Network: NetworkIcon,
  
  // UI
  ChevronLeft: ChevronLeftIcon,
  ChevronRight: ChevronRightIcon,
  ChevronUp: ChevronUpIcon,
  ChevronDown: ChevronDownIcon,
  ArrowRight: ArrowRightIcon,
  ExternalLink: ExternalLinkIcon,
  
  // Estado
  Clock: ClockIcon,
  Calendar: CalendarIcon,
  
  // Segurança
  Lock: LockIcon,
  Unlock: UnlockIcon,
};
