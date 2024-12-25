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
        emptyPH: 'IEAB提醒您,本页面地址栏网址"kg/"后面随着笔记不同随机生成字符,也可以自定义"kg/"后面字符再打开自定义字符后的网址打开本页做笔记,生成的笔记后续访问通过带"kg/"后面字符的网址即可'请记住带"kg/"后面的字符,每个笔记字符不同,若之前的笔记您设置了密码,则需通过密码输入后才能访问笔记,markdown有排版功能,请注意!!!!本笔记只在牵涉IEAB范围内使用,不对外使用,IEAB有权在后台删除任何笔记而不负任何责任',
        tipEncrypt: '这是一篇加密笔记，你必须先输入密码',
        tip404: '404，你要找的东西并不存在',
    }
}
