import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: resolve => { require(['@/views/login.vue'], resolve); }
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: resolve => { require(['@/views/error-page/404.vue'], resolve); }
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: resolve => { require(['@//views/error-page/403.vue'], resolve); }
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: resolve => { require(['@/views/error-page/500.vue'], resolve); }
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    component: Main,
    children: [
        { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: resolve => { require(['@/views/home/home.vue'], resolve); } }
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/personal-center',
        icon: 'ios-folder',
        name: 'personal-center',
        title: '个人中心',
        component: Main,
        children: [
            {
                path: 'personal-info',
                icon: 'ios-paper-outline',
                name: 'personal-info',
                title: '个人信息',
                component: resolve => { require(['@/views/personal-center/personal-info/PersonalInfo.vue'], resolve); }
            },
            {
                path: 'account-security',
                icon: 'ios-list-outline',
                name: 'account-security',
                title: '账号安全',
                component: resolve => { require(['@/views/personal-center/account-security/AccountSecurity.vue'], resolve); }
            },
            {
                path: 'message-set',
                icon: 'ios-list-outline',
                name: 'message-set',
                title: '消息设置',
                component: resolve => { require(['@/views/personal-center/message-set/MessageSet.vue'], resolve); }
            }

        ]
    },
    {
        path: '/products-buy',
        icon: 'ios-paper',
        title: '产品购买',
        name: 'products-buy',
        component: Main,
        children: [
            {
                path: 'web-shield-buy',
                icon: 'ios-list-outline',
                name: 'web-shield-buy',
                title: 'web盾',
                component: resolve => { require(['@/views/products-buy/web-shield/WebShieldBuy.vue'], resolve); }
            },
            {
                path: 'game-shield-buy',
                icon: 'ios-list-outline',
                name: 'game-shield-buy',
                title: '游戏盾',
                component: resolve => { require(['@/views/products-buy/game-shield/GameShieldBuy.vue'], resolve); }
            },
            {
                path: 'traffic-package-buy',
                icon: 'ios-list-outline',
                name: 'traffic-package-buy',
                title: '流量包',
                component: resolve => { require(['@/views/products-buy/traffic-package/TrafficPackageBuy.vue'], resolve); }
            }
        ]
    },
    {
        path: '/products-management',
        icon: 'ios-paper',
        title: '产品管理',
        name: 'products-management',
        component: Main,
        children: [
            {
                path: 'web-shield-config',
                icon: 'ios-list-outline',
                name: 'web-shield-config',
                title: 'web盾',
                component: resolve => { require(['@/views/products-management/web-shield/WebShieldConfig.vue'], resolve); }
            },
            {
                path: 'game-shield-config',
                icon: 'ios-list-outline',
                name: 'game-shield-config',
                title: '游戏盾',
                component: resolve => { require(['@/views/products-management/game-shield/GameShieldConfig.vue'], resolve); }
            },
            {
                path: 'traffic-package-config',
                icon: 'ios-list-outline',
                name: 'traffic-package-config',
                title: '流量包',
                component: resolve => { require(['@/views/products-management/traffic-package/TrafficPackageConfig.vue'], resolve); }
            }
        ]
    },
    {
        path: '/order-management',
        icon: 'ios-paper',
        title: '订单管理',
        name: 'order-management',
        component: Main,
        children: [
            {
                path: 'my-order',
                icon: 'ios-list-outline',
                name: 'my-order',
                title: '我的订单',
                component: resolve => { require(['@/views/order-management/my-order/MyOrder.vue'], resolve); }
            }
        ]
    }
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    ...appRouter,
    page500,
    page403,
    page404
];
