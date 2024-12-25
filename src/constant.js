// static CDN
export const CDN_PREFIX = '//gcore.jsdelivr.net/gh/liuxiaobaodaydayup/serverless-cloud-notepad@master/static'

// server side salt
export const SALT = SCN_SALT
// server side secret
export const SECRET = SCN_SECRET

// supported language
export const SUPPORTED_LANG = {
    'en': {
        setPW: 'Set Password',
        changePW: 'Change Password',
        share: 'Share',
        lastModified: 'Last Modified',
        copy: 'Copy',
        emptyPH: 'There are many like it, but this one is mine for ieab...',
        tipEncrypt: 'This Note has been encrypted, please enter password!',
        tip404: '404, Nothing here',
    },
    'zh': {
        setPW: '设置此篇笔记查看密码,记住此笔记地址栏网址,关注"kg/"之后的字符代表此篇笔记',
        changePW: '修改密码',
        share: '分享可复制此篇笔记网址',
        lastModified: '上次保存',
        copy: '复制',
        emptyPH: '请注意,IEAB专用,不对外使用,IEAB看心情可能后台随时删笔记,不管加密的笔记还是非加密的笔记',
        tipEncrypt: '这是一篇加密笔记，你必须先输入密码',
        tip404: '404，你要找的东西并不存在',
    }
}
