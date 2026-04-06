import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "CogniAND 平台手册",
  ignoreDeadLinks: true,

  locales: {
    root: {
      label: "中文",
      lang: "zh-CN",
      themeConfig: {
        sidebar: {
          "/1-FAQ": [
            {
              text: '常见问题',
              link: "/1-FAQ/",
              items: [
                { text: '账户相关', link: '/1-FAQ/1-account' },
                { text: '实验相关', link: '/1-FAQ/2-experiment' },
                { text: '技术问题', link: '/1-FAQ/3-technical' },
                { text: '数据隐私', link: '/1-FAQ/4-data-privacy' },
              ]
            }
          ],
          "/2-experimenter-manual": [
            {
              text: "主试手册",
              link: "/2-experimenter-manual/",
            },
            {
              text: "快速开始",
              link: "/2-experimenter-manual/1-getting-started"
            },
            {
              text: "注册与登录",
              link: "/2-experimenter-manual/2-registration-login",
              items: [
                { text: "数据管理", link: "/2-experimenter-manual/6-data-management" },
                { text: "主试后台", link: "/2-experimenter-manual/7-backstage" },
              ]
            },
            {
              text: "邀请系统",
              link: "/2-experimenter-manual/5-invite-system/",
              items: [
                { text: "生成邀请链接", link: "/2-experimenter-manual/5-invite-system/5-1-generate-invite" },
                { text: "发送邀请邮件", link: "/2-experimenter-manual/5-invite-system/5-2-send-email" },
                { text: "社交分享", link: "/2-experimenter-manual/5-invite-system/5-3-social-share" },
              ]
            },
          
          ],
          "/3-subject-manual": [
            {
              text: "被试手册",
              link: "/3-subject-manual/",
            },
            {
              text: "快速开始",
              link: "/3-subject-manual/1-getting-started"
            },
            {
              text: "注册流程",
              link: "/3-subject-manual/2-registration"
            },
            {
              text: "实验参与",
              link: "/3-subject-manual/3-experiments"
            }
          ],
          "/5-data-privacy": [
            {
              text: "数据与隐私",
              link: "/5-data-privacy/",
              items: [
                { text: "数据收集说明", link: "/5-data-privacy/1-data-collection" },
                { text: "隐私保护", link: "/5-data-privacy/2-privacy-protection" },
                { text: "知情同意", link: "/5-data-privacy/3-informed-consent" },
                { text: "伦理合规", link: "/5-data-privacy/4-ethics" },
              ]
            }
          ],
          "/6-troubleshooting": [
            {
              text: "故障排除",
              link: "/6-troubleshooting/",
              items: [
                { text: "常见错误码", link: "/6-troubleshooting/1-error-codes" },
                { text: "登录问题", link: "/6-troubleshooting/2-login-issues" },
                { text: "数据上传问题", link: "/6-troubleshooting/3-upload-issues" },
                { text: "邮件接收问题", link: "/6-troubleshooting/4-email-issues" },
              ]
            }
          ],
          "/7-technical-support": [
            {
              text: "技术支持",
              link: "/7-technical-support/",
              items: [
                { text: "联系方式", link: "/7-technical-support/1-contact" },
              ]
            }
          ]
        },

        socialLinks: [
          { icon: 'github', link: 'https://github.com/cogniand' }
        ],

        footer: {
          message: 'CogniAND 心理学实验平台',
          copyright: 'Copyright © 2026 CogniAND Team | 联系邮箱: <a href="mailto:um.andlab@gmail.com">um.andlab@gmail.com</a>'
        }
      }
    },
    en: {
      label: "English",
      lang: "en-US",
      link: "/en/",
      title: "CogniAND Manual",
      themeConfig: {
        sidebar: {
          "/en/1-FAQ": [
            {
              text: 'FAQ',
              link: "/en/1-FAQ/",
              items: [
                { text: 'Account', link: '/en/1-FAQ/1-account' },
                { text: 'Experiments', link: '/en/1-FAQ/2-experiment' },
                { text: 'Technical', link: '/en/1-FAQ/3-technical' },
                { text: 'Data Privacy', link: '/en/1-FAQ/4-data-privacy' },
              ]
            }
          ],
          "/en/2-experimenter-manual": [
            {
              text: "Experimenter Manual",
              link: "/en/2-experimenter-manual/",
            },
            {
              text: "Getting Started",
              link: "/en/2-experimenter-manual/1-getting-started"
            },
            {
              text: "Registration & Login",
              link: "/en/2-experimenter-manual/2-registration-login",
              items: [
                { text: "Data Management", link: "/en/2-experimenter-manual/6-data-management" },
                { text: "Backstage", link: "/en/2-experimenter-manual/7-backstage" },
              ]
            },
            {
              text: "Template Library",
              link: "/en/2-experimenter-manual/4-template-library"
            },
            {
              text: "Invitation System",
              link: "/en/2-experimenter-manual/5-invite-system/",
              items: [
                { text: "Generate Invite Link", link: "/en/2-experimenter-manual/5-invite-system/5-1-generate-invite" },
                { text: "Send Email", link: "/en/2-experimenter-manual/5-invite-system/5-2-send-email" },
                { text: "Social Share", link: "/en/2-experimenter-manual/5-invite-system/5-3-social-share" },
              ]
            },
            {
              text: "Permissions",
              link: "/en/2-experimenter-manual/8-permissions"
            }
          ],
          "/en/3-subject-manual": [
            {
              text: "Subject Manual",
              link: "/en/3-subject-manual/",
            },
            {
              text: "Getting Started",
              link: "/en/3-subject-manual/1-getting-started"
            },
            {
              text: "Registration",
              link: "/en/3-subject-manual/2-registration"
            },
            {
              text: "Experiments",
              link: "/en/3-subject-manual/3-experiments"
            }
          ],
          "/en/5-data-privacy": [
            {
              text: "Data & Privacy",
              link: "/en/5-data-privacy/",
              items: [
                { text: "Data Collection", link: "/en/5-data-privacy/1-data-collection" },
                { text: "Privacy Protection", link: "/en/5-data-privacy/2-privacy-protection" },
                { text: "Informed Consent", link: "/en/5-data-privacy/3-informed-consent" },
                { text: "Ethics", link: "/en/5-data-privacy/4-ethics" },
              ]
            }
          ],
          "/en/6-troubleshooting": [
            {
              text: "Troubleshooting",
              link: "/en/6-troubleshooting/",
              items: [
                { text: "Error Codes", link: "/en/6-troubleshooting/1-error-codes" },
                { text: "Login Issues", link: "/en/6-troubleshooting/2-login-issues" },
                { text: "Upload Issues", link: "/en/6-troubleshooting/3-upload-issues" },
                { text: "Email Issues", link: "/en/6-troubleshooting/4-email-issues" },
              ]
            }
          ],
          "/en/7-technical-support": [
            {
              text: "Technical Support",
              link: "/en/7-technical-support/",
              items: [
                { text: "Contact", link: "/en/7-technical-support/1-contact" },
              ]
            }
          ]
        },

        socialLinks: [
          { icon: 'github', link: 'https://github.com/cogniand' }
        ],

        footer: {
          message: 'CogniAND Psychology Experiment Platform',
          copyright: 'Copyright © 2026 CogniAND Team'
        }
      }
    }
  }
})
