import { RouteInfo } from './sidebar-meta';
const roles = localStorage.getItem('roles');

let role;
let menulist: any = [];
if (roles == 'SUBADMIN') {
  role = 'Sub Admin';
} else {
  role = 'Super Admin';
}

menulist = [
  {
    path: '/DS',
    title: { en: 'Dashboard', ja: 'ダッシュボード' },
    titleja: 'Dashboard',
    icon: 'fa fa-home',
    class: '',
    submenu: [],
    role: 'ADMIN',
  },
  {
    path: '/DS/driver',
    title: { en: 'Driver Management', ja: 'ドライバー管理' },
    icon: 'fa fa-user-tie',
    class: '',
    submenu: [],
    role: 'ADMIN',
  },
  {
    path: '/DS/driver',
    title: { en: 'Driver Management', ja: 'ドライバー管理' },
    icon: 'fa fa-user-tie',
    class: '',
    submenu: [],
    role: 'SUBADMIN',
  },
  {
    path: '/DS/notice',
    title: { en: 'Notification Management', ja: '通知管理' },
    icon: 'fa fa-bell',
    class: '',
    submenu: [],
    role: 'ADMIN',
  },
  {
    path: '/DS/content',
    title: { en: 'Content Management', ja: 'コンテンツ管理' },
    icon: 'fa fa-newspaper',
    class: '',
    submenu: [],
    role: 'ADMIN',
  },
  {
    path: '/DS/corporate',
    title: { en: 'Corporate Master', ja: 'コーポレートマスター' },
    icon: 'fa fa-building',
    class: '',
    submenu: [],
    role: 'ADMIN',
  },
  {
    path: '/DS/corporate/user',
    title: { en: 'Corporate User', ja: '法人ユーザー' },
    icon: 'fa fa-user-gear',
    class: '',
    submenu: [],
    role: 'ADMIN',
  },
  {
    path: '/DS/qol',
    title: { en: 'Stress Management', ja: 'ストレスマネジメント' },
    icon: 'fa fa-podcast',
    class: '',
    submenu: [],
    role: 'ADMIN',
  },
  {
    path: '/DS/judgement-weightage',
    title: { en: 'Judgement Weightage', ja: '判定の重み付け' },
    icon: 'fa fa-file-lines',
    class: '',
    submenu: [],
    role: 'ADMIN',
  },

  {
    path: '/DS/finaljudgement',
    title: { en: 'Final Judgement Threshold', ja: '最終判定基準値' },
    icon: 'fa fa-file-lines',
    class: '',
    submenu: [],
    role: 'ADMIN',
  },
  {
    path: '/DS/reflex-screen',
    title: { en: 'Reflex Screen', ja: 'リフレックススクリーン' },
    icon: 'fa fa-camera-retro',
    class: '',
    submenu: [],
    role: 'ADMIN',
  },
  {
    path: '/DS/policy-view',
    title: { en: 'Privacy-Policy', ja: 'プライバシーポリシー' },
    icon: 'fa fa-user-lock',
    class: '',
    submenu: [],
    role: 'ADMIN',
  },
];

export const ROUTES: RouteInfo[] = menulist;
